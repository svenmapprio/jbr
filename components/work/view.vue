<script setup lang="ts">
    import { Work } from '~/utils/types';

    const { work } = defineProps<{work: Work}>();

    const workImages = work.work_images?.data ?? [];
</script>

<template>
    <Column class="container">
        <WorkTitle :text="work.name"/>
        <WorkImageView v-for="workImage in workImages" :work-image="workImage.attributes" :key="workImage.id" />
    </Column>
</template>

<style scoped>
    .container{
        width: 100%;
        gap: 20px;
    }
</style>