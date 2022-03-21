<template>
<div class="box" style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <h1>已发布的课程</h1>
  <div class="contant">
    <class-card class="item" v-for="item in classList" :data='item' :canChange="1"></class-card>
  </div>

 

</div>
</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
import {myClass} from "../../../network/profile";
export default {
  name:"ProfileMyClass",
  data(){
    return{
      activeName:"finished",
      classList:[
        {
        // id:123213123,
        // img:"",
        // classTitle:"课程1",
        // intro:"课程1",
        // price,
        // time,
        },
      ]
    }
  },
  components: {
    ClassCard
  },
  mounted(){
    this.loadData();
  },
  methods:{
    loadData(){
      console.log("执行执行");
      myClass().then((res)=>{
        if(res.data.msg==="未登录"){
          this.$message({
            type:"error",
            message:"登录过期,请重新登录！"
          })
        }
        else if(res.data.msg==="fail"){
          this.$message({
            type:"error",
            message:"错误，请重试！"
          })
        }
        else{
          this.classList=res.data.classVos;
          console.log(this.classList)
        }
      })
    },
  }

}
</script>

<style scoped>
 
 .box{
   box-sizing: border-box;
   width: 100%;
   height: 800px;
   padding: 20px 20px;
   background-color: white;
   
 }
 .contant {
   display: -webkit-flex;
   display: flex;
   -webkit-justify-content: space-between;
   justify-content: space-between;
   -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
 }

 .item {
   width: 30%;
   float: left;
   margin-top: 30px;
 }
</style>