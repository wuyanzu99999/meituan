<template>
  <div class="footer">
    <ul class="footer-nav">
      <li @click="goIndex(0)" class="{active:index==0}">
        <span class="iconfont icon-xiangshangjiantou"></span>
      </li>
      <li @click="goAdv(1)" class="{active:index==1}">
        <span class="iconfont icon-faxian"></span>
      </li>
      <li @click="goEmile(2)" class="{active:index==2}">
        <span class="iconfont icon-xiaoxi"></span>
      </li>
      <li @click="goMy(3)" class="{active:index==3}">
        <span class="iconfont icon-wode"></span>
      </li>
    </ul>
    <ul class="footer-nav-font">
      <li @click="goIndex(0)" :class="{ active: $store.state.index  == 0 }">首页</li>
      <li @click="goAdv(1)" :class="{ active: $store.state.index  == 1 }">发现</li>
      <li @click="goEmile(2)" :class="{ active: $store.state.index  == 2 }">消息</li>
      <li @click="goMy(3)" :class="{ active: $store.state.index  == 3 }">我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerNav",
  data() {
    return {
    };
  },
  methods: {
    goIndex(idx) {
        this.$store.commit("changeIndex",idx);
      this.$router.push({ path: "/index" });
    },
    goAdv(idx) {
            this.$store.commit("changeIndex",idx);

      this.$router.push({ path: "/found" });
    },
    goMy(idx) {
            this.$store.commit("changeIndex",idx);

      this.$router.push({ path: "/my" });
    },
    goEmile(idx) {
               this.$store.commit("changeIndex",idx);

      this.$router.push({ path: "/emile" });
    },
  },
};
</script>

<style scoped>
@import url("../assets/font-centerNav/iconfont.css");
.active {
  color: #d6b008;
}
.footer {
  height: 60px;
  background-color: #ffffff;
  width: 100%;
}

.footer .footer-nav {
  width: 89%;
  height: 42px;
  line-height: 42px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 31px;
  top: 1px;
}

.footer .footer-nav .icon-xiangshangjiantou {
  font-size: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ffd101;
}

.footer .footer-nav .icon-faxian {
  font-size: 30px;
}

.footer .footer-nav .icon-xiaoxi {
  font-size: 32px;
}

.footer .footer-nav .icon-wode {
  font-size: 34px;
}

.footer .footer-nav li,
.footer .footer-nav-font li {
  font-size: 13px;
  float: left;
}

.footer .footer-nav-font {
  width: 88.3%;
  height: 35px;
  line-height: 35px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 29px;
  top: 31px;
}
</style>