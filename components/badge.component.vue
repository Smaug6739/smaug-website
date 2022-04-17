<template ref="badge">
  <span class="bg">
    <img
      v-bind:src="'/icons/' + name + '-icon.svg'"
      class="icon"
      ref="bgImage"
      @mouseenter="show"
      @mouseleave="hide"
    />
    <div class="bubble">
      <span class="bubble-text" ref="bg">
        {{ capitalizeFirstLetter(name) }}
      </span>
    </div>
  </span>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables.scss";
.bg {
  position: relative;
  padding: 0 0.2rem 0rem 0.2rem;
}

.icon {
  width: 30px;
  height: 30px;
  opacity: 0.5;
  transition: opacity 0.5s;
}

.bubble-text {
  opacity: 0;
  transition: opacity 0.5s;
  font-weight: 200 !important;
  font-size: 1rem;
  position: absolute;
  background: $dark-dimmed-2;
  padding: 5px 10px 5px 10px;
  border-radius: 0.7rem;
}

.view {
  opacity: 1;
}

.bubble-text::after {
  content: "";
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid $dark-dimmed-2;
  position: absolute;
  top: -5px;
  left: 6px;
}
</style>

<script>
export default {
  name: "Badge",
  component: true,
  props: {
    name: {
      type: String,
      required: true,
    },
    parentMouse: {
      type: Boolean,
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
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  watch: {
    parentMouse: function () {
      if (this.parentMouse) {
        this.$refs.bgImage.classList.add("view");
      } else {
        this.$refs.bgImage.classList.remove("view");
      }
    },
  },
};
</script>
