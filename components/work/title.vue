<script setup lang="ts">
    const {text} = defineProps<{text: string}>();
</script>

<template>
    <h1>{{ text }}</h1>
</template>

<style scoped>
    h1 {
        all:unset;
        font-size: 24px;
        font-weight: 500px;
    }
</style>