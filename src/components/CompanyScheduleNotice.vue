<template>
    <div>
      <div class="schedule-notice">
        <div class="company-info">
          <h1>{{ companyName }}</h1>
          <div class="verification-info">
            <span >驗證編號</span>
            <span>{{ verificationNumber }}</span>
          </div>
          <span class="status-badge">{{ status }}</span>
        </div>
        <div class="schedule-details">
          <div class="left-section">
            <div class="section-title">安排日期及稽核員</div>
            <div
              v-for="item in auditSchedule"
              :key="item.date"
              class="audit-schedule"
            >
              <span>{{ item.date }}</span>
              <span>{{ item.auditors }}</span>
            </div>
          </div>
          <div class="center-section">
            <div class="section-title">預計完成稽核日期</div>
            <div
              v-for="item in auditCompletion"
              :key="item.date"
              class="audit-completion"
            >
              <span>{{ item.date }}</span>
              <span>{{ item.status }}</span>
            </div>
            <div class="section-title">預計執行進度</div>
            <div
              v-for="item in executionProgress"
              :key="item.date"
              class="execution-progress"
            >
              <span>{{ item.task }}</span>
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="right-section">
            <div class="section-title">預定排程日期</div>
            <div
              v-for="item in scheduledDates"
              :key="item.date"
              class="scheduled-dates"
            >
              <span>{{ item.task }}</span>
              <span>{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // 模擬數據
  const companyName = ref("真好吃股份有限公司");
  const verificationNumber = ref("FC-123456-01");
  const status = ref("狀態：文審/評估");
  const auditSchedule = ref([
    { date: "2024/05/23", auditors: "王大石，王大槌(主稽)" },
    { date: "2024/05/24", auditors: "王大石，王大槌(主稽)" },
  ]);
  const auditCompletion = ref([{ date: "暫無", status: "" }]);
  const executionProgress = ref([
    { task: "稽核稽查", date: "2024/06/13 缺失回覆：2024/07/08" },
    { task: "報告結案", date: "2024/07/18 驗證登錄：2024/07/23" },
    { task: "平台上傳", date: "2024/07/28 證書製作：2024/08/12" },
  ]);
  const scheduledDates = ref([
    { task: "V 2 追蹤評鑑日期", date: "2024/05/23" },
    { task: "V 3 追蹤評鑑日期", date: "2025/05/23" },
    { task: "重新評鑑日期", date: "2026/05/23" },
    { task: "不定期評鑑日期", date: "" },
  ]);
  </script>
  
  <style scoped lang="sass">
  .schedule-notice
    padding: 16px
    width: 80vw
    margin: 0 auto
  
  .company-info
    display: flex
    align-items: center
    margin-bottom: 16px
  
  h1
    font-size: 36px
    font-weight: bold
    margin: 0
  
  .verification-info
    display: flex
    align-items: center
    gap: 16px
    margin-left: 20px
    margin-right: 10px
  
  .status-badge
    background-color: red
    color: white
    padding: 4px 8px
    border-radius: 4px
  
  .schedule-details
    display: flex
    justify-content: space-between
    margin-top: 24px
  
  .left-section, .center-section, .right-section
    flex: 1
    padding: 0 16px
  
  .section-title
    font-weight: 700
    margin-bottom: 5px
    font-size: 20px
  .audit-schedule, .audit-completion, .execution-progress, .scheduled-dates
    margin-bottom: 8px
  </style>
  