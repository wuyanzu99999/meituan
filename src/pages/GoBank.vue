<template>
  <div>
    <!-- 头部 -->
    <div class="banked-header">
      <div class="banked-htop">
        <ul>
          <router-link to="/my">
            <li><span class="iconfont iconyoujiankuohao"></span></li>
          </router-link>
          <li>
            <span class="iconfont iconkefuerjirengongfuwuxianxing"></span>
            <span class="iconfont iconxinfeng"></span>
            <span class="iconfont iconshezhi"></span>
          </li>
        </ul>
        <p>{{ username }}</p>
      </div>
      <div class="banked-hbottom">
        <p>为了您的资金安全,请实名认证</p>
        <span>去实名 ></span>
      </div>
    </div>

    <!-- bankbanner -->
    <div class="bank-banner">
      <div class="bank-banner1">
        <ul>
          <li>余额(元)&nbsp;领取保障</li>
          <li>0.00</li>
        </ul>
        <ul>
          <li>银行卡</li>
          <li>去绑定1张</li>
        </ul>
      </div>
      <div class="bank-banner2">
        <ul>
          <li>现金劵(张)<span>1</span></li>
          <li>领取更多新人优惠</li>
        </ul>
      </div>
    </div>

    <!-- bankmaney -->
    <div class="maneyid">
      <div class="maneyid1">
        <ul>
          <li><span class="iconfont iconlicai"></span>借钱</li>
          <li>随借随还</li>
          <li>></li>
        </ul>
        <p>5,000</p>
        <p>大约可借</p>
        <p>立即借款</p>
      </div>
      <div class="maneyid1" id="maneyid1">
        <ul>
          <li><span class="iconfont iconlicai"></span>理财</li>
          <li>随买随用</li>
          <li>></li>
        </ul>
        <p>0.001元起投</p>
        <p>收益稳健</p>
        <p>立即购买</p>
      </div>
    </div>

    <!-- banklist -->
    <div class="listnews">
      <dl>
        <dt><span class="iconfont iconxinyongqia"></span></dt>
        <dd>美团信用卡</dd>
      </dl>
      <dl>
        <dt><span class="iconfont icondaikuan"></span></dt>
        <dd>生意贷</dd>
      </dl>

      <dl>
        <dt><span class="iconfont iconzhangdan"></span></dt>
        <dd>账单</dd>
      </dl>
      <dl>
        <dt><span class="iconfont iconicon-test"></span></dt>
        <dd>美团卡</dd>
      </dl>
      <dl>
        <dt><span class="iconfont iconhuzhu"></span></dt>
        <dd>美团互助</dd>
      </dl>
      <dl>
        <dt><span class="iconfont iconlicai"></span></dt>
        <dd>信用卡还贷</dd>
      </dl>
      <dl>
        <dt><span class="iconfont icongongyi"></span></dt>
        <dd>美团公益</dd>
      </dl>
    </div>

    <!-- bankarea -->
    <div class="area">
      <div class="area-top">
        <div class="area1">
          <ul>
            <li>新人专区</li>
            <li>专属权益等你拿</li>
          </ul>
          <p><img src="../../public/img/bankimg/0002.png" /></p>
        </div>
        <div class="area1">
          <ul>
            <li>省钱专区</li>
            <li>每天3元外卖劵</li>
          </ul>
          <p><img src="../../public/img/bankimg/0003.png" /></p>
        </div>
      </div>
      <div class="area-botm">
        <div class="area1">
          <ul>
            <li>银行优惠</li>
            <li>满减活动任你选</li>
          </ul>
          <p><img src="../../public/img/bankimg/0004.png" /></p>
        </div>

        <div class="area1">
          <ul>
            <li>支付专区</li>
            <li>免费抢神劵</li>
          </ul>
          <p class="area-p"><img src="../../public/img/bankimg/0005.png" /></p>
        </div>
      </div>
    </div>

    <!-- bankhelp -->
    <div class="mtt">
      <div class="mt-help">
        <ul>
          <li><span class="iconfont iconhuzhu"></span>美团公益</li>
          <li>困境儿童救助</li>
          <li>></li>
        </ul>
        <p>捐<span>1</span>元,让事实孤儿远离困境</p>
        <p>帮助他们有饭吃有衣穿</p>
      </div>
      <div class="mt-help">
        <ul>
          <li><span class="iconfont iconlicai"></span>美团理财</li>
          <li>精选银行存款</li>
          <li>></li>
        </ul>
        <p>50元起存,<span>3.50%</span>年化收益率</p>
        <p>保本保息随时收益</p>
      </div>
      <div class="mtt-end">
        <p>美团钱包</p>
        <p>美团旗下金融科技平台</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "GoBank",
  data() {
    return {
      username: "",
      userId:sessionStorage.getItem("userid")
    };
  },
  created() {
    axios.get("/api/user/findOneById?id="+this.userId, {}).then((res) => {
      this.username = res.data.data.username;
        console.log("gobank页面发送请求成功后返回的数据",this.username);
    });
  },
};
</script>
<style  scoped>
/* 头部 */
@import url("../assets/font_gobank/iconfont.css");
.banked-header {
  background-color: #eeeeee;
  height: 1.06rem;
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.13rem;
}
.banked-htop ul {
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
}
.banked-htop ul li:nth-of-type(2) span {
  margin-left: 0.18rem;
}
.banked-hbottom {
  height: 0.66rem;
  line-height: 0.66rem;
  display: flex;
  justify-content: space-between;
}
.banked-hbottom p {
  font-size: 0.14rem;
  color: #141414;
}
.banked-hbottom span {
  display: block;
  background-color: #fff;
  width: 0.6rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  border-radius: 0.16rem;
  font-size: 0.1rem;
  color: #f53f00;
  margin-top: 0.21rem;
}
/* banner */
.bank-banner {
  height: 1.3rem;
  background-color: #ffffff;
  border-radius: 0.04rem;
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.13rem;
}
.bank-banner1 {
  display: flex;
}
.bank-banner1 ul li:nth-of-type(1) {
  width: 1.55rem;
  font-size: 0.12rem;
  color: #707070;
  margin-top: 0.2rem;
}
.bank-banner1 ul li:nth-of-type(2) {
  font-size: 0.18rem;
  color: #000000;
  margin-bottom: 0.15rem;
}
.bank-banner2 ul {
  height: 0.48rem;
  line-height: 0.48rem;
  border-top: 0.02rem solid #f8f8f8;
  display: flex;
}
.bank-banner2 ul li {
  width: 1.55rem;
  color: #3a3a3a;
  font-size: 0.1rem;
}
.bank-banner2 ul span {
  color: red;
}
/* bankmaney */
.maneyid {
  /* background-color: #fff; */
  margin-top: 0.1rem;
  height: 1.18rem;
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.13rem;
  display: flex;
  overflow-x: auto;
}
.maneyid1 {
  width: 2.4rem;
  height: 1.18rem;
  background-color: #2c2c2d;
  border-radius: 0.12rem;
  box-sizing: border-box;
  padding-left: 0.13rem;
  margin-right: 0.08rem;
  position: relative;
  flex-shrink: 0;
}
.maneyid1 ul {
  height: 0.47rem;
  line-height: 0.6rem;
  display: flex;
}
.maneyid1 ul li:nth-of-type(1) {
  font-size: 0.13rem;
  color: #f6f4f4;
  margin-right: 0.05rem;
}
.maneyid1 ul li:nth-of-type(2) {
  font-size: 0.12rem;
  color: #b8b4b1;
  margin-right: 0.05rem;
}
.maneyid1 ul li:nth-of-type(3) {
  margin-left: 50%;
}
.maneyid1 p:nth-of-type(1) {
  font-size: 0.17rem;
  color: #f6f4f4;
}
.maneyid1 p:nth-of-type(2) {
  font-size: 0.11rem;
  color: #b8b4b1;
}
.maneyid1 p:nth-of-type(3) {
  width: 0.8rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.11rem;
  background-color: #ffdd9d;
  position: absolute;
  bottom: 0.22rem;
  right: 0.13rem;
  border-radius: 0.12rem;
}
#maneyid1 {
  background-color: #ff7701;
}
/* banklist  */
.listnews {
  height: 0.86rem;
  display: flex;
  overflow-x: auto;
  font-size: 0.11rem;
  color: #6c6c6c;
}
.listnews dl {
  text-align: center;
  margin-top: 0.22rem;
  margin-right: 0.2rem;
  flex-shrink: 0;
}

/* bankarea */
.area {
  width: 3.6rem;
  height: 1.6rem;
  background-color: #fff;
  display: flex;
  flex-shrink: 0;
}
.area1 {
  width: 1.66rem;
  height: 0.8rem;
  box-sizing: border-box;
  padding-top: 0.2rem;
  padding-left: 0.14rem;
  display: flex;
}
.area1 ul li:nth-of-type(1) {
  color: #1b1b1b;
  font-size: 0.12rem;
}
.area1 ul li:nth-of-type(2) {
  color: #bababa;
  font-size: 0.11rem;
  margin-right: 0.16rem;
  margin-top: 0.08rem;
}
.area-p {
  margin-left: 0.22rem;
}

/* bankhelp */
.mtt {
  width: 100%;
  height: 3.8rem;
}
.mt-help {
  height: 1.2rem;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.13rem;
  margin-top: 0.1rem;
}
.mt-help ul {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
}
.mt-help ul li:nth-of-type(1) {
  font-size: 0.13rem;
  margin-right: 0.05rem;
}
.mt-help ul li:nth-of-type(2) {
  font-size: 0.12rem;
  margin-right: 0.05rem;
  /* border-left: 0.01rem solid #e1e1e1; */
}
.mt-help ul li:nth-of-type(3) {
  margin-left: 50%;
}
.mt-help p:nth-of-type(1) {
  font-size: 0.14rem;
  color: #151515;
}
.mt-help p:nth-of-type(1) span {
  color: #fb4609;
}
.mt-help p:nth-of-type(2) {
  margin-top: 0.11rem;
  font-size: 0.12rem;
  color: #878787;
}
.mtt-end {
  height: 1.33rem;
  text-align: center;
}
.mtt-end p:nth-of-type(1) {
  margin-top: 0.37rem;
  font-size: 0.14rem;
  color: #afafaf;
  font-weight: bold;
}
.mtt-end p:nth-of-type(2) {
  font-size: 0.1rem;
  color: #afafaf;
  margin-top: 0.1rem;
  /* font-weight:bold */
}
</style>