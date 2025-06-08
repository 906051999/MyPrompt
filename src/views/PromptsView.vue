<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="prompt in prompts" :key="prompt.id">
          <v-card :to="`/prompt/${prompt.id}`" link class="prompt-card">
            <v-card-title class="prompt-title">{{ prompt.title }}</v-card-title>
            <v-card-text class="prompt-description">
              {{ prompt.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import promptsData from '/src/prompts.json';
  
  const prompts = ref(promptsData);
  </script>
  
  <style scoped>
  .prompt-card {
    height: 200px; /* 设置卡片高度 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px; /* 添加圆角 */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    background-color: white; /* 设置背景颜色 */
    transition: all 0.3s ease; /* 添加过渡效果 */
    border: 1px solid rgba(0, 0, 0, 0.1); /* 添加边框 */
  }
  
  .prompt-card:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 悬停时添加阴影 */
  }
  
  .prompt-title {
    font-size: 1.2rem;
    font-weight: 500;
    white-space: nowrap; /* 防止标题换行 */
    overflow: hidden; /* 隐藏溢出内容 */
    text-overflow: ellipsis; /* 使用省略号 */
    padding: 16px;
  }
  
  .prompt-description {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 0 16px 16px 16px; /* 添加内边距 */
    overflow: hidden; /* 隐藏溢出内容 */
    text-overflow: ellipsis; /* 使用省略号 */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 显示 3 行 */
    -webkit-box-orient: vertical;
  }
  </style>