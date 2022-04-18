<template>
<div>
  <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
  </div>
  <header-back pageName="提问详情"></header-back>
  <el-row>
    <el-col :span="20" :offset="2">
      <question-detail-top ref="tops" :can-change="canChange" :question="question" :user="userInfo" :imgPath="imgPath"></question-detail-top>
    </el-col>
  </el-row>
  <el-row class="contant">
    <el-col  :span="15" :offset="2">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 问题介绍</span>
            <question-intro :video-form="videoForm" :data="question"></question-intro>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-chat-dot-square"></i> 问题评价</span>
            <question-comment :quesiton-id="question.id" :comments="commentVos"></question-comment>
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
import questionDetailTop from './childComponents/questionDetailTop.vue';
import questionIntro from './childComponents/questionIntro.vue';
import questionComment from './childComponents/questionComment.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import Sider from './childComponents/Sider.vue';
import {GetClassData, GetQuestionData} from '../../network/classDetail'
export default {
  name: 'questionDetail',
  components: {
    SearchResultNavBar,
    questionDetailTop,
    questionIntro,
    questionComment,
    HeaderBack,
    Sider
    
  },
  data(){
    return{
      videoForm: {
        showVideoPath: ''
      },
      canChange:0,
      question:{},
      commentVos:[],
      category:null,
      userInfo:{},
      imgPath:[],
       TopData: {
       },
       IntroData: {
       },
       CommentsData:[
       ],
      question_id:1,
       siderData:{
         userInfo:{
              }
            }
    }
  },
  created() {
    
    this.question_id = parseInt(this.$route.query.question_id);
    this.canChange = parseInt(this.$route.query.canChange);
    GetQuestionData(this.question_id).then((res)=>{
      this.question=res.data.question;
      console.log("11");
      this.commentVos=res.data.commentVos;
      this.category=res.data.category;
      this.userInfo=res.data.userInfo;
      this.imgPath=res.data.imgPath;
      this.siderData.userInfo=res.data.userInfo;
      this.videoForm.showVideoPath = res.data.videoPath;
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