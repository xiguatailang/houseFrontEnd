<template>
  <div id="app">
    <ManHeader />
    <Content msg="Welcome to Your house App"/>
  </div>
</template>

<script>
import Content from './components/Content.vue';
import ManHeader from './components/ManHeader';

export default {
  name: 'app',
  components: {
      ManHeader,
      Content,
      // ManHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
