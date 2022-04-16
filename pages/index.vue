<template>
  <div>
    <h1>Hi ! I'm Smaug 👋</h1>
    <br />
    <h2>
      Full-stack <span class="linear-gradient">Developer</span> & <br />
      <span class="linear-gradient-inverse">Software </span>Developer
    </h2>
    <div>
      <hr class="sep" />
      <Projects />
      <hr class="sep" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 3.3rem;
}
</style>
<script>
import Projects from "@/components/projects.component.vue";
export default {
  name: "Home",
  components: {
    Projects,
  },
};
</script>
