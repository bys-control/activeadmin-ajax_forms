<template>
  <div>tester inside component </div>
</template>

<script>
export default {
  props: ['concatString'],
  methods: {
    handleClick() {
      console.log("click image!")
    }
  }
}
</script>

<style scoped>
div{
  background-color: red;
  padding: 10px;
}
</style>