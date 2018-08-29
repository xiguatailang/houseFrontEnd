<template>
    <div id="Message">
        <ManHeader />
        <div>

            <form class="form-horizontal">
                <div class="control-group">
                    <label class="control-label" for="inputEmail">Email</label>
                    <div class="controls">
                        <input type="text" id="inputEmail" placeholder="Email">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="inputPassword">Password</label>
                    <div class="controls">
                        <input type="password" id="inputPassword" placeholder="Password">
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <label class="checkbox">
                            <input type="checkbox"> Remember me
                        </label>
                        <button type="submit" class="btn" @click.prevent="login">Sign in</button>
                        <!--<button type="submit" class="btn" @click="login">Sign in</button>-->
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import ManHeader from './ManHeader';
    export default {
        name: "Login",
        components: {
            ManHeader,
        },
        methods:{
            login:function () {
                var name = this.$('#inputEmail').val();
                var pd = this.$('#inputPassword').val();
                if(name && pd){
                    var params = {
                        name:name,
                        password:pd,
                    }
                    this.$axios.post(this.$API_CONFIG.API_LOGIN,params).then(data=>{
                        if(data.data.code==200) {
                            this.$vueCookies.set('houseToken', data.headers.token, 3600);
                            this.$axios.defaults.headers.common['token'] = data.headers.token;
                            alert(data.data.msg)
                        }else {
                            alert(data.data.msg)
                        }
                    })
                }else {
                    alert('check your name and password');
                }
            }
        }
    }
</script>

<style scoped>

</style>