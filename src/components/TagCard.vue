<template>
    <router-link :to="`/user/${$store.state.user.id}/${tag}`" style="width: max-content">
        <md-card class="md-primary" md-theme="black-card" md-with-hover>
            <div class="md-title">{{tag}}</div>
        </md-card>
    </router-link>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Tag",
        props:{
            tag:String,

        },
        data(){
            return{
                mdTheme: 'green-card'
            }
        },
        mounted(){
            console.log(this.mdTheme);
            this.mdTheme = ['green-card','purple-card','orange-card','black-card',][Math.floor(Math.random()*4)];
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../node_modules/vue-material/dist/theme/engine";
    @import "../../node_modules/vue-material/dist/base/theme";
    @import "../../node_modules/vue-material/dist/components/MdCard/theme";
    @include md-register-theme("green-card", (
            primary: md-get-palette-color(green, 500)
    ));

    @include md-register-theme("black-card", (
            primary: md-get-palette-color(black, 500)
    ));

    @include md-register-theme("purple-card", (
            primary: md-get-palette-color(purple, 500)
    ));

    @include md-register-theme("orange-card", (
            primary: md-get-palette-color(orange, 500)
    ));
    .md-primary{
        padding: 16px;
        margin-bottom: 16px;
        margin-right: 16px;
    }
    .router-link-active {
        text-decoration: none;
    }
    .router-link{
        text-decoration: none;
    }
</style>