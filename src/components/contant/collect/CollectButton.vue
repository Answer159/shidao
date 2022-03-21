<template>
  <div class="collect" @click="ButtonClick" >
      <i v-if="isCollect === false" class="el-icon-star-off"></i>
      <i v-if="isCollect === true" class="el-icon-star-on isC"></i>
  </div>
</template>

<script>
import {CollectClass,CancelCollectClass,CollectQuestion,CancelCollectQuestion} from '../../../network/collect';
import { UpdateLocal } from '../../../network/user'
export default {
  name:"CollectButton",
  props:{
    questionId:null,
    classId:null,
  },
  data(){
    return{
      isCollect:false,
      isLogin:true
    }
  },
  methods:{
    IsCollected(){
      console.log(this.$store.state.userData.collectionQuestion)
      if(this.isLogin === false){
        console.log("!")
        return false;
      }
      else if((this.classId!==null&&this.classId!==undefined)&&this.$store.state.userData.collectionClass === null){
        console.log("?")
        return false;
      }
      else if((this.questionId!==null&&this.questionId!==undefined)&&this.$store.state.userData.collectionQuestion === null){
        console.log("??")
      return false;
    }
      let flag = false;
      console.log(this.classId)
      console.log(this.questionId)
      if(this.classId !== null&&this.classId !== undefined){
        console.log("???")
        let collectClass =  this.$store.state.userData.collectionClass;
        console.log(this.$store.state.userData.collectionClass)
        const that=this;
        let  arrayClass = collectClass.split("&");
        console.log(arrayClass);
        arrayClass.forEach(function (value){
          console.log(value);
          console.log(that.classId+"");
          if(value === that.classId+""){
           flag = true
          return true;
          }
        });
      }
  
      if(this.questionId !== null&&this.questionId !== undefined){
        console.log(this.questionId)
        const that=this;
        let collectQuestion =  this.$store.state.userData.collectionQuestion;
        let  arrayQuestion = collectQuestion.split("&");
        arrayQuestion.forEach(function (value){
          console.log(value);
          console.log(that.questionId+"");
          if(value === that.questionId+""){
            flag = true
            return true;
          }
        });
        // arrayQuestion.forEach(element => {
        //   console.log(value);
        //   console.log(that.classId+"");
        //   if(element === this.questionId){
        //      flag = true
        //     return true;
        //   }
        // });
      }       
      this.isCollect = flag;
      return flag;      
    },

    ButtonClick(){
      if(this.isLogin === false){
        this.$message({
          type:"error",
          message:"登录后即可收藏,请先登录！"
        })
        return;
      } 
      if(this.classId != null){
        this.ClassClick();
        return;
      }
      if(this.questionId != null){
        this.QuestionClick();
        return;
      }
    },

    ClassClick(){
        if(this.isCollect === true){
        //发送取消收藏请求
        CancelCollectClass(this.classId).then((res)=>{
          if(res.data.msg === "success"){
            UpdateLocal();
            this.isCollect = false;   
               
          }
          if(res.data.msg=== "fail"){
            this.$message({
              type:"error",
              message:"取消收藏失败，请重试！"
            })
          }

        })
        
        
      }else{
        //发送收藏请求
        CollectClass(this.classId).then((res)=>{
          if(res.data.msg=== "success"){
            UpdateLocal();
            this.isCollect = true;   
               
          }
          if(res.data.msg=== "fail"){
            this.$message({
              type:"error",
              message:"收藏失败，请重试！"
            })
          }
           if(res.data.msg === "课程已收藏"){
            UpdateLocal();        
          }
          
        })
          
      }
    },

    QuestionClick(){
      if(this.isCollect === true){
      //发送取消收藏请求
        console.log(this.questionId)
      CancelCollectQuestion(this.questionId);
        UpdateLocal();
        this.isCollect = false;
      }else{
        //发送收藏请求
        CollectQuestion(this.questionId);
        UpdateLocal();
        this.isCollect = true;
      }
    },

    IsLogin(){
      if(this.$store.state.login === 0){
        this.isLogin = false;
        return false;
      }else{
        this.isLogin = true;
        return true;
      }
    }
  },

  mounted(){
     
    if(this.IsLogin()){
       this.IsCollected();
       console.log(this.isCollect);
    } 
  },

}
</script>

<style scoped>

.collect{
  position: absolute;
  cursor: pointer;
  right: 20%;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: var(--font-size-very-big);
}

.isC{
  color: rgb(247, 186, 42);
}


</style>