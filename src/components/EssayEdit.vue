<template>
    <div class="edit-essay">
        <md-field>
            <label>Title</label>
            <md-input class="essay-input"  v-model="essayTitle"></md-input>
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

    .essay-input {
        font-size: xx-large;
    }
</style>