<template>

  <div class="detail"> 
    <collect-button v-if="ok" :questionId="question.id"></collect-button>
    <div class="img">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imgPath" :key="item">
          <div class="imgitem"><img :src="item" alt=""></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="contant">
      <div class="title title-text">{{question.title}}</div>
<!--      <div class="score">-->
<!--        <el-rate-->
<!--          v-model="data.score.toString()"-->
<!--          disabled-->
<!--          show-score-->
<!--          text-color="#ff9900"-->
<!--          :score-template="data.score.toString()">-->
<!--        </el-rate>-->
<!--      </div>-->
      <div class="teacher">参考价格：￥{{question.price}}</div>
      <div class="teacher">参考时长：{{question.suggestTime}}</div>
      <div class="teacher">提问领域：{{question.cateText}}</div>
      <div class="teacher">提问者：{{user.username}}</div>
      <div class="button" v-if="isChange"> <el-button type="edit" plain @click="edit">修改提问</el-button></div>
      <div class="button"> <el-button type="primary" plain @click="want">立即帮助</el-button></div>
    </div>

  </div>
</template>

<script>
import CollectButton from '../../../components/contant/collect/CollectButton.vue'
import {wantQ} from "../../../network/Order";
export default {
  name: "questionDetailTop",
  props: {
    question:{
      id:1
    },
    canChange:false,
    user:null,
    imgPath:null,
  },
  data(){
    return{
      ok:false,
      isCollect:true,
    }
  },
  components:{
    CollectButton
  },
  computed:{
    isChange(){
      console.log(this.canChange);
      if(this.canChange === "0" ||this.canChange === 0){
        return false;
      }
      else if(this.canChange === "1" ||this.canChange === 1){
        return true;
      }
    }
  },
  methods: {
    want(){
      wantQ(this.question.id).then((res)=>{
        if(res.data.msg==="fail"){
          this.$message({
            type:"error",
            message:`订单已经存在!`
          })
        }
        else{
          this.$message({
            type:"success",
            message:`创建提问订单成功!`
          })
        }
      })
    },
    execute(){
      this.ok=true;
    },
    edit(){
      this.$router.push({path:'/editQuestion',query:{id:this.question.id}})
    }
  },
  // watch:{
  //   data:{
  //     handler(oldValue,newValue){
  //       console.log("1231231");
  //     },
  //     immediate:true
  //   },
  // }

}
</script>

<style scoped>

.detail{
  display: flex;
  margin-top: 45px;
  padding: 20px 20px;
  background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  width: 37.5%;
}

.imgitem{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img{
  
  width: 100%;
  overflow: hidden;
  
}

.contant {
  box-sizing: border-box;
  width: 62.5%;
  padding-left: 30px;
}
.teacher{
  margin-top: 8px;
}
.button{
  margin-top: 8px;
}


</style>