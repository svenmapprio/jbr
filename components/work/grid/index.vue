<script setup lang="ts">
    import type { WorkDetails } from '~/helpers/client/types';

    defineProps<{works: WorkDetails[]}>();
</script>

<template>
    <div class="grid">
        <WorkGridItem v-for="work in works" :key="work.id" :id="work.id" :work="work" />
    </div>
</template>

<style scoped>
    .grid{
        display: grid;
        width: 100%;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
</style>