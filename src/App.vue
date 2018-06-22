<template>
    <div id="app">
        <AppHeader></AppHeader>
        <div class="my-container">
            <router-view class="router-view">
            </router-view>
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppFooter from "./components/AppFooter";
    export default {
        name: 'app',
        components: {AppFooter, AppHeader},
    }
</script>

<style>
    @import "~vue-material/dist/vue-material.min.css";
    @import "~vue-material/dist/theme/default.css";
    html {
        height: 100%;
    }
    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .router-view{
        flex: 1;
    }

</style>
