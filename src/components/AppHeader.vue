<template>
    <md-toolbar class="toolbar">
        <router-link to="/"><h1 class="md-title">Abtion Tech</h1></router-link>
        <router-link to="/before-login/login" style="right: 0;margin: 10px"><md-button>Login</md-button></router-link>
    </md-toolbar>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    .toolbar{
        position: fixed;
        top: 0;
        width: 100%;
    }
</style>