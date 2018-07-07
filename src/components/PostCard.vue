<template>
    <div>
        <md-card class="post-card">
            <md-card-header>
                <h1 class="md-title" v-text="cardTitle"></h1>
            </md-card-header>
            <div class="description" style="display: flex">
                <div style="margin-right: 8px">
                    <md-icon>visibility</md-icon>
                </div>
                <div class="md-content" style="margin-right: 16px">{{viewNum}}</div>
                <div style="margin-right: 8px">
                    <md-icon>access_time</md-icon>
                </div>
                <div class="md-content" style="margin-right: 16px">{{updateAt}}</div>
                <div style="margin-right: 8px">
                    <md-icon>bookmark_border</md-icon>
                </div>
                <div class="md-content">{{tag}}</div>
            </div>

            <md-card-content v-html="cardContent"></md-card-content>

            <md-card-actions>
                <md-button @click="onMoreClick" v-if="showMore">More</md-button>
                <md-button @click="onEditClick" v-if="showEdit">Edit</md-button>
            </md-card-actions>

        </md-card>
    </div>
</template>

<script>
    /* eslint-disable */
    import api from "../constant/api";
    import {mavonEditor} from 'mavon-editor'
    import * as types from "../store/types";
    import Utils from '../utils/utils'

    export default {
        name: "PostCard",
        props: {
            cardEssay: String,
            showMoreButton: Boolean,
            showEditButton: Boolean,
            isAll: Boolean,
        },

        data() {
            return {
                cardTitle: '',
                cardContent: '',
                showMore: this.showMoreButton,
                showEdit: this.showEditButton,
                essay: JSON.parse(this.cardEssay),
                viewNum: 0,
                updateAt: '',
                tag: '',
            }
        },
        methods: {
            onMoreClick: function () {
                this.$router.push(`/posts/${this.essay.id}`)
            },
            onEditClick: function () {
                if (this.essay.id) {
                    this.$router.push(`/posts/edit/${this.essay.id}`)
                }
            },
            getEssay: function () {
                console.log(this.$route.params.id);
                this.axios.get(`${api.getEssayById}/${this.$route.params.id}`)
                    .then(response => {
                        this.essay = response.data;
                        this.viewNum = this.essay.viewNum;
                        this.cardTitle = this.essay.name;
                        this.cardContent = Utils.mMarkdownIt().render(this.essay.content);
                        this.updateAt = Utils.timetrans(this.essay.updateAt);
                        this.tag = this.essay.tag;
                        this.showEdit = this.isAll?this.essay.authorId===this.$store.state.user.id:false;
                        this.$store.commit(types.TITLE, this.cardTitle);
                    })
            }
        },
        mounted: function () {

            if (this.isAll) {
                this.getEssay()
            } else {

                let _essay = JSON.parse(this.cardEssay);
                this.cardTitle = _essay.name;
                this.viewNum = _essay.viewNum;
                this.updateAt = Utils.timetrans(_essay.updateAt);
                this.tag = this.essay.tag;
                let content = _essay.content.length > 200 ? _essay.content.substring(0,200)+'\n......':_essay.content;
                this.cardContent = Utils.mMarkdownIt().render(content);
                this.showEdit = this.isAll?_essay.authorId===this.$store.state.user.id:false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../node_modules/vue-material/dist/theme/engine";
    @import "../../node_modules/vue-material/dist/base/theme";
    @import "../../node_modules/vue-material/dist/components/MdCard/theme";
    .post-card {
        padding: 16px;
        width: 800px;
        margin-bottom: 16px;
    }

    .description {
        display: flex;
        align-items: center;
        justify-content: start;
    }
</style>