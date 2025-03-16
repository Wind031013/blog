<template>
    <div>
        <myHeader/>
    </div>
    <div class="homepage">
        <introduce/>
        <SiteBlock/>
    </div>
</template>

<script lang = "ts" setup>
    import myHeader from './components/homepage/myheader.vue'
    import introduce from './components/homepage/introduce.vue'
    import SiteBlock from './components/homepage/SiteBlock.vue'
</script>

<style scoped>
    .homepage {
        margin-top: 10px;
        display: flex;
    }
</style>