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
        <p v-html="project.description"></p>
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
  border-radius: 3%;
  background-color: $dark-dimmed-1;
  padding: 15px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  // Selection
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.project:hover {
  cursor: pointer;
}
.project__header {
  display: flex;
  align-items: center;
  padding: 8px;
  img {
    width: 50px;
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
  margin-top: 2px;
  .project__content-description {
    padding: 5px;
    text-align: justify;
    word-break: break-all; // remove the white space between words
    color: $font-text;
  }
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
