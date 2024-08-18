<template>
  <div class="verification-action-list">
    <h2 class="title">驗證行動清單</h2>
    <table class="action-table">
      <thead>
        <tr>
          <th>年度</th>
          <th>查訪次數</th>
          <th>ERID</th>
          <th>CID</th>
          <th>驗證編號</th>
          <th>評核日期</th>
          <th>管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="action in actions" :key="action.id">
          <td>{{ action.year }}</td>
          <td>{{ action.visitCount }}</td>
          <td>{{ action.erid }}</td>
          <td>{{ action.cid }}</td>
          <td>{{ action.verificationNumber }}</td>
          <td>{{ action.reviewDate }}</td>
          <td>
            <button class="manage-button">管理</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一頁</button>
      <span>頁數 {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        下一頁
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const actions = ref([
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2026,
    visitCount: "V2",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
  {
    id: 1,
    year: 2024,
    visitCount: "V1",
    erid: 3222,
    cid: 2641,
    verificationNumber: "FC-010324-01",
    reviewDate: "2024/04/01",
  },
]);

const currentPage = ref(1);
const itemsPerPage = 10;
const totalPages = Math.ceil(actions.value.length / itemsPerPage);

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++;
};
</script>

<style lang="sass" scoped>
.verification-action-list
 width: 80%
 margin: 0 auto
 padding: 16px
 background-color: #ffffff
 border: 1px solid #ddd
 border-radius: 8px

.title
 font-size: 24px
 font-weight: bold
 margin-bottom: 16px
 font-weight: 700

.action-table
 width: 100%
 border-collapse: collapse

.action-table th,
.action-table td
 padding: 8px
 text-align: left
 border-bottom: 1px solid #ddd

.action-table th
 background-color: #ffffff
 font-weight: 700

.action-table tr:last-child td
 border-bottom: none

.manage-button
 background-color: #000000 
 color: #ffffff
 border: none
 border-radius: 8px
 padding: 8px 16px
 cursor: pointer

.pagination
 display: flex
 justify-content: center
 align-items: center
 margin-top: 16px

.pagination button
 background-color: #000000
 color: #ffffff
 border: none
 padding: 8px 16px
 border-radius: 8px
 margin: 0 8px
 cursor: pointer

.pagination button:disabled
 background-color: #ddd
 cursor: not-allowed
</style>
