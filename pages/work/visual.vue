<script setup lang="ts">
    const {data: works} = useFetch("/api/work/visual");
</script>
<template>
    <WorkGrid v-if="works" :works="works" />
</template>