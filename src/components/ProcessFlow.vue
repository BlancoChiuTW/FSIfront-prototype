<template>
    <div class="process-flow">
      <div class="company-info">
        <h1>{{ companyName }}</h1>
        <div class="verification-info">
          <span>驗證編號</span>
          <span>{{ verificationNumber }}</span>
        </div>
        <span class="status-badge">{{ status }}</span>
      </div>
      <div class="timeline-container">
        <div class="step" :class="getStepClass(0)">稽核行程通知單</div>
        <div class="arrow"></div>
        <div class="step" :class="getStepClass(1)">稽核中</div>
        <div class="arrow"></div>
        <div class="step" :class="getStepClass(2)">矯正行動需求單</div>
        <div class="arrow"></div>
        <div class="step" :class="getStepClass(3)">驗證報告產出</div>
        <div class="arrow"></div>
        <div class="step" :class="getStepClass(4)">主管審查</div>
        <div class="arrow"></div>
        <div class="step" :class="getStepClass(5)">委員會審查</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const companyName = ref("真好吃股份有限公司");
  const verificationNumber = ref("FC-123456-01");
  const status = ref("狀態：文審/評估");
  const currentStep = ref(2);
  
  const getStepClass = (index) => {
    if (index < currentStep.value) return "completed";
    if (index === currentStep.value) return "current";
    return "upcoming";
  };
  </script>
  
  <style lang="sass" scoped>
  .process-flow
    padding: 16px
    width: 80vw
    margin: 0 auto
  
  .timeline-container
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    margin: 0 auto
  
  .step
    width: 12vw
    padding: 8px
    text-align: center
    border-radius: 8px
    font-weight: bold
    font-size: 1.2rem
    display: flex
    justify-content: center
    align-items: center
    transition: background-color 0.3s, color 0.3s
  
  .completed
    background-color: #4caf50
    color: white
    border: 1px solid #4caf50
  
  .current
    background-color: #ff9800
    color: white
    border: 1px solid #ff9800
  
  .upcoming
    background-color: white
    color: black
    border: 1px solid #000
  
  .arrow
    width: 4vw
    height: 2px
    background-color: #000
    margin: 0 8px
  
  .company-info
    display: flex
    align-items: center
    margin-bottom: 16px
  
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
  </style>
  