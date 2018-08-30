<template>
    <div id="Message">
        <ManHeader />


        <div class="article">

            <div class="doumail-toolbar">
                <div class="inbox-filter">
                    筛选: <a class="label"><span>全部豆邮</span><i></i></a>
                    <div class="inbox-filter-list" style="display: none;">
                        <ul>
                            <li><a href="/doumail/">全部豆邮</a></li>
                            <li><a href="/doumail/unread">未读豆邮</a></li>
                            <li><a href="/doumail/read">已读豆邮</a></li>
                        </ul>
                    </div>
                </div>

                <div class="tabs">
                    <a href="/doumail/" class="on">豆邮 (2未读)</a>
                </div>
            </div>

            <form id="doumail-form" method="post"><div style="display:none;"><input type="hidden" name="ck" value="-PRD"></div>
                <input type="hidden" value="0" name="start">
                <div class="doumail-list">
                    <ul>

                        <li class="" style="width: 100%;">


                            <div class="pic">
                                <a href="https://www.douban.com/people/157097273/">
                                    <img src="https://img3.doubanio.com/icon/u157097273-2.jpg">
                                </a>
                            </div>

                            <div class="title">
                                <div class="sender">
                                    <span class="time">2018-06-21</span>
                                    <span class="from">不当仙女很久了</span>
                                </div>
                                <p>
                                    <a href="https://www.douban.com/doumail/157097273/" class="url">
                                        几个月前拍的照片吧，下面是...
                                    </a>
                                </p>
                            </div>

                            <div class="select">
                                <input type="checkbox" name="mc_157097273" value="157097273">
                            </div>

                            <div class="operations">
                                <a rel="direct" title="真的要举报为垃圾豆邮？" data-id="157097273" data-slink="https://www.douban.com/people/157097273/" data-sname="不当仙女很久了" data-user="wudongdefeng" class="post_link report" href="javascript:;">举报</a>
                                <a title="将删除整个对话, 是否确定?" class="post_link" href="https://www.douban.com/doumail/?mc_delete=删除豆邮&amp;mc_157097273=157097273&amp;type=submit">删除</a>
                            </div>

                        </li>
                        <li class="">


                            <div class="pic">
                                <a href="https://www.douban.com/people/95805238/">
                                    <img src="https://img3.doubanio.com/icon/u95805238-16.jpg">
                                    <span class="user-verify-icon-1-small"></span>
                                </a>
                            </div>

                            <div class="title">
                                <div class="sender">
                                    <span class="time">2016-06-28</span>
                                    <span class="from">豆瓣</span>
                                </div>
                                <p>
                                    <a href="https://www.douban.com/doumail/95805238/" class="url">
                                        亲爱的 wudongdefeng 你好，
                                        ...
                                    </a>
                                </p>
                            </div>

                            <div class="select">
                                <input type="checkbox" name="mc_95805238" value="95805238">
                            </div>

                            <div class="operations">
                                <a rel="direct" title="真的要举报为垃圾豆邮？" data-id="95805238" data-slink="https://www.douban.com/people/95805238/" data-sname="豆瓣" data-user="wudongdefeng" class="post_link report" href="javascript:;">举报</a>
                                <a title="将删除整个对话, 是否确定?" class="post_link" href="https://www.douban.com/doumail/?mc_delete=删除豆邮&amp;mc_95805238=95805238&amp;type=submit">删除</a>
                            </div>

                        </li>
                        <li class="">


                            <div class="pic">
                                <a href="https://www.douban.com/people/46056530/">
                                    <img src="https://img3.doubanio.com/icon/u46056530-5.jpg">
                                </a>
                            </div>

                            <div class="title">
                                <div class="sender">
                                    <span class="time">2015-01-20</span>
                                    <span class="from">千寻</span>
                                </div>
                                <p>
                                    <a href="https://www.douban.com/doumail/46056530/" class="url">
                                        加微信说吧545230809
                                    </a>
                                </p>
                            </div>

                            <div class="select">
                                <input type="checkbox" name="mc_46056530" value="46056530">
                            </div>

                            <div class="operations">
                                <a rel="direct" title="真的要举报为垃圾豆邮？" data-id="46056530" data-slink="https://www.douban.com/people/46056530/" data-sname="千寻" data-user="wudongdefeng" class="post_link report" href="javascript:;">举报</a>
                                <a title="将删除整个对话, 是否确定?" class="post_link" href="https://www.douban.com/doumail/?mc_delete=删除豆邮&amp;mc_46056530=46056530&amp;type=submit">删除</a>
                            </div>

                        </li>



                    </ul>
                    <div class="doumail-list-ft">
           <span class="button-group">
           <input name="mc_delete" type="submit" value="删除" data-confirm="将删除整个对话, 是否确定?">
           <input name="mc_markspam" type="submit" value="移至垃圾箱">
           <input name="mc_markread" type="submit" value="标记为已读">
           </span>
                        <input name="checkall" type="checkbox">
                    </div>
                </div>
            </form>

        </div>

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
    #Message {
        width: 1040px;
        margin: 0 auto;
    }

    .article{
        width: 675px;
        float: left;
        padding-right: 40px;
        font: 12px Helvetica,Arial,sans-serif;
        line-height: 1.62;
    }
    .doumail-toolbar{
        margin-bottom: 15px;
    }
    .doumail-toolbar .inbox-filter {
        float: right;
        position: relative;
        z-index: 1;
        color: #666;
    }
    .tabs {
        font-size: 0;
        letter-spacing: -0.31em;
        word-spacing: -0.43em;
    }
    input {
        margin-right: 3px;
        vertical-align: middle;
    }
    .doumail-list {
        border-top: 1px solid #eee;
    }
    .doumail-list .pic {
        float: left;
        margin: 0 10px 0 0;
        position: relative;
    }
    .doumail-list .title {
        overflow: hidden;
        zoom: 1;
        word-wrap: break-word;
        line-height: 1.5;
        cursor: pointer;
        text-align: left;
    }
    .doumail-list .title .sender {
        margin: -2px 0 2px;
        color: #666;
    }
    .doumail-list .title .sender .time {
        float: right;
        color: #999;
    }
    .doumail-list .title p {
        margin: 0;
        width: 80%;
        line-height: 1.4;
    }
    .doumail-list .select {
        position: absolute;
        right: 10px;
        top: 0;
        padding-top: 30px;
    }
    .operations {
        display: none;
        position: absolute;
        top: 32px;
        right: 30px;
        line-height: 1.5;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    ul, ol {
        list-style: none;
    }
    .doumail-list li {
        position: relative;
        overflow: hidden;
        zoom: 1;
        padding: 15px 10px 14px;
        border-bottom: 1px solid #eee;
    }
    .doumail-list .state-unread {
        background: #fffced;
    }
    .doumail-list-ft {
        padding: 12px 10px 0;
        margin-bottom: 10px;
        text-align: right;
    }
    .doumail-list-ft input {
        padding-top: 2px;
        line-height: 1.2;
        margin-right: 3px;
    }

</style>