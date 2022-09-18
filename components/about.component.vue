<template>
  <div id="about">
    <div class="description">
      <h3>About me</h3>
      <p>
        I'm a full-stack developer with a passion for creating beautiful and<br />
        intuitive user experiences.
        <br />
        I develop also software applications for desktop in C++ with Qt<br />
        framework.
      </p>
      <p>
        On my free time I like programming useful libraries and tools to help<br />
        people and improve my skills in different languages.
        <br />
        I like contribute to open source projects and help people to create new.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/theme-variables.scss";

h3,
p {
  margin-bottom: 1rem;
}

h3 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
}

p {
  font-size: 20px;
}

.description {
  text-align: left;
  line-height: 2rem;
  width: 70%;
}

@media (max-width: 48em) {
  .description {
    width: 100%;
  }
}
</style>
