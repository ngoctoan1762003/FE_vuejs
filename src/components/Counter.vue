<template>
    <div class="flex justify-center">
        <button class="border-solid px-3" @click="changeNumber(true)">+</button>
        <span>{{ counterStore.count }}</span>
        <button class="border-solid px-3" @click="changeNumber(false)">-</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/store'

export default{
    setup(){
        const counterStore = useCounterStore()
        const changeNumber = (isPlus) => {
            isPlus ? counterStore.increment() : counterStore.decrement()
            //counterStore.$reset()
        }

        return {
            counterStore,
            changeNumber
        }
    }
}
</script>