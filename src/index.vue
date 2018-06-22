<template>
    <div class="container">
        <div class="index">
            <img src="./assets/logo.png"/>
            <h3 class="md-title">Welcome to Abtion Tech</h3>
            <router-link :to="{path:'/login'}">
                <md-button herf="#/login" class="md-raised md-primary" style="width: auto">Login</md-button>
            </router-link>
            <md-button @click="showSnack">Show Snack</md-button>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    /* eslint-disable */

    import AppFooter from "./components/AppFooter";
    export default {
        name: '',
        components: {AppFooter},
        data() {
            return {
                msg: ''
            }
        },
        methods:{
            showSnack(){
                console.log("clicked!");
                console.log(this.snackBar);
                this.snackBar('test',1500);
            }
        }
    }
</script>

<style scoped>
    .index {
        position: fixed;
        margin: auto;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


</style>