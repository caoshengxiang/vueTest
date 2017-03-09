<template>
  <div>
    a3 {{show}}
  </div>
</template>
<script>
  import bus from '../../bus/bus'
  export default {
    name: "a3",
    data() {
      return {
        show: 'pre',
      }
    },
    created() {
        var self = this;
      bus.$on('eventBus2', (id) => {
          self.show = id;
      })
    }
  }
</script>
<style>
</style>
