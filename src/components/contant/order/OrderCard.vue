<template>
  <div class="card" @click="ItemClick">
    <div class="img"><img :src="classDetail.imgPath[0]" alt=""></div>
    <div class="contant">
      <div class="title title-text">{{classDetail.title}}</div>
      <div class="price tag-text"><span>参考价格：{{order.price}}</span></div>
    <div> <span class="price tag-text">
        参考时长：{{order.suggestTime}}(小时)</span></div>
      <div class="name tag-text" style="font-size: 15px">创建时间：{{order.createDate}}</div>
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
  width: 100%;
  height: 280px;
  padding-left: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}



img{
  height: 80%;
  width: 80%;
  overflow: hidden;
}

.contant {
}

.card:hover{
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: box-shadow 0.3s;
  transition-timing-function: ease-in-out;
}

.time {
  padding-top: 10px;
}

.price{
  padding-top: 10px;
}
</style>