<template>
<div class="info" style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <div class="updata"><router-link :to="{path:'/updataMyInfo',query: {userInfo: this.userInfo}}" style="color:var(--color-high-text)">修改个人信息</router-link></div>
    <h1>个人信息</h1>
    <h3><span class="lable">昵称：</span> {{userInfo.username}}</h3>
    <h3><span class="lable">账号：</span>{{userInfo.account}}</h3>
<!--    <div><h3><span class="lable">头像：</span><img class="av" :src="this.$store.state.userData.userImg" alt=""></h3></div>-->
  <div><h3><span class="lable">头像：</span><img class="av" :src="userInfo.userImg" alt=""></h3></div>
    <h3><span class="lable">性别：</span>{{userInfo.gender}}</h3>
    <h3><span class="lable">兴趣领域：</span> {{userInfo.domainText}}</h3>
    <h3><span class="lable">个人介绍：</span><span class="content">{{userInfo.selfIntro}}</span></h3>
    
</div>

</template>

<script>
import { GetUser } from "../../../network/user";
import store from "../../../store";
export default {
  name:"ProfileMyInfo",
  data(){
    return{
        userInfo:{
        }
      }
    },
  methods: {
    getImage(src) {
      return require("assets/img/"+src);
    }
  },

  created(){
    GetUser().then((res)=>{
      this.userInfo=res.data.userInfo;
      console.log(res);
      this.userInfo.intro = (res.data.userInfo.selfIntro == null)? "这个用户很懒，什么都没有写！":res.data.userInfo.selfIntro;
    })

  }

  

}
</script>

<style scoped>
.info{
  box-sizing: border-box;
  padding: 30px 5%;
  height: 800px;
  background-color: white;
}

.av{
  width: 125px;
  height: 125px;
}

h3{
  width: 70%;
}

.lable {
  display: inline-block;
  width: 20%;
  vertical-align: top;
  text-align: right;
  padding-right: 20px;
}


.content{
  display: inline-block;
  width: 50%;
  
}

.updata{
  position: absolute;
  right: 30%;
}
</style>