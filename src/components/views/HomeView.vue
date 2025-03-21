<template>
  <div class="homepage">
    <introduce />
    <div class="content">
      <contactInformation />
      <SiteBlock />
      <Skill />
    </div>
  </div>
</template>

<script setup lang="ts">
import introduce from "../homepage/introduce.vue";
import SiteBlock from "../homepage/SiteBlock.vue";
import contactInformation from "../homepage/contactInformation.vue";
import Skill from "../homepage/Skill.vue";
</script>

<style scoped>
.homepage {
  margin-top: 10px;
  display: flex;
}

.content {
  margin-left: 30px;
}
</style>
