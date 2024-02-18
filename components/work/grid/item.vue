<script setup lang="ts">
    import type { WorkDetails } from '~/helpers/client/types';

    const props = defineProps<{id: number, work: WorkDetails}>();
    
    const path = computed(() => `/work/${props.id}`);

    const url = computed(() => props.work.sections[0]?.images[0]?.url);
</script>

<template>
    <NuxtLink :to="path">
        <div class="grid-view">
            <StrapiImage v-if="!!url" class="poster" :url="url" size="medium" />
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