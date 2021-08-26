<template>
  <headnav />
  <div class="appView">
    <leftnav />
    <router-view class="routerView" />
  </div>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue';
  import headnav from '/src/components/TabBar/Headnav.vue'
  import leftnav from '/src/components/TabBar/LeftNav.vue'
  export default defineComponent({
    name: 'App',
    components: {
      headnav,
      leftnav
    },
    // setup() {

    // }
  });
</script>
<style>
  body {
    margin: 0;
    padding: 0
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    height: 100vh
  }

  .appView {
    display: flex;
    height: calc(100% - 50px);
  }

  .routerView {
    flex: 1;
  }
</style>