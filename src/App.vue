<template>
    <HeadView/>
    <RouterView></RouterView>
</template>

<script lang = "ts" setup>
    import HeadView from './components/views/HeadView.vue';
    import { RouterView } from 'vue-router';
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