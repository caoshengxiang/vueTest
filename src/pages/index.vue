<template>
  <div>
    {{user}}
  </div>
</template>
<script>

  export default {
    name: '',
    props: {},
    data() {
      return {
        user: {
          name: 'allen',
          id: '985456caa',
          age: 18,
          like: ['read', 'run', 'play', 'code']
        }
      }
    },
    computed: {},
    computed: {},
    methods: {

    },
    components: {},
    beforeCreate(){
    },
    created() {
      // localStorage
      if (window.localStorage) {
        let user = JSON.stringify(this.user);
        localStorage.user = user; // 不能赋值一个对象
      }

      // indexedDB
//        require('../util/indexDB')
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    activated() {
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    }
  }
</script>
<style>
</style>
