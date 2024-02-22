<script setup lang="ts">
    const {image} = defineProps<{image: {url: string | null, width: number | null, height: number | null}}>();
    const emit = defineEmits<{(event: "click"): void}>();
    const aspectRatio = computed(() => (image.width ?? 0) / (image.height ?? 0));
</script>

<template>
    <div class="container" @click="() => emit('click')" :style="{aspectRatio}">
        <StrapiImage v-if="image.url" :url="image.url" />
    </div>
</template>

<style scoped>
    .container{
        min-height: 0;
        min-width: 0;
        cursor: pointer;
    }
</style>