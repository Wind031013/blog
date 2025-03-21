<template>
  <div>
    <img :src="imgSrc" class="skill-icon" />
  </div>
</template>

<script setup lang="ts">
defineProps(['imgSrc'])
</script>

<style scoped>
.skill-icon {
  width: 50px;
  height: 50px;
  border-radius: 25%;
  transition: transform 0.25s;
  cursor:pointer;
}

.skill-icon:hover {
    transform: scale(1.3);
}
</style>
