<template>
  <div>
    {{ x }}
  </div>
</template>

<script>
export default {
  props: ["x"],
  computed: {
    y: function() {
      return 2 * this.x;
    },
    z: function() {
      console.log("z");
      return this.x + this.y;
    },
  },
  watch: {
    y: function() {
      console.log(this.y, "y");
    },
    z: function() {
      console.log(this.z, "z");
    },
  },
  data() {
    return {};
  },
  updated() {
    console.log(this.z);
  },
  beforeCreate() {
    console.log("beforeCreate-ac");
  },
  created() {
    console.log("created-ac");
  },
  beforeMount() {
    console.log("beforeMount-ac");
  },
  mounted() {
    console.log("mounted-ac");
  },
};
</script>

<style></style>
