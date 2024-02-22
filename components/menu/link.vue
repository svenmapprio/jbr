<template>
    <NuxtLink>
        <slot />
    </NuxtLink>
</template>

<style scoped>
    a {
        all: unset;
        cursor: pointer;
        transition: opacity 150ms;
    }

    a:not(.router-link-active):not(:hover){
        opacity: 0.5;
    }
</style>