<template>
    <div>
        <!--<md-card class="post-card">-->
        <!--<md-card-header>-->
        <!--<div class="md-title" v-text="cardTitle"></div>-->
        <!--</md-card-header>-->
        <!--<div class="description" style="display: flex">-->
        <!--<div style="margin-right: 8px">-->
        <!--<md-icon>visibility</md-icon>-->
        <!--</div>-->
        <!--<div class="md-content">{{viewNum}}</div>-->
        <!--</div>-->

        <!--<md-card-content v-html="cardContent"></md-card-content>-->

        <!--<md-card-actions>-->
        <!--<md-button @click="onEditClick">Edit</md-button>-->
        <!--</md-card-actions>-->

        <!--</md-card>-->
        <PostCard :show-edit-button="editShow"
                  :show-more-button=false
                  :cardEssay=JSON.stringify(essay)
                  :isAll=true></PostCard>
        <EditComment></EditComment>
        <div v-for="(comment,index) in comments" :key="index">
            <CommentCard :mComment = comment></CommentCard>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    import * as types from "../../store/types";
    import EditComment from "../../components/EditComment";
    import CommentCard from "../../components/CommentCard";

    export default {
        name: "id",
        components: {CommentCard, EditComment, PostCard},
        data() {
            return {
                essay: {name: 'test'},
                cardTitle: '',
                cardContent: '',
                viewNum: '',
                essayString: '{"id":2,"authorId":12,"tag":"test","name":"test","content":"# hello","flag":0,"viewNum":107}',
                comments: [],
                editShow: true
            }
        },
        mounted: function () {
            console.log(this.essayString);
            this.getEssay();
            this.getComments();
            this.editShow = this.essay.authorId===this.$store.state.user.id
        },
        methods: {
            getEssay: function () {
                console.log(this.$route.params.id);
                this.axios.get(`${api.getEssayById}/${this.$route.params.id}`)
                    .then(response => {
                        this.essay = response.data;
                        this.essayString = JSON.stringify(this.essay);
                        this.cardTitle = this.essay.name;
                        this.cardContent = this.essay.content;
                        this.viewNum = this.essay.viewNum;
                        this.$store.commit(types.TITLE, this.cardTitle);
                    })
            },
            onEditClick: function () {
                if (this.essay.id) {
                    this.$router.push(`/posts/edit/${this.essay.id}`)
                }
            },
            getComments(){
                this.axios.get(`/comments/${this.$route.params.id}`)
                    .then(response => {
                        this.comments = response.data;
                        // if (response){
                        //     this.$store.commit(types.COMMENT,response.data)
                        // }
                    })
            }

        },
    }
</script>

<style scoped>
</style>