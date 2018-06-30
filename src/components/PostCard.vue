<template>
    <div>
        <md-card class="post-card">
            <md-card-header>
                <div class="md-title" v-text="cardTitle"></div>
            </md-card-header>
            <md-card-content v-html="cardContent"></md-card-content>

            <md-card-actions>
                <md-button @click="onMoreClick" v-if="showMore">More</md-button>
                <md-button @click="onEditClick" v-if="showEdit">More</md-button>
            </md-card-actions>

        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    import router from "../routes";

    export default {
        name: "PostCard",
        props:{
            cardEssay: String,
            showMoreButton: Boolean,
            showEditButton: Boolean,
        },

        data(){
            return{
                cardTitle: '',
                cardContent: '',
                showMore: this.showMoreButton,
                showEdit: this.showEditButton,
                essay: JSON.parse(this.cardEssay)
            }
        },
        methods: {
                onMoreClick: function () {
                    this.$router.push(`/posts/${this.essay.id}`)
                },
                onEditClick:function () {
                    //路由跳转
                }
            },
        mounted: function () {
            console.log(this.cardEssay);
            let _essay = JSON.parse(this.cardEssay);
            this.cardTitle = _essay.name;
            this.cardContent = _essay.content;
            console.log('card1');
            console.log(_essay)
        }
    }
</script>

<style scoped>
    .post-card{
        width: 800px;
        margin-bottom: 16px;
    }
</style>