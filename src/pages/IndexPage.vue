<template>
  <SearchForm @search="handleSearch" />
  <SearchResults :searchCriteria="searchCriteria" />
</template>

<script setup>
import { ref } from 'vue';
import SearchForm from "../components/SearchForm.vue";
import SearchResults from "../components/SearchResults.vue";

const searchCriteria = ref({});

const handleSearch = (criteria) => {
  searchCriteria.value = criteria;
};
</script>

<style lang="sass" scoped>
.search-form
  margin-top: 30px
</style>
