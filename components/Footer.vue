<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-copyright">
        &copy;
        {{ year }}
        QKabel
      </div>
      <a href="" class="footer-policy">Политика конфиденциальности</a>
      <a href="http://vozduh.rocks" target="blank" class="footer-developers"
        >сделано в воздухе</a
      >
    </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>