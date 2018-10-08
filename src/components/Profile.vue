<template>
    <div id="Profile">
        <ManHeader />
        <div>Profile</div>
        <div>name:{{ user_name }}</div>
    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    export default {
        name: "Profile",
        data(){
            return {
                user_name:'aas',
            }
        },
        components: {
            ManHeader,
        },
        created:function () {
            this.$axios.post(this.$API_CONFIG.API_GET_USER_INFO,{}).then(data=>{
                this.user_name = data.data.data.name
            })

            var ws = this.$ws;
            ws.send('may');
            console.log("给服务端发送一个字符串：may");
        }
    }
</script>

<style scoped>

</style>