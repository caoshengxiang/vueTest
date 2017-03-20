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
    methods: {
      getData() {
        var xml = new XMLHttpRequest();
        xml.open('get', 'http://localhost:3000/user', true)
        xml.send()
        xml.onreadystatechange =function () {
          if (xml.readyState == 4 && xml.status == 200) {
            alert()
//            document.getElementById('app').innerHTML = xml.responseText;
            console.log(xml.responseText, '请求数据')
          } else {
            alert('err')
          }
        }
      }
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

      this.getData()

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
