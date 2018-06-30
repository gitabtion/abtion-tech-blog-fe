<template>
    <div>
        <md-card class="post-card">
            <md-card-header>
                <div class="md-title" v-text="cardTitle"></div>
            </md-card-header>
            <div class="description" style="display: flex">
                <div style="margin-right: 8px">
                    <md-icon>visibility</md-icon>
                </div>
                <div class="md-content">{{viewNum}}</div>
            </div>

            <md-card-content v-html="cardContent"></md-card-content>

            <md-card-actions>
                <md-button @click="onEditClick">Edit</md-button>
            </md-card-actions>

        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    import {mavonEditor} from 'mavon-editor'
    import * as types from "../../store/types";
    export default {
        name: "id",
        components: {PostCard},
        data(){
            return{
                essay: {},
                cardTitle: '',
                cardContent: '',
                viewNum: '',
            }
        },
        mounted:function () {
            this.getEssay();
        },
        methods: {
            getEssay:function () {
                console.log(this.$route.params.id);
                this.axios.get(`${api.getEssayById}/${this.$route.params.id}`)
                    .then(response=>{
                        console.log("=============|");
                        console.log(response);
                        this.essay = response.data;
                        console.log(this.essay);
                        this.cardTitle = this.essay.name;
                        this.$store.commit(types.TITLE,this.cardTitle);
                        this.viewNum = this.essay.viewNum;
                        this.cardContent = mavonEditor.getMarkdownIt().render(this.essay.content);
                    })
            },
            onEditClick:function () {
                this.snackBar("clicked",2000)
            }
        },
    }
</script>

<style scoped>
    .post-card{
        padding: 16px;
        width: 800px;
    }
    .description{
        display: flex;
        align-items: center;
        justify-content: start;
    }
</style>