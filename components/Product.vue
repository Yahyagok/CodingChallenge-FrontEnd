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
/* .container-1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40%;
  padding: 10px;
} */
* {
  margin: 0;
  padding: 0;
}
.container-1 img {
  gap: 0;
  flex: 250px;
  width: 150px;
  height: 100px;
}
</style>
