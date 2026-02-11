<template>
salom Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa temporibus distinctio modi fugit. Eos asperiores ut, sunt voluptas iste suscipit perferendis corporis minima praesentium placeat, hic illo dignissimos repellat voluptate.

<h1 style="background-color: green;">{{ postsStore.allSummary }} jami summa</h1>
<ul v-if="postsStore.posts.length">
    <li v-for="(post, index) in postsStore.posts" :key="post.id">
        {{ post.id }}: user Id ({{ post.userId }}) said "{{ post.title }}" || <RouterLink :to="`/posts/${post.id}`">See more...</RouterLink>
    </li>
</ul>
</template>


<script setup>
import { usePostsStore } from '@/stores/posts';
import { onMounted } from 'vue';

const postsStore = usePostsStore();

onMounted(() => {
    postsStore.getPosts();
    // postsStore.pos
})


</script>