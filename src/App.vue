<template>
  <main>
    <!-- <FormLogin 
      v-if="status === 'login'" 
      @toSignup = "toSignup"
      @getUserList = "getUserList"
      @toForgotPassword = "status='forgot-password'"
    />
    <FormSignup 
      v-else-if="status === 'signup'" 
      @toLogin = "toLogin"
    />
    <UserList v-if="status === 'user'" 
      :users="users"
      @deleteUser="deleteUser"
    />
    <ForgotPassword 
      v-if="status === 'forgot-password'" 
      @toResetPassword="status = 'reset-password'"
    />
    <ResetPassword 
      v-if="status === 'reset-password'"
    /> -->
    <router-view></router-view>
    <Notifications />
  </main>
</template>

<script>
import FormLogin from './components/FormLogin.vue';
import FormSignup from './components/FormSignup.vue';
import UserList from './components/UserList.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import axios from 'axios';
import { ref } from 'vue';

const tabs = [
  FormLogin,
  FormSignup,
  UserList,
]

const currentTab = ref('FormLogin')

export default {
  components: {
    FormLogin,
    FormSignup,
    UserList,
    ForgotPassword,
    ResetPassword
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
        url: 'http://localhost:3000/user',
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
