<template>
    <div class="container">
        <div v-for="(_essay,index) in essays" :key="index">
            <PostCard :cardEssay=JSON.stringify(_essay) :showMoreButton=true :showEditButton=false :isAll=false></PostCard>
        </div>
        <!--<md-button class="md-fab" @click="onAddClick()">-->
            <!--<md-icon>add</md-icon>-->
        <!--</md-button>-->
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from '../components/PostCard'
    export default {
        name: 'home',
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
                this.axios.get(`/essay/most-view`)
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
    .container {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>