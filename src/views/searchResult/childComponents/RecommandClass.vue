<template>
   <div class="recommand">
    <div class="title">
      <span class="one">课程推荐</span>
    </div>
    <div class="contant">
      <class-card v-if="showFlag" class="item" v-for="item in classes" :data='item'></class-card>
      <question-card v-if="!showFlag" class="item"  v-for="item in questions" :data='item'></question-card>
    </div>
     <p @click="nextCommend">换一批</p>
  </div>

</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
import QuestionCard from "../../../components/contant/question/questionCard";
import {recommendClass, recommendQuestion} from "../../../network/classDetail";
export default {
  name: "RecommandClass",
  props:{
    classes: null,
    questions: null,
    flag:0
    },
  components: {
    ClassCard,
    QuestionCard
  },
  computed:{
    showFlag(){
      console.log(this.classes);
      if(this.flag === 0){
        return true;
      }
      else{
        return false;
      }
    }
  },
  methods:{
    nextCommend(){
      if(this.flag === 0){
        recommendClass().then((res=>{
          this.classes = res.data.classVos;
        }))

      }
      else if(this.flag === 1){
        recommendQuestion().then((res)=>{
          this.questions = res.data.questionVos;
        })
      }
    }
  }

}
</script>

<style scoped>
.recommand {
  width: 90%;
  margin: 30px 0;
  margin-left: 10%;
  
}

.title {
   text-align: center;
}
.one{
  display: block;
  color: #000;
  font-size: var(--font-size-very-big);
  font-weight:normal;
  letter-spacing: 2px;
}

.contant {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  
}

.item {
  margin-top: 30px;
}
</style>