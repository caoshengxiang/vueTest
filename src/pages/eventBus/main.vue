<template>
  <div>
    <h1>event bus</h1>
    <div>
      <div class="a1">
        <a1></a1>
      </div>
      <div class="a2">
        <a2></a2>
      </div>
    </div>
  </div>
</template>
<script>
  import a1 from './a1.vue'
  import a2 from './a2.vue'
  export default {
    name: 'main',
    props: {},
    data() {
      return {}
    },
    components: {
      a1,
      a2,
    },
    created() {

    },
    methods: {}
  }
</script>
<style>
  .a1 {
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
  }

  .a2 {
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
  }
</style>
