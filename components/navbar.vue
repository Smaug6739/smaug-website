<template>
  <header class="header">
    <nav>
      <h4>smaug-6739.dev</h4>
      <ul>
        <li>
          <NuxtLink to="mailto:raphael.veauville@gmail.com">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="mailto:raphael.veauville@gmail.com" class="btn"
            >View my Github</NuxtLink
          >
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
  margin-right: 5%;
  margin-left: 5%;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul {
  display: flex;
  align-items: stretch;
  li {
    padding: 0.375rem 0.75rem;
    a {
      padding: 0.8rem;
      color: $secondary;
      text-decoration: none;
      font-weight: 700;
    }
  }
}
.btn {
  border-radius: 1.5rem;
  background: linear-gradient(to right, #f7b500, #b620e0, #32c5ff);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
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
