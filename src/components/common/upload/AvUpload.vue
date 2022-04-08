<template>
  <div class="main">
    <input type="file" @change="picChange($event)" id='file' name="file" accept="image/png, image/jpg, image/jpeg, image/gif" hidden/>
    <div class="imgList">
      <i class="el-icon-circle-close close" @click="picDelete"></i>
      <div class="img">
        <img class="imgs" :src="imageUrl" alt="">
      </div>
    </div>
    <div ><label for="file" class="button">点我添加头像</label></div>
  </div>
</template>

<script>
export default {
  name:"AvUpload",
  data() {
    return {
      file:null,
      imageUrl:null
    }
  },
  props:{
    propUrl:null
  },
  watch: {
    propUrl:{
      handler(newVal) {
        this.imageUrl = newVal;
      },
    }
  },
  methods: {
    picChange(event){
      this.file = event.target.files[0];
      console.log(this.file);
     this.imageUrl =URL.createObjectURL(event.target.files[0]);
    },
    picDelete(){
      this.file = null;
      this.imageUrl=null;
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
}
.img{
  height: 155px;
  width: 155px;
  margin: 5px 10px;
  border: 2px dashed var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}

.button{
  display: block;
  margin-left: 45px;
  color: var(--color-high-text);
}
.imgs{
  object-fit: cover;
  object-position: 50% 20%;
}

</style>