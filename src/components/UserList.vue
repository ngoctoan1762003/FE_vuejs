<template>
    <div  class="p-10" @click="clickOutSide()">

    <div class="flex justify-between items-center">
        <input class="border-2 border-gray-200 text-gray-200 rounded-md pl-5 w-60 h-12 flex items-center" placeholder="Find User" v-model="searchQuery">
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
        <div  v-for="(user) in users" :key="user.id" class="border-b-2">
            <UserCard :user="user" class="w-full" @showPopup="showPopup"/>
        </div>
    </div>
    </div>
</template>

<script>
import UserCard from './UserCard.vue';
export default{
    components: {
        UserCard
    },
    data(){
        return{
            searchQuery: "",
        }
    },
    props: {
        users: Array, 
    },
    computed:{
        filteredUsers() {
            return this.users.filter((user) => {
                for(key in user){
                    if(!user[key]) continue
                    if(user[key].toString().toLowerCase().includes(this.searchQuery)) return user
                }
            });
        },
    },
    methods: {
        clickOutSide(){
            console.log('oke')
            this.users.forEach(u => u.isHidden = 'hidden')
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
            // var popups = document.querySelectorAll('td.relative > div');
            // popups.forEach(p => p.style.display = "none");
            this.users.forEach(u =>{ 
                if(u.id !== index)
            u.isHidden = 'hidden'})
        },
        showPopup(id) {
            console.log('click')
            console.log(id)
            this.closeAllPopup(id)
            this.users.map(u=>{
                if(u.id === id){
                    console.log(u.isHidden)
                    if(u.isHidden === 'hidden'){
                        u.isHidden='block'
                    }
                    else if(u.isHidden === 'block'){
                        u.isHidden='hidden'
                    }
                    console.log(this.users)
                }
            })
        },
        onDelete(id) {
            this.filterUser(id);
            this.closeAllPopup();
        },
        filterUser(id) {
            this.users = this.users.filter(u => u.id !== id)
        }
    },
}
</script>