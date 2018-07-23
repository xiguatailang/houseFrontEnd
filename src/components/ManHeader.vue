<template>
    <div id="home" class="header">
        <div class="container">
            <div class="logo">
                <!--<a href="#"><img src="images/logo.png" title="logo"></a>-->
                <div>TheHouse</div>
            </div>
            <!----start-top-nav---->
            <nav class="top-nav">
                <ul class="top-nav">
                    <li class="active"><a href="#home" class="scroll">Home <span> </span></a></li>
                    <li class="page-scroll"><a href="#ser" class="scroll">Services <span> </span></a></li>
                    <li class="page-scroll"><a href="#about" class="scroll">About us <span> </span></a></li>
                    <li class="page-scroll"><a href="#port" class="scroll">Portfolio <span> </span></a></li>
                    <li class="page-scroll"><a href="#team" class="scroll">Team<span> </span></a></li>
                    <li class="contatct-active"><a href="#contact" class="scroll">Contact us </a></li>
                </ul>
                <a href="#" id="pull"><img src="images/nav-icon.png" title="menu"></a>
            </nav>
            <div class="clearfix"> </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManHeader"
    }
</script>

<style scoped>
    .logo{
        float:left;
    }
    .logo a{
        color: #FFF;
        font-weight: 700;
        margin-top: 1em;
    }
    .logo a:hover{
        text-decoration:none;
    }
    .logo320{
        display:none;
    }
    /*----navbar-nav----*/
    .top-nav ul li a{
        color: #000000;
        padding: 0.2em 1.9em;
        font-size: 0.875em;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        position: relative;
    }
    .top-nav ul li a span{
        height: 20px;
        width: 1px;
        display: inline-block;
        background: #C2C2C2;
        position: absolute;
        top: 29%;
        right: 0;
    }
    .top-nav ul li.active a,
    .top-nav ul li a:hover{
        color:#F4BB36;
    }
    .logo a{
        display:block;
    }
    /* top-nav */
    .top-nav:before,
    .top-nav:after {
        content: " ";
        display: table;
    }
    .top-nav:after {
        clear: both;
    }
    nav {
        position: relative;
        float: right;
    }
    nav ul {
        padding: 0;
        float: right;
        margin: 0.75em 0;
    }
    nav li {
        display: inline;
        float: left;
        position:relative;
    }
    nav a {
        color: #fff;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        line-height: 40px;
    }
    nav a:hover{
        text-decoration:none;
        color:#00A2C1;
    }
    nav a#pull {
        display: none;
    }
</style>