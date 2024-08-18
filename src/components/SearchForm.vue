<template>
  <div class="search-form">
    <h2 class="search-form-title">客戶清單</h2>
    <form @submit.prevent="search">
      <div class="search-form-row">
        <input type="text" v-model="searchCriteria.companyName" class="search-input" placeholder="公司名稱" />
        <input type="text" v-model="searchCriteria.companyId" class="search-input" placeholder="統一編號" />
        <input type="text" v-model="searchCriteria.factoryName" class="search-input" placeholder="工廠名稱" />
      </div>
      <div class="search-form-row">
        <input type="text" v-model="searchCriteria.operator" class="search-input" placeholder="負責人" />
        <input type="text" v-model="searchCriteria.idNumber" class="search-input" placeholder="身分證字號" />
        <input type="text" v-model="searchCriteria.orgCode" class="search-input" placeholder="組織代碼" />
      </div>
      <div class="search-form-row">
        <input type="text" v-model="searchCriteria.verificationNumber" class="search-input" placeholder="驗證編號" />
        <input type="text" v-model="searchCriteria.assignedPersonnel" class="search-input" placeholder="行程指派人員" />
      </div>
      <div class="search-form-row">
        <select v-model="searchCriteria.category" class="search-select">
          <option value="" disabled selected>類別</option>
          <option value="ISO">ISO</option>
          <option value="FSSC">FSSC</option>
          <option value="其他">其他</option>
        </select>
        <select v-model="searchCriteria.region" class="search-select">
          <option value="" disabled selected>地區</option>
          <option value="北部">北部</option>
          <option value="中部">中部</option>
          <option value="南部">南部</option>
          <option value="東部">東部</option>
        </select>
        <select v-model="searchCriteria.agriculture" class="search-select">
          <option value="" disabled selected>農調</option>
          <option value="無">無</option>
          <option value="有">有</option>
        </select>
        <select v-model="searchCriteria.verificationType" class="search-select">
          <option value="" disabled selected>驗證種類</option>
          <option value="初次驗證">初次驗證</option>
          <option value="再驗證">再驗證</option>
        </select>
      </div>
      <div class="search-button-row">
        <button type="submit" class="search-button">搜尋</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const searchCriteria = ref({
  companyName: '',
  companyId: '',
  factoryName: '',
  operator: '',
  idNumber: '',
  orgCode: '',
  verificationNumber: '',
  assignedPersonnel: '',
  category: '',
  region: '',
  agriculture: '',
  verificationType: '',
});

const emit = defineEmits(['search']);

const search = () => {
  emit('search', searchCriteria.value);
};
</script>

<style lang="sass" scoped>
.search-form
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding: 16px
  background-color: #ffffff
  border: 1px solid #ddd
  border-radius: 8px

.search-form-title
  font-size: 24px
  font-weight: 700
  margin-bottom: 16px

.search-form-row
  display: flex
  gap: 16px
  margin-bottom: 16px

.search-input,
.search-select
  flex: 1
  min-width: 180px
  padding: 8px 16px
  border-radius: 8px
  border: 1px solid #E0E0E0
  font-family: Inter, sans-serif
  font-size: 16px
  font-weight: 500
  line-height: 24px
  background-color: #FFFFFF
  color: #333

.search-button-row
  display: flex
  justify-content: center
  margin-top: 16px

.search-button
  width: 100%
  max-width: 200px
  height: 40px
  background: #000000
  color: white
  border: none
  border-radius: 8px
  font-family: Inter, sans-serif
  font-size: 16px
  font-weight: 500
  line-height: 24px
  cursor: pointer

  &:hover
    background-color: darken(#000000, 10%)
</style>
