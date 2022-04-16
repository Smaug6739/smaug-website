<template>
  <div class="project">
    <div class="project__header">
      <img :src="project.image" alt="Project icon" />
      <div class="project__header-title">
        <p class="date">{{ project.date }}</p>
        <h3>{{ project.name }}</h3>
      </div>
    </div>

    <div class="project__content">
      <div class="project__content-description">
        <p>{{ project.description }}</p>
      </div>
    </div>
    <hr />

    <div class="project__footer">Footer</div>
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
  text-align: left;
}
.project__header {
  display: flex;
  align-items: center;
  padding: 8px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    margin-right: 10px;
  }

  .date {
    font-size: 0.8rem;
    color: $secondary;
  }
}
.project__content {
  .project__content-description {
    padding: 5px;
    text-align: left;
    color: $secondary;
  }
}
hr {
  margin-top: 5px;
  margin-bottom: 5px;
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
