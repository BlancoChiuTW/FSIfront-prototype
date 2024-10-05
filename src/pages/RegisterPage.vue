<template>
  <div class="flex flex-center">
    <div class="register-container">
      <div class="logo-header">
        <div class="register-title">註冊</div>
      </div>
      <form class="form-container" @submit.prevent="handleSubmit">
        <div class="input-container">
          <select
            v-model="role"
            id="role"
            name="role"
            class="custom-select"
            required
          >
            <option class="register-subtitle" value="" disabled selected>
              檢驗單位／審議委員／客戶帳號申請
            </option>
            <option value="inspection">檢驗單位</option>
            <option value="reviewer">審議委員</option>
            <option value="customer">客戶</option>
          </select>
        </div>

        <!-- 檢驗單位的表單項目 -->
        <transition name="fade">
          <div
            v-if="role === 'inspection'"
            class="input-container-personal_information"
          >
            <div class="input-container-left">
              <div class="input-container">
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="custom-input"
                  placeholder="帳號"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="custom-input"
                  placeholder="密碼"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="Name"
                  type="text"
                  id="name"
                  class="custom-input"
                  placeholder="姓名"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="idNumber"
                  type="text"
                  id="idNumber"
                  class="custom-input"
                  placeholder="身分證字號"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="companyName"
                  type="text"
                  id="companyName"
                  class="custom-input"
                  placeholder="公司名稱"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="taxID"
                  type="text"
                  id="companyId"
                  class="custom-input"
                  placeholder="公司統編"
                />
              </div>
            </div>
            <div class="input-container-right">
              <div class="input-container">
                <input
                  v-model="address"
                  type="text"
                  id="address"
                  class="custom-input"
                  placeholder="地址"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="addressNumber"
                  type="text"
                  id="postalCode"
                  class="custom-input"
                  placeholder="郵遞區號"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="telecom"
                  type="text"
                  id="phone"
                  class="custom-input"
                  placeholder="電話-分機"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="fax"
                  type="text"
                  id="fax"
                  class="custom-input"
                  placeholder="傳真"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="mobile"
                  type="text"
                  id="mobile"
                  class="custom-input"
                  placeholder="手機"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="custom-input"
                  placeholder="E-mail"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- 審議委員的表單項目 -->
        <transition name="fade">
          <div
            v-if="role === 'reviewer'"
            class="input-container-personal_information"
          >
            <div class="input-container-left">
              <div class="input-container">
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="custom-input"
                  placeholder="帳號"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="custom-input"
                  placeholder="密碼"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="firstName"
                  type="text"
                  id="firstName"
                  class="custom-input"
                  placeholder="姓名"
                />
              </div>
            </div>
            <div class="input-container-right">
              <div class="input-container">
                <input
                  v-model="lastName"
                  type="text"
                  id="lastName"
                  class="custom-input"
                  placeholder="單位"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="custom-input"
                  placeholder="E-mail"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="phoneNumber"
                  type="text"
                  id="phone"
                  class="custom-input"
                  placeholder="手機號碼"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- 客戶的表單項目 -->
        <transition name="fade">
          <div
            v-if="role === 'customer'"
            class="input-container-personal_information"
          >
            <div class="input-container-left">
              <div class="input-container">
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="custom-input"
                  placeholder="帳號"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="custom-input"
                  placeholder="密碼"
                />
              </div>
            </div>
            <div class="input-container-right">
              <div class="input-container">
                <input
                  v-model="firstName"
                  type="text"
                  id="name"
                  class="custom-input"
                  placeholder="姓名"
                />
              </div>
              <div class="input-container">
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="custom-input"
                  placeholder="E-mail"
                />
              </div>
            </div>
          </div>
        </transition>

        <button type="submit" class="register-button">註冊</button>
        <button
          type="button"
          class="backlogin-button"
          @click="handleBackToLogin"
        >
          返回登入
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter

// 初始化 router
const router = useRouter();

// 定義響應式變數
const role = ref("");
const username = ref("");
const password = ref("");
const Name = ref("");
const idNumber = ref("");
const companyName = ref("");
const taxID = ref("");
const address = ref("");
const addressNumber = ref("");
const telecom = ref("");
const fax = ref("");
const mobile = ref("");
const email = ref("");
const phoneNumber = ref("");
const gender = ref("");

// 表單提交處理
function handleSubmit() {
  if (!username.value || !password.value || !Name.value || !email.value) {
    alert("請填寫所有必填項目");
    return;
  }

  if (!email.value.includes("@")) {
    alert("請輸入有效的 Email");
    return;
  }

  const payload = {
    UserName: username.value,
    Password: password.value,
    Name: Name.value,
    Role: role.value,
    IDNumber: idNumber.value,
    Company: companyName.value,
    TaxID: taxID.value,
    Address: address.value,
    AddressNumber: addressNumber.value,
    Telecom: telecom.value,
    Fax: fax.value,
    Email: email.value,
    PhoneNumber: phoneNumber.value,
    Gender: gender.value,
  };

  axios
    .post("https://fsiback.ptchen.tw/register", payload)
    .then((response) => {
      if (response.status === 200) {
        alert("註冊成功！");
        router.push("/login"); // 使用 router 推送到 login 頁面
      } else {
        alert("註冊失敗：" + response.data.message);
      }
    })
    .catch((error) => {
      console.error("註冊請求失敗：", error);
      alert("註冊失敗，請稍後再試。");
    });
}

// 返回登入頁面的處理
function handleBackToLogin() {
  router.push("/login"); // 使用 router 推送到 login 頁面
}
</script>

<style lang="sass" scoped>
.flex
  display: flex
  justify-content: center
  align-items: center
  height: 80vh

.register-container
  width: 900px
  text-align: center

.logo-header
  display: flex
  flex-direction: column
  gap: 4px
  margin-bottom: 24px
  align-items: flex-start

.register-title
  color: black
  font-size: 24px
  font-weight: 600
  line-height: 30px
  text-align: center

.register-subtitle
  color: black
  font-size: 16px
  font-weight: 700
  line-height: 24px
  text-align: center

.form-container
  display: flex
  flex-direction: column
  gap: 16px

.custom-select,
.custom-input
  width: 100%
  max-width: 400px
  height: 40px
  padding: 8px 16px
  border-radius: 8px
  border: 1px solid #E0E0E0
  font-family: Inter, sans-serif
  font-size: 20px
  font-weight: 700
  line-height: 30px
  text-align: left
  background-color: #FFFFFF
  color: black

.input-container
  display: flex
  flex-direction: column
  gap: 8px

.input-container-personal_information
  display: flex
  justify-content: space-between
  gap: 16px

.input-container-left,
.input-container-right
  flex: 1
  display: flex
  flex-direction: column
  gap: 8px

.register-button
  width: 100%
  height: 40px
  background: #000000
  color: white
  border: none
  border-radius: 8px
  font-family: Inter
  font-size: 20px
  font-weight: 500
  line-height: 30px
  cursor: pointer

  &:hover
   background-color: darken(#d9d9d9, 10%)
.backlogin-button
 width: 100%
 height: 40px
 background: #EEEEEE
 color: black
 border: none
 border-radius: 8px
 font-family: Inter
 font-size: 20px
 font-weight: 600
 line-height: 30px
 cursor: pointer

 &:hover
   background-color: darken(#d9d9d9, 10%)
.back-login-container
  display: flex
  align-items: center
  justify-content: center
  gap: 16px
  margin-bottom: 20px
  margin-top: 20px

.line
  flex: 1
  height: 1px
  background-color: #828282

.back-login-button
  background-color: #212529
  color: #828282
  font-size: 16px
  text-decoration: none
  border: none
  cursor: pointer

.footer
  font-family: Inter
  font-size: 16px
  font-weight: 400
  line-height: 24px
  text-align: center
  color: #828282
  margin-top: 32px

.v-enter-active, .v-leave-active
  transition: opacity 0.5s

.v-enter-from, .v-leave-to
  opacity: 0
</style>
