<template>
    <router-link :to="`/user/${$store.state.user.id}/${tag}`" style="width: max-content">
        <span class="tags-container">
            <span class="tag-title">{{tag}}</span>
        </span>
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
    .tags-container {
        margin: 0 auto;
        width: 700px;
    }
    .tag-title {
        display: inline-block;
        margin: 10px;   
        font-size: 18.75px;
        color: #868686;
    }
    .tag-title {
        text-decoration: none;
        outline: none;
        border-bottom: 1px solid #999;
        word-wrap: break-word;
    }
    .router-link-active {
        text-decoration: none;
    }
    .router-link{
        text-decoration: none;
    }
</style>