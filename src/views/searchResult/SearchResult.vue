<template>
  <div>
    <div class="navbar">
      <el-row>
        <el-col :span="20" :offset="2">
          <search-result-nav-bar class="bar" ></search-result-nav-bar>
        </el-col>
      </el-row>
    </div>
    <header-back pageName="搜索结果"></header-back>
    <el-row >
      <el-col :span="14" :offset="2" class="list">
        <div class="list-number">共<span class="number">{{listData.classList.number+listData.helpList.number+listData.userList.number}}</span>条与<span class="number">{{keyWord}}</span>相关的结果</div>
        <div class="tab" ><search-result-tab  @ItemClick = "TabClick"></search-result-tab></div>
        <div class="list"><search-result-list @sortChange = "SortChange" :data="listData" :index="listTabIndex"></search-result-list></div>
      </el-col>
        <el-col :span="6" class="recommond">
        <recommand-class :flag="listTabIndex" :questions="recommendQuestions" :classes="recommandClasses"></recommand-class>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
import {backTop} from '../../utils/scrollUtils'
import {ClassSearch, ClassSort, QuestionSearch, QuestionSort, UserSearch} from '../../network/search';
import SearchResultNavBar from './childComponents/SearchResultNavBar.vue';
import SearchResultTab from './childComponents/SearchResultTab.vue';
import SearchResultList from './childComponents/SearchResultList.vue';
import RecommandClass from './childComponents/RecommandClass.vue';
import HeaderBack from '../../components/contant/back/HeaderBack.vue'
import {recommendClass, recommendQuestion} from "../../network/classDetail";

export default {
  name: "SearchResult",
  data() {
    return {
      classSort:0,
      keyWord:"",
      listTabIndex: 0,
      navBarData: {
        username:"测试用户名",
        userImg:"admin.jpg"
      },
      listData: {
        classList: {
        number: 5,
        page:1,
        list:[
          ]
        },
        helpList: {
          number:30,
          page:1,
          list:[]
        },
        userList: {
          number:30,
          page:1,
          list:[
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"/img/image/gg.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
            {
            id:"15",
            domain:"IT",
            username:"泡泡老师",
            intro:"CF十年老枪战游戏，实现3亿电竞人的枪战王者梦，做梦一般是大脑在睡眠时兴奋的体现。服务无数喜欢IT年轻人",
            img:"https://edu-image.nosdn.127.net/4b9cd4995f6b41089aae13621c32d867.jpg",
            },
          ]
        }
      } ,
      recommandClasses: [
      ],
      recommendQuestions:[],
      categoryId:null
      }
  },
  components: {
    SearchResultNavBar,
    SearchResultTab,
    SearchResultList,
    RecommandClass,
    HeaderBack
  },
  methods: {
    getRecommendClass(){
      recommendClass().then((res)=>{
        console.log(res);
        this.recommandClasses = res.data.classVos;
      })
    },
    getRecommendQuestion(){
      recommendQuestion().then((res)=>{
        this.recommendQuestions = res.data.questionVos;
      })
    },
    TabClick(index) {
      if(index === 1){
        this.GetQuestion();
      }
      else if(index === 2){
        this.GetUsers();
      }
      this.listTabIndex = index;
    },
    UpData(){
      this.keyWord = this.$route.query.keyword;
      this.categoryId = this.$route.query.categoryId;
      this.GetClass();
      this.GetQuestion();
      this.GetUsers();
    },
    GetQuestion(){
      if(this.keyWord === undefined){
        this.keyWord = "";
      }
      if(this.categoryId === undefined){
        this.categoryId = null;
      }
      QuestionSearch(this.keyWord,this.categoryId,this.listData.helpList.page).then((res)=>{
        console.log(res.data);
        let classInfos = res.data.questions;
        let userInfos = res.data.userInfos;
        let imgs = res.data.imgPath;
        this.listData.helpList.number = res.data.resultNum;
        this.listData.helpList.list = new Array();
        for(let i = 0;i<classInfos.length;i++){
          let obj = {
            id : classInfos[i].id,
            img : imgs[i],
            title : classInfos[i].title,
            intro : classInfos[i].textIntro,
            price : classInfos[i].price,
            time : classInfos[i].suggestTime,
            teacherName : userInfos[i].username,
          }
          this.listData.helpList.list.push(obj);
        }
      })
    },
    GetUsers(){
      if(this.keyWord === undefined){
        this.keyWord = "";
      }
      if(this.categoryId === undefined){
        this.categoryId = null;
      }
      UserSearch(this.keyWord,this.categoryId,this.listData.userList.page).then((res)=>{
        let userInfos = res.data.userInfos;
        this.listData.userList.number = res.data.resultNum;
        this.listData.userList.list = new Array();
        for(let i = 0;i<userInfos.length;i++){
          let obj = {
            id : userInfos[i].id,
            gender: userInfos[i].gender,
            selfIntro : userInfos[i].selfIntro,
            userImg:userInfos[i].userImg,
            domainText:userInfos[i].domainText,
            username : userInfos[i].username,
          }
          this.listData.userList.list.push(obj);
        }
      })
    },
    GetClass(){
      if(this.keyWord === undefined){
        this.keyWord = "";
      }
      if(this.categoryId === undefined){
        this.categoryId = null;
      }
      ClassSearch(this.keyWord,this.categoryId,this.listData.classList.page).then((res)=>{
      let classInfos = res.data.classInfos;
      let userInfos = res.data.userInfos;
      let imgs = res.data.imgPath;
     this.listData.classList.number = res.data.resultNum;
     this.listData.classList.list = new Array();
      for(let i = 0;i<classInfos.length;i++){
        let obj = {
            id : classInfos[i].id,
            img : imgs[i],
            title : classInfos[i].title,
            intro : classInfos[i].textIntro,
            price : classInfos[i].price,
            time : classInfos[i].suggestTime,
            teacherName : userInfos[i].username,
            score : classInfos[i].score,
        }
      this.listData.classList.list.push(obj);
      }      
    })
    },
    SortClassByVal(){
      //val : 1: 价格升序  3.时间升序
      if(this.keyWord === undefined){
        this.keyWord = "";
      }
      if(this.categoryId === undefined){
        this.categoryId = null;
      }
      ClassSort(this.classSort,this.keyWord,this.categoryId,this.listData.classList.page).then((res)=>{
      let classInfos = res.data.classInfos;
      let userInfos = res.data.userInfos;
      let imgs = res.data.imgPath;
     this.listData.classList.number = res.data.resultNum;
     this.listData.classList.list = new Array();
      for(let i = 0;i<classInfos.length;i++){
        let obj = {
            id : classInfos[i].id,
            img : imgs[i],
            title : classInfos[i].title,
            intro : classInfos[i].textIntro,
            price : classInfos[i].price,
            time : classInfos[i].suggestTime,
            teacherName : userInfos[i].username,
            score : classInfos[i].score,
        }
        if(obj.img === "no picture") obj.img ="ClassDefault.jpeg";
      this.listData.classList.list.push(obj);
      }      
    })
    },
    SortQuestionByVal(){
      //val : 1: 价格升序  3.时间升序
      if(this.keyWord === undefined){
        this.keyWord = "";
      }
      if(this.categoryId === undefined){
        this.categoryId = null;
      }
      QuestionSort(this.classSort,this.keyWord,this.categoryId,this.listData.classList.page).then((res)=>{
        let classInfos = res.data.questions;
        let userInfos = res.data.userInfos;
        let imgs = res.data.imgPath;
        this.listData.helpList.number = res.data.resultNum;
        this.listData.helpList.list = new Array();
        for(let i = 0;i<classInfos.length;i++){
          let obj = {
            id : classInfos[i].id,
            img : imgs[i],
            title : classInfos[i].title,
            intro : classInfos[i].textIntro,
            price : classInfos[i].price,
            time : classInfos[i].suggestTime,
            teacherName : userInfos[i].username,
            score : 3.9,
          }
          this.listData.helpList.list.push(obj);
        }
      })
    },
    SortChange(val){
      this.classSort = val;
      this.listData.classList.page = 1;
     if(val === 0){
       this.GetClass();
     }
     else{
       if(this.listTabIndex === 0){
         this.SortClassByVal()
       }
       else if(this.listTabIndex === 1){
         this.SortQuestionByVal();
       }
     }
    }
  },
  created() {
    this.UpData();
    this.getRecommendClass();
    this.getRecommendQuestion();
  },
  computed:{
    getClassPage(){
      return this.listData.classList.page;
    }
  },
  watch: {
    $route: {
          handler() {
              this.UpData();
              //深度监听，同时也可监听到param参数变化
        },
        deep: true,
    },
    'listData.classList.page':{
      handler: function(val,oldval){
        if(this.classSort == 0){
           this.GetClass();
        }
        else{
          this.SortClassByVal()
        }
        backTop();
      },
      deep:true
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

.bar {
  margin-top: 10px;
}


.list-number {
  height: 89px;
  line-height: 89px;
  font-size: var(--font-size);
}

.number {
  color: var(--color-high-text);
}



</style>