<template>
   <div class="recommand">
    <div class="title">
      <span class="one" v-show="!changePage">优秀课程推荐</span>
      <span class="one" v-show="changePage">优秀提问推荐</span>
    </div>
    <div class="choose">
      <span class="two">以下根据你的学习兴趣推荐:</span>
      <span class="three">{{this.$store.state.userData.domainText}}</span>
    </div>
    <div class="contant">
      <class-card v-show="!changePage" class="item" v-for="item in classes" :data='item'></class-card>
      <question-card v-show="changePage" class="item" v-for="item in questions" :data='item'></question-card>
    </div>
  </div>

</template>

<script>
import ClassCard from 'components/contant/class/ClassCard.vue';
import QuestionCard from "../../../components/contant/question/questionCard";
export default {
  name: "RecommandClass",
  data(){
    return{
      flag:0,
    }
  },
  computed:{
    changePage(){
      console.log(this.flag);
      if(this.flag === 1){
        return true;
      }
      else {
        return false;
      }
    }
  },
  props:{
      classes: null,
      questions: null,
    },
  components: {
    ClassCard,
    QuestionCard
  }

}
</script>

<style scoped>
.recommand {
  margin-top: 45px;
  width: 100%;
}


 .one{
  display: block;
  color: #000;
  font-size: var(--font-size-very-big);
  font-weight:normal;
  letter-spacing: 2px;
}

.choose {
  height: 60px;
  margin-top: 30px;
  background-color: var(--color-background-one);
  line-height: 60px;
}

.two{
  color: #000;
  font-size: var(--font-size-big);
  font-weight:normal;
  letter-spacing: 2px;

}

.three {
  margin-left: 40px;
  font-size: var(--font-size);
  color: var(--color-high-text);
}

.contant {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.item {
  width: 30%;
  margin-top: 30px;
}
</style>