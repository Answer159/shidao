<template>
<div class="main">
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
export default {
  name: 'questionIntro',
  props: {
    data: {
      // intro:null,
      // classContant:null,
      // frontKnowledge:null,
      // tools:null,
      // add:null
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