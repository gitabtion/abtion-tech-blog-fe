<template>
    <div class="snackBar">
        <md-snackbar :md-position="snackbarPosition" :md-duration="durationTime" :md-active.sync="showSnackbar" md-persistent>
            <span>{{message}}</span>
            <md-button class="md-primary" @click="showSnackbar = false">知道了</md-button>
        </md-snackbar>
    </div>
</template>

<script>
    export default {
        name: "SnackBar",
        data(){
            return{
                snackbarPosition: 'center',
                durationTime: 1500,
                showSnackbar: false,
                message: 'test'
            }

        }
    }
</script>

<style scoped>

</style>