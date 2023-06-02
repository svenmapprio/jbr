<script setup lang="ts">
    import { Work } from '~/utils/types';

    const {work, id} = defineProps<{id: number, work: Work}>();
    
    const path = `/work/${id}`;

    const workImageRes = work.work_images.data[0];
    const workImage = workImageRes?.attributes;
    const image = workImage?.image.data[0];
</script>

<template>
    <NuxtLink :to="path">
        <div class="grid-view">
            <StrapiImage class="poster" :image="image" v-if="!!image" size="medium" />
            <div class="label">
                {{ work.name }}
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
    .grid-view {
        position: relative;
        aspect-ratio: 1;
        min-height: 0;
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid-view:hover .label{
        opacity: 1;
    }

    .label{
        opacity: 0;
        z-index: 1;
    }

    .poster {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>