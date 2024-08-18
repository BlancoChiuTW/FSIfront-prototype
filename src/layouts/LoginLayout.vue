<template>
  <el-container>
    <el-main>
      <img class="header" src="../assets/FSIlogo.svg" alt="FSI LOGO" />
      <router-view />
      <div class="footer">Copyright FSI Taiwan 2024 All Rights Reserved.</div>
    </el-main>
  </el-container>
</template>

<script setup>
defineOptions({
  name: "LoginLayout",
});
</script>

<style lang="sass" scoped>
 .el-container
  height:900px
  width:100%
 .el-main
  padding:0
 .header
  margin-top:25px
 .footer
  font-family: 'Inter', sans-serif
  font-size: 16px
  font-weight: 400
  line-height: 24px
  text-align: center
  color: #828282 // 灰色文字
  margin-top: 24px
</style>
