<template>
  <footer>
    <hr />
    <div>
      <p class="p1">smaug-6739.dev</p>
      <p class="p2">Developed and designed by Smaug with ❤️</p>
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
.p1 {
  max-width: 40%;
}
.p2 {
  max-width: 60%;
}

@media (max-width: 48em) {
  .p1 {
    display: none;
  }
  .p2 {
    max-width: 100%;
  }
}
</style>
<script>
export default {
  name: "Footer",
};
</script>
