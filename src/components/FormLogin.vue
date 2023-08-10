<template>
    <div class="flex justify-center flex-col items-center">
        <form action="" class="flex flex-col form gap-5 justify-center items-center w-[500px]">
            <div class="text-3xl font-bold">Sign in to your dashboard</div>
            <input v-model="username" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Username">
            <input v-model="password" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Password">
            <hr>
            <div class="flex justify-between w-full">
                <div class="flex gap-2 items-center">
                    <input type="checkbox" name="remember" id="">
                    <label for="remember">Remember me</label>
                </div>
                <button class="text-purple-500">Forgot password?</button>
            </div>
            <button type="submit" @click.prevent="submit" class="border-2 px-10 py-2 rounded-md">Submit</button>
            <div class="mt-4 flex justify-between w-full items-center">
                <div>Create new account?</div>
                <button class="px-4 py-2 bg-green-500 rounded-md" @click.prevent="toSignup">Sign up</button>
            </div>
            <button @click="logout">Logout</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        submit() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/auth/login',
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then((response) => {
                if (response.data.token) {
                    localStorage.setItem('accessToken', JSON.stringify(response.data.token));
                    // Access the token directly from localStorage
                    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
                    console.log('Access Token:', accessToken);
                }
                console.log('Login successfully');
                this.$notify({
                    title: "Welcome Back",
                    text: "Hello " + this.username,
                    type: 'success'
                });
                this.$emit('getUserList')
                return response.data;
            }).catch((error) => {
                console.error('Login error:', error);
                this.$notify({
                    title: "Error",
                    text: error.response.data.message,
                    type: 'error'
                });
            });
        },
        toSignup(){
            this.$emit('toSignup');
        },
        logout() {
            localStorage.removeItem('accessToken')
        }
    }
}
</script>

