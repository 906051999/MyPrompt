<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>MyPrompt</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app>
      <!-- 导航链接 -->
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/prompts">
          <v-list-item-title>Prompts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} MyPrompt</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>