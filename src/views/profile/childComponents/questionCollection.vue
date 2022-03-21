<template>
  <div class="box" style="overflow-y:scroll;overflow-x:hidden;height:100%">
    <h1>提问收藏</h1>
    <div class="contant">
      <question-card class="item" v-for="item in classList" :data='item'></question-card>
    </div>



  </div>
</template>


<script>
import QuestionCard from "../../../components/contant/question/questionCard";
import {showQuestionCollection} from "../../../network/profile";
export default {
  name:"questionCollection",
  components:{
    QuestionCard,

  },
  data(){
    return{
      activeName:"finished",
      classList:[],
    }
  },
  mounted(){
    this.loadData();
  },
  methods:{
    loadData(){
      console.log("执行执行");
      showQuestionCollection().then((res)=>{
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
          this.classList=res.data.questionVos;
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