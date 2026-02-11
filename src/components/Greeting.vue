<template>
    <div class="container">
        <Transition>
            <h1 :key="changeText">{{ changeText }}</h1>
        </Transition>
    </div>
</template>



<!-- Script -->
<script setup>
import { computed, inject } from 'vue';

const settedLang = inject('globalLang')

const text = {
    en: 'Welcome to Vue!',
    uz: 'Vuega xush kelibsiz!'
}

const changeText = computed(() => {
    return text[settedLang.value]
})
</script>



<!-- Style -->
<style scoped>
.container {
    text-align: start;
    position: relative;
    height: 60px;
}
h1 {
    position: absolute;
    top: 0;
    text-align: center;
}



.v-enter-from {
    animation: enteringText .5s;
}

.v-enter-active {
    animation: enteringText 0.5s ease-out;
}

.v-enter-to {
    animation: enteringText .5s;
}

@keyframes enteringText {
    from {
        translate: -200px 0;
        opacity: 0;
    }

    to {
        translate: 0 0;
        opacity: 1;
    }
}

.v-leave-from {
    animation: leavingText .5s;
}

.v-leave-active {
    animation: leavingText 0.5s ease-in;
}

.v-leave-to {
    animation: leavingText .5s;
}

@keyframes leavingText {
    from {
        translate: 0 0;
        opacity: 1;

    }

    to {
        translate: 200px 0;
        opacity: 0;
    }
}
</style>