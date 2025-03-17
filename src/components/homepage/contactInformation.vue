<template>
  <label class="Call">Call Me:</label>
  <div class="contact">
    <qrcodeContactBlock
    v-for="item in QrCodeItems"
    :key="item.SiteName"
    :logoSrc="item.logoSrc"
    :SiteName="item.SiteName"
    :qrCodeSrc="item.qrCodeSrc"
    />
    <contactBlock
    v-for="item in SiteItems"
    :key="item.SiteName"
    :logoSrc="item.logoSrc"
    :SiteName="item.SiteName"
    :webSite="item.webSite"
    />
  </div>
</template>

<script setup lang="ts">
import qrcodeContactBlock from "../ui/qrcodeContactBlock.vue";
import contactBlock from "../ui/contactBlock.vue";

const SiteItems = [
    {
        logoSrc:"/billlogo.jpg",
        SiteName:"billbill",
        webSite:"https://space.bilibili.com/162901193?spm_id_from=333.1007.0.0"
    },
    {
        logoSrc:"/csdnlogo.jpg",
        SiteName:"CSDN",
        webSite:"https://blog.csdn.net/YUSHI_wind?spm=1000.2115.3001.5343"
    },
    {
        logoSrc:"/githublogo.png",
        SiteName:"GitHub",
        webSite:"https://github.com/Wind031013"
    },
]

const QrCodeItems = [
    {
        logoSrc:"/wx_logo.png",
        SiteName:"WeChat",
        qrCodeSrc:"wxqrcode.jpg"
    },
]
</script>

<style scoped>

.Call {
  font-size: 30px;
  display: inline-block;
  transition: transform 0.25s;
}

.Call:hover {
  transform: scale(1.3);
}

.contact {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: row; 
  margin-top: 10px;
  margin-bottom: 25px;
}
</style>
