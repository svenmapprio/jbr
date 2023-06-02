<script setup lang="ts">
    const {images, direction} = defineProps<{images: any[], direction: 'row' | 'column'}>();
</script>

<template>
    <div :class="`grid ${direction}`">
        <WorkImageGridItem v-for="image in images" :image="image" :key="image.id" />
    </div>
</template>

<style scoped>
    .grid{
        display: grid;
        gap: 30px;
    }

    .grid.row {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .grid.column {
        grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media only screen and (max-width: 600px) {
        .grid.row, .grid.column {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }
</style>