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
                        <md-radio v-model="flag" value=0 class="md-primary">公开</md-radio>
                        <md-radio v-model="flag" value=1 class="md-primary">私密</md-radio>
                    </div>
                </div>
            </md-content>
            <mavon-editor :ishljs="true"  style="height: 600px;" v-model="content"></mavon-editor>
        </div>
        <md-button class="md-fab" @click="onDoneClick()">
            <md-icon>done</md-icon>
        </md-button>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from "../../constant/api";
    import * as types from "../../store/types";

    export default {
        name: "editPost",
        data: () => ({
            mPost: {},
            content: '',
            flag: 1,
            title: '',
            tag: '',
        }),
        mounted() {
            this.$store.commit(types.TITLE, "编辑文章");
            this.getPost();
        },
        methods: {
            onDoneClick: function () {
                this.mPost.content = this.content;
                this.mPost.flag = this.flag;
                this.mPost.title = this.title;
                this.mPost.tag = this.tag;
                this.axios.post(api.updateEssay, this.mPost)
                    .then(response => {
                        this.$router.push('/posts/' + response.data)
                    })
            },
            getPost: function () {
                this.axios.get(`${api.getEssayById}/${this.$route.params.essayId}`)
                    .then(response => {
                        this.mPost = response.data;
                        this.flag = this.mPost.flag;
                        this.content = this.mPost.content;
                        this.title = this.mPost.name;
                        this.tag = this.mPost.tag;
                    })
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
        bottom: 8%;
        right: 5%;
    }
</style>