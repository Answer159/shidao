<template>
<div>
  <div class="home-login"  v-if="this.$store.state.login == 1">
    <div class="unlogin-img">
      <img src="~assets/img/admin.jpg" alt="" srcset="">
    </div>
    
     <div>
      <el-button type="success" plain class="button" @click="GoClass">我的学习</el-button>
    </div>
    <div>
      <el-button type="success" plain class="button" @click="GoOrder">我的订单</el-button>
    </div>

  </div>


  <div class="home-login" v-if="this.$store.state.login == 0">
    <div>
      <img src="~assets/img/admin.jpg" alt="" srcset="">
    </div>
    <div>
      <el-button type="success" plain class="button" @click="LoginClick">登录/注册</el-button>
    </div>


  </div>
</div>

</template>

<script>
export default {
  name: "HomeLogin",
  data(){
    return{
      flag:0
    }
  },
  methods:{
    LoginClick(){
      this.$router.push("/login");
    },
    GoClass(){
      this.$router.push("/profile/study")
    },
    GoOrder(){
      this.$router.push("/profile/order")
    }
  }
}
</script>

<style scoped>
.home-login{
  box-sizing:border-box;
  text-align: center;
  padding: 45px 20px;
  height: 400px;
  margin: 20px 4px;
  margin-right: 0;
  border: 1px solid var(--color-border);
  background-color: white;
}

img {
  width: 190px;
  border-radius: 50%;
}

.button {
  margin-top:30px;
  height: 50px;
  width: 160px;
  border-radius: 12px;
  font-size: var(--font-size-big);
}

.unlogin-img img{
  width: 140px;
  border-radius: 50%;
}

</style>