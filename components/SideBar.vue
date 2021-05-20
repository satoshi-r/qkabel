<template>
  <div class="sidebar">
    <img v-for="image of images" :key="image" :src="image" alt="img">
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: false
    }
  }
}
</script>
