<template>
  <main>
    <router-view></router-view>
    <Notifications />
  </main>
</template>

<script>
import FormLogin from './components/auth/FormLogin.vue';
import FormSignup from './components/auth/FormSignup.vue';
import UserList from './components/user/UserList.vue';
import ForgotPassword from './components/auth/ForgotPassword.vue';
import ResetPassword from './components/auth/ResetPassword.vue';
import axios from 'axios';


export default {
  components: {
    FormLogin,
    FormSignup,
    UserList,
    ForgotPassword,
    ResetPassword,

},
  data() {
    return {
      users: [],
      status: 'login', // Make sure to use the 'return' statement here
    };
  },
  methods: {
    toLogin() {
      this.status = 'login';
    },
    toSignup() {
      this.status = 'signup';
    },
    assignUserList(userList){
      this.users = userList
    },
    getUserList(){
      this.status = 'user'
      axios({
        method: 'get',
        url: `http://${VITE_APP_BASE_URL}:3000/user`,
        Authorization: JSON.parse(localStorage.getItem('accessToken'))
      }).then(response=>{
        this.users = response.data
        console.log(this.users,response.data)
      })
    },
    deleteUser(id){
      console.log(id)
      this.users = this.users.filter(u => u.id !== id)
      console.log(this.users)
    }
  },
};
</script>
