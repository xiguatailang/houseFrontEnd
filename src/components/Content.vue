<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/house.jpeg"/>

    <div class="writer mail_box" v-on:click="popWriteBox" id="vueWrite"></div>
    <div class="reader mail_box"></div>


    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Content',
  props: {
    msg: String
  },
    methods:{
        popWriteBox:function () {
            $('#myModal').modal('show')

            this.$axios.post(this.$API_CONFIG.API_LOGIN,{name:"napple",password:123456}).then(data=>{
                    this.$vueCookies.set('houseToken',data.headers.token,3600);
                })
        }
    }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.mail_box {
  width: 50px;
  height: 100px;
  position: absolute;

}

.writer{
  left: 350px;
  top: 200px;
}

.reader{
  left: 950px;
  top: 200px;

}

.mail_box:hover{
  cursor: pointer;
}

</style>
