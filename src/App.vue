<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
const navbarItems = ref([
  {
    to: '/',
    title: "Home"
  },
  {
    to: '/posts',
    title: "Posts"
  },
  {
    to: '/animals',
    title: "Animals"
  },
  {
    to: '/food',
    title: "Foods"
  },
  {
    to: '/todo',
    title: "Todo"
  },
]);
</script>

<template>
  <nav>
    <ul>
      <li v-for="navItem in navbarItems" :key="navItem.to">
        <router-link :to="navItem.to">{{ navItem.title }}</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>
