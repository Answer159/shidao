<template>
  <div >
    <form-sider>
      <div class="img">
        <img src="" alt="">
      </div>
      <h1>常见问题</h1>
      <div>
        <p class="main-text"><i class="el-icon-question"></i>不确定自己发布的课程属于哪个领域怎么办？</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-info"></i>可以模糊选择多个课程</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-question"></i>参考时长就是具体的上课时长吗？</p>
      </div>
      <div>
        <p class="main-text"><i class="el-icon-info"></i>参考时长是您对自己课程有效教学时长的大概估计，是方便学生判断的，最终结果由您与学生共同沟通决定。</p>
      </div>

    </form-sider>

  </div>


</template>

<script>
import FormSider from '../../../components/contant/sider/FormSider.vue';
export default {
  name:"Sider",
  components:{
    FormSider
  }
}
</script>

<style scoped>


</style>