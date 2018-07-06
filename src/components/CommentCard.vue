<template>
    <md-card class="comments-card">
        <div class="comments-header">
            <img :src="userAva" alt="Avatar"/>
            <div class="md-content">{{username}}</div>
            <div class="md-content">{{createAt}}</div>
        </div>
        <div class="md-content" v-html="content"></div>
    </md-card>
</template>

<script>
    import Utils from "../utils/utils";

    export default {
        name: "CommentCard",
        props:{
            mComment: Object,
        },
        data(){
            return{
                userAva: '',
                createAt: '',
                content: '',
                username: ''
            }
        },
        mounted(){
            if (this.mComment){
                this.username = this.mComment.userName;
                this.userAva = this.mComment.userAvatar;
                this.createAt = Utils.timetrans(this.mComment.createAt);
                this.content = Utils.mMarkdownIt().render(this.mComment.content);
            }
        },
    }
</script>

<style scoped>
    .comments-card{
        display: flex;
        flex-direction: column;
        padding: 16px;
        margin-bottom: 16px;
    }
    .comments-header img {
        width: 50px;
    }

    .md-content {
        margin-right: 16px;
    }
    .comments-header img {
        margin-right: 16px;
    }
</style>