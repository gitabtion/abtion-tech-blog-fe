<template>
    <div id="app">
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
        <AppHeader style="flex: 0 0 auto"></AppHeader>
        <div class="app-container">
            <div class="my-container">
                <router-view>
                </router-view>
            </div>
            <AppFooter style="flex: none"></AppFooter>
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppFooter from "./components/AppFooter";
    import {mapState} from 'vuex'

    export default {
        name: 'app',
        components: {AppFooter, AppHeader},
        computed: mapState({
            token: state => state.token,
            user: state => state.user
        })
    }
</script>

<style>
    @import "~vue-material/dist/vue-material.min.css";
    @import "~vue-material/dist/theme/default.css";

    #app {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 14px;
        line-height: 2;
        color: #555;
    }

    .my-container {
        flex: 1 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
        padding-top: 30px;
    }

    .app-container {
        height: 100%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        /* 预留出导航栏的高度 */
        padding-top: 90px;
    }

</style>
