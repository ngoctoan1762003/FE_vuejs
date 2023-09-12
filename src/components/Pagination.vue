<template>
    <div class="flex justify-center items-center">
        <div>
            <span>Tong so:</span>
        </div>
        <div>
            <div>
                <ComboBox
                    :data="records"
                    @changeValue="changePageSize"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ComboBox from './ComboBox.vue';
export default {
    data() {
        return {
            pageSize: '20' // Added 'return' and quotes around the initial value
        };
    },
    components: {
        ComboBox,
    },
    methods:{
        changePageSize(value){
            this.pageSize = value;
        }
    },
    computed: {
        records() {
            return [
                {
                    key: '10',
                    value: '10 ban ghi 1 trang'
                },
                {
                    key: '20',
                    value: '20 ban ghi 1 trang'
                },
                {
                    key: '30',
                    value: '30 ban ghi 1 trang'
                },
            ];
        }
    }
}
</script>
