<template>
    <md-card style="padding: 16px;margin-bottom: 16px">
        <md-field>
            <label>写一个评论吧！</label>
            <md-textarea v-model="comment"></md-textarea>
        </md-field>
        <md-card-actions>
            <md-button @click="onCommentClick" style="margin-top: -16px;">评论</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import api from '../constant/api'
    export default {
        name: "EditComment",
        data() {
            return{
                comment: '',
            }
        },
        methods: {
            onCommentClick: function () {
                if (this.comment){
                    let params = {
                        essayId: this.$route.params.id,
                        content: this.comment,
                    };
                    this.axios.post(api.createComment,params)
                        .then(response=>{
                            this.comment = '';
                            this.snackBar("评论成功！",2000)
                        })
                } else {
                    this.snackBar("请输入评论内容",2000)
                }
            }
        }
    }
</script>

<style scoped>

</style>