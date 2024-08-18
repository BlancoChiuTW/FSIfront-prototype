<template>
  <el-container>
    <el-main>
      <AppHeader />
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";

defineOptions({
  name: "MainLayout",
});
</script>

<style lang="sass" scoped>
.el-container
 height:900px
 width:100%
.el-main
 padding:0
</style>
