<template>
  <div class="footer">
    <div class="footer-con">
      <div class="footer-left">
        <p>￥14.9</p>    
        <p>已优惠￥17.6</p>
      </div>
      <router-link to="/cart">
           <input type="button" value="去结算" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    name:"footeraa",
    data(){
        return {

        }
    }
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 68px;
  background-color: #f0f0f0;
  padding: 0 10px;
}
.footer .footer-con {
  overflow: hidden;
  margin-top: 12px;
  width: 100%;
  height: 45px;
  background-color: #232426;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin: 20px auto;
}
.footer .footer-con .footer-left {
  width: 200px;
  color: #fff;
  margin:0 auto;
}
.footer .footer-con .footer-left p {
  font-weight: bold;
}
.footer .footer-left p:last-child {
  color: #747475;
  font-size: 10px;
}
.footer .footer-con input {
  width: 110px;
  height: 100%;
  border: none;
  font-weight: bold;
  background-color: #464449;
  color: #ffd34e;
}

.footer .footer-con input:last-child {
  background-color: #ffd34e;
  color: #464449;
}
</style>