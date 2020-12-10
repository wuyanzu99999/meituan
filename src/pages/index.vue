<template>
  <div id="app">
    <Header class="header" />
    <TopNav class="topNav" />
    <!-- <CenterNav class="centerNav"/> -->
    <FontList class="fontList" />
    <NavFont class="NavFont" />
    <FooterNav class="footer" />
  </div>
</template>
<script>
import Header from "../components/index-header";
import TopNav from "../components/index-topNav";
// import CenterNav from "../components/index-centerNav";
import NavFont from "../components/index-navFont";
import FontList from "../components/index-fontList";
import FooterNav from "../components/index-footerNav";
export default {
  name: "App",
  components: {
    Header,
    TopNav,
    // CenterNav,
    NavFont,
    FontList,
    FooterNav,
  },
};
</script>

<style scoped>
#app {
  overflow: hidden;
  position: relative;
}
.header {
  position: fixed;
  z-index: 2;
}
.topNav {
  margin-top: 40px;
}
.fontList {
  border-bottom: 1px rgba(226, 226, 226, 0.8) solid;
}
.NavFont {
  margin-bottom: 50px;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>

