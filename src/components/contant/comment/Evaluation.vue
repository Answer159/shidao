<template>
  <div class="main" @click="focusNext">
    <el-image class="img"
              style="width:80px;height:80px"
              :src="data.userInfo.userImg"
    ></el-image>
    <div class="contant">
      <div class="one">
        <h3 class="username">
          {{data.userInfo.username}}
        </h3>
        <h5 class="date">{{data.evaluation.createDate}}</h5>

      </div>

      <!--       <el-rate class="score"-->
      <!--          v-model="data.comment.likes"-->
      <!--          disabled-->
      <!--          show-score-->
      <!--          text-color="#ff9900"-->
      <!--          :score-template="data.comment.likes">-->
      <!--        </el-rate>-->
      <p class="main-text">{{data.evaluation.evaluation}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Evaluation",
  props:{
    data:{
      // id:null,
      // img:null,
      // username:null,
      // date:null,
      // score:null,
      // text:null
    },
  },
  methods:{
    focusNext(){
      console.log(this.data);
      this.$emit('focusNext',this.data.evaluation.id,this.data.userInfo.username);
    }
  }
}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10px 30px;
  border-bottom: 1px  solid rgba(102, 102, 102,0.2);
}

.contant{
  margin-left: 20px;
}

.img{
  border-radius: 50%;
  overflow: hidden;
}

.one {
  display: flex;
}

.date{
  margin-left: 30px;
}
</style>