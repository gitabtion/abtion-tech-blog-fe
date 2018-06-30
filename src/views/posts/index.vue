<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    /* eslint-disable */
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    import types from '../../store/types'
    export default {
        name: 'postsIndex',
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
                let user = this.$store.state.user;
                if (user){
                    this.axios.get(api.getUserEssays+'/'+user.id)
                        .then(response=>{
                            this.essays = response.data
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