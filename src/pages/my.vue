<template>
    <div>
        <MyHeader/>
        <MyWallet class="myWallet"/>
        <MyCon/>
        <MyTools class="myTools"/>
        <FooterNav class="footer"/>
    </div>
</template>

<script>
import MyHeader from "../components/my-header";
import MyWallet from "../components/my-wallet";
import MyCon from "../components/my-con";
import MyTools from "../components/my-tools";
import FooterNav from "../components/index-footerNav";


export default {
  name: 'My',
  components: {
      MyHeader,
      MyWallet,
      MyCon,
      MyTools,
      FooterNav
  }
}
</script>

<style scoped>
.myWallet{
    margin-left: 10px;
}
.myTools{
    margin-bottom: 80px;
}
.footer{
  position: fixed; 
  bottom: 0;
}
</style>

