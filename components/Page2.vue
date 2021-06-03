<template>
  <h2 class="number" @click="handleClickTwo">2</h2>
</template>

<script>
export default {
  name: 'Page2',

  methods: {
    handleClickTwo() {
      this.$emit('handleClickTwo')
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
