<template>
  <div class="loading">
    <div
      v-for="(item, idx) in loaderItems"
      :key="idx"
      class="loading-item"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaderItems: [],
    };
  },

  mounted() {
    const count = parseInt((document.body.clientHeight - 344) / (48 + 4));
    this.loaderItems = Array(count).fill();
  },
};
</script>
