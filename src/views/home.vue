<template>
    <div class="container">
        <div class="index" style="margin: auto">
            <img src="../assets/logo.png"/>
            <h3 class="md-title">Welcome to Abtion Tech</h3>
            <router-link :to="{path:'/before-login/login'}">
                <md-button class="md-raised md-primary" style="width: auto">Login</md-button>
            </router-link>
            <md-button @click="showSnack">Show Snack</md-button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */

    export default {
        name: 'home',
        data() {
            return {
                msg: ''
            }
        },
        methods:{
            showSnack(){
                console.log("clicked!");
                console.log(this.snackBar);
                this.snackBar('test',2000);
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>