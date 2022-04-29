<template>
<div class="box" style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <h1>我的订单</h1>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-select v-model="value1" placeholder="">
          <el-option
              v-for="item in firstOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="value2" placeholder="请选择订单状态">
          <el-option
              v-for="item in secondOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
      <el-button type="primary" @click="loadData">确认</el-button>
      </el-col>
    </el-row>

  </div>
  <div class="contant">
    <h2>课程订单/购买者</h2>
    <order-card class="item" v-for="(item,index) in orderS"
                :seller='sellers[index]'
                :buyer="buyers[index]"
                :order="item"
                :class-detail="classInfos[index]"
                :flag="0"
                :position="0"
    ></order-card>
  </div>
    <div class="contant">
    <h2>课程订单/提供者</h2>
    <order-card class="item" v-for="(item,index) in orderSeller"
                :seller='sellersForSeller[index]'
                :buyer="buyersForSeller[index]"
                :order="item"
                :class-detail="classInfosSeller[index]"
                :flag="0"
                :position="1"
    ></order-card>
    </div>
  <div class="contant">
    <h2>提问订单/购买者</h2>
    <order-card class="item" v-for="(item,index) in orderQs"
                :seller='sellersQs[index]'
                :buyer="buyersQs[index]"
                :order="item"
                :class-detail="questions[index]"
                :flag="1"
                :position="0"
    ></order-card>
  </div>
    <div class="contant">
    <h2>提问订单/提供者</h2>
    <order-card class="item" v-for="(item,index) in orderQSeller"
                :seller='sellersQForSeller[index]'
                :buyer="buyersQForSeller[index]"
                :order="item"
                :class-detail="questionsSeller[index]"
                :flag="1"
                :position="1"
    ></order-card>
  </div>
  </div>
</template>

<script>
import OrderCard from "../../../components/contant/order/OrderCard";
import {myOrder} from "../../../network/Order";
export default {
  name:"ProfileMyOrder",
  data(){
    return{
      activeName:"finished",
      value1:"all",
      value2:3,
      firstOptions:[
        {
          value:"all",
          label:"所有订单"
        },
        {
          value:"buyer",
          label:"我是买方"
        },
        {
          value:"seller",
          label:"我是卖方"
        },
      ],
      secondOptions:[
        {
          value:3,
          label:"所有"
        },
        {
          value:0,
          label:"待确认"
        },
        {
          value:1,
          label:"待完成"
        },
        {
          value:2,
          label:"已完成"
        },
      ],
      orderS:[],
      orderQs:[],
      buyers:[],
      sellers:[],
      buyersQs:[],
      sellersQs:[],
      classInfos:[],
      questions:[],
      orderSeller:[],
      orderQSeller:[],
      buyersForSeller:[],
      sellersForSeller:[],
      buyersQForSeller:[],
      sellersQForSeller:[],
      classInfosSeller:[],
      questionsSeller:[],
    }
  },
  components:{
    OrderCard
  },
  created(){
    this.loadData();
  },
  methods:{
    loadData(){
      myOrder(this.value2,this.value1).then((res)=>{
        this.orderS = res.data.orderS;
        this.orderQs = res.data.orderQs;
        this.buyers = res.data.buyers;
        this.sellers = res.data.sellers;
        this.buyersQs = res.data.buyersQs;
        this.sellersQs = res.data.sellersQs;
        this.classInfos = res.data.classInfos;
        this.questions = res.data.questions;
        this.orderSeller = res.data.orderSeller;
        this.orderQSeller = res.data.orderQSeller;
        this.buyersForSeller = res.data.buyersForSeller;
        this.sellersForSeller = res.data.sellersForSeller;
        this.buyersQForSeller = res.data.buyersQForSeller;
        this.sellersQForSeller = res.data.sellersQForSeller;
        this.classInfosSeller = res.data.classInfosSeller;
        this.questionsSeller = res.data.questionsSeller;
      })
    },
    getState(order_status){
      switch (order_status) {
        case "finished": return "已完成";   
        case "waitConfirm": return "等待确认信息";  
        case "waitUpdata": return "等待制定";  
        case "waitWant": return "等待确认意向";  
        default:
          break;
      }
    },
    detailClick(index){
       console.log(this.finished[index].id);
    }
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
   width: 48%;
   margin-top: 30px;
 }
</style>