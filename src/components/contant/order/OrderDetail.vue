<template>
  <div>
    <el-row>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    </el-row>
    <header-back pageName="订单详情"></header-back>
    <el-row>
  <div class="el-steps--horizontal" >
    <el-steps :align-center="true" :space="500" :active="showStatus" finish-status="success">
      <el-step title="有意向"></el-step>
      <el-step title="发布者确认"></el-step>
      <el-step title="完成订单"></el-step>
    </el-steps>
  </div>
    </el-row>


<el-row>
  <div class="detail"  v-if="!showFlag">
    <div class="img">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in classDetail.imgPath" :key="item">
          <div class="imgitem"><img :src="item" alt=""></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="contant">
      <div class="title title-text">{{classDetail.title}}</div>
      <div class="score">
        <el-rate
            v-model="classDetail.score.toString()"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="classDetail.score.toString()">
        </el-rate>
      </div>
<!--      <div class="orderText">交易价格：￥{{order.price}}</div>-->
<!--      <div class="orderText">课程时长：{{order.suggestTime}}(小时)</div>-->
      <div class="price tag-text" v-if="!sellerConform">交易价格:￥{{order.price}}</div>
      <div class="price tag-text" v-if="sellerConform"> 交易价格(元):￥<el-input style="width: 100px" v-model="order.price" @input="change($event)" placeholder=""></el-input></div>
      <div class="time tag-text" v-if="!sellerConform">课程时长:{{order.suggestTime}}(小时)</div>
      <div class="price tag-text" v-if="sellerConform"> 课程时长(小时):<el-input style="width: 100px" v-model="order.suggestTime" @input="change($event)" placeholder=""></el-input></div>
      <div class="orderText">课程介绍：{{classDetail.textIntro}}</div>
      <div class="orderText">前置知识：{{classDetail.frontKnowledge}}</div>
      <div class="orderText">教师：{{seller.username}}</div>
      <div class="button" v-if="sellerConform"> <el-button type="primary" plain @click="conformClass">确认订单</el-button></div>
      <div class="button" v-if="buyerConfirm"> <el-button type="primary" plain @click="finishClass">确认付款</el-button></div>
      <div class="button"> <el-button type="primary" plain @click="detail">详细信息</el-button></div>
    </div>
  </div>


  <div class="detail"  v-if="showFlag">
        <div class="img">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in question.imgPath" :key="item">
              <div class="imgitem"><img :src="item" alt=""></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      <div class="contant">
        <div class="title title-text">{{question.title}}</div>
        <div class="orderText" v-if="!sellerConform">交易价格：￥{{order.price}}</div>
        <div class="orderText" v-if="sellerConform"> 交易价格(元):￥<el-input style="width: 100px" v-model="order.price" placeholder=""></el-input></div>
        <div class="orderText" v-if="!sellerConform">课程时长：{{order.suggestTime}}(小时)</div>
        <div class="orderTextt" v-if="sellerConform"> 课程时长(小时):<el-input style="width: 100px" v-model="order.suggestTime" placeholder=""></el-input></div>
        <div class="orderText">课程介绍：{{question.textIntro}}</div>
        <div class="orderText">前置知识：{{question.frontKnowledge}}</div>
        <div class="orderText">教师：{{seller.username}}</div>
        <div class="button" v-if="sellerConform"> <el-button type="primary" plain @click="conformQuestion">确认订单</el-button></div>
        <div class="button" v-if="buyerConfirm"> <el-button type="primary" plain @click="finishQuestion">确认收款</el-button></div>
        <div class="button"> <el-button type="primary" plain @click="detailQ">详细信息</el-button></div>
      </div>
  </div>
</el-row>


    <el-row>
          <el-col>

            <el-card class="card" shadow="hover" body-style="{display:flex;}">
              <h3>发布者</h3>
              <div class="avatar"><img :src="seller.userImg" alt=""></div>
              <div class="txt">
                <div class="username">用户名: {{seller.username}}</div>
                <div class="username" v-if="seller.sex === 2">性别: 女</div>
                <div class="username" v-if="seller.sex === 1">性别: 男</div>
                <div class="username">擅长领域: {{seller.domainText}}</div>
                <div class="username">自我介绍: {{seller.selfIntro}}</div>
                <div class="button"> <el-button type="primary" @click="checkOthers" plain>进入主页</el-button></div>
              </div>
            </el-card>
          </el-col>
          <el-col>

            <el-card class="card" shadow="hover" body-style="{display:flex;}">
              <h3>购买者</h3>
              <div class="avatar"><img :src="buyer.userImg" alt=""></div>
              <div class="txt">
                <div class="username">用户名: {{buyer.username}}</div>
                <div class="username" v-if="buyer.sex === 2">性别: 女</div>
                <div class="username" v-if="buyer.sex === 1">性别: 男</div>
                <div class="username">擅长领域: {{buyer.domainText}}</div>
                <div class="username">自我介绍: {{buyer.selfIntro}}</div>
                <div class="button"> <el-button type="primary" @click="checkOthers" plain>进入主页</el-button></div>
              </div>
            </el-card>
          </el-col>
    </el-row>


    <el-row>
      <div v-if="showEvaluation">
        <h2>请输入您对订单的评价</h2>
        <el-row>
          <el-input
              ref="input"
              type="textarea"
              placeholder="请输入评价"
              v-model="textarea"
              maxlength="300"
              show-word-limit
              :clearable="true"
              :rows="5"
          >
          </el-input>
        </el-row>
        <el-row>
          <el-button @click="sendComment" style="margin-left: 92%;margin-top: 10px" type="primary">发送</el-button>
        </el-row>
      </div>
      <div>
        <div class="list" v-if="showList">
          <h2>我的评价</h2>
          <evaluation :data="evaluationVo"></evaluation>
        </div>
      </div>
    </el-row>


<!--  <div>-->
<!--    <big-class-card></big-class-card>-->
<!--  </div>-->
  </div>
</template>

<script>
import {
  confirmC,
  confirmClass,
  confirmQ,
  finishC,
  finishQ,
  postEvaluation,
  showOrder,
  showOrderQ
} from "../../../network/Order";
import BigClassCard from "../class/BigClassCard";
import SearchResultNavBar from "../../../views/searchResult/childComponents/SearchResultNavBar";
import HeaderBack from "../back/HeaderBack";
import {sendComment} from "../../../network/comment";
import evaluation from "../comment/Evaluation";
export default {
  name:"OrderDetail",
  data() {
    return {
      orderTitle:"订单信息",
      active: 0,
      //0 购买者  1  卖家
      position:0,
      order:{},
      seller:{},
      buyer:{},
      classDetail:{},
      //0--课程 1--提问
      flag:null,
      question:{},
      id: 0,
      textarea:"",
      evaluationVo:null
    };
  },
  created() {
    this.id = parseInt(this.$route.query.order_id);
    this.flag = parseInt(this.$route.query.flag);
    this.position = parseInt(this.$route.query.position);
    this.loadData(this.flag);
  },
  components:{
    BigClassCard,
    SearchResultNavBar,
    HeaderBack,
    evaluation
  },
  computed:{

    //是卖家并且订单状态为0
    sellerConform(){
      if(parseInt(this.order.orderStatus) === 0 && this.position === 1){
        return true;
      }
      return false;
    },

    showStatus(){
      return  parseInt(this.order.orderStatus)+1;
    },
    //课程还是提问
    showFlag(){
     if(this.flag === 0){
       return false;
     }
     else{
       return true;
     }
    },
    //是否显示评价
    showEvaluation(){
      console.log(this.evaluationVo)
      if(this.evaluationVo === null){
        return false;
      }
      //状态为已结束,为买家，评价为空才显示
      if(parseInt(this.order.orderStatus) === 2 && this.position === 0 && this.evaluationVo.evaluation === null && this.flag === 0){
        return true;
      }
      else{
        return false;
      }
    },
    buyerConfirm(){
      if(parseInt(this.order.orderStatus) === 1 && this.position === 0){
        return true;
      }
    },
    //评价不为空就显示
    showList(){
      if(this.evaluationVo === null){
        return false;
      }
      if(this.evaluationVo.evaluation !== null){
        return true;
      }
      return false;
    }

  },
  methods: {
    detail(){
      this.$router.push({path:'/class',query:{class_id:this.classDetail.id,canChange:0}})
    },
    detailQ(){
      console.log(this.classDetail);
      this.$router.push({path:'/question',query:{question_id:this.question.id,canChange:0}})
    },
    change(e){
      this.$forceUpdate();
    },
    finishClass(){
      finishC(this.order.id).then((res)=>{
        this.$message({
          type:"success",
          message:`成功确认!`
        })
        this.loadData();
        location.reload();
      })
    },
    finishQuestion(){
      finishQ(this.order.id).then((res)=>{
        this.$message({
          type:"success",
          message:`成功确认!`
        })
        this.loadData()
        location.reload();
      })
    },
    conformClass(){
      confirmC(this.order.id,this.order.price,this.order.suggestTime).then((res)=>{
        this.$message({
          type:"success",
          message:`订单成功确认!`
        })
        this.loadData()
        location.reload();
      })
    },
    conformQuestion(){
      confirmQ(this.order.id,this.order.price,this.order.suggestTime).then((res)=>{
        this.$message({
          type:"success",
          message:`订单成功确认!`
        })
        this.loadData()
        location.reload();
      })
    },
    sendComment(){
      postEvaluation(this.textarea,this.order.id).then((res)=>{
        this.$message({
          type:"success",
          message:`发布评价成功!`
        })
        this.textarea = "";

      })
      location.reload();
    },
    checkOthers(){
      this.$router.push({path:'/mainMenu',query:{id:this.seller.id}})
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    loadData(flag){
      const that = this;
      console.log(flag)
      if(flag === 0){
        showOrder(that.id).then((res)=>{
          that.order = res.data.order_;
          console.log(that.order);
          that.buyer = res.data.buyer;
          that.seller = res.data.seller;
          that.classDetail = res.data.classInfo;
          this.evaluationVo= res.data.evaluationVo;
          console.log(res)
        })
      }
      else{
        showOrderQ(that.id).then((res)=>{
          that.order = res.data.orderQ;
          console.log(that.order);
          that.buyer = res.data.buyer;
          that.seller = res.data.seller;
          that.question = res.data.question;
          console.log(res)
        })
      }

    }
  }
}
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}
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


.card {
  height: 300px;
  width: 100%;
}

.avatar {
  float: left;
  width: 20%;
  overflow: hidden;
}

.txt {
  float: left;
  margin-left: 50px;
}

.username {
  height: 25px;
  line-height: 25px;
  color: black;
  margin-top: 10px;
  font-size: var(--font-size-samll);
}

.classes {
  height: 75px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}

.domain {
  height: 25px;
  line-height: 25px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}
.orderText{
  margin-top: 10px;
  margin-left: 10px;
}
.button{
  margin-top: 10px;
  margin-left: 10px;
}
</style>