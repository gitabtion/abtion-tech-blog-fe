<template>
    <md-toolbar class="md-primary" style="position: fixed;top: 0;width: 100%;z-index: 2000">
        <div class="md-toolbar-row md-toolbar-offset">
            <div class="md-toolbar-section-start" style="flex-wrap: wrap;display: flex">
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
                <router-link to="/before-login/login" v-show="!$store.state.user">
                    <md-button>登录</md-button>
                </router-link>
                <router-link to="/before-login/register" v-show="!$store.state.user">
                    <md-button>注册</md-button>
                </router-link>
                <router-link to="/user">
                    <md-avatar>
                        <div v-on:click="onAvaClick">
                            <img :src="ava" v-show="$store.state.user">
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
        data: () => ({
            ava: '../assets/default-ava.jpg'
        }),
        mounted(){
            console.log(this.$store.state.user);
            if (this.$store.state.user){
                let mAva = this.$store.state.user.avatar;
                if (mAva){
                    this.ava = mAva;
                    console.log(this.ava)
                }
            }
        },
        methods: {
            onAvaClick: function () {
                this.$store.commit(types.LOGOUT);
                // this.$router.push('/home')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>