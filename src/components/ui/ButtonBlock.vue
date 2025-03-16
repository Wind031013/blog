<template>
  <div class="ButtonBlock" @click="toWebSite">
    <div>
        <h1 class="webName">{{ site_name }}</h1>
        <label class="webIntroduce">{{ description }}</label>
      </div>
      <div>
        <img :src="img_src" class="img-resize">
      </div>
  </div>
      
</template>
  
<script setup lang="ts">
  const props = defineProps(['website', 'site_name', 'description', 'img_src'])
  const toWebSite = () => {
    window.location.href = props.website
  }
</script>
  
<style scoped>
a{
  text-decoration: none;
}

.ButtonBlock {
  width: 250px;
  height: 100px;
  border-radius: 15px;
  background-color: #bbbbbb;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
}

.ButtonBlock:hover {
  background-color: #929292;
}

.ButtonBlock:hover .webName {
  font-size: 35px;
}

.webName {
  font-size: 25px;
  position: relative;
  top: -5px;
  left: 20px;

  transition: all 0.25s;
}

.webIntroduce{
  position: relative;
  bottom: 8px;
  left:20px
}

.img-resize {
  width:70px;
  height: auto;
  border-radius: 25%;
  position: relative;
  right:10px;
  transition: all 0.5s;
}

.ButtonBlock:hover .img-resize{
  transform: translate(90px);
}
</style>