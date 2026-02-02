<template>

    <div>
        <div style="border: 2px solid red; background-color: greenyellow;">
            {{ user }}
        </div>
    </div>
</template>


<script>
export default {
    inject: ['user']
}
</script>