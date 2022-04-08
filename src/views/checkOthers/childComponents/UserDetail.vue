<template>
  <div class="info" style="overflow-y:scroll;overflow-x:hidden;height:100%">
    <h1>基本信息</h1>
    <h3><span class="lable">昵称：</span> {{userInfo.username}}</h3>
    <h3><span class="lable">账号：</span>{{userInfo.account}}</h3>
    <div><h3><span class="lable">头像：</span><img class="av" :src="userInfo.userImg" alt=""></h3></div>
    <h3><span class="lable">性别：</span>{{userInfo.gender}}</h3>
    <h3><span class="lable">兴趣领域：</span> {{userInfo.domainText}}</h3>
    <h3><span class="lable">个人介绍：</span><span class="content">{{userInfo.selfIntro}}</span></h3>
    <h1>联系信息</h1>
    <h3><span class="lable">电话号码：</span> {{userInfo.phone}}</h3>
  </div>
</template>

<script>
import {checkUser} from "../../../network/user";

export default {
  name: "UserDetail",
  data(){
    return{
      userInfo:{},
      id:null
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods:{
    loadData(){
      console.log(this.id)
      const that = this;
      checkUser(this.id).then((res)=>{
        if(res.data.msg === "success"){
          that.userInfo = res.data.userInfo;
        }
        else{
        }
        this.isLoad = true;
        console.log(this.userInfo)
      })
    }
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
</style>