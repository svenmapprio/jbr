<script setup lang="ts">
    const {text} = defineProps<{text: string}>();
</script>

<template>
    <p>{{ text }}</p>
</template>

<style scoped>
    p {
        all:unset;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.3;
    }
</style>