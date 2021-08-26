<template>
  <el-aside :width="isCollapse?'auto':'200px'">
    <el-menu default-active="1" router class="el-menu-vertical-demo" :unique-opened="true" :collapse="isCollapse"
      style="height:100%">
      <el-menu-item index="1">
        <i class="el-icon-document"></i>
        <template #title>导航一</template>
      </el-menu-item>
      <el-sub-menu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    onBeforeMount
  } from 'vue';
  export default defineComponent({
    name: 'LeftNav',
    setup() {
      const isCollapse = ref(false)
      //监听窗口大小
      function widonwSize() {
        if (document.body.clientWidth <= 1280) {
          isCollapse.value = true
        } else {
          isCollapse.value = false
        }

        window.onresize = () => {
          if (document.body.clientWidth <= 1280) {
            isCollapse.value = true
          } else {
            isCollapse.value = false
          }
        }
      }
      onBeforeMount(() => {
        console.log(111)
        widonwSize()
      })
      return {
        isCollapse,
        widonwSize
      }
    }
  });
</script>