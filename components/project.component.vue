<template>
  <div class="project" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
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

    <div class="project__footer">
      <Badge
        v-for="badge of project.badges"
        :key="badge"
        :name="badge"
        :parentMouse="over"
      />
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
  background-color: $dark-dimmed-1;
  padding: 15px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif !important;
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
  .project__header-title {
    padding: 5px;
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
    color: $font-text;
  }
}
hr {
  margin-top: 15px;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #f7b500, #b620e0, #32c5ff);
  height: 1px;
  border: none;
}
.project__footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
}
</style>
<script>
import Badge from "@/components/badge.component.vue";
export default {
  name: "Project",
  component: true,
  components: {
    Badge,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      over: false,
    };
  },
  methods: {
    mouseEnter() {
      this.over = true;
    },
    mouseLeave() {
      this.over = false;
    },
  },
};
</script>
