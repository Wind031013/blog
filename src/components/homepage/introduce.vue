<template>
    <div class="Block">
      <div class="headerBlock">
        <img src="../../../public/head.png" alt="" class="headImg" />
        <label class="name" >wind</label>
        <label class="ip">IP : {{ ip }}</label>
        <label class="">School : {{ school }}</label>
      </div>

      <div class="tagBlock">
        <label class="tag">个人标签:</label>
        <div class="tags" v-for="(tag, index) in tags":key="index">
            <label class="tagName">{{ tag }}</label>
        </div>
      </div>
    </div>
    
  </template>
  
<script setup lang="ts">
    let ip = "China"
    let school = "IMNU"
    const tags = [
        "大学牲",
        "健身细狗",
        "摄影爱好者"
    ]
</script>
<style scoped>
.Block {
    display: flex;
    padding-bottom: 200px;
    background-color: #e2e2e2;
    width: 250px;
    border-radius: 20px;
    flex-direction: column;
}

.headImg {
border-radius: 50%;
width: 150px;
height: 150px;
object-fit: cover;
margin: 20px auto;
}

.headerBlock {
    display: flex;
    flex-direction: column; /* 改为垂直排列 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.name {
font-size: 30px;
}

.ip{
    margin-top: 10px;
}

.tagBlock{
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.tag{
    margin-left: 30px;
    font-size: 20px;
    margin-bottom: 20px;
}

.tags{
    display: flex;
    background-color: #bbbbbb;
    height: 30px;
    width: 150px;
    border-radius: 20px;
    margin: 8px auto; 
    justify-content: center;
    align-self: center;
}

.tagName{
    font-size: 20px;
}
</style>
  