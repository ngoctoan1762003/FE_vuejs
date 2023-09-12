<template>
    <router-link :to="`/user-detail/${user.id}`" class="w-full flex justify-center items-center">
        <div class="flex font-normal gap-2 items-center p-4 w-[40%]">
                <!-- <div class="flex items-center">
                    <img :src=`${user.avatar}` alt="" class="rounded-full aspect-square object-cover max-w-[50px]">
                </div> -->
                <div class="w-full">
                    <div class="text-left font-normal w-full text-xs">{{user.name}}</div>
                    <div class="text-left font-normal w-full text-xs">{{user.email}}</div>
                </div>
            </div>
            <div class="p-4 text-xs text-left font-normal w-[20%] items-center">{{user.age}}</div>
            <div class="p-4 text-xs text-left font-normal w-[20%] items-center">{{user.gender}}</div>
            <div class="relative w-[20%]">
                <button type="button"  @click.stop="showPopup(user.id)" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> 
                    Actions 
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div :id="'action-' + user.id" data-display="none" class="hidden popup absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                    <div class="px-1 py-1 ">
                        <button class=" hover:bg-gray-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm" @click="showPopup(user.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5 mr-2 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            Edit 
                        </button>
                        <button class=" hover:bg-red-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm" @click="onDelete(user.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5 mr-2 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> 
                            Delete 
                        </button>
                    </div>
                </div>
            </div>
    </router-link>
</template>

<script>
export default{
    props: {
        user: Object
    },
    methods: {
        showPopup(id) {
            this.$emit('showPopup', id)
        },
        onDelete(id) {
            this.$emit('onDelete', id)
        },
        toUserDetail(){
            this.$router.push('`/user-detail/:${user.id}`', )
        }
    },
}
</script>