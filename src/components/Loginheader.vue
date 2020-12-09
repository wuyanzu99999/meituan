<template>
  <div class="box">
    <router-link to="/my" tag="span">
      <span>×</span>
    </router-link>
    <p>帮助</p>
  </div>
</template>

<script>
export default {
  name: 'Loginheader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
       display: flex;
    justify-content: space-between;
    width: 100%;
    height: 41px;
    padding: 0 16px 0 16px;
    margin-bottom:40px;
}

.box span {
    display: inline-block;
    font-size: 26px; 
    line-height: 41px;
    width: 12px;
    height:41px;
    /* background-color: blue; */
}

.box p {
    font-size: 12px;
    line-height: 41px;
    /* background-color: blue; */
}
</style>
