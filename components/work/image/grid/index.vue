<script setup lang="ts">
import type { WorkDetails } from '~/helpers/client/types';

    const {images, direction} = defineProps<{images: WorkDetails["sections"][number]["images"], direction: 'row' | 'column'}>();

    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
import type { SlideData } from 'photoswipe';

    const lb = ref<PhotoSwipeLightbox>();

    onMounted(() => {
        lb.value = new PhotoSwipeLightbox({
            dataSource: images.map(image => ({src: image.url, width: image.width, height: image.height, alt: image.id.toString()})) as SlideData[],
            pswpModule: () => import('photoswipe'),
        });

        lb.value.init();
    });

    onUnmounted(() => {
        if (lb.value) {
            lb.value.destroy();
            lb.value = undefined;
        }
    });

    const handleClick = (index: number) => {
        lb.value?.loadAndOpen(index);
    }
</script>

<template>
    <div :class="`grid ${direction}`">
        <WorkImageGridItem v-for="(image, index) in images" :image="image" :key="image.id" @click="() => handleClick(index)" />
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