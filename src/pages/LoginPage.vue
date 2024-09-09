<template>
  <div class="flex flex-center">
    <div class="login-container">
      <div class="logo-header">
        <div class="login-title-container">
          <div class="login-title-main">登入</div>
          <div class="login-title-sub">ISO / FSCC 管理系統</div>
        </div>
      </div>
      <form class="form-container" @submit.prevent="handleLogin">
        <div class="input-container">
          <input
            type="text"
            id="username"
            v-model="username"
            class="custom-input"
            placeholder="帳號"
          />
        </div>
        <div class="input-container">
          <input
            type="password"
            id="password"
            v-model="password"
            class="custom-input"
            placeholder="密碼"
          />
        </div>
        <button type="submit" class="login-button">登入</button>
        <div class="forgot-password-container">
          <span class="line"></span>
          <button
            type="button"
            class="forgot-button"
            @click="handleChangePassword"
          >
            沒有帳號?
          </button>
          <span class="line"></span>
        </div>
           <router-link to="/register" class="register-button" >
            註冊
           </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // 錯誤訊息
    };
  },
  methods: {
    handleLogin() {
      if (this.username === 'test2024' && this.password === 'test2024') {
        // 驗證成功，重定向到主頁或其他頁面
        this.$router.push('/');
      } else {
        // 驗證失敗，顯示錯誤訊息
        this.errorMessage = '帳號或密碼錯誤';
      }
    },
    handleChangePassword() {
      // 忘記密碼或其他操作
    },
  },
};
</script>


<style lang="sass" scoped>
.flex
  display: flex
  justify-content: center
  align-items: center
  height: 80vh

.login-container
  width: 438px
  text-align: center

.logo-header
  display: flex
  flex-direction: column
  align-items: center
  gap: 4px
  margin-bottom: 24px

.login-title-main,
.login-title-sub
  color: #000000 // 黑色文字
  font-size: 20px
  font-weight: 700
  line-height: 30px
  text-align: center
.login-title-main
  font-size: 30px

.form-container
  display: flex
  flex-direction: column
  gap: 16px

.input-container
  display: flex
  flex-direction: column
  gap: 8px

.custom-input
  width: 400px
  height: 40px
  padding: 8px 16px
  border-radius: 8px 8px 8px 8px
  border: 1px solid #e0e0e0 // 灰色边框
  font-family: 'Inter', sans-serif
  font-size: 20px
  font-weight: 500
  line-height: 30px
  text-align: left
  background-color: #ffffff // 白色背景
  color: #black 

.login-button
  width: 438px
  height: 40px
  background-color: #000000 // 黑色背景
  color: #ffffff // 白色文字
  border: none
  border-radius: 8px
  font-family: 'Inter', sans-serif
  font-size: 16px
  font-weight: 500
  line-height: 30px
  cursor: pointer

  &:hover
    background-color: darken(#d9d9d9, 10%) 
    
.register-button
  display: flex
  width: 438px
  height: 40px
  background-color: #d9d9d9 // 灰色背景
  color: #000000 // 黑色文字
  border: none
  border-radius: 8px
  font-family: 'Inter', sans-serif
  font-size: 16px
  font-weight: 500
  line-height: 30px
  cursor: pointer
  text-decoration: none
  align-items: center
  justify-content: space-around

  &:hover
    background-color: darken(#d9d9d9, 10%)


.forgot-password-container
  display: flex
  align-items: center
  justify-content: center
  gap: 16px

.line
  flex: 1
  height: 1px
  background-color: #e0e0e0 // 灰色线条

.forgot-button
  color: #828282 // 灰色文字
  font-size: 16px
  text-decoration: none
  border: none
  cursor: pointer
  background-color: white

</style>
