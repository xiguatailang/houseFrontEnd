<template>
    <div id="dialogue">
        <ManHeader />

        <h1>与不当仙女很久了的书信</h1>
        <div class="article">

            <div class="doumail-hd">
                发起于 2018-06-20 23:37
            </div>

            <div class="doumail-bd">

                <div class="split-line"><i>2018-06-20</i></div>

                <div class="chat" data="2028531996">

                    <div class="info">
                        <span class="time">23:37</span>
                    </div>


                    <div class="pic">

                        <a href="https://www.douban.com/people/80104970/">
                            <img src="https://img3.doubanio.com/icon/u80104970-2.jpg" alt="wudongdefeng">
                        </a>
                    </div>
                    <div class="content">
                        <div class="sender">
                            <a href="https://www.douban.com/people/80104970/">wudongdefeng</a>
                        </div>


                        <p>照片好像发不了。。。。</p>

                    </div>

                    <div class="operations">
                        <a href="#" data-mid="2028531996" class="lnk-delete">删除</a>
                    </div>
                </div>


                <div class="split-line"><i>2018-06-21</i></div>

                <div class="chat" data="2028880895">

                    <div class="info">
                        <span class="time">10:42</span>
                    </div>


                    <div class="pic">

                        <a href="https://www.douban.com/people/157097273/">
                            <img src="https://img3.doubanio.com/icon/u157097273-2.jpg" alt="不当仙女很久了">
                        </a>
                    </div>
                    <div class="content">
                        <div class="sender">
                            <a href="https://www.douban.com/people/157097273/">不当仙女很久了</a>
                        </div>


                        <p>现在呢</p>

                    </div>

                    <div class="operations">
                        <a href="#" data-mid="2028880895" class="lnk-delete">删除</a>
                    </div>
                </div>


                <div class="chat" id="status-unread-anchor" data="2029034318">

                    <div class="info">
                        <span class="time">13:05</span>
                    </div>


                    <div class="pic">

                        <a href="https://www.douban.com/people/80104970/">
                            <img src="https://img3.doubanio.com/icon/u80104970-2.jpg" alt="wudongdefeng">
                        </a>
                    </div>
                    <div class="content">
                        <div class="sender">
                            <a href="https://www.douban.com/people/80104970/">wudongdefeng</a>
                        </div>


                        <p>几个月前拍的照片吧，下面是我家的小朋友胖子哈哈</p>

                    </div>

                    <div class="operations">
                        <a href="#" data-mid="2029034318" class="lnk-delete">删除</a>
                    </div>
                </div>


                <div class="doumail-reply">
                    <form method="post" enctype="multipart/form-data"> <input type="hidden" name="ck" value="-PRD"> <input type="hidden" name="to" value="157097273">  <div class="item item-text"> <textarea name="m_text" rows="10" cols="80" autocomplete="off" value="{text}"></textarea> </div>  <div class="toolbar"> <div class="item-submit"> <span class="bn-flat"> <input type="submit" name="m_reply" value="回应"> </span> </div>  </div> </form>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    export default {
        name: "Dialogue",
        components: {
            ManHeader,
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
    .item-text{
        line-height: 0;
    }
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