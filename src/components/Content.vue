<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<img src="../assets/house.jpeg"/>-->
    <img src="../assets/logo1.jpeg"/>

    <div title="别人的信" class="writer mail_box" id="vueWrite">
      <router-link to="/reply_proper_package" class="scroll">
        <img src="../assets/box.jpeg" style="width: 80px;height: 100px;"/>
      </router-link>

    </div>
    <div title="写信" class="reader mail_box">
      <router-link to="/write_package" class="scroll">
        <img src="../assets/box.jpeg" style="width: 80px;height: 100px;"/>
      </router-link>
    </div>


    <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog">-->
      <!--<div class="modal-dialog" role="document">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
            <!--<h4 class="modal-title">Package</h4>-->
          <!--</div>-->
          <!--<div class="modal-body">-->

            <!--<textarea rows="5" cols="50" id="write_package"></textarea>-->

          <!--</div>-->
          <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>-->
            <!--<button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


    <!--<div class="modal fade" id="message_modal" tabindex="-1" role="dialog">-->
      <!--<div class="modal-dialog" role="document">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
            <!--<h4 class="modal-title">Package</h4>-->
          <!--</div>-->
          <!--<div class="modal-body">-->

            <!--<textarea rows="5" cols="50" id="show_message"> {{ properPackage }} </textarea>-->
            <!--<textarea rows="5" cols="50" id="write_message"></textarea>-->

          <!--</div>-->
          <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>-->
            <!--<button type="button" class="btn btn-primary"  v-on:click="writeMessage" data-dismiss="modal">Save</button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>

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
        // popWriteBox:function () {
        //     $('#myModal').modal('show')
        //
        // },
        //
        // getPackageBox:function () {
        //     $('#message_modal').modal('show')
        //     this.$axios.post(this.$API_CONFIG.API_GET_PROPER_PACKAGE,{}).then(data=>{
        //         if(data.data.code == 200){
        //             if(data.data.data) {
        //                 var content = eval('(' + data.data.data.content + ')');
        //                 this.properPackage = content.content;
        //                 this.target = data.data.data.user;
        //                 this.offset = data.data.data.offset;
        //             }
        //         }
        //     })
        // },
        // writeMessage:function () {
        //     var params = {
        //         content:$('#write_message').val(),
        //         target:this.target,
        //         offset:this.offset,
        //     };
        //
        //     this.$axios.post(this.$API_CONFIG.API_WRITE_MESSAGE,params).then(data=>{
        //         if(data.data.code == 200){
        //             alert(data.data.msg);
        //         }
        //     })
        // }
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
  width: 80px;
  height: 100px;
  position: absolute;

}

.writer{
  left: 250px;
  top: 60px;
}

.reader{
  left: 250px;
  top: 160px;

}

.mail_box:hover{
  cursor: pointer;
}

</style>
