<template>
    <div class="flex justify-center flex-col items-center h-[100vh]">
        <form action="" class="flex flex-col form gap-5 justify-center items-center w-[500px]">
            <div class="text-3xl font-bold">Sign up for new account</div>
            <input v-model="username" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Username">
            <input v-model="password" type="password" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Password">
            <input v-model="age" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Age">
            <input v-model="email" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Email">
            <input v-model="gender" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Gender">
            <hr>
            <button type="submit" @click.prevent="submit" class="border-2 px-10 py-2 rounded-md">Submit</button>
            <div class="mt-4 flex justify-between w-full items-center">
                <div>Already have account?</div>
                <button class="px-4 py-2 bg-green-500 rounded-md" @click.prevent="toLogin">Sign in</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: "",
            password: "",
            age: "",
            email: "",
            gender: ""
        };
    },
    methods: {
        submit() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/auth/register',
                data: {
                    username: this.username,
                    name: this.username,
                    password: this.password,
                    age: this.age,
                    email: this.email,
                    gender: this.gender
                }
            }).then((response) => {
                if (response.data.token) {
                    localStorage.setItem('accessToken', JSON.stringify(response.data.token));
                    // Access the token directly from localStorage
                    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
                    console.log('Access Token:', accessToken);
                }
                console.log('Signup successfully');
                this.$notify({
                    title: "Welcome",
                    text: "Hello " + this.username,
                    type: 'success'
                });
                return response.data;
            }).catch((error) => {
                console.error('Signup error:', error);
                this.$notify({
                    title: "Error",
                    text: error.response.data.message,
                    type: 'error'
                });
            });
        },
        toLogin(){
            this.$emit('toLogin')
        }
    }
}
</script>

