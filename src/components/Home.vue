<template>
    <div class="flex w-full">
        <SideBar class="w-[200px]"/>
        <div class="w-full pl-[200px]">
            <NavBar />
            <UserList v-if="status === 'user'"/>
            <UserDetail v-if="status === 'user-detail'"/>
        </div>
    </div>
</template>

<script>
import UserList from './user/UserList.vue';
import NavBar from '../layouts/NavBar.vue';
import SideBar from '../layouts/SideBar.vue';
import UserDetail from './user/UserDetail.vue';

export default{
    data(){
        return{
            status: 'user',
        }
    },
    components: {
        UserList,
        NavBar,
        SideBar,
        UserDetail
    }
}
</script>