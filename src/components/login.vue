
<template>
    <div class="login">
        <md-card class="login-card">
            <img src="../assets/logo.png"/>
            <md-field>
                <label>username</label>
                <md-input v-model="username"></md-input>
            </md-field>
            <md-field>
                <label>password</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>
            <md-button class="md-raised md-primary" v-on:click="loginOnclick">login</md-button>
        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from "../constant/api";
    import * as types from '../store/types'


    export default {
        name: "login",
        username: '',
        password: '',
        userData: {},
        methods: {
            loginOnclick: function () {
                console.log('clicked!');
                let parms = {
                    name: this.username,
                    password: this.password,
                    client: 1
                };
                this.axios.post(api.login,parms)
                    .then(response=>{
                        this.userData = response.data.data;
                        this.$store.commit(types.LOGIN,this.userData);
                        console.log(this.userData)
                    })
            }
        }
    }
</script>

<style scoped>
    .login-card{
        padding: 50px;
        width: 400px;
        margin: 50px auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


</style>