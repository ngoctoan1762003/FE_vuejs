<template>
    <div class="flex w-full">
        <SideBar class="w-[200px]"/>
        <div class="w-full pl-[200px]">
            <NavBar />
            <div id="app" class="p-4 flex flex-col gap-4">
                <p class="font-bold">Account Details</p>
                <div class="flex gap-3">
                    <img src="https://i.pravatar.cc/300" class="max-w-[70px] rounded-lg aspect-square">
                    <div class="">
                        <button class="bg-green-500 text-white p-2 rounded-md font-semibold">
                            Upload new photo
                        </button>
                        <div class="text-base font-normal">
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                    </div>
                </div>
                <hr>
                <div class="flex flex-col gap-3">
                    <input id="email" type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Email">
                    <input id="name" type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Name">
                    <input id="age" type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Age">
                    <div class="border-2 rounded-md px-6 py-4">
                        <div class="flex justify-between">
                            <div>Male</div>
                            <input type="radio" id="html" name="fav_language" value="HTML" >
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="css">Female</div>
                            <input type="radio" id="css" name="fav_language" value="CSS">
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="javascript">Apache Helikopter</div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <button class="bg-green-500 text-white p-2 rounded-md font-semibold">SAVE CHANGES</button>
                    <button class="bg-gray-500 text-white p-2 rounded-md font-semibold">RESET</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/layouts/SideBar.vue';
import NavBar from '../../layouts/NavBar.vue';

export default{
    data(){
        return{
            id: 1,
            user: {
                
            }
        }
    },
    components: {
        SideBar,
        NavBar
    },
    methods:{

    },
    mounted() {
        console.log(this.$route)
        this.id = this.$route.params.id;
        console.log(this.id)
        axios({
            method: 'get',
            url: `http://localhost:3000/user/id/${this.id}`
        })
        .then((response) => {
            console.log(response);
            this.user = response.data[0];
            console.log(this.user)
            document.getElementById('name').value = this.user.name;
            document.getElementById('email').value = this.user.email;
            document.getElementById('age').value = this.user.age;
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
</script>