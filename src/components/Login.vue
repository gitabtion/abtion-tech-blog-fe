<template>
    <div class="login">
        <md-card class="login-card">
            <img src="../assets/logo.png"/>
            <md-field :class="usernameInput">
                <label>username</label>
                <md-input v-model="username"></md-input>
                <span class="md-error" v-show="hasNameError">{{usernameError}}</span>
            </md-field>
            <md-field :class="passwordInput">
                <label>password</label>
                <md-input v-model="password" type="password"></md-input>
                <span class="md-error" v-show="hasPasswordError">{{passwordError}}</span>
            </md-field>
            <md-button class="md-raised md-primary" v-on:click="loginOnclick">login</md-button>
        </md-card>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from "../constant/api";
    import * as types from '../store/types'
    import AppFooter from "./AppFooter";

    export default {
        name: 'login',
        components: {AppFooter},
        data() {
            return {
                username: '',
                password: '',
                userData: {},
                usernameError: "用户名不能为空！",
                passwordError: "密码不能为空！",
                hasNameError: false,
                hasPasswordError: false,
            }
        },
        methods: {
            loginOnclick: function () {


                console.log('clicked!');

                if (!this.hasError()) {
                    let parms = {
                        name: this.username,
                        password: this.password,
                        client: 1
                    };
                    this.axios.post(api.login, parms)
                        .then(response => {
                            this.userData = response.data.data;
                            this.$store.commit(types.LOGIN, this.userData);
                            console.log(this.userData);
                            console.log(window);
                            this.snackBar('登录成功',1500)
                        })
                }
            },
            hasError: function () {
                if (this.username.length === 0) {
                    this.usernameError = '用户名不能为空！';
                    this.hasNameError = true;
                } else {
                    this.hasNameError = false;
                }
                if (this.password.length === 0) {
                    this.passwordError = '密码不能为空！';
                    this.hasPasswordError = true;
                } else {
                    this.hasPasswordError = false;
                }

                return this.hasNameError | this.hasPasswordError;
            }
        },
        computed: {
            usernameInput () {
                return {
                    'md-invalid': this.hasNameError&&this.username.length === 0
                }
            },
            passwordInput () {
                return {
                    'md-invalid': this.hasPasswordError&&this.password.length === 0
                }
            }

        }
    }
</script>

<style scoped>
    .login-card {
        padding: 50px;
        width: 400px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>