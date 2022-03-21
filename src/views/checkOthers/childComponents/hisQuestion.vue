<template>
  <div class="box" style="overflow-y:scroll;overflow-x:hidden;height:100%">
    <h1>他的提问</h1>
    <div class="contant">
      <question-card class="item" v-for="item in classList" :data='item'></question-card>
    </div>



  </div>
</template>

<script>
import questionCard from "../../../components/contant/question/questionCard";
import {myQuestion} from "../../../network/profile";
import {hisQuestion} from "../../../network/others";
export default {
  name:"hisQuestion",
  components:{
    questionCard
  },
  data(){
    return{
      userInfo:{},
      id:null,
      activeName:"finished",
      classList:[
        {
        },
      ]
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods:{
    loadData(){
      console.log(this.id);
      hisQuestion(this.id).then((res)=>{
        if(res.data.msg!=="success"){
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