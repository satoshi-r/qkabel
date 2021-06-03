<template>
  <h1>{{ this.$route.params.slug }}</h1>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },

  async fetch() {
    const data = await fetch(
      `http://localhost:3000/api/products?id=${this.$route.params.id}&group_id=${this.$route.params.group}`
    );
    this.products = await data.json();
    console.log(this.products);
  }
}
</script>
