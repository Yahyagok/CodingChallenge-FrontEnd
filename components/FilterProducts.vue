<template>
  <input
    placeholder="Search Products..."
    class="w-2/4 h-8 px-4 inline-block text-lg text-gray-700"
    type="search"
    @keyup="search($event.target.value)"
  />
</template>

<script>
export default {
  name: 'FilterProducts',
  methods: {
    search(text) {
      this.$emit('set-filters', text)
    },
  },
}
</script>
