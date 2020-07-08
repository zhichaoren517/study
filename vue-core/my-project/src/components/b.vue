<template>
  <div>
      bc
  </div>
</template>

<script>

export default {
  beforeCreate() {
    console.log('beforeCreate-bc')
  },
  created() {
    console.log('created-bc')
  },
  beforeMount() {
    console.log('beforeMount-bc')
  },
  mounted() {
    console.log('mounted-bc')
  },
}
</script>

<style>
</style>
