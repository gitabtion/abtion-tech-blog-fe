<template>
    <md-toolbar class="md-primary" style="position: fixed;top: 0;width: 100%">
        <div class="md-toolbar-row md-toolbar-offset">
            <div class="md-toolbar-section-start">
                <router-link to="/">
                    <md-button>
                        <h1 class="md-title">Abtion Tech</h1>
                    </md-button>
                </router-link>
                <router-link to="/posts" style="margin-left: 10px">
                    <md-button>Posts</md-button>
                </router-link>

            </div>
            <div class="md-toolbar-section-end">
                <router-link to="/before-login/login"  v-show="!$store.state.user">
                    <md-button>登录</md-button>
                </router-link>
                <router-link to="/before-login/register"  v-show="!$store.state.user">
                    <md-button>注册</md-button>
                </router-link>
                <router-link to="/user">
                    <md-avatar>
                        <div  v-on:click="onAvaClick">
                            <img src="../assets/default-ava.jpg" v-show="$store.state.user" alt="Avatar">
                        </div>
                    </md-avatar>
                </router-link>

            </div>
        </div>
    </md-toolbar>
</template>

<script>
    /* eslint-disable */
    import * as types from "../store/types";

    export default {
        name: "AppHeader",
        data() {
            return {
                // isLogined: !!this.$store.state.user
            }
        },
        // created() {
        //     console.log(1);
        //     console.log('getUser:' + this.$store.getters.getUser);
        //     console.log(typeof(this.$store.getters.getUser));
        //     this.$store.state.isLogined = !!this.$store.getters.getUser;
        //     console.log('isLogined:' + this.$store.state.isLogined);
        // },
        methods:{
            onAvaClick:function () {
                this.$store.commit(types.LOGOUT)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>