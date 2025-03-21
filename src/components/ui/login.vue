<template>
    <div class="userInfo">
      <div v-if="isLoggedIn" class="informationContainer">
        <label class="user-name">Wind</label>
        <img  src="/head.png" class="head"/>
      </div>
      <div v-else class="loginContainer">
        <label class="login">登录</label>
        <label>|</label>
        <label class="register">注册</label>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let isLoggedIn = ref(false);
</script>

<style scoped>

.userInfo {
  display: flex;
  gap: 10px; /* 设置登录和注册之间的间距 */
  margin-left: auto; /* 将整个容器推到右侧 */
  align-items: center; /* 垂直居中 */
}

.informationContainer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  display: flex;
}

.loginContainer {
  display: flex;
  gap: 10px;
}


.login,
.register,
.head,
.user-name {
  cursor: pointer;
  transition: transform 0.5s;
}

.login:hover,
.register:hover,
.head:hover,
.user-name {
  color: #42b983; /* 悬停时改变颜色 */
  transform: scale(1.3);
}
</style>