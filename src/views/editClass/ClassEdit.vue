<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back pageName="修改课程"></header-back>
    <el-row>
      <el-col :span="15" :offset="2">
        <edit-class :id="this.id"></edit-class>
      </el-col>
      <el-col :span="5">
        <sider></sider>
      </el-col>
    </el-row>



  </div>
</template>

<script>
import HeaderBack from '../../components/contant/back/HeaderBack.vue';
import editClass from "./childComponents/editClass";
import SearchResultNavBar from '../searchResult/childComponents/SearchResultNavBar.vue';
import Sider from './childComponents/Sider.vue'
import {GetFullClass} from "../../network/classDetail";

export default {
  name:"ClassEdit",
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
    editClass,
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