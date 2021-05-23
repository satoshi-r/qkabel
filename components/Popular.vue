<template>
  <section class="popular">
    <h2>Популярные кабели</h2>

    <div class="popular-wrap">
      <masonry :cols="{default: 3, 1480: 2}" :gutter="{default: 24, 1480: 16}">
        <div class="popular-protect" v-for="(item, idx) in popular" :key="idx">
          <div class="popular-section">
            <div class="section-title">{{ item.title }}</div>

            <div class="section-group">
              <nuxt-link v-for="(elem, i) in item.elems" :key="i" :to="{name: `store-id`, params: {id: elem.title, title: elem.title} }" class="btn-stroke">{{ elem.title }}</nuxt-link>
            </div>
          </div>
        </div>
        
      </masonry>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    const data = await fetch('http://localhost:3000/api/popular');
    this.popular = await data.json();
  },

  data() {
    return {
      popular: []
    }
  }
}
</script>