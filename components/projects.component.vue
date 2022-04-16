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
  align-items: stretch;
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
          name: "Eodomius chat",
          date: "January 2022 to now",
          image: "/images/eodomius.png",
          description:
            "Eodomius is an open-source instant-chat with web client and application with Qt (C++) built with a micro-service architecture.",
          link: "https://github.com/Eodomius",
        },
        {
          name: "Sheweny framework",
          date: "August 2021 to now",
          image: "/images/sheweny.png",
          description:
            "Sheweny is a powerful framework to create discord bot with discord.js in Javascript or Typescript. It's a modular and easy to use.",
          link: "https://github.com/Sheweny/framework",
        },
        {
          name: "Werewolf-bot",
          date: "May 2022 to now",
          image: "/images/werewolf-bot.png",
          description:
            "Werewolf bot is a french discord bot to play werewolf games with new discord features (emojis, embeds, buttons, select-menus...)",
          link: "https://github.com/Smaug6739/Werewolf-bot",
        },
      ],
    };
  },
};
</script>
