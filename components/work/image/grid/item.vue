<script setup lang="ts">
    const {image} = defineProps<{image: {url: string | null, width: number | null, height: number | null}}>();
    const emit = defineEmits<{(event: "click"): void}>();
</script>

<template>
    <div class="container"
        @click="() => emit('click')"
    >
        <StrapiImage v-if="image.url" :url="image.url" />
    </div>
</template>

<style scoped>
    .container{
        aspect-ratio: 1;
        min-height: 0;
        min-width: 0;
    }
</style>