<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="menu">
      <span @click="goHomeFun">index</span>
      <router-link to="/test">测试</router-link>
      <router-link :to="{path: '/event_bus'}">eventbus</router-link>
      <router-link :to="{name: 'vuexTest'}">vuex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goHomeFun() {
        this.$router.push('/');
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .menu {
    float: left;
  }
  .menu span{
    margin: 10px;
    cursor: pointer;
  }
</style>
