<template>
  <div class="card">
    <img :src="data.userImg" alt="">
    <div class="username">用户名: {{data.username}}</div>
    <div class="username">性别: {{data.gender}}</div>
    <div class="username">领域: {{data.domainText}}</div>
    <div class="username">自我介绍: {{data.selfIntro}}</div>
  </div>
</template>

<script>
export default {
  name:"UserCardOne",
  props: {
    data:{
      // id:null,
      // domain:null,
      // username:null,
      // intro:null,
      // img:null,
    }
  }
}
</script>

<style scoped>
.card{
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

img{
  width: 90%;
  border-radius: 90%;
  overflow: hidden;
}

.card:hover{
  box-shadow: rgba(17, 12, 46, 0.15) 0px 24px 50px 0px;
  transition: box-shadow 0.3s;
  transition-timing-function: ease-in-out;
}
.username{
  margin-top: 8px;
}

</style>