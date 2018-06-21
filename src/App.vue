<template>
    <div id="app">
        <md-toolbar class="toolbar">
            <h1 class="md-title">Abtion Tech</h1>
        </md-toolbar>
        <div class="container">

        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {

        }
    }
</script>

<style>
    @import "~vue-material/dist/vue-material.min.css";
    @import "~vue-material/dist/theme/default.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .toolbar{
        position: fixed;
    }
</style>
