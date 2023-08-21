<template>
    <div class="flex justify-center flex-col items-center h-[100vh]">
        <form action="" class="flex flex-col form gap-5 justify-center items-center w-[500px]">
            <div class="text-3xl font-bold">Enter your email</div>
            <input v-model="email" type="text" class="h-[50px] border-2 w-full rounded-md pl-5" placeholder="Email address">
            <button class="px-4 py-2 bg-green-500 rounded-md" @click.prevent="submitEmail" type="submit">Submit</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        email: ''
    },
    methods: {
        submitEmail(){
            axios({
                method: 'post',
                url: 'http://localhost:3000/auth/forgot-password',
                data: {
                    mailTo: this.email
                }
            }).then((response) => {
                console.log(response);
                this.$notify({
                    title: "Success",
                    text: response.data.message,
                    type: 'success'
                });
                //this.$router.push('/admin/user.vue')
                this.$emit('toResetPassword');
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

