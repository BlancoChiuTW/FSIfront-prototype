<template>
  <CompanyScheduleNotice />
  <div class="container">
    <SidebarMenu class="sidebar" />
    <VerificationActionList class="main-content" />
  </div>
</template>

<script setup>
import CompanyScheduleNotice from "../components/CompanyScheduleNotice.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import VerificationActionList from "../components/VerificationActionList.vue";

defineOptions({
  name: "ScheduleNotice",
});
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
  border: 2px solid #ddd
  
.verification-action-list
  margin:0
  margin-left: 40px 
</style>
