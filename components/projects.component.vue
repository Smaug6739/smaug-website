<template>
  <div class="projects">
    <Project
      v-for="item of projects"
      :key="item.name"
      class="pjs"
      :project="item"
    />
  </div>
</template>
<style lang="scss" scoped>
// .projects {
//   display: block;
//   width: 80%;
//   height: 100%;
// }
.projects {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch !important;
}
.pjs {
  align-self: stretch;
}
</style>
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
          description:
            "This is the second project<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description<br>It's a long description",
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
