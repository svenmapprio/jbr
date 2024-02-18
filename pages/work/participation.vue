<script setup lang="ts">
    const {data: works} = useFetch("/api/work/participation");
</script>
<template>
    <WorkGrid v-if="works" :works="works" />
</template>