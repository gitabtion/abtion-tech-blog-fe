<template>
        <section>
            <article>
                <div class="post-card">
            <header class="post-header">
                <h2 class="post-title" v-text="cardTitle"></h2>
                <div class="post-meta">
                    <span class="icon-container">
                        <md-icon class="post-icon">visibility</md-icon>
                        <span>{{viewNum}}</span>
                    </span>
                    <!-- <div class="md-content post-content"></div> -->
                    <span class="icon-container">
                        <span class="post-meta-divider">|</span>
                        <md-icon class="post-icon">access_time</md-icon>
                        <span>{{updateAt}}</span>
                    </span>
                    <span class="icon-container">
                        <span class="post-meta-divider">|</span>
                        <md-icon class="post-icon">bookmark_border</md-icon>
                        <span>{{tag}}</span>
                    </span>
                </div>
            </header>
            <div v-html="cardContent"></div>
            <div class="post-option">
                <md-button @click="onMoreClick" v-if="showMore">More</md-button>
                <md-button @click="onEditClick" v-if="showEdit">Edit</md-button>
            </div>
            <footer>
               
            </footer>
            </div>
            </article>
        </section>
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
                        this.cardTitle = this.essay.name;
                        this.cardContent = Utils.mMarkdownIt().render(this.essay.content);
                        this.updateAt = Utils.timetrans(this.essay.updateAt);
                        this.tag = this.essay.tag;
                        this.$store.commit(types.TITLE, this.cardTitle);
                    })
            }
        },
        mounted: function () {

            if (this.isAll) {
                this.getEssay()
            } else {

                console.log(this.cardEssay);
                let _essay = JSON.parse(this.cardEssay);
                this.cardTitle = _essay.name;
                this.viewNum = _essay.viewNum;
                this.updateAt = Utils.timetrans(_essay.updateAt);
                this.tag = this.essay.tag;
                let content = _essay.content.length > 200 ? _essay.content.substring(0,200)+'\n......':_essay.content;
                this.cardContent = Utils.mMarkdownIt().render(content);
            }
        }
    }
</script>

<style lang="scss" scoped>
    // @import "../../node_modules/vue-material/dist/theme/engine";
    // @import "../../node_modules/vue-material/dist/base/theme";
    // @import "../../node_modules/vue-material/dist/components/MdCard/theme";
    .post-card {
        padding: 16px;
        width: 800px;
        margin-bottom: 16px;
    }
    .post-header {
        opacity: 1; 
        display: block; 
        transform: translateY(0px);
    }
    .post-title {
        text-align: center;
        word-break: break-word;
        font-weight: 400;
    }

    .post-meta {
        margin: 3px 0 60px 0;
        color: #999;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 14px;
        text-align: center;
    }

    .post-icon {
        margin-right: 3px;
    }

    .post-option {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .post-meta-divider {
        margin: 0 0.5em;
    }
    .icon-container {
        margin-right: 8px;
    }
    .post-content {
        margin-right: 16px;
    }
</style>