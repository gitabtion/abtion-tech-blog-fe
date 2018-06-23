<template>
    <div class="edit-essay">
        <md-field>
            <label>Title</label>
            <md-input v-model="essayTitle" style="font-size: xx-large"></md-input>
        </md-field>
        <mavon-editor v-model="essayContent"/>
    </div>
</template>

<script>
    export default {
        name: "EssayEdit",
        data(){
            return{
                essayTitle: '',
                essayContent: ''
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .edit-essay{
        display: flex;
        flex-direction: column;
    }
</style>