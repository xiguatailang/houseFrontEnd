<template>
    <div id="ReplyProperPackage">
        <ManHeader />

        <div id="edit_wrap">
            <div id="package_wrap" v-html="properPackage">

            </div>
            <p id="writer_name">---- {{writer_name}} &nbsp;&nbsp;{{created_at}}</p>


            <editor id="editor_id2" height="200px" width="600px" :content="editorText" :items="myitems"
                    :afterCreate="afterCreate()"
                    pluginsPath="../assets/plugins/"
                    :loadStyleMode="false"
                    @on-content-change="onContentChange"> </editor>

            <div class="btn">
                <span id="isay-counter"></span>
                <span  v-on:click="replyProperPackage"><input id="isay-submit" tabindex="1" type="submit" value="回复" style="cursor: pointer"></span>
            </div>
        </div>

    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    import Alert from './Alert';

    export default {
        name: "ReplyProperPackage",
        components: {
            ManHeader,
        },
        data () {
            return {
                editorText: '',
                myitems:['fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                    'insertunorderedlist', '|',],
                properPackage:'',
                writer_name:'',
                writer_id:'',
                created_at:'',
                package_id:'',
            }
        },
        methods: {

            onContentChange (val) {
                this.editorText = val
            },
            afterCreate () {

            },
            replyProperPackage:function () {
                var params = {
                    'content':this.editorText,
                    'token':this.$axios.defaults.headers.common['token'],
                    'type':'message',
                    'package_id':this.package_id,
                    'reader':this.writer_id,
                    'first_reply':1,

                };

                var ws = this.$ws;
                ws.send(JSON.stringify(params));
            },
        },
        created:function () {
            this.$axios.post(this.$API_CONFIG.API_GET_PROPER_PACKAGE).then(data=>{
                if(data.data.code==200) {
                    this.properPackage = data.data.data.content;
                    this.writer_name = data.data.data.writer_name;
                    this.writer_id = data.data.data.writer_id;
                    this.created_at = data.data.data.created_at_f;

                    this.$axios.post(this.$API_CONFIG.API_GET_PROPER_PACKAGE_ID,{writer_id:this.writer_id, created_at:data.data.data.created_at}).then(data=>{
                        this.package_id = data.data.data;
                    })

                }else {
                    Alert.methods.warning('warning' ,data.data.msg)
                }
            })

        },
    }
</script>

<style scoped>
    #edit_wrap{
        width: 600px;
        height: 700px;
        margin: auto;
    }
    div.btn{
        width: 650px;
        text-align: right;
        background: #f4f4f4;
        padding: 8px;
        border: 1px solid #ccc;
        border-top: none;
    }
    #package_wrap{
        width: 650px;
        padding: 10px;
    }
    #writer_name{
        text-align: right;
        font-style: italic;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 10px;
    }


</style>