<template>
  <div>
    <div class="projects" v-for="item of projects" :key="item.name">
      <Project :data="item" />
    </div>
  </div>
</template>
<script>
import Project from "@/components/project.component.vue";

export default {
  name: "Projects",
  component: true,
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          name: "Project 1",
          description: "This is the first project",
          link: "",
        },
        {
          name: "Project 2",
          description: "This is the second project",
          link: "",
        },
        {
          name: "Project 3",
          description: "This is the third project",
          link: "",
        },
      ],
    };
  },
};
</script>
