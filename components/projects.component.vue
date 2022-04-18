<template>
  <div class="projects">
    <hr class="sep" />
    <!-- <img src="/images/bg_gradient.svg" class="bg_gradient" /> -->
    <div class="line">
      <Project
        v-for="item of projects"
        :key="item.name"
        class="block"
        :project="item"
      />
      <div class="infos block">
        <h3>Personal experiences</h3>
        <p>
          I try to share my creations as much as possible to help people who may
          need it. <br />
          99% of my projects are open source ❤️
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme-variables.scss";

.projects {
  display: flex;
  flex-direction: column;
}
.line {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.infos {
  width: 25%;
  padding: 15px;
  text-align: right;
  color: $font-text;
  font-family: inherit;
  line-height: 1.6;
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

.block {
  width: 25%;
  margin: 25px;
  min-width: 400px;
  align-self: stretch;
}
@media (max-width: 450px) {
  .block {
    min-width: 300px;
  }
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
          date: "January 2022 to Now",
          image: "/images/eodomius.png",
          description:
            "Eodomius is an open-source instant-chat with web client and application with Qt (C++) built with a micro-service architecture.",
          link: "https://github.com/Eodomius",
          badges: ["javascript", "typescript", "go", "cpp", "git"],
        },
        {
          name: "Sheweny framework",
          date: "August 2021 to Now",
          image: "/images/sheweny.png",
          description:
            "Sheweny is a powerful framework to create discord bot with discord.js in Javascript or Typescript. It's a modular and easy to use.",
          link: "https://github.com/Sheweny/framework",
          badges: ["javascript", "typescript", "nodejs", "git"],
        },
        {
          name: "Werewolf-bot",
          date: "May 2022 to Now",
          image: "/images/werewolf-bot.png",
          description:
            "Werewolf bot is a french discord bot to play werewolf games with new discord features (emojis, embeds, buttons, select-menus...)",
          link: "https://github.com/Smaug6739/Werewolf-bot",
          badges: ["javascript", "typescript", "nodejs", "git"],
        },
        {
          name: "Smaug website",
          date: "April 16 2022 to Now",
          image: "/images/smaug-website.png",
          description:
            "My personal website where you can find my projects.<br />Website build with Nuxt.js & Vue.js.",
          link: "https://github.com/smaug-website",
          badges: ["html", "css", "javascript", "vuejs", "nuxt", "git"],
        },
        {
          name: "Go router",
          date: "March 2022 to Now",
          image: "/images/go-router.png",
          description:
            "This project is a simple router written in go.<br />The router use regular expression to match the url and call the right function.",
          link: "https://github.com/Eodomius/router",
          badges: ["go", "git"],
        },
      ],
    };
  },
};
</script>
