<template>
  <div>
    a2
    <br>
    <a3></a3>
  </div>
</template>
<script>
  import bus from '../../bus/bus'
  import a3 from './a3.vue'
  export default {
    name: 'A2',
    components: {
      a3,
    },
    created() {
      bus.$on('eventBus', (id) => {
        alert(id);
      })
    }
  }
</script>
<style>
</style>
