<template>
  <div class="touxiang">
    <div class="img">
      <img :src="this.userInfo.userImg" alt="">
    </div>
    <div class="content">
      <el-row>
        <h4>{{this.userInfo.username}} </h4>
      </el-row>
      <el-row>
        <h4>{{this.userInfo.selfIntro}} </h4>
      </el-row>
    </div>
    <el-menu
        default-active="UserDetail"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
        :default-active="defaultActive">
      <el-menu-item index="UserDetail"
                    :route="{ path: '/mainMenu/UserDetail', query: { id: userInfo.id } }">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="hisClass"
                    :route="{ path: '/mainMenu/hisClass', query: { id: userInfo.id } }">
        <i class="el-icon-menu"></i>
        <span slot="title">发布课程</span>
      </el-menu-item>
      <el-menu-item index="hisQuestion"
                    :route="{ path: '/mainMenu/hisQuestion', query: { id: userInfo.id } }">
        <i class="el-icon-menu"></i>
        <span slot="title">发布求助</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  name:"menuSider",
  data() {
    return {
      defaultActive:this.$route.meta.active
    }
  },
  props:{
    userInfo:{},
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    load(record){
      this.userInfo = record;
    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<style scoped>
.el-menu-vertical-demo{
  height: 800px;
}

::v-deep .el-menu-item{
  padding-left: 50px !important;
}
img{
  margin-top: 40px;
  margin-left: 30%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.touxiang{
  background-color: #eeeeee;
}
.content{
  align-self: center;
  color: black;
  text-align: center;
}
</style>