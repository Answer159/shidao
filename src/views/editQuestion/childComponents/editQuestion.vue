<template>
  <div class="form">
    <h1 class="headOne">基础信息</h1>
    <el-form ref="form" class="contantOne" :model="classInfo" label-width="20%" size="medium" label-position="left" label-suffix=":">
      <el-form-item class="item" label="课程标题" >
        <el-input v-model="classInfo.title"></el-input>
      </el-form-item>
      <el-form-item class="item" label="课程领域">
        <category-select :category="classInfo.domainId" @change="change"></category-select>
      </el-form-item>
      <el-form-item  label="课程简介">
        <el-input type="textarea"  resize="none" v-model="classInfo.textIntro" :maxlength="200" :show-word-limit="true"></el-input>
      </el-form-item>
      <el-form-item label="参考价格">
        <el-input v-model="classInfo.price"></el-input>
      </el-form-item>
      <el-form-item label="参考时间">
        <el-input v-model="classInfo.suggestTime"></el-input>
      </el-form-item>
      <el-form-item class="item" label="图片">
        <edit-image :flag="1" :class-id="id"   :image-urls="imgPaths" ref="ClassFormAvUpload"></edit-image>
      </el-form-item>
      <el-form-item class="item" label="视频" >
        <upload-video :video-form="videoForm" :params="params" ref="uploadVideo" @videoId="getVideoId"></upload-video>
      </el-form-item>
      <h1 class="headTwo">详细信息</h1>
      <el-form-item  label="教学内容">
        <el-input type="textarea"  resize="none" v-model="classInfo.questionContent" :maxlength="200" :show-word-limit="true"></el-input>
      </el-form-item>
      <el-form-item  label="前置知识">
        <el-input type="textarea"  resize="none" v-model="classInfo.frontKnowledge" :maxlength="200" :show-word-limit="true"></el-input>
      </el-form-item>
      <el-form-item  label="教学工具">
        <el-input type="textarea"  resize="none" v-model="classInfo.tools" :maxlength="200" :show-word-limit="true"></el-input>
      </el-form-item>
      <!-- <el-form-item  label="附加信息">
        <el-input type="textarea"  resize="none" v-model="classInfo.add"></el-input>
      </el-form-item> -->
      <el-button type="primary" @click= "submitClick" :loading="onload">提交</el-button>
    </el-form>
  </div>
</template>


<script>
import PicsUpload from '../../../components/common/upload/PicsUpload.vue'
import {editClass, submit} from '../../../network/CreateClass'
import uploadVideo from "../../components/uploadVideo";
import CategorySelect from "../../components/categorySelect";
import {GetFullClass, GetFullQuestion} from "../../../network/classDetail";
import editImage from "../../../components/common/upload/editImage";
import EditImage from "../../../components/common/upload/editImage";
import {editQuestion} from "../../../network/updateClass";
export default {
  name: "editClass",
  data(){
    return{
      onload:false,
      videoId:0,
      params:{
        flag:1
      },
      classInfo:{
        use_id:0,
        id: 0,
        score:0,
        statu:0,
        title:"",
        textIntro:"",
        domainId:1,
        suggestTime:12,
        price:14,
        class_content:"",
        front_knowledge:"",
        tools:"",
        //add:"",
      },
      videoForm: {
        showVideoPath: ''
      },
      imgPaths:[],
      files:null,
      videos:null

    }
  },
  props:{
    id:null,
  },
  components:{
    EditImage,
    PicsUpload,
    uploadVideo,
    CategorySelect
  },
  created() {
    this.loadData();
  },
  methods: {
    change(data){
      this.classInfo.domainId=data;
    },
    getVideoId(val){
      this.videoId=val;
    },
    loadData(){
      this.id = parseInt(this.$route.query.id);
      GetFullQuestion(this.id).then((res)=>{
        this.classInfo = res.data.question;

        this.videoForm.showVideoPath = res.data.videoPath;
        this.imgPaths = res.data.imgPaths;
        console.log(res);
      })
    },
    submitClick() {
      this.onload = true;
      let data = new FormData();
      let classInfo = JSON.stringify(this.classInfo);
      data.append("videoId",this.videoId);
      data.append("question",classInfo);
      editQuestion(data).then((res)=>{
        if(res.data.msg === "success");
        this.$message({
          type:"success",
          message:"修改成功"
        })
        this.$router.push('/home')
      })

    }
  }


}
</script>

<style scoped>
.form{
  margin-top: 45px;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 30px;
  border: 1px solid var(--color-border);
  background-color: white;
}

.headOne{
  margin-left: 5%;
  width: 60%;
}

.contantOne{
  margin-left: 20%;
  width: 60%;

}

.headTwo{
  position: relative;
  left: calc(-20%*5/3);
  margin-left: calc(5%*5/3);
  width: 60%;
}


::v-deep .el-input__inner{
  height: 50px;
  font-size: var(--font-size);
}

::v-deep .el-input{
  width: 60%;
}

::v-deep .el-form-item__label{
  height: 50px;
  line-height: 50px;
  font-size: var(--font-size);
}

::v-deep .el-textarea__inner{
  height: 150px;
  text-indent: 2em;
  letter-spacing: 0.1em;
  line-height: 1.6;
}
</style>