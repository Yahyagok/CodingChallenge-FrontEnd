<template>
  <div>
    <div class="p-2">
      <img :src="img" class="w-80 h-80 d-80" />
      <div class="object-bottom bg-black text-white text-center">
        {{ name }}
      </div>
      <div class="object-bottom bg-black text-white text-center">
        ${{ price }}.00
      </div>
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
/* * {
  margin: 0;
  padding: 0;
}
.container-1 img {
  gap: 0;
  flex: 250px;
  width: 150px;
  height: 100px;
} */
</style>
