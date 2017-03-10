<template>
  <div>
    <div>{{count}}</div>
    <div>{{getCount}}</div>
    <div>
      <button @click="addCount">add</button>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'main',
    props: {},
    data() {
      return {
        count: this.$store.state.count,
      }
    },
    computed: {
      getCount() {
        return this.$store.getters.updateCount || -1;
      }
    },
    components: {},
    created() {

    },
    methods: {
      addCount() {
        this.$store.commit('add_vuex_test');
        this.count = this.$store.state.count;
      }
    }
  }
</script>
<style>
</style>
