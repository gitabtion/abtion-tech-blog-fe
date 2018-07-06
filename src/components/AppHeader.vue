<template>
    <div class="md-primary">
        <div class="md-toolbar-row md-toolbar-offset">
            <div class="md-toolbar-section-start">
                <router-link to="/">
                        <h1 class="md-title">Abtion Tech</h1>
                </router-link>
                <router-link to="/posts" style="margin-left: 16px"><span>Posts</span></router-link>
                <router-link :to="`/user/${this.$store.state.user?this.$store.state.user.id:1}/tags`" v-show="$store.state.user"><span>Tags</span></router-link>
                <router-link :to="`/user/${this.$store.state.user?this.$store.state.user.id:1}`" v-show="$store.state.user"><span>About</span></router-link>
            </div>
            <div class="md-toolbar-section-end">
                <router-link to="/before-login/login" v-show="!$store.state.user"><span>登录</span></router-link>
                <router-link to="/before-login/register" v-show="!$store.state.user"><span>注册</span></router-link>
                <router-link to="/">
                    <div v-on:click="onAvaClick">
                        <img :src="ava" class="ava-img" v-show="$store.state.user" alt="Avatar">
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import * as types from "../store/types";

    export default {
        name: "AppHeader",
        data: () => ({
            ava: '../assets/default-ava.jpg'
        }),
        mounted() {
            console.log(this.$store.state.user);
            if (this.$store.state.user) {
                let mAva = this.$store.state.user.avatar;
                if (mAva) {
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
    @import "~vue-material/dist/theme/engine";
    @import "~vue-material/dist/base/theme";
    @import "~vue-material/dist/components/MdCard/theme";
    .router-link-active{
        text-decoration: none;
    }
    .md-primary {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2000;
    }
    .md-toolbar-row {
        box-shadow: 0 0 16px rgba(0,0,0,0.5);
        padding: 15px 0;
        color: #fff;
        background: #222;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }
    .md-toolbar-section-start, .md-toolbar-section-end {
        display: flex;
        align-items: center;
        padding: 0 25px;
    }
    .md-toolbar-section-start span, .md-toolbar-section-end span {
        color: #fff;
        margin-left: 16px;
    }
    .md-title {
        color: #fff;
    }
    .ava-img {
        width: 50px;
    }
</style>