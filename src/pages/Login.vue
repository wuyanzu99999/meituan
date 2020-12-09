<template>
  <div>
    <Loginheader />
    <!-- <Tologinortoregister/> -->
    <Tologin />
    <Wechatorqq />
    <Loginorregbottom />
  </div>
</template>

<script>
import Loginheader from "../components/Loginheader";
import Tologin from "../components/Tologin";
import Wechatorqq from "../components/Wechatorqq";
import Loginorregbottom from "../components/Loginorregbottom";

export default {
  name: "Loginorreg",
  components: {
    Loginheader,
    Tologin,
    Wechatorqq,
    Loginorregbottom,
  },
  data() {
    return {};
  },
};
</script>

<style scope>
</style>
