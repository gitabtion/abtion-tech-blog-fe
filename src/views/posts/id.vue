<template>
    <div>
        <PostCard :isButtonShow = true :cardEssay = essay></PostCard>
    </div>
</template>

<script>
    import PostCard from "../../components/PostCard";
    import api from "../../constant/api";
    export default {
        name: "id",
        components: {PostCard},
        data(){
            return{
                essay: {}
            }
        },
        mounted:function () {
            this.getEssay();
        },
        methods: {
            getEssay:function () {
                this.axios.get(api.getEssayById+'/'+this.$router.params.id)
                    .then(response=>{
                        this.essay = response.data.data.essay;
                    })
            }
        }
    }
</script>

<style scoped>

</style>