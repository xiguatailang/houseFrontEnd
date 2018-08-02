<template>
    <div id="Message">
        <ManHeader />
        <div>Message</div>
    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    export default {
        name: "Message",
        components: {
            ManHeader,
        },
        created:function () {
            this.$axios.post(this.$API_CONFIG.API_GET_USER_MESSAGE,{}).then(data=>{
                console.log(data)
            })
        }
    }
</script>

<style scoped>

</style>