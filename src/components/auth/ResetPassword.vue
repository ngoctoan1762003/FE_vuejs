<template>
    <div class="flex justify-center flex-col items-center h-[100vh]">
        <form action="" class="flex flex-col form gap-5 justify-center items-center w-[500px]">
            <div class="text-3xl font-bold">Enter your new password</div>
            <input v-model="email" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Email address">
            <input v-model="token" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Token">
            <input v-model="newPassword" type="password" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="New password">
            <button class="px-4 py-2 bg-green-500 rounded-md" @click.prevent="submit" type="submit">Submit</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        return {
            email: '',
            token: '',
            newPassword: ''
        }
    },
    methods: {
        submit(){
            axios({
                method: 'post',
                url: 'http://localhost:3000/auth/reset-password',
                data: {
                    email: this.email,
                    newPassword: this.newPassword,
                    passwordResetToken: this.token
                }
            }).then((response) => {
                console.log(response);
                this.$notify({
                    title: "Success",
                    text: response.data.message,
                    type: 'success'
                });
                return response.data;
            }).catch((error) => {
                console.error('Login error:', error);
                this.$notify({
                    title: "Error",
                    text: error.response.data.message,
                    type: 'error'
                });
            });
        }
    }
}
</script>

