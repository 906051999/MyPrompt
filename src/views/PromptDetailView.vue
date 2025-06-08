<template>
    <v-container>
      <v-card v-if="prompt">
        <v-card-title>{{ prompt.title }}</v-card-title>
        <v-card-text>
          <p>ID: {{ prompt.id }}</p>
          <p>{{ prompt.description }}</p>
          <!-- 其他 prompt 详情信息 -->
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title>Prompt Not Found</v-card-title>
        <v-card-text>
          <p>Prompt with ID {{ $route.params.id }} not found.</p>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import promptsData from '/src/prompts.json';
  
  const route = useRoute();
  const prompt = ref(null);
  
  onMounted(() => {
    const promptId = parseInt(route.params.id, 10); // 将 promptId 转换为数字
    const foundPrompt = promptsData.find(p => p.id === promptId);
    prompt.value = foundPrompt;
  });
  </script>