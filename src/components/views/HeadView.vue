<template>
  <div class="headerContainer">
    <label class="headerFont">Hello World!</label>
    <Jumper/>
    <login />
  </div>
</template>

<script setup lang="ts">
import login from "../ui/login.vue";
import Jumper from "../jump/Jumper.vue";

</script>

<style scoped>
.head {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.headerContainer {
  display: flex;
  padding: 20px;
  background-color: #e2e2e2;
  border-radius: 15px;
}

.headerFont {
  font-size: 30px;
  font-weight: 700;
  margin-right: 10px;
  transition: all 0.5s;
  cursor: pointer;
}
.headerFont:hover {
  font-size: 40px;
}
</style>
