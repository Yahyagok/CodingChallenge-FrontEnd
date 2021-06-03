<template>
  <div class="container">
    <Page1 v-on:handleClick="handleClick" />
    <Page2 v-on:handleClickTwo="handleClickTwo" />
    <Page3 v-on:handleClickThree="handleClickThree" />
    <h5>Products</h5>
    <Product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :img="product.image"
      :id="product.id"
      :price="product.price"
    />
    <Pages />
  </div>
</template>

<script>
import axios from 'axios'
import Product from '../components/Product'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'

export default {
  components: {
    Product,
    Page1,
    Page2,
    Page3,
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
        console.log(res.data)
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
        console.log(res.data)
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
        console.log(res.data)
        this.products = res.data.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
* {
  margin: 0;
  padding: 0;
}

.container {
  /* margin: 0 auto; */
  margin-right: 1em;
  margin: 0;
  padding: 0;
  gap: 0;
  display: flex;
  flex-flow: row wrap;
  /* min-height: 100vh; */
  justify-content: center;
  /* align-items: center; */
  /* text-align: center; */
  /* width: 40%; */
  grid-template-columns: repeat(4, 12fr);
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
