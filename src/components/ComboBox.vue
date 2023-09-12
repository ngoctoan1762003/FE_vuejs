<template>
    <div class="relative">
        <div class="flex relative border-[1px] border-gray-400 pl-2 rounded-sm py-1">
            <input type="text" @focus="onFocus" @blur="onBlur" v-model="inputValue" class="border-none outline-none">
            <img src="../icon/drop-black.svg" alt="" class="input_icon cursor-pointer duration-300 ease-in-out" :class="{'input_icon_active': isDropdownVisible}">
        </div>
        <transition name="fade">
            <div class="border-[1px] border-gray-400" v-show="isDropdownVisible === true">
                <div v-for="item in filter" class="flex justify-start pl-2 py-1 cursor-pointer hover:bg-gray-400 border-b-[1px] border-b-gray-300" @click="onSelected(item)">
                    <div>{{ item.value }}</div>
                </div> 
            </div>

        </transition>
    </div>
</template>
<script>
export default{
    data(){
        return {
            isDropdownVisible: false,
            inputValue: '',
            itemSelected: '',
        }
    },
    props: {
        data: []
    },
    computed: {
        filter(){
            return this.data.filter(r => r.value.toLowerCase().includes(this.inputValue.toLowerCase()));
        }
    },
    methods: {
        onFocus(){
            this.isDropdownVisible = true;
        },
        onBlur(){
            this.isDropdownVisible = false;
        },
        onSelected(item){
            this.itemSelected = item.key;
            this.inputValue = item.value;
            this.$emit('changeValue', item.key);
        }
    }
}
</script>
<style scoped>
.input_icon_active{
    transform: rotate(180deg);
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}
</style>