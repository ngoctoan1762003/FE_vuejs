<template>
    <div class="example-pagination-block">
      <el-pagination 
        v-model:current-page="currentPage"
        layout="sizes, prev, pager, next" 
        :total="size" 
        @current-change="handleCurrentChange()"
        @size-change="handleSizeChange()"
      />
    </div>
</template>
  
<style scoped>
  .example-pagination-block + .example-pagination-block {
    margin-top: 10px;
  }
  .example-pagination-block .example-demonstration {
    margin-bottom: 16px;
  }
</style>

<script>
export default{
    data(){
        return{
            currentPage: 0,
        }
    },
    props: {
        size: 0,
    },
    methods: {
        handleCurrentChange(currentPage){
            this.$emit('handlePageChange', currentPage);
        },
        handleSizeChange(size){
            this.$emit('handleSizeChange', size);
        }
    }
}
</script>
  