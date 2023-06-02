<template>
    <NuxtLink>
        <slot />
    </NuxtLink>
</template>

<style scoped>
    a {
        all: unset;
        cursor: pointer;
    }

    a:not(.router-link-active){
        opacity: 0.5;
    }
</style>