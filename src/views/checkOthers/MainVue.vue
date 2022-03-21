<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back :pageName="setHead"></header-back>
    <el-row>
      <el-col :span="4"><menu-sider v-if="setIsLoad" :user-info="userInfo"></menu-sider></el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view ></router-view>
        </keep-alive>

      </el-col>
    </el-row>

    <bottom></bottom>

  </div>
</template>

<script>
import SearchResultNavBar from "../searchResult/childComponents/SearchResultNavBar";
import HeaderBack from "../../components/contant/back/HeaderBack";
import bottom from "../../components/contant/bottom/Bottom";
import menuSider from "./childComponents/menuSider";
import {checkUser} from "../../network/user";
export default {
  name: "mainMenu",
  data(){
    return{
      userInfo:{},
      id:0,
      isLoad:false
    }
  },
  components:{
    SearchResultNavBar,
    HeaderBack,
    bottom,
    menuSider
  },
  computed:{
    setIsLoad(){
      return this.isLoad;
    },
    setHead(){
      return this.userInfo.username+"的主页"
    }
  },
  created() {
    this.id = parseInt(this.$route.query.id);
    this.loadData();
    this.$router.push({path:'/mainMenu/UserDetail',query:{id:this.id}})
  },
  methods:{
    loadData(){
      console.log(this.id)
      const that = this;
      checkUser(this.id).then((res)=>{
        if(res.data.msg === "success"){
          that.userInfo = res.data.userInfo;
        }
        else{
        }
        this.isLoad = true;
        console.log(this.userInfo)

      })
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
}
</style>