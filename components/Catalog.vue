<template>
  <section class="catalog-main">
    <h1>каталог кабеля</h1>

    <ul class="catalog-list">
      <li v-for="(item, idx) in catalog" :key="idx" class="catalog-item">
        <!-- <nuxt-link :to="{name: `store-id`, params: {id: item.id, title: item.title} }">{{item.title}}</nuxt-link> -->
        <a href="#" @click.prevent="openGroup(item)">{{ item.title }}</a>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  async fetch() {
    const data = await fetch("http://localhost:3000/api/catalog");
    this.catalog = await data.json();
    this.catalog.sort((prev, next) => prev.id - next.id);
  },

  data() {
    return {
      catalog: []
    };
  },

  methods: {
    openGroup({ link }) {
      this.$router.push({ name: `store-groups`, params: { groups: link.replace("/store/", "").slice(0, -1) } });
    }
  }
};
</script>
