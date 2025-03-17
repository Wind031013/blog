<template>
    <div class="headerContainer">
        <label class="headerFont">Hello World!</label>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .headerContainer{
        display: flex;
        padding:20px;
        background-color: #e2e2e2;
        border-radius: 15px;
        justify-content: center;
        align-self: center;
    }

    .headerFont{
        font-size: 30px;
        font-weight: 700;
        margin-right: 10px;
        transition:all 0.5s;
        cursor: pointer;
    }
    .headerFont:hover {
        font-size: 40px;
    }
</style>