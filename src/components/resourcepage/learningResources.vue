<template>
  <div class="learningBlock">
    <div>
      <label class="title">综合</label>
      <div>
        <ButtonBlock
          v-for="item in items"
          :key="item.site_name"
          :website="item.website"
          :site_name="item.site_name"
          :description="item.description"
          :img_src="item.img_src"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBlock from "../ui/ButtonBlock.vue";

const items = [
  {
    website: "https://www.runoob.com/",
    site_name: "菜鸟教程",
    description: "学的不仅是技术，更是梦想！",
    img_src: "runoobLogo.ico",
  },
];
</script>

<style scoped>
.title {
  font-size: 30px;
  margin-bottom: 10px;

  transition: transform 0.25s;
  display: inline-block;
}

.title:hover {
  transform: scale(1.3);
}

.learningBlock {
  margin: 20px 30px;
}
</style>
