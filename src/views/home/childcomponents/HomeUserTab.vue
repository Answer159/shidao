<template>
  <div :style="{color: fontColor}">
    <div class="tab" v-if="this.$store.state.login == 1">
      <div class="item my-study"  ><router-link class="link" :style="{color: fontColor}"  to="profile">个人中心</router-link></div>
      <div class="item "><router-link class="link" :style="{color: fontColor}"  to=""><span class="message "><i class = "el-icon-bell"></i>消息&nbsp</span></router-link></div>
      <div class="username">

        <div class="username-txt">
          {{this.$store.state.userData.userName}}&nbsp
          <el-tooltip effect="dark" content="登出" placement="bottom-start">
            <i  @click="logoutClick" class="el-icon-switch-button logout"></i>
        </el-tooltip></div>
        <img :src="this.$store.state.userData.userImg" alt="">
        
      </div>
    </div>
    <div class="tab" v-if="this.$store.state.login == 0">
      <div class="username">
        <div class="login">
          <router-link class="link" :style="{color: fontColor}"  to="/login">登录&nbsp |</router-link>
      <router-link class="link" :style="{color: fontColor}" to="/register"> &nbsp注册</router-link>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
import {Logout} from '../../../network/login'
export default {
  name: 'HomeUserTab',
  props: {
    fontColor: {
      type:String,
      default: "var(--color-font)"
    }
  },
  data() {
    return {
     
    }
  },
  methods: {
   
    logoutClick(){
      let choose = window.confirm("您确定要登出吗？");
      if(choose){
        Logout().then((res)=>{
          if(res.data.msg == "success"){
            this.$store.commit('Logout');
            this.$router.push('/home');
          }else{
            this.$message({
               type:"error",
                message:"登出失败，请重试！"
            })
          }
        })
      }
      }   
  }

}
</script>

<style scoped>
.tab{
  display: flex;
  font-size: var(--font-size-big);
  height: 57px;
  line-height: 57px;
  
}

.item {
  text-align: right;
  flex: 1;
  
}

.message {
  border-right: 1px solid var(--color-text);
}

.username {
  flex:2;
  
}
.username{
  width: 100%;
}
img{
  float:right;
  border-radius: 50%;
  height: 55px;
  width: 55px;
}

.username-txt {
  float: right;
  margin-left: 10px;
}

.login {
  float: right;
  margin-left: 10px;
}

.logout{
  font-size: 25px;
}
</style>