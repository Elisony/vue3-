<template>
  <div>这是首页</div>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue';
  import userMouse from "../hooks/useMouse";
  import {
    getApi
  } from "../utils/request"
  export default defineComponent({
    name: 'Home',
    setup() {
      const {
        x,
        y
      } = userMouse()

      getApi('/data/address.json').then(res => {
        console.log(res)
      })
      return {
        x,
        y,
        getApi
      }
    }
  });
</script>