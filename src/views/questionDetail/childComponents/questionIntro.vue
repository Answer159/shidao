<template>
<div class="main">

  <div class="item" v-if="showVideo">
    <h2><i class="el-icon-thumb" />&nbsp视频介绍：</h2>
    <upload-video :video-form="videoForm" :params="params" ref="uploadVideo" @videoId="getVideoId"></upload-video>
  </div>

  <div class="item">
    <h2><i class="el-icon-thumb" />&nbsp问题简介：</h2>
    <p class="main-text">{{data.textIntro}}</p>
  </div>

  <div class="item" v-if="data.classContent != '未写入'">
    <h2><i class="el-icon-collection" />&nbsp提问内容：</h2>
    <p class="main-text">{{data.questionContent}}</p>
  </div>

  <div class="item"  v-if="data.frontKnowledge != '未写入'">
    <h2><i class="el-icon-box" />&nbsp前置知识：</h2>
    <p class="main-text">{{data.frontKnowledge}}</p>
  </div>

   <div class="item" v-if="data.tools != '未写入'" >
    <h2><i class="el-icon-reading" />&nbsp教学工具：</h2>
    <p class="main-text">{{data.tools}}</p>
  </div>


<!--  <div class="item" v-if="data.add != '未写入'">-->
<!--    <h2><i class="el-icon-paperclip" />&nbsp附加：</h2>-->
<!--    <p class="main-text">{{data.add}}</p>-->
<!--  </div>-->


</div>
  
</template>

<script>
import uploadVideo from "../../components/uploadVideo";
export default {
  name: 'questionIntro',
  components:{
    uploadVideo
  },
  data(){
    return{
      params:{
        flag:0
      },
      videoId:0,
    }
  },
  props: {
    videoForm: {
      showVideoPath: ''
    },
    data: {
      // intro:null,
      // classContant:null,
      // frontKnowledge:null,
      // tools:null,
      // add:null
    }
  },
  methods:{
    getVideoId(val){
      this.videoId=val;
    },
  },
  computed:{
    showVideo(){
      if(this.videoForm.showVideoPath === ""||this.videoForm.showVideoPath === undefined||this.videoForm.showVideoPath === null){
        return false;
      }
      else{
        return true;
      }
    }
  }

}
</script>

<style scoped>

.main{
  padding: 20px 20px;

}

.item {
  padding-bottom: 30px;
}

</style>