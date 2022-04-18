<template>
<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
  <header-back pageName="课程详情"></header-back>
  <el-row>
    <el-col :span="20" :offset="2">
      <class-detail-top ref="tops" :can-change="canChange" :data="classInfo" :user="userInfo" :imgPath="imgPath"></class-detail-top>
    </el-col>
  </el-row>
  <el-row class="contant">
    <el-col  :span="15" :offset="2">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 课程介绍</span>
            <class-intro :video-form="videoForm" :data="classInfo"></class-intro>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-chat-dot-square"></i> 课程讨论</span>
            <class-comment :comments="evaluationVos"></class-comment>
        </el-tab-pane>       
      </el-tabs>
    </el-col>

    <el-col class="side" :span="5">
      <sider :data="siderData"></sider>
    </el-col>
  </el-row>

 
</div>
</template>

<script>
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import ClassDetailTop from './childComponents/ClassDetailTop.vue';
import ClassIntro from './childComponents/ClassIntro.vue';
import ClassComment from './childComponents/ClassComment.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import Sider from './childComponents/Sider.vue';
import {GetClassData} from '../../network/classDetail'
export default {
  name: 'ClassDetail',
  components: {
    SearchResultNavBar,
    ClassDetailTop,
    ClassIntro,
    ClassComment,
    HeaderBack,
    Sider
    
  },
  data(){
    return{
      videoForm: {
        showVideoPath: ''
      },
      canChange:0,
      classInfo:{},
      evaluationVos:[],
      category:null,
      userInfo:{},
      imgPath:[],
       TopData: {},
       IntroData: {
       },
       CommentsData:[],
       class_id:1,
       siderData:{
         userInfo:{}
       }
    }
  },
  created() {
    
    this.class_id = parseInt(this.$route.query.class_id);
    this.canChange = parseInt(this.$route.query.canChange);
    GetClassData(this.class_id).then((res)=>{
      this.classInfo=res.data.classInfo;
      this.classInfo.score = 0+'';
      console.log(typeof(this.classInfo.score))
      this.evaluationVos=res.data.evaluationVos;
      this.category=res.data.category;
      this.userInfo=res.data.userInfo;
      this.imgPath=res.data.imgPath;
      this.siderData.userInfo=res.data.userInfo;
      this.videoForm.showVideoPath = res.data.videoPath;
      console.log(this.videoForm)
      console.log(res);
      this.$refs.tops.execute();
    })
    
  }
  


}
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}

.bar {
  margin-top: 10px;
}

.contant {
  margin-top: 45px;
}

</style>