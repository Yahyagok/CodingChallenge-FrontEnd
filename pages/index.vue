<template>
  <div class="container">
    <Product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :img="product.image"
      :price="product.price"
      :id="product.id"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Product from '../components/Product'

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    }
  },

  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(
        'https://trayvonnorthern.com/Edgewood-API/public/api/products',
        config
      )
      this.products = res.data.data
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
} */

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
