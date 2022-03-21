<template>
  <div class="home-tab">
    <div class="item"><span :class="{'active':isShow}" @click="changePage(0)">首页</span></div>
    <div class="item"><span :class="{'active':!isShow}" @click="changePage(1)">求助区</span></div>
  </div>
</template>

<script>

export default {
  name: 'HomeTab',
  components: {

  },
  data(){
    return{
      display:true
    }
  },
  computed:{
    isShow(){
      return this.display;
    }
  },
  methods:{
    changePage(value){
      if(value === 1){
        this.display = false;
      }
      else{
        this.display = true;
      }
      this.$emit("changePage",value);
    }
  }
}
</script>

<style scoped>
.home-tab {
  display: flex;
  margin-top: 20px;
  width: 250px;
  height: 44px;
  line-height: 44px;
  text-align: left;
  font-size: var(--font-size-big);
  color: black;
}

.item {
  flex:1;
}

.active {
  display: inline-block;
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
  font-weight: 650;
}






</style>