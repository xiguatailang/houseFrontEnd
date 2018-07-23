<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/house.jpeg"/>

    <div class="writer mail_box"></div>
    <div class="reader mail_box"></div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    msg: String
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
