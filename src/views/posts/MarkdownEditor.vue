<template>
    <div>
        <div style="display: flex;flex-wrap: wrap;margin-top: auto">
            <md-content class="md-elevation-2">
                <div>
                    <md-field>
                        <label>标题</label>
                        <md-input v-model="title"></md-input>
                    </md-field>
                    <md-field>
                        <label>标签</label>
                        <md-input v-model="tag"></md-input>
                    </md-field>

                    <div>
                        <md-radio v-model="flag" value="0" class="md-primary">公开</md-radio>
                        <md-radio v-model="flag" value="1" class="md-primary">私密</md-radio>
                    </div>
                </div>
            </md-content>
            <mavon-editor style="height: 600px;" v-model="content"></mavon-editor>
        </div>
        <md-button class="md-fab" @click="onDoneClick()">
            <md-icon>done</md-icon>
        </md-button>
    </div>
</template>

<script>
    import api from "../../constant/api";
    import * as types from "../../store/types";

    export default {
        name: "MarkdownEditor",
        data: () => ({
            mPost: {},
            content: '# hello',
            flag: '0',
            title: '',
            tag: '',
            isUpdate: false,

        }),
        mounted(){
            this.$store.commit(types.TITLE,"编辑文章")
        },
        methods:{
            onDoneClick: function () {
                if (this.isUpdate){
                    this.mPost.content = this.content;
                    this.mPost.flag = this.flag;
                    this.mPost.title = this.title;
                    this.mPost.tag = this.tag;
                    this.axios.post(api.updateEssay,this.mPost)
                        .then(response=>{
                            this.$router.push('/posts/'+response.data)
                        })
                } else {
                    let params = {
                        content: this.content,
                        flag: this.flag,
                        tag: this.tag,
                        name: this.title,
                    };
                    this.axios.post(api.createEssay,params)
                        .then(response=>{
                            this.$router.push('/posts/'+response.data)
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .md-elevation-2 {
        display: flex;
        height: max-content;
        width: 250px;
        flex-direction: column;
        padding: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
    }

    .md-fab {
        z-index: 2000;
        position: fixed;
        bottom: 10%;
        right: 5%;
    }
</style>