<template>
  <ol ref="olEl">
    kijjijujuj 
  </ol>
  {{ user }}
  <BaseAlert>sdfsdf</BaseAlert>
</template>

<script>
import BaseAlert from './BaseAlert.vue';

export default {
    components: {
        BaseAlert
    },
  mounted() {
    this.logHook("mounted");
  },
  unmounted() {
    this.logHook("unmounted")
  },
  activated() {
    this.logHook("activated");

  },
  deactivated() {
    this.logHook("deactivated");

  },
//   inject: ['user'],
  methods: {
    logHook(hookName) {
        console.log(hookName)

        const li = document.createElement('li');

        li.innerHTML= hookName;

        this.$refs.olEl.appendChild(li)
    }
  }
}
</script>

<style>
li {
  background: lightcoral;
  margin: 4px;
}
</style>
