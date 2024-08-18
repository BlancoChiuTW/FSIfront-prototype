<template>
  <header class="header">
    <div class="header-left">
      <nav class="header-nav">
        <ul>
          <li class="li-first"><router-link to ="/">ISO / FSSC 專區</router-link></li>
          <li><a href="#">常用功能</a></li>
          <li><a href="#">管理專區 (ISO)</a></li>
          <li><a href="#">ISO/FSSC 專區</a></li>
          <li><a href="#">ISO45001 專區</a></li>
        </ul>
      </nav>
    </div>
    <div class="header-right">
      <div class="header-user">
        <img src="../assets/user-avatar.svg" alt="User Avatar" />
        <span>用戶名稱</span>
        <button class="header-logout">登出</button>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 16px 32px
  background-color: #FFFFFF
  border-bottom: 1px solid #ddd

.header-left
  display: flex
  align-items: center

.header-logo img
  height: 40px
  margin-right: 16px
.header-nav ul
  display: flex
  list-style: none
  padding: 0
  margin: 0

.header-nav li
  margin-right: 24px

.header-nav a
  text-decoration: none
  color: #333
  font-size: 16px
  font-weight: 600

.header-right
  display: flex
  align-items: center

.header-user
  display: flex
  align-items: center

.header-user img
  height: 32px
  width: 32px
  border-radius: 50%
  margin-right: 8px

.header-user span
  margin-right: 16px
  font-size: 16px
  color: #333

.header-logout
  background-color: transparent
  border: none
  font-size: 16px
  color: #007bff
  cursor: pointer
.li-first
  margin-left: 30px
  margin-right: 60px
</style>
