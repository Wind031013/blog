<template>
  <div class="button-container">
    <RouterLink 
    v-for="item in items"
    :key="item.Name"
    :to="item.toPath" 
    class="button">
        <label class="text">{{ item.Name }}</label>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    toPath:"/",
    Name:"我的主页"
  },
  {
    toPath:"/resources",
    Name:"资源"
  },
]
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center; 
  align-items: center; 

  margin-left: 100px;
  gap: 20px;
}

.button {
  text-decoration: none;
}

.text {
    font-size: 20px;
    font-weight: 700;
    color: black;
    cursor: pointer;

    transition: transform 0.25s;
}

.resources-text:hover {
    transform: scale(1.3);
    font-weight: 900;
}
</style>
