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
    import PostCard from '../../components/PostCard'
    export default {
        name: "Tag",
        data(){
            return{
                essays: [],
            }
        },
        components: {PostCard},
        mounted(){
            this.getEssayByTag()
        },
        methods:{
            getEssayByTag:function () {
                this.axios.get(`/user/${this.$route.params.id}/${this.$route.params.tag}`)
                    .then(response=>{
                        let _essays = response.data;
                        if (_essays.length===0){
                            this.$router.push({path:'/empty'})
                        }else {
                            this.essays = _essays;
                        }
                    })
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