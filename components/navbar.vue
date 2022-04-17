<template>
  <header class="header">
    <nav>
      <h4>smaug-6739.dev</h4>
      <ul>
        <li>
          <NuxtLink to="mailto:raphael.veauville@gmail.com">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables.scss";
nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2%;
  margin-bottom: 4%;
  margin-right: 10%;
  margin-left: 10%;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul {
  li > a {
    color: $secondary;
    text-decoration: none;
    font-weight: 700;
  }
}

ul > li > a:hover {
  color: $secondary-hover;
}
</style>

<script>
export default {
  name: "Navbar",
  component: true,
};
</script>
