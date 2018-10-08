<template>
    <div id="dialogue">
        <ManHeader />

        <h1>与不当仙女很久了的书信</h1>
        <div class="article">

            <div class="doumail-hd">
                发起于 2018-06-20 23:37
            </div>

            <div class="doumail-bd">

                <!--<div class="split-line"><i>2018-06-20</i></div>-->

                <div class="chat" v-for="cur_message in package_messages">

                    <div class="info" :value="cur_message.writer">
                        <span class="time">{{cur_message.write_at}}</span>
                    </div>


                    <div class="pic">

                        <a href="https://www.douban.com/people/80104970/">
                            <img src="https://img3.doubanio.com/icon/u80104970-2.jpg" alt="wudongdefeng">
                        </a>
                    </div>
                    <div class="content">
                        <div class="sender">
                            <a href="https://www.douban.com/people/80104970/">{{cur_message.writer}}</a>
                        </div>


                        <p>{{cur_message.content}}</p>

                        <button v-on:click="showTextArea(cur_message.writer)" type="button" id="myButton" class="btn btn-primary" style="background-color: #fcf8e3;color: black;border: #fcf8e3;float: right;">
                            回复
                        </button>

                    </div>

                    <div class="operations">
                        <a href="#" data-mid="2028531996" class="lnk-delete">删除</a>
                    </div>
                </div>


                <div class="doumail-reply" style="display: none">
                    <form method="post" enctype="multipart/form-data"> <input type="hidden" name="ck" value="-PRD"> <input type="hidden" name="to" value="157097273">  <div class="item item-text"> <textarea name="m_text" rows="10" cols="80" id="reply_wrap"></textarea> </div>  <div class="toolbar"> <div class="item-submit"> <span class="bn-flat"> <input type="button" name="m_reply" value="回应" v-on:click="replyMessage()"> </span> </div>  </div> </form>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    import Alert from './Alert';
    export default {
        name: "Dialogue",
        components: {
            ManHeader,
        },
        data(){
            return {
                package_messages:'',
            }
        },
        created:function () {
            var package_id = this.getUrlParam().package;
            this.$axios.post(this.$API_CONFIG.API_GET_PACKAGE_MESSAGES,{package_id:package_id}).then(data=>{
                if(data.data.code==200) {
                    this.package_messages = data.data.data;

                }else {
                    Alert.methods.warning('warning' ,data.data.msg)
                }
            })

        },
        methods:{
            getUrlParam:function () {
                var url = window.location.search; //获取url中"?"符后的字串
                var theRequest = new Object();
                var strs = [];
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1);
                    strs = str.split("&");
                    for(var i = 0; i < strs.length; i ++) {

                        theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);

                    }
                }
                return theRequest;
            },
            replyMessage:function () {

                if(!this.$('#reply_wrap').val()){
                    Alert.methods.warning('danger' ,'no empty')
                    return;
                }
                var params = {
                    'content':this.$('#reply_wrap').val(),
                    'token':this.$axios.defaults.headers.common['token'],
                    'type':'message',
                    'package_id': this.getUrlParam().package,
                    'reader':this.$('.info').eq(0).attr('value'),
                };

                var ws = this.$ws;
                // console.log(ws)
                ws.send(JSON.stringify(params));
            },
            showTextArea:function (target) {
                this.$('.doumail-reply').css('display' ,'block')
                this.$('#reply_wrap').text('写给@'+target)
            }

        }


    }
</script>

<style scoped>
    #dialogue {
        width: 1040px;
        margin: 0 auto;
        padding: 0;
        font: 12px Helvetica,Arial,sans-serif;
        line-height: 1.62;
    }
    h1 {
        word-wrap: break-word;
        display: block;
        font-size: 26px;
        font-weight: bold;
        color: #494949;
        margin: 0;
        padding: 0 0 20px 0;
        line-height: 1.1;
        text-align: left;
    }
    .article {
        float: left;
        width: 675px;
        padding-right: 40px;
    }
    .doumail-hd {
        padding: 12px 15px;
        color: #333;
        background: #fff6ee;
    }
    .doumail-bd {
        margin-bottom: 80px;
    }
    .doumail-bd .split-line {
        display: inline-block;
        zoom: 1;
        width: 100%;
        margin: 40px 0 20px;
        text-align: center;
        color: #999;
        border-top: 1px solid #eee;
        line-height: 1px;
    }
    .doumail-bd .split-line i {
        padding: 0 1em;
        background: #fff;
        font-style: normal;
        font-weight: normal;
    }
    .doumail-bd .chat {
        position: relative;
        padding-bottom: 25px;
        display: inline-block;
        width: 100%;
        zoom: 1;
    }
    .doumail-bd .chat .info {
        position: absolute;
        right: 0;
        top: 0;
    }
    .doumail-bd .chat .info .time {
        color: #999;
    }
    .doumail-bd .chat .pic {
        float: left;
        margin-right: 20px;
        position: relative;
    }
    .doumail-bd .chat .content {
        display: inline-block;
        zoom: 1;
        width: 460px;
        margin-top: -3px;
        font-size: 14px;
        word-wrap: break-word;
        float: left;
        text-align: left;
    }
    .doumail-bd .chat .content p {
        margin: 0;
        color: #222;
        line-height: 1.5;
    }
    .doumail-bd .chat .operations {
        display: none;
        position: absolute;
        right: 0;
        bottom: 10px;
    }
    .doumail-bd .chat .pic img {
        width: 32px;
        height: 32px;
        border-width: 0;
        vertical-align: middle;
    }
    /*.item-text{*/
        /*line-height: 0;*/
    /*}*/
    textarea{
        width: 600px;
        margin-left: 52px;
        height: 82px;
        resize: vertical;
        border: 1px solid #ccc;
        padding: 3px;
        font-size: 14px;
        font-family: Arial;
        overflow: auto;
    }
    .toolbar{
        margin-top: 10px;
        margin-left: 52px;
    }
    .item-photo-selector {
        float: left;
        cursor: pointer;
    }
    .item-submit {
        text-align: right;
        float: right;
    }
    .bn-flat input {
        border: none;
        height: 25px;
        padding: 0 14px;
        color: #333;
        font-size: 12px;
        margin: 0 !important;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        background-image: -moz-linear-gradient(-90deg, #fcfcfc 0, #e9e9e9 100%);
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(1, #e9e9e9));
    }


</style>