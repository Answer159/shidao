<template>
<div class="main">
  <div class="top">
    <h2>课程讨论</h2>
    <p class="main-text">欢迎进入课程评价区，以下为所有用户购买并完成该课程后的心得感想，以及对于老师的评价。</p>
  </div>
  <div class="list">
    <evaluation v-for="item in comments" :data="item"></evaluation>
  </div>


  
  
</div>
  
</template>

<script>
import Comment from '../../../components/contant/comment/Comment.vue';
import Evaluation from "../../../components/contant/comment/Evaluation";
export default {
  name: "ClassComment",
  components:{
    Comment,
    Evaluation
  },
  data() {
    return {
      textarea: ''
    }
  },
  props: {
    comments:{},
  },
  methods:{
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
/*.input{*/
/*  height: 100px;*/
/*}*/
</style>