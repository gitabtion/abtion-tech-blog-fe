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
        <md-field :class="verifyPasswordInput">
            <label>确认密码</label>
            <md-input v-model="verifyPassword" type="password"></md-input>
            <span class="md-error">{{verifyPasswordError}}</span>
        </md-field>
        <md-button class="md-raised md-primary" style="justify-content: center" v-on:click="registerOnclick">
            注册
        </md-button>
    </div>
</template>

<script>
    import api from '../../constant/api'
    import * as types from "../../store/types";
    import md5 from 'js-md5'
    /* eslint-disable */
    export default {
        name: "register",
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
            }
        },
        mounted(){
            this.$store.commit(types.TITLE,"注册")
        },
        methods: {
            loginOnclick: function () {


                console.log('clicked!');

                if (!this.hasError()) {
                    let parms = {
                        name: this.username,
                        password: md5(this.password),
                        client: 1
                    };
                    this.axios.post(api.login, parms)
                        .then(response => {
                            this.userData = response.data;
                            this.$store.commit(types.LOGIN, this.userData);
                            console.log(this.userData);
                            console.log(window);
                            this.snackBar('登录成功', 2000)
                        })
                }
            },
            registerOnclick:function(){
                if (!this.hasError()){
                    if (this.password===this.verifyPassword){
                        let params = {
                            name: this.username,
                            password: md5(this.password),
                        };
                        this.axios.post(api.register,params)
                            .then(response=>{
                                if (response.code===0){
                                    this.password = '';
                                    this.verifyPassword = '';
                                    this.snackBar('注册成功，请登录',2000);
                                    this.$router.push('/before-login/login')
                                }
                            })
                    } else {
                        this.verifyPasswordError = '密码不一致！';
                        this.hasVerifyPasswordError = true;
                        console.log(this.hasVerifyPasswordError)
                    }
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
            },
            verifyPasswordInput(){
                return {
                    'md-invalid': this.hasVerifyPasswordError
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