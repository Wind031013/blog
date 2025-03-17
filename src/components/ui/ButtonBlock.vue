<template>
  <div class="ButtonBlock" @click="toWebSite">
    <div class="text-container">
      <h1 class="site-name">{{ site_name }}</h1>
      <label class="description">{{ description }}</label>
    </div>
    <div class="img-container">
      <img :src="img_src" class="img">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['website', 'site_name', 'description', 'img_src']);
const toWebSite = () => {
  window.open(props.website, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.ButtonBlock {
  background-color: #e2e2e2;
  width: 250px;
  height: 100px;
  border-radius: 15px;
  
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  padding: 0 10px; 

  transition: all 0.5s;
  overflow: hidden;

  cursor: pointer;
}

.ButtonBlock:hover {
    background-color: #929292;
  }

.site-name {
  margin: 0;
  font-size: 20px;

  transition: all 0.5s;
}

.ButtonBlock:hover .site-name {
    font-size: 35px;
  }

.description {
  margin: 0; 
  font-size: 15px;
  color: #555;

  cursor: pointer;
}

.img-container {
  display: flex;
  align-items: center;
}

.img {
  width: 50px;
  height: 50px; 
  border-radius: 25%; 
  transition: all 0.5s;
}

.ButtonBlock:hover .img {
    transform: translateX(60px); 
  }
</style>