<script setup lang="ts">
    const {image} = defineProps<{image: any}>();
</script>

<template>
    <div class="container">
        <StrapiImage :image="image" size="large" />
    </div>
</template>

<style scoped>
    .container{
        aspect-ratio: 1;
        min-height: 0;
        min-width: 0;
    }
</style>