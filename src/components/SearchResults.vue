<template>
  <div v-if="results.length > 0" class="search-results">
    <h2 class="search-results-title">搜尋結果</h2>
    <table class="results-table">
      <thead>
        <tr>
          <th>稽核證號</th>
          <th>公司</th>
          <th>統一編號</th>
          <th>工廠名稱</th>
          <th>類別</th>
          <th>經營者</th>
          <th>行程安排日</th>
          <th>查訪次數</th>
          <th>指派人員</th>
          <th>行程通知單</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in paginatedResults" :key="result.auditNumber">
          <td>{{ result.auditNumber }}</td>
          <td>{{ result.company }}</td>
          <td>{{ result.companyId }}</td>
          <td>{{ result.factoryName }}</td>
          <td>{{ result.category }}</td>
          <td>{{ result.operator }}</td>
          <td>{{ result.scheduleDate }}</td>
          <td>{{ result.visitCount }}</td>
          <td>{{ result.assignedPersonnel }}</td>
          <td>
            <button class="status-button" @click="navigateToManagement">{{ result.status }}</button>
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
  <div v-else class="no-results">目前沒有資料</div>
</template>


<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  searchCriteria: Object,
});

const router = useRouter();

const allResults  = [
  {
    auditNumber: "FC-000001",
    company: "甲公司",
    companyId: "12345678",
    factoryName: "甲公司工廠",
    category: "ISO",
    operator: "張三",
    scheduleDate: "2024/01/01",
    visitCount: "V1",
    assignedPersonnel: "李四 (主稽核), 王五",
    status: "管理",
  },
  {
    auditNumber: "FC-000002",
    company: "乙公司",
    companyId: "87654321",
    factoryName: "乙公司工廠",
    category: "FSSC",
    operator: "李四",
    scheduleDate: "2024/02/01",
    visitCount: "V1",
    assignedPersonnel: "張三 (主稽核), 王五",
    status: "管理",
  },
  {
    auditNumber: "FC-000003",
    company: "丙公司",
    companyId: "12348765",
    factoryName: "丙公司工廠",
    category: "ISO",
    operator: "王五",
    scheduleDate: "2024/03/01",
    visitCount: "V2",
    assignedPersonnel: "張三 (主稽核), 李四",
    status: "管理",
  },
  {
    auditNumber: "FC-000004",
    company: "丁公司",
    companyId: "56781234",
    factoryName: "丁公司工廠",
    category: "FSSC",
    operator: "趙六",
    scheduleDate: "2024/04/01",
    visitCount: "V2",
    assignedPersonnel: "張三 (主稽核), 李四",
    status: "管理",
  },
  {
    auditNumber: "FC-000005",
    company: "戊公司",
    companyId: "87651234",
    factoryName: "戊公司工廠",
    category: "ISO",
    operator: "孫七",
    scheduleDate: "2024/05/01",
    visitCount: "V1",
    assignedPersonnel: "李四 (主稽核), 王五",
    status: "管理",
  },
  {
    auditNumber: "FC-000006",
    company: "己公司",
    companyId: "34567812",
    factoryName: "己公司工廠",
    category: "FSSC",
    operator: "周八",
    scheduleDate: "2024/06/01",
    visitCount: "V1",
    assignedPersonnel: "張三 (主稽核), 王五",
    status: "管理",
  },
  {
    auditNumber: "FC-000007",
    company: "庚公司",
    companyId: "56781239",
    factoryName: "庚公司工廠",
    category: "ISO",
    operator: "吳九",
    scheduleDate: "2024/07/01",
    visitCount: "V1",
    assignedPersonnel: "張三 (主稽核), 李四",
    status: "管理",
  },
  {
    auditNumber: "FC-000008",
    company: "辛公司",
    companyId: "78912345",
    factoryName: "辛公司工廠",
    category: "FSSC",
    operator: "鄭十",
    scheduleDate: "2024/08/01",
    visitCount: "V1",
    assignedPersonnel: "李四 (主稽核), 王五",
    status: "管理",
  },
  {
    auditNumber: "FC-000009",
    company: "壬公司",
    companyId: "98765432",
    factoryName: "壬公司工廠",
    category: "ISO",
    operator: "李十一",
    scheduleDate: "2024/09/01",
    visitCount: "V1",
    assignedPersonnel: "張三 (主稽核), 李四",
    status: "管理",
  },
  {
    auditNumber: "FC-000010",
    company: "癸公司",
    companyId: "87654312",
    factoryName: "癸公司工廠",
    category: "FSSC",
    operator: "陳十二",
    scheduleDate: "2024/10/01",
    visitCount: "V2",
    assignedPersonnel: "張三 (主稽核), 王五",
    status: "管理",
  },
];
const results = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;

const filterResults = (criteria) => {
  if (!criteria) return;

  results.value = allResults.filter((item) => {
    return (
      (!criteria.companyName || item.company.includes(criteria.companyName)) &&
      (!criteria.companyId || item.companyId.includes(criteria.companyId)) &&
      (!criteria.factoryName || item.factoryName.includes(criteria.factoryName)) &&
      (!criteria.operator || item.operator.includes(criteria.operator)) &&
      (!criteria.category || item.category === criteria.category) &&
      (!criteria.region || item.region === criteria.region)
    );
  });
};

watch(
  () => props.searchCriteria,
  (newCriteria) => {
    filterResults(newCriteria);
  },
  { immediate: true, deep: true }
);

const totalPages = computed(() => Math.ceil(results.value.length / itemsPerPage));

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return results.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const navigateToManagement = () => {
  router.push('/CustomerManagement');
};
</script>

<style lang="sass" scoped>
.search-results
  width: 100%
  max-width: 1200px
  margin: 16px auto
  padding: 16px
  background-color: #ffffff
  border: 1px solid #ddd
  border-radius: 8px

.search-results-title
  font-size: 30px
  font-weight: 700
  margin-bottom: 16px

.results-table
  width: 100%
  border-collapse: collapse

.results-table th,
.results-table td
  padding: 8px
  text-align: left
  border-bottom: 1px solid #ddd

.results-table th
  background-color: #ffffff
  font-weight: 1000
  font-size: large

.results-table tr:last-child td
  border-bottom: none

.status-button
  background-color: #000000
  color: white
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
  background-color: black
  color: white
  border: none
  padding: 8px 16px
  border-radius: 8px
  margin: 0 8px
  cursor: pointer

.pagination button:disabled
  background-color: black
  cursor: not-allowed

.no-results
  text-align: center
  font-size: 18px
  color: #888
</style>
