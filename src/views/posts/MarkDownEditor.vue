<template>
        <mavon-editor style="z-index: -1;height: 900px;margin-top: 40px" v-model="value"></mavon-editor>
</template>

<script>
    export default {
        name: "MarkDownEditor",
        data() {
            return {
                value: '# hello'
            }
        },
    }
</script>

<style scoped>

</style>