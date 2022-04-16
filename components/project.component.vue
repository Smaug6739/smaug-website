<template>
  <div class="project">
    <div class="project__header">
      <div class="project__header-title">
        <h1>{{ project.name }}</h1>
      </div>
      <div class="project__header-description">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme-variables.scss";
.project {
  display: block;
  width: 20%;
  background-color: $dark;
}
</style>
<script>
export default {
  name: "Project",
  component: true,
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
