<script setup>
    const route = useRoute();

    const {data: work} = await useWork(parseInt(route.params.id));
</script>

<template>
    <WorkView :work="work.attributes"/>
</template>