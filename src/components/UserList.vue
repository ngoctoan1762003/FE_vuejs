<template>
    <div  class="p-10" @click="clickOutSide()">

    <div class="flex justify-between items-center">
        <input class="border-2 border-gray-200 text-gray-600 rounded-md pl-5 w-60 h-12 flex items-center" placeholder="Find User" v-model="searchQuery">
        <button class="bg-sky-700 p-3 rounded-md text-white font-medium h-12 before:content" @click="addNewUser()">
            Create New
        </button>
    </div>

    <div class="mt-10 w-full">
        <div class="border-b-2 w-[100%] flex">
            <div class="p-2 text-left w-[40%]">USER</div>
            <!-- <div class="p-2 text-left w-[20%]">NAME</div>
            <div class="p-2 text-left w-[20%]">EMAIL</div> -->
            <div class="p-2 text-left w-[20%]">AGE</div>
            <div class="p-2 text-left w-[20%]">GENDER</div>
            <div class="p-2 text-left w-[20%]"></div>
        </div>
        <div  v-for="(user) in filteredUsers" :key="user.id" class="border-b-2">
            <UserCard :user="user" class="w-full card" @showPopup="showPopup" @onDelete="onDelete"/>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import UserCard from './UserCard.vue';
export default{
    components: {
        UserCard
    },
    data(){
        return{
            searchQuery: "",
            users: []
        }
    },
    props: {
        //users: Array, 
    },
    computed:{
        filteredUsers() {
            return this.users.filter((user) => {
                if(user.name.toString().toLowerCase().includes(this.searchQuery)) return user
                // for(key in user){
                //     if(!user[key]) continue
                //     if(user[key].toString().toLowerCase().includes(this.searchQuery)) return user
                // }
            });
        },
    },
    methods: {
        clickOutSide(){
            var popups = document.querySelectorAll('.popup');
            popups.forEach(p => p.classList.add('hidden'))
        },
        addNewUser(){
            this.users.push({
                id: this.users.length,
                isHidden: 'hidden',
                name: "John Admin",
                email: "johnDoe@gmail.com",
                avatar: "https://i.pravatar.cc/300",
                role: "admin",
                status: "active",
                lastActivity: "1 min ago",
                joinDate: "2023-06-16T02:56:02.677Z",
            })
        },
        closeAllPopup(index) {
            this.users.forEach(p => {
                if(p.id != index)
                document.querySelector('#action-'+p.id).classList.add('hidden')
            }
            );
        },
        showPopup(id) {
            this.closeAllPopup(id)
            var popup = document.querySelector("#action-" + id)
            popup.classList.toggle('hidden')
        },
        onDelete(id) {
            this.$emit('deleteUser', id);
            this.closeAllPopup();
        },
    },
    beforeMount(){
        try{
            const token = JSON.parse(localStorage.getItem('accessToken'));
        }
        catch(e) {
            console.log('error')
            localStorage.removeItem('accessToken');
            this.$router.push('/login');
        }

    },
    mounted() {
        const pageNumber = this.$route.query.query || 1;
        const PAGE_SIZE = this.$route.query.paging || 10;
        const url = `http://localhost:3000/user?page=${pageNumber}&paging=${PAGE_SIZE}`
        axios({
            method: 'get',
            url: url,
            Authorization: JSON.parse(localStorage.getItem('accessToken'))
        })
        .then(response=>{
            this.users = response.data
            console.log(this.users,response.data)
        })
        .catch((e) => {
            console.log('error')
            localStorage.removeItem('accessToken');
            this.$router.push('/login');
        })
        this.clickOutSide()
    }
}
</script>