<template>
  <div class="sidebar">
    <div class="sidebar-header">基本資料</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/CustomerManagement') }"
        @click="navigateTo('/CustomerManagement')"
      >
        <el-icon>
          <House />
        </el-icon>
        客戶資料管理
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/VerificationApplication') }"
        @click="navigateTo('/VerificationApplication')"
      >
        <el-icon>
          <Search />
        </el-icon>
        驗證申請書
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/VerificationContract') }"
        @click="navigateTo('/VerificationContract')"
      >
        <el-icon>
          <Bell />
        </el-icon>
        驗證合約書
      </li>
    </ul>

    <div class="sidebar-header">驗證行動</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/Preparation/ScheduleNotice') }"
        @click="navigateTo('/verificationaction/Preparation/ScheduleNotice')"
      >
        <el-icon>
          <Notebook />
        </el-icon>
        驗證行動清單
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { House, Search, Bell, Notebook } from '@element-plus/icons-vue';

const router = useRouter();
const route = useRoute();

const navigateTo = (path) => {
  router.push(path);
};

const isActive = (path) => {
  return route.path === path;
};
</script>

<style lang="sass" scoped>
.sidebar 
  width: 20vw
  margin-left: 15px
  background-color: #ffffff
  border-right: 2px solid #ddd

.sidebar-header 
  font-size: 20px
  font-weight: bold
  padding: 16px

.sidebar-menu 
  list-style: none
  padding: 0

.sidebar-item 
  display: flex
  align-items: center
  padding: 12px 16px
  cursor: pointer
  &:hover
    background-color: #f0f0f0
  el-icon
    font-weight: bold
    margin-right: 8px

.sidebar-item.active
  background-color: #e0f7fa
  border-left: 4px solid #00796b
  padding-left: 12px
</style>
