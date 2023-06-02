<script setup lang="ts">
    import { Work } from '~/utils/types';

    const props = defineProps<{type: Work['type']}>();

    const {data} = await useWorks(props.type);
</script>

<template>
    <div class="grid">
        <WorkGridItem v-for="work in data" :key="work.id" :id="work.id" :work="work.attributes" />
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