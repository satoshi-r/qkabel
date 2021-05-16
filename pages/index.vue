<template>
  <div class="page main-page">
    <div class="substrate"></div>
    <div class="container">
      <Catalog />
      <Popular />
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/Catalog";
import Popular from "@/components/Popular";

export default {
  components: {
    Catalog,
    Popular,
  },
};
</script>
