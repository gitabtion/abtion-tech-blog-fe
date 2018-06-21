<template>
    <div>
        <div>
            <img src="./assets/logo.png"/>
            <h3 class="md-title">Welcome to Abtion Tech</h3>
        </div>
        <ul>
            <RouterLink :to="{path:'/login'}">
                <md-button herf="#/login" class="md-raised md-primary">Login</md-button>
            </RouterLink>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>

</style>