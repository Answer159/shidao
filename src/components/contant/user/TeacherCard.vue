<template>
  <div @click="ItemClick">
    <el-card class="card" shadow="hover" body-style="{display:flex;}">
        <div class="avatar"><img :src="data.userImg" alt=""></div>
        <div class="txt">
          <div class="username">{{data.username}}</div>
          <div class="username">性别: {{data.gender}}</div>
          <div class="classes">擅长领域: {{data.domainText}}</div>
<!--          <div class="domain">{{data.domain}}</div>-->
        </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "TeacherCard",
  props: {
    data:null
  },
  computed :{
  },
  methods: {
    ItemClick(){
      this.$router.push({path:'/mainMenu',query:{id:this.data.id}})
    }
  }

}
</script>

<style scoped>
.card {
  height: 145px;
}

.avatar {
  float: left;
  width: 145px;
  overflow: hidden;
}

.txt {
  float: right;
  width: 140px;
  margin-left: 10px;
}
img{
  height: 115px;
}

.username {
  height: 25px;
  line-height: 25px;
  color: black;
  font-size: var(--font-size-samll);
}

.classes {
  height: 75px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}

.domain {
  height: 25px;
  line-height: 15px;
  color: var(--color-font);
  font-size: var(--font-size-samll);
}

</style>