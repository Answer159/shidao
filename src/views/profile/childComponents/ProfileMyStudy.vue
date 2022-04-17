<template>
<div class="study" style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <h1>我的学习</h1>
   <div class="contant">
     <class-card class="item" v-for="item in classList" :data='item' :canChange="0"></class-card>
    </div>
</div>
  

</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
import {myClass, myStudy} from "../../../network/profile";
export default {
  name:"ProfileMyStudy",
  data(){
    return{
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
  components:{
    ClassCard
  },
  mounted(){
    this.loadData();
  },
  methods:{
    loadData(){
      console.log("执行执行");
      myStudy().then((res)=>{
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
.study{
  padding: 30px 20px;
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
  margin-top: 30px;
}

</style>