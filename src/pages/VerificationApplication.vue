<template>
    <CompanyScheduleNotice />
    <div class="container">
      <SidebarMenu class="sidebar" />
      <div >
        <p class="main-content">驗證申請書</p>
      </div>
    </div>
  </template>
  <script setup>
  import CompanyScheduleNotice from "../components/CompanyScheduleNotice.vue";
  import SidebarMenu from "../components/SidebarMenu.vue";
  
  defineOptions({
    name: "VerificationApplication",
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
    border-bottom: 4px solid #ddd
    margin-left: 40px 
    font-size:26px
    font-weight:700
  
  </style>
  