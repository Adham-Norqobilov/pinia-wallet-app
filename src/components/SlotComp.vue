<template>
<slot name="topSlot"
:text="topText">

</slot>

<slot name="bottomSlot"
:text="bottomText">

</slot>
</template>

<script>
export default {
  data() {
    return {
        topText: 'This is TOP',
        bottomText: ' This is BOTTOM'
    }
  }
}
</script>

<style scoped>

</style>
