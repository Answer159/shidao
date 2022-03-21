<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back pageName="修改提问"></header-back>
    <el-row>
      <el-col :span="15" :offset="2">
        <edit-question :id="this.id"></edit-question>
      </el-col>
      <el-col :span="5">
        <sider></sider>
      </el-col>
    </el-row>



  </div>
</template>

<script>
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import editQuestion from "./childComponents/editQuestion";
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import Sider from './childComponents/Sider.vue'
import {GetFullClass} from "../../network/classDetail";

export default {
  name:"QuestionEdit",
  data(){
    return{
      id:null,
      classInfo:{},
      videoPath:{},
      imgPaths:[]
    }
  },
  components:{
    HeaderBack,
    editQuestion,
    SearchResultNavBar,
    Sider

  },
  created() {
    this.id = parseInt(this.$route.query.id);
  },
  methods:{
  }

}
</script>

<style scoped>

.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}

.bar {
  margin-top: 10px;
}



</style>