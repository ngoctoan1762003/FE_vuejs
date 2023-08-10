<template>
  <main>
    <FormLogin 
      v-if="status === 'login'" 
      @toSignup = "toSignup"
      @getUserList = "getUserList"
    />
    <FormSignup 
      v-else-if="status === 'signup'" 
      @toLogin = "toLogin"
    />
    <UserList v-if="status === 'user'" :users="List"/>
    <Notifications />
  </main>
</template>

<script>
import FormLogin from './components/FormLogin.vue';
import FormSignup from './components/FormSignup.vue';
import UserList from './components/UserList.vue';
import axios from 'axios';

export default {
  components: {
    FormLogin,
    FormSignup,
    UserList
  },
  data() {
    return {
      List: [],
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
      this.List = userList
    },
    getUserList(){
      this.status = 'user'
      axios({
        method: 'get',
        url: 'http://localhost:3000/user',
        Authorization: JSON.parse(localStorage.getItem('accessToken'))
      }).then(response=>{
       
        this.List = response.data
         console.log(this.List,response.data)
      })
    }
  },
};
</script>
