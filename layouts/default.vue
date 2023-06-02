<template>
    <Column class="container">
        <Column class="main">
            <Column class="info">
                <div>
                    Johan Buskov Romme
                </div>
                <div>
                    +45 21 67 41 10
                </div>
                <div>
                    asulaart@gmail.com
                </div>
            </Column>
            <MenuRow>
                <MenuLink to="/">Work</MenuLink>
                <MenuLink to="/cv">CV</MenuLink>
                <MenuLink to="/publications">Publications</MenuLink>
            </MenuRow>
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