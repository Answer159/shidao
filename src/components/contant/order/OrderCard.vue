<template>
  <div class="card" @click="ItemClick">
    <div class="img"><img :src="classDetail.imgPath[0]" alt=""></div>
    <div class="contant">
      <div class="title title-text">{{classDetail.title}}</div>
      <div class="price tag-text"><span>参考价格：{{order.price}}</span> <span class="time">参考时长：{{order.suggestTime}}(小时)</span></div>
      <div class="name tag-text">创建时间：{{order.createDate}}</div>
      <div class="name tag-text">发布者：{{seller.username}}</div>
      <div class="name tag-text">购买者：{{buyer.username}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    order:{},
    seller:{},
    buyer:{},
    classDetail:{},
    flag:null,
    position:null,
  },
  methods: {
    ItemClick(){
      this.$router.push({path:'/order',query:{order_id:this.order.id,flag:this.flag,position:this.position}})
    }
  }
}
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  background-color:white;
  width: 95%;
  height: 220px;
  padding-left: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  flex:1;
  overflow: hidden;
}

img{
  height: 100%;
  overflow: hidden;
}

.contant {
  margin-left: 50px;
  padding: 20px 0;
  padding-right: 30px;
  flex:2;
}

.card:hover{
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: box-shadow 0.3s;
  transition-timing-function: ease-in-out;
}

.time {
  padding-left: 30%;
}

.price{
  padding-top: 10px;
}
</style>