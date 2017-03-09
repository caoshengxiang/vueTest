<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>


    <div v-demo="{a: 1}"></div>
      <button @click="click(123)">123</button>

      <a1 :pa1='a1' v-on:emit-a1="emitData"></a1>
      <a2></a2>
  </div>
</template>

<script>
//  import myMixin from '../util/mixin'
import a1 from '../pages/a1.vue'
import a2 from '../pages/a2.vue'
export default {
  name: 'hello',
//    mixins: [myMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        a1: [1,2],
        emitA1: 0,
    }
  },
    components: {
      a1,
      a2,
    },
    mounted() {
//      this.globalMethod();
       this.$myMethod();
    },
    methods: {
       click(n) {
           alert(n)
        },
        emitData(data) {
           this.emitA1 = data;
        }
    }
}
</script>
<!--  -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
