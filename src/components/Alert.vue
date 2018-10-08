<template>

    <div class="alert alert-success" role="alert">
        you are success
    </div>

</template>

<script>
    import jquery from 'jquery';
    export default {
        name: "Alert",
        methods:{
            warning:function (type , msg) {
                //type 四种类型
                //alert-success
                //alert-info
                //alert-warning
                //alert-danger

                jquery('body').prepend('<div id="warning" class="alert alert-'+type+'" role="alert">'+msg+'</div>')

                jquery('#warning').fadeOut(5000)
            }
        }
    }
</script>

<style scoped>

</style>