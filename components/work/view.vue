<script setup lang="ts">
    import type { WorkDetails } from '~/helpers/client/types';

    interface Props {
        work: WorkDetails;
    }

    defineProps<Props>();
</script>

<template>
    <Column class="container">
        <WorkTitle :text="work.name ?? ''"/>
        <WorkDescription v-if="work.description" :text="work.description"/>
        <WorkImageView v-for="workImage in work.sections" :section="workImage" :key="workImage.id" />
    </Column>
</template>

<style scoped>
    .container{
        width: 100%;
        gap: 20px;
        padding-bottom:50px;
    }
</style>