<template>
    <div>
        <md-field>
            <label>用户名</label>
            <md-input v-model="username"></md-input>
            <span class="md-error" v-show="hasNameError">{{usernameError}}</span>
        </md-field>
        <md-field>
            <label>密码</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error" v-show="hasPasswordError">{{passwordError}}</span>
        </md-field>
        <md-button class="md-raised md-primary" style="justify-content: center" v-on:click="loginOnclick">
            登录
        </md-button>
    </div>
</template>

<script>
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
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>