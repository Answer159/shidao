<template>
<div class="main">
  <div class="top">
    <h2>课程评价</h2>
    <p class="main-text">欢迎进入课程评论区，大家可以针对问题尽情讨论</p>
  </div>
  <div class="list">
    <comment v-for="item in comments" :data="item" @focusNext="focusNext"></comment>
  </div>
  <div class="input">
    <el-row>
      <el-input
          ref="input"
          type="textarea"
          :placeholder="holder"
          v-model="textarea"
          maxlength="300"
          show-word-limit
          :clearable="true"
          :rows="5"
      >
      </el-input>
    </el-row>
    <el-row>
      <el-button @click="sendComment" style="margin-left: 92%;margin-top: 10px" type="primary">发送</el-button>
    </el-row>

  </div>
  
</div>
  
</template>

<script>
import Comment from '../../../components/contant/comment/Comment.vue';
import {sendComment} from "../../../network/comment";

export default {
  name: "questionComment",
  components:{
    Comment
  },
  computed:{
    holder(){
      return this.head;
    }
  },
  props: {
    comments:[],
    quesitonId:null,
  },
  data() {
    return {
      textarea: '',
      replayId:-1,
      head:"请输入评论",
      showContent:"",
    }
  },
  methods:{
    focusNext(replayId,username){
      this.$refs.input.focus();
      this.head = "@"+username+"";
      this.replayId = replayId;
    },
    sendComment(){
      console.log(this.textarea)
      console.log(this.quesitonId)
      console.log(this.replayId)
      sendComment(this.textarea,this.quesitonId,this.replayId).then((res)=>{
        this.$message({
          type:"success",
          message:`评论成功!`
        })
        this.textarea = "";
        this.replayId = -1;
        this.head = "请输入评论";
        this.comments.push(res.data.comment);
        console.log(this.comments);
      })
    }
  }

}
</script>

<style scoped>

.main{
  padding: 20px 0;
}

.top{
  padding: 0,20px;
  padding-bottom: 20px;
}

</style>