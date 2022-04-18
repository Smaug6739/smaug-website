<template>
  <header class="header">
    <nav>
      <NuxtLink class="w-link" to="https://smaug-6739.dev"
        >smaug-6739.dev</NuxtLink
      >
      <ul>
        <li>
          <NuxtLink to="/">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="mailto:raphael.veauville@gmail.com">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/Smaug6739">Github</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables";
nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2%;
  margin-bottom: 4%;
  margin-right: 5%;
  margin-left: 5%;
}
ul {
  display: flex;
  justify-content: flex-end;
}
a {
  padding: 0.8rem;
  color: $secondary;
  text-decoration: none;
  font-weight: 700;
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
/* 48em = 768px */
@media (max-width: 48em) {
  .w-link {
    display: none;
  }
  nav {
    justify-content: center;
  }
}
</style>

<script>
export default {
  name: "Navbar",
};
</script>
