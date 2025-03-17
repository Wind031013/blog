<template>
  <div class="Block">
    <div class="imgBlock">
      <img src="/wx_logo.png" class="img" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Block {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #e2e2e2;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  transition: all 0.5s;
  cursor: pointer;
  position: relative; /* 为伪元素定位做准备 */
}

.Block:hover {
  width: 100px;
}

.img {
  width: 40px;
  position: relative;
  left: 3px;
}

/* 使用伪元素添加文字 */
.Block::after {
  content: "WeChat"; /* 文字内容 */
  position: absolute;
  left: 100%; /* 文字放在 .Block 的右侧 */
  top: 50%;
  transform: translateY(-50%); /* 垂直居中 */
  white-space: nowrap; /* 防止文字换行 */
  margin-left: 10px; /* 与图标的间距 */
  opacity: 0; /* 默认隐藏 */
  transition: opacity 0.3s ease; /* 添加淡入效果 */
  font-size: 14px;
  color: #333;
}

.Block:hover::after {
  opacity: 1; /* 悬停时显示文字 */
}
</style>