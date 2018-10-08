<template>
    <div id="WritePackage">
        <ManHeader />

        <div id="edit_wrap">
            <editor id="editor_id2" height="500px" width="700px" :content="editorText" :items="myitems"
                    :afterCreate="afterCreate()"
                    pluginsPath="../assets/plugins/"
                    :loadStyleMode="false"
                    @on-content-change="onContentChange"> </editor>

            <div class="btn">
                <span id="isay-counter"></span>
                <span  v-on:click="writePackages"><input id="isay-submit" tabindex="1" type="submit" value="投递" style="cursor: pointer" disabled="disabled"></span>
            </div>
        </div>

    </div>
</template>

<script>
    import ManHeader from './ManHeader';


    export default {
        name: "WritePackage",
        components: {
            ManHeader,
        },
        data () {
            return {
                editorText: '',
                myitems:['fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                    'insertunorderedlist', '|',],
            }
        },
        methods: {

            onContentChange (val) {
                this.editorText = val
            },
            afterCreate () {

            },
            writePackages:function () {

                var params = {
                    'content':this.editorText,
                    'token':this.$axios.defaults.headers.common['token'],
                    'type':'package',
                };


                var ws = this.$ws;
                ws.send(JSON.stringify(params));

            },
        }
    }
</script>

<style scoped>
    #edit_wrap{
        width: 700px;
        height: 600px;
        margin: auto;
    }
    div.btn{
        width: 700px;
        text-align: right;
        background: #f4f4f4;
        padding: 8px;
        border: 1px solid #ccc;
        border-top: none;
    }


</style>