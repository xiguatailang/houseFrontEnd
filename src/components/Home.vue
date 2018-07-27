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
