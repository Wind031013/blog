<template>
    <!-- 按钮 -->
    <div class="Block" @click="link">
      <div class="imgBlock">
        <img :src="logoSrc" class="img" />
      </div>
      <div class="textBlock">
        <label class="text">{{ SiteName }}</label>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps(['logoSrc', 'SiteName', 'webSite'])
  const link = () => {
    window.open(props.webSite, '_blank', 'noopener,noreferrer')
  }
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
    margin-left: 10px;
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
  </style>
  