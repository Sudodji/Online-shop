<template>
  <div>
    <AppLayout />
  </div>
</template>

<script>
import AppLayout from './components/AppLayout';
export default {
  name: 'App',
  components: {
    AppLayout,
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: Ubuntu, system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0A1E32;
}

</style>
