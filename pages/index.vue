<template>
  <div>
    <div>
      <h5 class="text-center text-red-500 md:text-lg">Products</h5>
      <FilterProducts @set-filters="load($event)" />
      <div class="absolute md:grid grid-cols-4 left-12 top-12 m-6 p-6">
        <Pages
          @handleClick="handleClick"
          @handleClickTwo="handleClickTwo"
          @handleClickThree="handleClickThree"
        />
        <Product
          v-for="product in products"
          :id="product.id"
          :key="product.id"
          :name="product.name"
          :img="product.image"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Product from '../components/Product'
import Pages from '../components/Pages'
import FilterProducts from '../components/FilterProducts'

export default {
  components: {
    Product,
    Pages,
    FilterProducts,
  },
  data() {
    return {
      products: [],
      text: '',
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
  methods: {
    async handleClick() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      try {
        const res = await axios.get(
          `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=1`,
          config
        )
        this.products = res.data.data
      } catch (err) {
        console.log(err)
      }
    },
    async handleClickTwo() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      try {
        const res = await axios.get(
          `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=2`,
          config
        )
        this.products = res.data.data
      } catch (err) {
        console.log(err)
      }
    },
    async handleClickThree() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      try {
        const res = await axios.get(
          `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=3`,
          config
        )
        this.products = res.data.data
      } catch (err) {
        console.log(err)
      }
    },
    load(text) {
      const filtered = this.products.filter((product) => {
        product.name.includes(text)
        return (this.products = filtered)
      })
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
/* * {
  margin: 0;
  padding: 0;
} */

.container {
  /* margin: 0 auto; */
  /* margin-right: 1em;
  margin: 0;
  padding: 0;
  gap: 0;
  display: flex;
  flex-flow: row wrap; */
  /* min-height: 100vh; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  /* width: 40%; */
  /* grid-template-columns: repeat(4, 12fr); */
}
/* .title {
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
} */
</style>
