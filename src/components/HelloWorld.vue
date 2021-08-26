<template>
  <h1 class="hello" @click="emithhh">
    {{mesg}}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    mesg: String,
  },
  setup(props,{emit}){

    function emithhh(){
      emit('emithhh',"123456")
    }
    return{
      emithhh
    }
    
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
