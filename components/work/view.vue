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
        <WorkImageView v-for="workImage in work.sections" :section="workImage" :key="workImage.id" />
    </Column>
</template>

<style scoped>
    .container{
        width: 100%;
        gap: 20px;
    }
</style>