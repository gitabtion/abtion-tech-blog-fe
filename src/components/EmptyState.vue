<template>
    <div>
        <md-empty-state
                md-icon="code"
                md-label="创作你的第一篇文章吧！"
                md-description="创作你的第一篇文章，开始你的写作之旅">
            <router-link to="/posts/create">
                <md-button class="md-primary md-raised">Create first essay</md-button>
            </router-link>
        </md-empty-state>
    </div>
</template>

<script>
    export default {
        name: "EmptyState"
    }
</script>

<style scoped>

</style>