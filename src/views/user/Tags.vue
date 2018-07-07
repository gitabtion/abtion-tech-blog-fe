<template>
    <div style="width: 600px">
        <div class="tags-box" v-for="(tag,index) in tags" :key="index" >
            <Tag :tag = tag style="width: max-content"></Tag>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Tag from "../../components/TagCard";
    export default {
        name: "Tags",
        components: {Tag},
        data() {
            return {

                tags: ['miao','wang']
            }
        },
        mounted() {
            console.log(this.tags);
            this.getTags();
        },
        methods: {
            getTags: function () {
                this.axios.get(`/user/${this.$store.state.user.id}/tags`)
                    .then(response => {
                        this.tags = response.data;
                        console.log(this.tags);
                        if (this.tags.length===0){
                            this.$router.push({path:'/empty'})
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    div{
        width: max-content;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

</style>