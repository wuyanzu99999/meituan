<template>
  <div id="emile">
    <EmileHeader />
    <EmileMessage />
    <FooterNav class="footer" />
  </div>
</template>

<script>
import EmileHeader from "../components/emile-header";
import EmileMessage from "../components/emile-messageList";
import FooterNav from "../components/index-footerNav";

export default {
  name: "emile",
  components: {
    EmileHeader,
    EmileMessage,
    FooterNav,
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>

