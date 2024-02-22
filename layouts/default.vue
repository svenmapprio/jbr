<template>
    <Column class="container">
        <Column class="main">
            <Column class="info">
                <div>
                    <MenuLink to="/">Johan Buskov Romme</MenuLink> - <MenuLink to="/info">Info</MenuLink>
                </div>
            </Column>
            <Column class="page">
                <slot />
            </Column>
        </Column>
    </Column>
</template>

<style>
    body{
        margin: 0;
        padding: 0;
        font-family: "Roboto Condensed";
    }

    .main{
        display: flex;
        align-items: center;
        align-self: center;
        max-width: 800px;
        gap: 20px;
    }
    .page{
        width: 100vw;
        align-items: center;
        max-width: calc(100% - 60px);
        gap: 20px;
    }
    .info{
        padding: 30px;
        align-self: flex-start;
        gap: 5px;
    }
</style>