<template>
  <label class="Skill">Skill:</label>
  <div class="Block">
    <SkillBlock 
    v-for="item in imgItems"
    :key="item.imgSrc"
    :imgSrc="item.imgSrc"
    />
  </div>
</template>

<script setup lang="ts">
import SkillBlock from "../ui/SkillBlock.vue";

const imgItems = [
    {
        imgSrc:"/skillLogo/vueLogo.png"
    },
    {
        imgSrc:"/skillLogo/unityLogo.png"
    },
    {
        imgSrc:"/skillLogo/c++Logo.png"
    },
    {
        imgSrc:"/skillLogo/pythonLogo.png"
    },
    {
        imgSrc:"/skillLogo/prLogo.png"
    }
]
</script>

<style scoped>

.Skill {
  font-size: 30px;

  margin-bottom: 10px;

  transition: transform 0.25s;
  display: inline-block;
}

.Skill:hover {
  transform: scale(1.3);
}

.Block {
  background-color: #e2e2e2;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap:10px;
}


</style>
