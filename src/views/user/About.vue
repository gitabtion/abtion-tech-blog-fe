<template>
    <div style="flex-direction: column;justify-content: center;align-items: center;">
        <md-card style="display: flex;align-items: center;padding: 32px;width: max-content;margin-bottom: 32px"
                 @click="onEditClick">
            <img :src="$store.state.user.avatar" alt="Avatar" style="height: 80px;width: 80px;margin-right: 32px"/>
            <div style="display: flex;flex-direction: column;align-items: start;justify-content: center">
                <div style="display: flex">
                    <div>
                        <md-icon>account_circle</md-icon>
                        <div class="md-subheader" v-text="username"></div>
                    </div>
                    <div>
                        <div class="md-subheader" v-text="gender"></div>
                    </div>
                </div>

                <div>
                    <md-icon style="margin-right: 16px">comment</md-icon>
                    <div v-text="signature"></div>
                </div>

            </div>
        </md-card>
        <Tags></Tags>
        <md-button class="md-fab" @click="onEditClick()"><md-icon>edit</md-icon></md-button>
    </div>
</template>

<script>
    /* eslint-disable */
    import Tags from "./Tags";

    export default {
        name: "About",
        components: {Tags},
        data: () => ({
            gender: "性别未知",
            username: 'null',
            signature: 'null',
        }),
        mounted() {
            console.log(this.$store.state.user);
            switch (this.$store.state.user.sex) {
                case 0:
                    this.gender = "女";
                    break;
                case 1:
                    this.gender = "男";
                    break;
                default:
                    this.gender = "性别未知";
                    break;
            }
            this.username = this.$store.state.user.name;
            this.signature = this.$store.state.user.signature ? this.$store.state.user.signature : "null";
        },
        methods: {
            onEditClick: function () {
                this.$router.push('/user/update')
            }
        }
    }
</script>

<style scoped>
    div {
        display: flex;
    }

    md-icon {
        margin-right: 16px;
    }

    .md-fab {
        z-index: 2000;
        position: fixed;
        bottom: 8%;
        right: 5%;
    }
</style>