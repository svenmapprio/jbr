<script setup lang="ts">
    import type { WorkDetails } from '~/helpers/client/types';

    const { section } = defineProps<{section: WorkDetails["sections"][number]}>();
    
    const direction: 'row' | 'column' = section.textPosition === 'top' || section.textPosition === 'bottom' ? 'row' : 'column';
</script>

<template>
    <div :class="`container ${section.textPosition}`">
        <div class="image" v-if="!!section.images?.length">
            <WorkImageGrid :images="section.images" :direction="direction" />
        </div>
        <div class="description"><WorkImageDescription :text="section.description" /></div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
    }

    .container.top{
        flex-direction: column-reverse;
    }

    .container.bottom{
        flex-direction: column;
    }

    .container.left{
        flex-direction: row-reverse;
    }

    .container.right{
        flex-direction: row;
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