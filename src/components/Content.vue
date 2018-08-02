<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/house.jpeg"/>

    <div class="writer mail_box" v-on:click="popWriteBox" id="vueWrite"></div>
    <div class="reader mail_box" v-on:click="getPackageBox"></div>


    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Package</h4>
          </div>
          <div class="modal-body">

            <textarea rows="5" cols="50" id="write_package"></textarea>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary"  v-on:click="writePackage" data-dismiss="modal">Save</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>


    <div class="modal fade" id="message_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Package</h4>
          </div>
          <div class="modal-body">

            <textarea rows="5" cols="50" id="show_message"> {{ properPackage }} </textarea>
            <textarea rows="5" cols="50" id="write_message"></textarea>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary"  v-on:click="writeMessage" data-dismiss="modal">Save</button>
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
    data(){
        return {
            properPackage:'',
            target:'',
            offset:0,
        }
    },
    methods:{
        popWriteBox:function () {
            $('#myModal').modal('show')

        },
        writePackage:function () {
            var params = {
                content:$('#write_package').val(),
                'type':0,
            };

            this.$axios.post(this.$API_CONFIG.API_WRITE_USER_PACKAGE,params).then(data=>{
                if(data.data.code == 200){
                    alert(data.data.msg);
                }
            })
        },
        getPackageBox:function () {
            $('#message_modal').modal('show')
            this.$axios.post(this.$API_CONFIG.API_GET_PROPER_PACKAGE,{}).then(data=>{
                if(data.data.code == 200){
                    if(data.data.data) {
                        var content = eval('(' + data.data.data.content + ')');
                        this.properPackage = content.content;
                        this.target = data.data.data.user;
                        this.offset = data.data.data.offset;
                    }
                }
            })
        },
        writeMessage:function () {
            var params = {
                content:$('#write_message').val(),
                target:this.target,
                offset:this.offset,
            };

            this.$axios.post(this.$API_CONFIG.API_WRITE_MESSAGE,params).then(data=>{
                if(data.data.code == 200){
                    alert(data.data.msg);
                }
            })
        },
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
