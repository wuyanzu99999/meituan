<template>
  <div>
    <Foundheader />
    <Foundnav />
    <Foundbody />
    <!-- <FooterNav class="footer"/> -->
    <FooterNav class="footer" />
  </div>
</template>

<script>
import Foundheader from "../components/Foundheader";
import Foundnav from "../components/Foundnav";
import Foundbody from "../components/Foundbody";
// import FooterNav from "../components/index-footerNav";
import FooterNav from "../components/index-footerNav";

export default {
  name: "Found",
  components: {
    Foundheader,
    Foundnav,
    Foundbody,
    FooterNav,
  },
  data() {
    return {};
  },
};
</script>

<style scope>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
