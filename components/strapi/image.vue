<script setup lang="ts">
    const {image, size} = defineProps<{image: any, size: 'small' | 'medium' | 'large'}>();

    let url = image?.attributes.formats[size]?.url;
    const sizes = ['small', 'medium', 'large'];
    let index = sizes.length - 1;
    while(!url && index >= 0){
        url = image?.attributes.formats[sizes[index--]]?.url;
    }

    if(!url) url = image?.attributes.url;
</script>

<template>
    <nuxt-img class="image" provider="strapi" :src="url" v-if="!!url" />
</template>

<style scoped>
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>