<script setup lang="ts">
    import WorkView from "~/components/work/view.vue";

    const route = useRoute();

    const {data: work} = useFetch(`/api/work/${parseInt(route.params.id as string)}`);
</script>

<template>
    <WorkView v-if="work" :work="work" />
</template>