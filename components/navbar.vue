<template>
  <header class="header">
    <nav class="hamburger-menu">
      <NuxtLink class="w-link m-link pad" to="/">smaug-6739.dev</NuxtLink>

      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <NuxtLink class="menu__item pad w-link" to="/">Home</NuxtLink>
        </li>
        <li><NuxtLink class="menu__item pad" to="#about">About</NuxtLink></li>
        <li>
          <NuxtLink
            class="menu__item pad"
            to="mailto:raphael.veauville@gmail.com"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="menu__item pad" to="https://github.com/Smaug6739"
            >Github</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables";
.menu__btn,
#menu__toggle {
  display: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bolder;
  padding-top: 1em;
  padding-bottom: 1.3em;
  padding-right: 1.5em;
  padding-left: 1.5em;
}
ul {
  display: flex;
  justify-content: flex-end;
}
a {
  color: $secondary;
  text-decoration: none;
  &:hover {
    color: $secondary-hover;
  }
}
.w-link {
  color: $white;
  &:hover {
    color: $white;
  }
}
.btn {
  background: linear-gradient(to right, #f7b500, #b620e0, #32c5ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pad {
  padding: 0.7rem;
}
@media (max-width: 48em) {
  a {
    color: white !important;
  }
  .m-link {
    margin-left: auto;
  }
  .menu__btn,
  #menu__toggle {
    display: block;
  }
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: absolute;
    top: 1.5em; /* margin top of the burger button */
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 2;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -8px;
  }
  .menu__btn > span::after {
    content: "";
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 10px;
    left: -100%;
    width: 250px;
    height: 100%;
    padding: 80px 0;
    list-style: none;
    background-color: $dark;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
    z-index: 1;
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
  .menu__item:hover {
    background-color: $dark-dimmed-1;
  }
}
</style>

<script>
export default {
  name: "Navbar",
};
</script>
