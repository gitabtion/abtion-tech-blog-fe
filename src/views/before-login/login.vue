<template>
    <div>
        <md-field :class="usernameInput">
            <label>用户名</label>
            <md-input v-model="username"></md-input>
            <span class="md-error">{{usernameError}}</span>
        </md-field>
        <md-field :class="passwordInput">
            <label>密码</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error">{{passwordError}}</span>
        </md-field>
        <md-button class="md-raised md-primary" style="justify-content: center" v-on:click="loginOnclick">
            登录
        </md-button>
    </div>
</template>

<script>
    import api from "../../constant/api";
    import md5 from 'js-md5'
    import * as types from "../../store/types";
    export default {
        /* eslint-disable */
        name: "login",
        data(){
            return{
                username: '',
                password: '',
                verifyPassword: '',
                userData: {},
                usernameError: "用户名不能为空！",
                passwordError: "密码不能为空！",
                verifyPasswordError: "密码不一致！",
                hasNameError: false,
                hasPasswordError: false,
                hasVerifyPasswordError: false,
                radio: '0'
            }
        },
        methods: {
            loginOnclick: function () {


                console.log('clicked!');

                if (!this.hasError()) {
                    let params = {
                        name: this.username,
                        password: md5(this.password),
                        client: 1
                    };
                    this.axios.post(api.login, params)
                        .then(response => {
                            console.log('login');
                            console.log(response);
                            this.userData = response.data.data;
                            console.log(this.userData);
                            console.log('login');
                            this.$store.commit(types.LOGIN,this.userData);
                            this.snackBar('登录成功', 1500);
                            this.$router.push('/posts')
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
            usernameInput() {
                return {
                    'md-invalid': this.hasNameError && this.username.length === 0
                }
            },
            passwordInput() {
                return {
                    'md-invalid': this.hasPasswordError && this.password.length === 0
                }
            }

        }
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>