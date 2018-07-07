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
            }
        },

    }
</script>

<style scoped>

</style>