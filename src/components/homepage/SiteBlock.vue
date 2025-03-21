<template>
  <div>
    <!--Site 块-->
    <label class="navigation">Site :</label>
    <div class="button-container">
      <ButtonBlock
        v-for="item in siteItems"
        :key="item.site_name"
        :website="item.website"
        :site_name="item.site_name"
        :description="item.description"
        :img_src="item.img_src"
      />
    </div>

    <!--Ai 块-->
    <label class="navigation">Ai模型 :</label>
    <div class="button-container">
      <ButtonBlock
        v-for="item in aiItems"
        :key="item.site_name"
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

const siteItems = [
  {
    website: "https://www.bilibili.com/",
    site_name: "b站",
    description: "billbill大学",
    img_src: "/siteLogo/billlogo.jpg",
  },
  {
    website: "https://www.csdn.net/",
    site_name: "csdn",
    description: "学习笔记",
    img_src: "/siteLogo/csdnlogo.jpg",
  },
  {
    website: "https://github.com/",
    site_name: "github",
    description: "代码仓库",
    img_src: "/siteLogo/githublogo.png",
  },
];

// AI 模型块的数据
const aiItems = [
    {
      website: "https://www.deepseek.com/",
      site_name: "DeepSeek",
      description: "探索未至之境",
      img_src: "/aiLogo/deepseeklogo.png",
    },
    {
      website: "https://chatglm.cn/",
      site_name: "智谱轻言",
      description: "靠谱青年用质谱",
      img_src: "/aiLogo/zhipulogo.png",
    },
    {
      website: "https://xinghuo.xfyun.cn/",
      site_name: "讯飞星火",
      description: "奇思妙想，我是你的创意搭档",
      img_src: "/aiLogo/xunfeixinghuologo.png",
    },
    {
      website: "https://kimi.moonshot.cn/",
      site_name: "KiMi",
      description: "会推理解析，能深度思考的智能助手",
      img_src: "/aiLogo/kimiLogo.png",
    },
  ];
</script>

<style scoped>
.navigation {
  /* margin-left: 30px; */
  font-size: 30px;
  margin-bottom: 10px;

  transition: transform 0.25s;
  display: inline-block;
}

.navigation:hover {
  transform: scale(1.3);
}

.button-container {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: row; /* 水平排列 */
  gap: 20px; /* 元素之间的间距 */
  /* margin-left: 30px; */
  margin-bottom: 50px;
  flex-wrap: wrap; /* 如果超出容器宽度，换行显示 */
}
</style>