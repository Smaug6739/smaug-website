<template>
  <div>
    <Navbar />
    <div class="page">
      <NuxtPage />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page {
  max-width: 1800px;
  width: 90%;
  height: 100vh;
  margin: auto;
}
</style>
<script>
export default {
  name: "App",
};
</script>
