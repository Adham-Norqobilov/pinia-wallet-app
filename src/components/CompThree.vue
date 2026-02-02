<template>
    <div class="box" :style="{backgroundColor:bgColor}">
        <h2>Component Three!</h2>
        <p>Choose a new background color:</p>
        <input type="color" v-model="bgColor">
    </div>
</template>
<script>
    export default {
        name: 'CompThree',
        data(){
            return{
                bgColor: ' ',
            }
        }
    }
</script>
<style>
.box {
    padding: 10px 10px 10px 20px;
    border: solid 1px black;
    border-radius: 10px;
    margin-top: 20px;
}
</style>