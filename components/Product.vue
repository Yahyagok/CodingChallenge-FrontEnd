<template>
  <div class="item">
    <img :src="img" />
    <p>Name: {{ name }}</p>
    <p>Price: {{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['name', 'img', 'price'],
}
</script>

<style>
.item {
  flex: none;
}
</style>
