<template>
  <span class="bg">
    <img
      v-bind:src="'/icons/' + name + '-icon.svg'"
      class="icon"
      @mouseenter="show"
      @mouseleave="hide"
    />
    <div class="bubble">
      <span class="bubble-text" ref="bg">Javascript</span>
    </div>
  </span>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables.scss";
.bg {
  position: relative;
}
.icon {
  width: 30px;
  height: 30px;
  opacity: 0.5;
}

.bubble-text {
  opacity: 0;
  font-weight: 200 !important;
  font-size: 1rem;
  position: absolute;
  background: $dark-dimmed-2;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0.7rem;
}
.view {
  transition: opacity 0.5s;
  opacity: 1;
}

.bubble-text::after {
  content: "";
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid $dark-dimmed-2;
  position: absolute;
  top: -10px;
  left: 6px;
}
</style>

<script>
export default {
  name: "Badge",
  component: true,
  data() {
    return {
      over: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    show() {
      this.$refs.bg.classList.add("view");
    },
    hide() {
      this.$refs.bg.classList.remove("view");
    },
  },
};
</script>
