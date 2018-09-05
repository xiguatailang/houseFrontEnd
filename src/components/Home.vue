<template>
    <div id="home">
        <ManHeader />
        <Content msg="Welcome to Your house App"/>
    </div>
</template>

<script>
    import Content from './Content.vue';
    import ManHeader from './ManHeader';

    export default {
        name: 'Home',
        components: {
            ManHeader,
            Content,
        },
        created:function () {
            var ws = null;
            ws = new WebSocket("ws://127.0.0.1:2000");
            ws.onopen = function() {
                ws.send('tom');
                console.log("给服务端发送一个字符串：tom");
            };
            ws.onmessage = function(e) {
                console.log("收到服务端的消息：" + e.data);
            };
        },
        mounted:function () {
            this.$axios.post(this.$API_CONFIG.API_WRITE_USER_GETNEWMESSAGES,{}).then(data=>{
                console.log(data)
            })
        }
    }


</script>



<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
