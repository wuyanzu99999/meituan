<template>
  <div>
    <goodsBanner />
    <goodslist />
    <!-- <footeraa class="bottom-box" /> -->
  </div>
</template>

<script>
import goodsBanner from "../components/goodsBanner";
import goodslist from "../components/goodslist";
// import footeraa from "../components/footer";

export default {
  name: "Goodlist",
  components: {
    goodsBanner,
    // footeraa,
    goodslist,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 
.top-box{
  position: fixed;
  top:0;
  left:0;
} */

.center-box {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.bottom-box {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
