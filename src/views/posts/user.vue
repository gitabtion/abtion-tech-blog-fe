<template>
    <div>
        <div class="md-title">Posts</div>
        <div v-bind="essays" v-for="essay in essays" :key="essay">
            <PostCard :cardEssay=JSON.stringify(essay) :isButtonShow=true></PostCard>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    import types from '../../store/types'
    export default {
        name: 'user',
        data(){
            return{
                essays: [],
            }
        },
        components: {PostCard},
        mounted:function () {
            this.getEssays()
        },
        methods:{
            getEssays(){
                let user = this.$store.getters.getUser;
                console.log('user');
                console.log(user);
                console.log('user');
                if (user){
                    this.axios.get(api.getUserEssays+'/'+user.id)
                        .then(response=>{
                            this.essays = response.data.data;
                            console.log(this.essays.length);
                            console.log(this.essays);
                            if (this.essays.length===0){
                                this.$router.push({path:'/empty'})
                            }
                        })
                }else {
                    this.snackBar("请登录",2000);
                    this.$router.push({path: '/before-login/login'})
                }
            }
        }
    }
</script>

<style scoped>

</style>