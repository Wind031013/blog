<template>
  <!-- 按钮 -->
  <div class="Block" @click="showQRCode">
    <div class="imgBlock">
      <img :src="logoSrc" class="img" />
    </div>
    <div class="textBlock">
      <label class="text">{{ SiteName }}</label>
    </div>
  </div>

  <!-- 二维码弹窗 -->
  <div v-if="isQRCodeVisible" class="overlay" @click="hideQRCode">
    <div class="qrcode-container" @click.stop>
      <img :src="qrCodeSrc" class="qrcode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps(["logoSrc", "SiteName", "qrCodeSrc"]);
const isQRCodeVisible = ref(false); // 控制二维码弹窗的显示

// 二维码的显示与隐藏
const showQRCode = () => {
  isQRCodeVisible.value = true;
};

const hideQRCode = () => {
  isQRCodeVisible.value = false;
};
</script>

<style scoped>
/* 按钮样式 */
.Block {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  padding: 5px;
  background-color: #e2e2e2;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  overflow: hidden;
  cursor: pointer;
  margin-right: 10px;
}

.Block:hover {
  width: 120px;
}

.img {
  width: 40px;
  border-radius: 10px;
}

.textBlock {
  margin-left: 10px;
  opacity: 0;
  transition: all 0.25s;
}

.text {
  font-weight: 700;
  cursor: pointer;
}

.Block:hover .textBlock {
  opacity: 1;
}

/* 遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000; /* 确保遮罩层在最上层 */
}

.qrcode {
  width: 500px;
  border-radius: 15px;
}
</style>
