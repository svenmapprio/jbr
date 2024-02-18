<script setup lang="ts">
    const {data: works} = useFetch("/api/work/sound");
</script>
<template>
    <WorkGrid v-if="works" :works="works" />
</template>