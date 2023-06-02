<template>
    <div class="row">
        <slot />
    </div>
</template>

<style scoped>
    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>