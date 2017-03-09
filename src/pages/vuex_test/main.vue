<template>
    <div>
        {{count}}
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
//                count: 0,
                count: this.$store.state.count,
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
