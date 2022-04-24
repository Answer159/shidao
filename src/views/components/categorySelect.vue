<template>
  <el-select v-model="category" @change="selectClass" placeholder="请选择课程领域">
    <el-option v-for="item in cateList"
               :value="item.id"
               :key="item.id"
                :label="item.domain"></el-option>
  </el-select>
</template>


<script>
import {getCategories} from "../../network/others";

export default {
  name: "categorySelect",
  data(){
    return{

      cateList:[
        {}
      ],
    }
  },
  props:{
    category:null,
  },
  methods:{
    loadData(){
      getCategories().then((res)=>{
        this.cateList=res.data.categories;
      })
    },
    selectClass(){
      this.$emit('change',this.category);
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style scoped>

</style>