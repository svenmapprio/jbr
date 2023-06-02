<script setup lang="ts">
    import { WorkImage } from '~/utils/types';

    const { workImage } = defineProps<{workImage: WorkImage}>();
    const images = workImage.image.data;
    const direction: 'row' | 'column' = workImage.textPosition === 'top' || workImage.textPosition === 'bottom' ? 'row' : 'column';
</script>

<template>
    <div :class="`container ${workImage.textPosition}`">
        <div class="image">
            <WorkImageGrid :images="images" :direction="direction" />
        </div>
        <div class="description"><WorkImageDescription :text="workImage.description" /></div>
    </div>
</template>

<style scoped>
    .container {
        display: grid;
    }

    .container.top{
        grid-template-areas: "description" "image";
        grid-template-rows: auto auto;
    }

    .container.bottom{
        grid-template-areas: "image" "description";
        grid-template-rows: auto auto;
    }

    .container.left{
        grid-template-areas: "description image";
        grid-template-columns: 1fr minmax(auto, 300px);
    }

    .container.right{
        grid-template-areas: "image description";
        grid-template-columns: minmax(auto, 300px) 1fr;
    }

    .left > .image, .right > .image{
        max-height: 800px;
    }

    .image{
        grid-area: image;
    }

    .description{
        grid-area: description;
    }

    @media only screen and (max-width: 600px) {
        .container.top, .container.bottom, .container.left, .container.right {
            grid-template-areas: "image" "description";
            grid-template-rows: auto auto;
            grid-template-columns: unset;
        }
    }
</style>