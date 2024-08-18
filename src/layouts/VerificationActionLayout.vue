<template>
  <AppHeader />
  <ProcessFlow />
  <div class="container">
    <ScheduleSidebarMenu class="sidebar" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ProcessFlow from "../components/ProcessFlow.vue";
import ScheduleSidebarMenu from "../components/ScheduleSidebarMenu.vue";
import AppHeader from "../components/AppHeader.vue";
</script>

<style lang="sass" scoped>
.container
  display: flex

.sidebar
  width: 13vw
  background-color: #ffffff
  border-right: 2px solid #ddd

.main-content
  width: 75vw
  background-color: #ffffff
  border-bottom: 4px solid #ddd
  margin-left: 40px
  font-size:26px
  font-weight:700
</style>
