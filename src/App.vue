<template>
    <div id="app">
        <AppHeader style="flex: 0 0 auto"></AppHeader>
        <div class="my-container">
            <router-view class="router-view">
            </router-view>
        </div>
        <AppFooter style="flex: 0 0 auto"></AppFooter>
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

    html {
        height: 100%;
    }

    body {

        height: 100%;
    }

    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #2c3e50;
    }

    .my-container {
        margin-top: 90px;
        flex: 1 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
