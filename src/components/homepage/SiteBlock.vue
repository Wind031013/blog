<template>
  <div>
    <label class="navigation">导航栏 :</label>
    <div class="button-container">
      <ButtonBlock
      v-for="item in items"
      :key = "item.site_name"
      :website="item.website"
      :site_name="item.site_name"
      :description="item.description"
      :img_src="item.img_src"
    />
    </div>

  </div>
</template>

<script lang="ts" setup>
import ButtonBlock from '../ui/ButtonBlock.vue';

const items = [
  {
    website: "https://space.bilibili.com/162901193?spm_id_from=333.1007.0.0",
    site_name: "b站",
    description: "billbill大学",
    img_src: "/billlogo.jpg",
  },
  {
    website: "https://blog.csdn.net/YUSHI_wind?spm=1018.2226.3001.5343",
    site_name: "csdn",
    description: "学习笔记",
    img_src: "/csdnlogo.jpg",
  },
  {
    website: "https://www.zhihu.com/people/F4lc0n",
    site_name: "知乎",
    description: "不懂就问",
    img_src: "/zhihulogo.jpg",
  },
];

</script>

<style scoped>
.navigation{
  margin-left:30px;
  margin-top: 10px;
  font-size: 30px;
}
.ButtonBlock{
  margin-left: 15px;
  margin-top: 20px;
  
}

.button-container {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: row; /* 水平排列 */
  gap: 20px; /* 元素之间的间距 */
  margin-left: 15px;
  margin-top: 20px;
  flex-wrap: wrap; /* 如果超出容器宽度，换行显示 */
}
</style>