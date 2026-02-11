<template>
    page of one post ({{ paramsId }})
    {{ 
    postsStore.post }}
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePostsStore } from '@/stores/posts';
import { computed, onMounted } from 'vue';
const route = useRoute();
console.log(route)
const postsStore = usePostsStore();

const paramsId = computed(() => route.params.id ?? null); 
onMounted(() => {
    postsStore.getPost(paramsId.value)
});
</script>