<script setup lang="ts">
    import type { WorkDetails } from '~/helpers/client/types';

    const props = defineProps<{id: number, work: WorkDetails}>();
    
    const path = computed(() => `/work/${props.id}`);

    const url = computed(() => props.work.sections.find(section => !!section.images.length)?.images[0]?.url);
</script>

<template>
    <NuxtLink :to="path">
        <div class="grid-view">
            <div class="poster" >
                <StrapiImage v-if="!!url" :url="url" size="medium"/>
            </div>
            
            <div class="link"> {{ work.name }} </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
    .grid-view {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none !important;
    }

    .poster {
        width: 100%;
        aspect-ratio: 1;
        background-color: rgb(220,220,220);
    }

    a {
        all: unset;
        cursor: pointer;
        transition: opacity 150ms;
    }

    a:not(:hover) div.link{
        opacity: 0.5;
    }
</style>