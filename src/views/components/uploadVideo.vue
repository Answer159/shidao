<template>
  <div>
    <div v-if="videoForm.showVideoPath ===''">
      <el-upload

          :action="'http://localhost:8080/shidao/fore/saveVideo'"
          :data="params"
          v-bind:on-progress="uploadVideoProcess"
          v-bind:on-success="handleVideoSuccess"
          v-bind:before-upload="beforeUploadVideo"
          v-bind:show-file-list="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将视频拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传视频文件，且不超过500MB</div>
      </el-upload>
    </div>
    <video width="320" height="240" v-if="videoForm.showVideoPath !='' && !videoFlag"
           v-bind:src="videoForm.showVideoPath"
           class="avatar video-avatar"
           controls="controls">
      您的浏览器不支持视频播放
    </video>
  </div>
</template>

<script>
export default {
  name:"uploadVideo",
  data() {
    return{
      //参数
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoId:0,

    }
  },
  props:{
    videoForm: {
      showVideoPath: ''
    },
    params:{
      flag:0
    }
  },
  methods: {
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 500;
      if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
        this.$alert('请上传正确的视频格式', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        return false;
      }
      if (!fileSize) {
        this.$alert('视频大小不能超过500MB', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      //后台上传地址
      if (res.msg==="success") {
        console.log('执行了',res.url)
        this.curgimg = res.url
        this.videoForm.showVideoPath = (res.url);
        console.log("videoId is:"+res.id);
        this.$emit("videoId",res.id);
      } else {
        this.$alert(res.msg, '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },
  }
}
</script>

<style scoped>
.main {
  display: flex;
}

.imgList{
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}
.img{
  height: 145px;
  width: 145px;
  margin: 5px 10px;
  border: 2px dashed var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}
img{
  height: 155px;
}

.button{
  display: block;
  margin-left: 15px;
  color: var(--color-high-text);
}

.close{
  cursor: pointer;
  position: absolute;
  color: whitesmoke;
  font-size: var(--font-size-very-big);
}

.close:hover{
  color: black;
  transition: color 0.3s;
  transition-timing-function: ease-in-out;
}
.video{
  max-width: 100px;
}


</style>