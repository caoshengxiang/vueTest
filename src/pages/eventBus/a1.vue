<template>
  <div>
    a1
    <button @click="click">a1 btn</button>
  </div>
</template>
<script>
  import bus from '../../bus/bus'
  export default {
    name: 'A1',
    props: {

    },
    created() {

    },
    methods: {
      click() {
        bus.$emit('eventBus', 'emit event bus at a2.vue');
        bus.$emit('eventBus2', 'emit event bus at a3.vue');
      }
    }
  }
</script>
<style>
</style>
