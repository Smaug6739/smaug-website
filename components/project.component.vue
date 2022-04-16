<template>
  <div class="project">
    <div class="project__header">
      <div>
        <img :src="project.image" alt="Project icon" />
      </div>
      <div class="project__header-title">
        <p class="date">{{ project.date }}</p>
        <h3>{{ project.name }}</h3>
      </div>
    </div>
    <hr />

    <div class="project__content">
      <div class="project__content-description">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme-variables.scss";
.project {
  display: flex;
  flex-direction: column;
  width: 25%;
  border-radius: 3%;
  background-color: $dark;
  padding: 5px;
}
.project__header {
  display: flex;
  align-items: center;
  padding: 8px;
  text-align: left;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    margin-right: 10px;
  }

  .date {
    font-size: 0.8rem;
    color: $light;
  }
}
.project__content {
  .project__content-description {
    padding: 5px;
    text-align: left;
  }
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
