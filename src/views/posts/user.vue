<template>
    <div>
        <div v-for="(_essay,index) in essays" :key="index">
            <PostCard :cardEssay=JSON.stringify(_essay) :showMoreButton=true :showEditButton=false :isAll=false></PostCard>
        </div>
        <md-button class="md-fab" @click="onAddClick()">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    import * as types from "../../store/types";
    export default {
        name: 'user',
        data(){
            return{
                essays: [],
            }
        },
        components: {PostCard},
        mounted:function () {
            this.getEssays();
            this.$store.commit(types.TITLE,"我的所有文章")
        },

        methods:{
            getEssays(){
                let user = this.$store.state.user;
                if (user){
                    this.axios.get(api.getUserEssays+'/'+user.id)
                        .then(response=>{
                            let _essays = response.data;
                            if (_essays.length===0){
                                this.$router.push({path:'/empty'})
                            }else {
                                this.essays = _essays;
                            }
                        })
                }else {
                    this.snackBar("请登录",2000);
                    this.$router.push({path: '/before-login/login'})
                }
            },
            onAddClick(){
                this.$router.push('/posts/create')
            }
        }
    }
</script>

<style scoped>
    .md-fab {
        z-index: 2000;
        position: fixed;
        bottom: 8%;
        right: 5%;
    }
</style>