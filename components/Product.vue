<template>
  <div class="container-1">
    <div class="box">
      <img :src="img" />
      <div>{{ name }}</div>
      <div>${{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['name', 'img', 'price'],
}
</script>

<style>
.container-1 {
  display: flex;
  width: 40%;
  grid-template-columns: repeat(4, 50px 1fr) 100px;
  justify-content: flex-start;
  padding: 10px;
}
.container-1 img {
  width: 200px;
  height: 200px;
}
</style>
