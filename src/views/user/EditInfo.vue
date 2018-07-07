<template>
    <div>
        <md-card style="padding: 32px;display: flex;flex-direction: column;justify-content: center;align-items: center">
            <md-field :class="usernameInput">
                <label>用户名</label>
                <md-input v-model="username"></md-input>

            </md-field>
            <md-field>
                <label>签名</label>
                <md-input v-model="signature"></md-input>
            </md-field>
            <div>
                <md-radio v-model="gender" value="0">女</md-radio>
                <md-radio v-model="gender" value="1" class="md-primary">男</md-radio>
                <md-radio v-model="gender" value="2">保密</md-radio>
            </div>
            <md-button class="md-raised md-primary" style="justify-content: center" v-on:click="onEditClick">
                修改
            </md-button>
        </md-card>
    </div>
</template>

<script>
    import * as types from "../../store/types";

    export default {
        name: "EditInfo",
        data:()=>({
            username: '',
            signature: '',
            gender: 0,
        }),
        mounted(){
            this.username = this.$store.state.user.name;
            this.signature = this.$store.state.user.signature?this.$store.state.user.signature:"";
            this.gender = this.$store.state.user.sex;
        },
        methods:{
            onEditClick:function () {
                let params={
                    name: this.username,
                    signature: this.signature,
                    sex: this.gender
                };
                this.axios.post('/user/update',params)
                    .then(response=>{
                        this.snackBar("修改成功",2000);
                        this.$store.commit(types.USER,response.data);
                        this.$router.push(`/user/${this.$store.state.user.id}`)
                    })
            }
        },
        computed:{
            usernameInput() {
                return {
                    'md-invalid': this.hasNameError && this.username.length === 0
                }
            },
        }
    }
</script>

<style scoped>

</style>