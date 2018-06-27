<template>
    <div>
        <md-card class="post-card">
            <md-card-header>
                <div class="md-title" v-text="cardTitle"></div>
            </md-card-header>
            <md-card-content v-html="cardContent"></md-card-content>

            <md-card-actions>
                <md-button :class="onMoreClick" v-if="isMoreButtonShow=false">More</md-button>
                <md-button :class="onEditClick" v-if="isEditButtonShow=false">More</md-button>
            </md-card-actions>

        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "PostCard",
        props: [{
            cardEssay:{
                type: Object
            },
        },{
            isMoreButtonShow:{
                type: Boolean
            }
        }],

        data(){
            return{
                cardTitle: '',
                cardContent: '',

            }
        },
        methods: {
                onMoreClick: function () {
                    //路由跳转
                },
                onEditClick:function () {
                    //路由跳转
                }
            },
        mounted: function () {
            // essay = JSON.parse(this.cardEssay);
            this.cardTitle = this.cardEssay.name;
            this.cardContent = this.cardEssay.content;
            console.log('card1');
            console.log(this.cardEssay)
        }
    }
</script>

<style scoped>
    .post-card{
        width: 800px;
    }
</style>