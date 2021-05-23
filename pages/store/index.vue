<template>
  <div class="catalog">
    <div class="content-items container">
      <h1 class="content-title">Каталог</h1>
    </div>
    <div class="main-wrapper">
      <div class="content-main-container">
        <div class="catalog-main">
          <ul class="catalog-list">
            <li v-for="(item, idx) in catalog" :key="idx" class="catalog-item">
              <a href="" @click.prevent="openGroup(item)">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: []
    }
  },
  async fetch() {
    const data = await fetch("http://localhost:3000/api/catalog");
    this.catalog = await data.json();
  },
  methods: {
    openGroup({title, link}) {
      this.$router.params.push(title);
      this.$router.push("/" + link);
    },
  },
};
</script>

<style></style>
