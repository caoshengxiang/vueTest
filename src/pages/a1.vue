<template>
   <div>
       a1
   </div>
</template>
<script>
    export default {
        name: 'A1',
        props: {
            pa1: {
                default: [],
                type: Array
            }
        },
        created() {
            this.$emit("emit-a1", 1)
        }
    }
</script>
<style>
</style>