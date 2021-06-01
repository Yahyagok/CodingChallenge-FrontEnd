<template>
  <h1 class="number" v-on:clickPage1="clickPage1">1</h1>
</template>

<script>
export default {
  name: 'Page1',

  methods: {
    handleClick() {
      this.$emit('clickPage1', this.1)
    },
  },
}
</script>

<style scoped>
.number {
  position: block;
  top: 20px;
}
</style>
