<template>
    <div class="before-login">
        <md-card class="before-login-card">
            <h2 style="margin: auto">Abtion Tech</h2>
            <md-tabs md-sync-route md-alignment="centered">
                <md-tab id="tab-login" md-label="登录" to="/before-login/login" class="tab" style="height: max-content">
                    <router-view/>
                </md-tab>
                <md-tab id="tab-register" md-label="注册" class="tab" to="/before-login/register">
                    <router-view/>
                </md-tab>
            </md-tabs>
        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from "../../constant/api";
    import * as types from '../../store/types'

    export default {
        name: 'before-login',
        data() {
            return {
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
                            this.snackBar('登录成功', 1500)
                        })
                }
            },
            registerOnclick:function(){
                console.log(this.radio);
                if (!this.hasError()){
                    if (this.password===this.verifyPassword){
                        let parms = {
                            name: this.username,
                            password: this.password,
                            sex: this.radio
                        };
                        this.axios.post(api.register,parms)
                            .then(response=>{
                                if (response.data.code===0){
                                    this.password = '';
                                    this.snackBar('注册成功，请登录',1500)
                                }
                            })
                    } else {
                        this.verifyPasswordError = '密码不一致！';
                        this.hasVerifyPasswordError = true;
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
            }

        }
    }
</script>

<style scoped>
    .before-login {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .before-login-card {
        padding: 50px;
        width: 400px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    .tab {
        margin: auto;
        display: flex;
        flex-direction: column;
    }

</style>