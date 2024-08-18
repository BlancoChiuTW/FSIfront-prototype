<template>
  <div class="sidebar">
    <div class="sidebar-header">準備驗證</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/Preparation/ScheduleNotice') }"
        @click="navigateTo('/verificationaction/Preparation/ScheduleNotice')"
      >
        <el-icon>
          <House />
        </el-icon>
        行程安排
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/Preparation/EstablishedNotice') }"
        @click="navigateTo('/verificationaction/Preparation/EstablishedNotice')"
      >
        <el-icon>
          <Notebook />
        </el-icon>
        開立行程通知單
      </li>
    </ul>

    <div class="sidebar-header">驗證前</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/BeforeVerification/VerificationReport') }"
        @click="navigateTo('/verificationaction/BeforeVerification/VerificationReport')"
      >
        <el-icon>
          <Search />
        </el-icon>
        驗證報告
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/BeforeVerification/RegionalPlan') }"
        @click="navigateTo('/verificationaction/BeforeVerification/RegionalPlan')"
      >
        <el-icon>
          <Bell />
        </el-icon>
        區域規劃表
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/BeforeVerification/PostingTable') }"
        @click="navigateTo('/verificationaction/BeforeVerification/PostingTable')"
      >
        <el-icon>
          <Bell />
        </el-icon>
        貼檢表
      </li>
    </ul>

    <div class="sidebar-header">驗證後</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/AfterVerification/CheckDemand') }"
        @click="navigateTo('/verificationaction/AfterVerification/CheckDemand')"
      >
        <el-icon>
          <House />
        </el-icon>
        檢核行動需求單
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/AfterVerification/ReviewTable') }"
        @click="navigateTo('/verificationaction/AfterVerification/ReviewTable')"
      >
        <el-icon>
          <Search />
        </el-icon>
        查核表
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/AfterVerification/VerificationReport') }"
        @click="navigateTo('/verificationaction/AfterVerification/VerificationReport')"
      >
        <el-icon>
          <Notebook />
        </el-icon>
        驗證報告
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/AfterVerification/EvaluationRecord') }"
        @click="navigateTo('/verificationaction/AfterVerification/EvaluationRecord')"
      >
        <el-icon>
          <Bell />
        </el-icon>
        評估紀錄表
      </li>
    </ul>

    <div class="sidebar-header">審查</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/Review/CompleteReportReview') }"
        @click="navigateTo('/verificationaction/Review/CompleteReportReview')"
      >
        <el-icon>
          <Search />
        </el-icon>
        完整報告審查 (ISO 主管)
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/Review/CommitteeReview') }"
        @click="navigateTo('/verificationaction/Review/CommitteeReview')"
      >
        <el-icon>
          <Bell />
        </el-icon>
        委員會審查
      </li>
    </ul>

    <div class="sidebar-header">完成驗證</div>
    <ul class="sidebar-menu">
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/CompleteVerification/IssueCertificate') }"
        @click="navigateTo('/verificationaction/CompleteVerification/IssueCertificate')"
      >
        <el-icon>
          <House />
        </el-icon>
        證書發證
      </li>
      <li
        class="sidebar-item"
        :class="{ active: isActive('/verificationaction/CompleteVerification/CustomerSatisfactionSurvey') }"
        @click="navigateTo('/verificationaction/CompleteVerification/CustomerSatisfactionSurvey')"
      >
        <el-icon>
          <Notebook />
        </el-icon>
        客戶滿意度調查
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { House, Search, Bell, Notebook } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

const navigateTo = (path) => {
  router.push(path)
}

const isActive = (path) => {
  return route.path === path
}
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
