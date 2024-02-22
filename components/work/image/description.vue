<script setup lang="ts">
import { replaceTextLinks } from '~/helpers/common';

const props = defineProps<{text: string | null}>();

const replacedText = computed(() => replaceTextLinks(props.text ?? ""));
</script>

<template>
    <p v-html="replacedText" />
</template>

<style scoped>
    p {
        all:unset;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.3;
        white-space: pre-line;
    }
</style>