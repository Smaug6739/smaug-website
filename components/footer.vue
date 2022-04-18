<template>
  <footer>
    <hr />
    <div>
      <p>smaug-6739.dev</p>
      <p>Developed and designed by Smaug with ❤️</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables";
footer {
  margin-top: 5rem;
  margin-bottom: 2rem;
}
div {
  display: flex;
  justify-content: space-between;
  color: $font-text;
}
</style>
<script>
export default {
  name: "Footer",
};
</script>
