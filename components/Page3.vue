<template>
  <h2 class="number" @click="handleClickThree">3</h2>
</template>

<script>
export default {
  name: 'Page3',

  methods: {
    handleClickThree() {
      this.$emit('handleClickThree')
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
