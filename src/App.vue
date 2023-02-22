<template>
  <div id="app">
    <nav>
      <router-link to="/">ChatAI</router-link> |
<!--      <router-link to="/excel">Excel</router-link> |-->
      <router-link to="/imgai">ImgAI</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "style/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
padding-top: 1em;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
