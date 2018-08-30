<template>
    <div id="home" class="header">

        <h2 v-if="c_route">the house</h2>

        <a id="header-menu-trigger" href="#0" v-on:click="showMenu">
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </a>

        <div class="menu_out_wrap menu-is-open">
            <nav id="menu-nav-wrap">

                <a href="#0" class="close-button" title="close" v-on:click="hideMenu"><span>Close</span></a>

                <!--<h3>TheHouse.</h3>-->

                <ul class="nav-list">
                    <li class="active"><router-link to="/" class="scroll">Home <span> </span></router-link></li>
                    <li class="page-scroll"><router-link to="/message" class="scroll">Message <span> </span></router-link></li>
                    <li class="contatct-active"><router-link to="/about_us" class="scroll">About us </router-link></li>
                    <li class="contatct-active"><router-link to="/dialogue" class="scroll">Dialogue </router-link></li>
                </ul>

                <ul class="header-social-list">
                    <li>
                        <a href="#"><i class="fa fa-facebook-square"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                </ul>

            </nav>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ManHeader",
        data(){
            return {
                c_route: this.$route.path=='/' ? false : true,
            }
        },
        methods:{
            hideMenu:function () {
                this.$('.menu_out_wrap').removeClass('menu-is-open');
            },
            showMenu:function () {
                this.$('.menu_out_wrap').addClass('menu-is-open');
            }
        }
    }

</script>

<style scoped>

    .header h2{
        font-weight: 900;
        font-family: 'Lato', sans-serif;
        font-size: 30px;
        margin: 20px 0 10px 20px;
        line-height: 1.1;
        text-align: left;
    }

    /* -------------------------------------------------------------------
     * menu trigger - (_layout.css)
     * ------------------------------------------------------------------- */
    #header-menu-trigger {
        display: block;
        position: fixed;
        right: 26px;
        top: 120px;
        height: 42px;
        width: 42px;
        line-height: 42px;
        font-family: "montserrat-regular", sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        /*color: rgba(255, 255, 255, 0.5);*/
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #header-menu-trigger.opaque {
        background-color: #000000;
    }

    #header-menu-trigger.opaque .header-menu-text {
        background-color: #000000;
    }

    #header-menu-trigger:hover,
    #header-menu-trigger:focus {
        color: #FFFFFF;
    }

    #header-menu-trigger .header-menu-text {
        display: block;
        position: absolute;
        top: 0;
        left: -75px;
        width: 75px;
        text-align: center;
        background-color: transparent;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #header-menu-trigger .header-menu-icon {
        display: block;
        height: 2px;
        width: 24px;
        background-color: #cccc;
        position: absolute;
        top: 50%;
        right: 9px;
        margin-top: -2px;
    }

    #header-menu-trigger .header-menu-icon::before,
    #header-menu-trigger .header-menu-icon::after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: inherit;
        position: absolute;
        left: 0;
    }

    #header-menu-trigger .header-menu-icon::before {
        top: -9px;
    }

    #header-menu-trigger .header-menu-icon::after {
        bottom: -9px;
    }

    /* -------------------------------------------------------------------
 * off-canvas menu - (_layout.scss)
 * ------------------------------------------------------------------- */
    #menu-nav-wrap {
        background: #111111;
        color: rgba(255, 255, 255, 0.25);
        font-family: "montserrat-regular", sans-serif;
        font-size: 1.5rem;
        line-height: 1.6;
        padding: 3.6rem 3rem;
        height: 100%;
        width: 240px;
        position: fixed;
        right: 0;
        top: 0;
        visibility: hidden;
        z-index: 800;
        overflow-y: auto;
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    #menu-nav-wrap a,
    #menu-nav-wrap a:visited {
        color: rgba(255, 255, 255, 0.5);
    }

    #menu-nav-wrap a:hover,
    #menu-nav-wrap a:focus,
    #menu-nav-wrap a:active {
        color: white;
    }

    #menu-nav-wrap h3 {
        color: white;
        font-family: "montserrat-regular", sans-serif;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    #menu-nav-wrap .nav-list {
        margin: 3.6rem 0 1.5rem 0;
        padding: 0 0 1.8rem 0;
        list-style: none;
        line-height: 3.6rem;
    }

    #menu-nav-wrap .nav-list li {
        padding-left: 0;
        border-bottom: 1px dotted rgba(255, 255, 255, 0.03);
        line-height: 4.2rem;
    }

    #menu-nav-wrap .nav-list li:first-child {
        border-top: 1px dotted rgba(255, 255, 255, 0.03);
    }

    #menu-nav-wrap .nav-list li a {
        color: rgba(255, 255, 255, 0.25);
        display: block;
    }

    #menu-nav-wrap .nav-list li a:hover,
    #menu-nav-wrap .nav-list li a:focus {
        color: white;
    }

    #menu-nav-wrap .header-social-list {
        list-style: none;
        display: inline-block;
        margin: 0;
        font-size: 2.1rem;
    }

    #menu-nav-wrap .header-social-list li {
        margin-right: 12px;
        padding-left: 0;
        display: inline-block;
    }

    #menu-nav-wrap .header-social-list li a {
        color: rgba(255, 255, 255, 0.15);
    }

    #menu-nav-wrap .header-social-list li a:hover,
    #menu-nav-wrap .header-social-list li a:focus {
        color: white;
    }

    #menu-nav-wrap .header-social-list li:last-child {
        margin: 0;
    }

    #menu-nav-wrap .close-button {
        display: block;
        height: 30px;
        width: 30px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 36px;
        right: 30px;
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
    }

    #menu-nav-wrap .close-button span::before,
    #menu-nav-wrap .close-button span::after {
        content: "";
        display: block;
        height: 2px;
        width: 12px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 9px;
        margin-top: -1px;
    }

    #menu-nav-wrap .close-button span::before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    #menu-nav-wrap .close-button span::after {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    /* menu is open */
    .menu-is-open #menu-nav-wrap {
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        visibility: visible;
        -webkit-overflow-scrolling: touch;
    }


</style>