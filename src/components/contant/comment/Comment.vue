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
        <h5 class="date">{{data.comment.createDate}}</h5>
         
      </div>
      <p class="main-text">{{data.comment.content}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Comment",
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
      this.$emit('focusNext',this.data.comment.id,this.data.userInfo.username);
    }
  }
}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  display: flex;
  flex-shrink:0;
  width: 100%;
  padding: 10px 30px;
  border-bottom: 1px  solid rgba(102, 102, 102,0.2);
}

.contant{
  margin-left: 20px;
}

.img{
  border-radius: 50%;
  flex-shrink:0;
}

.one {
  display: flex;
}

.date{
  margin-left: 30px;
}
.main-text{
  text-overflow:ellipsis;
}
</style>