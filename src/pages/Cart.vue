<template>
  <div class="container">
    <div class="header">
      <router-link to="goodsNews" tag="div">
        <input type="button" value="<" />
        提交订单
      </router-link>
    </div>
    <div class="content">
      <div class="address">
        <div class="address-con">
          <div class="address-con-title">
            <span class="take-out">外卖配送</span>
            <span class="store">
              到店自取
              <span>快15分钟</span>
            </span>
          </div>
          <h2>
            选择收获地址
            <input type="button" value=">" />
          </h2>
          <p>
            立即送出
            <span>大约15:56送达</span>
            <input type="button" value=">" />
          </p>
        </div>
      </div>
      <div class="wrapper">
        <div class="wrapper-con">
          <h5>
            {{ goodslist.shopname }}
            <span>美团快送</span>
          </h5>
          <table class="cart-list">
            <tr v-if="isDelete">
              <td>
                <img :src=goodslistImg>
              </td>
              <td>
                <div class="title">{{ goodslist.goodsname }}</div>
                <div class="info">{{ goodslist.shopname }}</div>
              </td>
              <td>￥{{ goodslist.goodprice/goodslist.goodnumber }}</td>
              <td>
                <input type="button" value="-" @click="reduce" :disabled="goodslist.goodnumber  <= 0" />
                {{ goodslist.goodnumber }}
                <input type="button" value="+" @click="add" :disabled="goodslist.goodnumber  <= 0"
                />
              </td>
              <td>{{ goodslist.goodprice}}</td>
              <td>
                <input type="button" value="x" @click="delGoods" />
              </td>
            </tr>
          </table>
          <ul class="detail">
            <li>
              打包费
              <b>￥2</b>
            </li>
            <li>
              配送费
              <span class="text">已减2.5元配送费</span>
              <span class="text">￥2.5</span>
              <b>￥0</b>
            </li>
            <li>
              <div>
                <span class="iconfont">新</span>
                门店新客立减
              </div>
              <i>-￥1</i>
            </li>
            <li>
              <div>
                <span class="iconfont">包</span>
                抵用券
              </div>
              <span class="text">填写地址后可选</span>
            </li>
            <li>
              <div>
                <span class="iconfont">券</span>
                商家代金券
              </div>
              <span class="text">填写地址后可选</span>
            </li>
            <p>满减券和商品券可同享</p>
            <div class="total-price">
              <div class="rule">
                优惠规则
                <img src="../../public/img/cart/protect-02.jpg" alt />
              </div>
              <div class="ticket">
                <span>
                  已优惠
                  <b>￥17.6</b>
                </span>
                <span>
                  小计￥
                  <b>{{ goodslist.goodprice}}</b>
                </span>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="protect">
        <div class="pro-con">
          <div class="pro-title">
            <span class="pro-tel">
              <img src="../../public/img/cart/protect-01.jpg" alt />
              号码保护
              <img src="../../public/img/cart/protect-02.jpg" alt />
            </span>
            <span class="pro-pri">
              号码隐私保护中
              <img src="../../public/img/cart/protect-03.jpg" alt />
            </span>
          </div>
          <p>
            对商家、骑手隐藏您的真实手机号保护您的隐私
            <br />为保障服务质量，开启号码保护的订单童话可能会被录音
          </p>
        </div>
      </div>
      <div class="item">
        <ul class="item-con">
          <li>
            <b>备注</b>
            <span>口味、偏好等需求></span>
          </li>
          <li>
            <b>餐具数量</b>
            <span>选“无需餐具”,能量+10 未选择 ></span>
          </li>
          <li>
            <b>发票</b>
            <span>该店不支持线上开票，请联系商户</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer-con">
        <div class="footer-left">
          <p>{{ goodslist.goodprice}}</p>
          <p>已优惠￥17.6</p>
        </div>
        <input type="button" value="找人付" />
        <router-link to="order">
          <input type="button" value="提交订单" @click="getOrder"/>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Dialog } from "vant";
export default {
  name: "Cart",
  data() {
    return {
      goodslist: {},
      userId: sessionStorage.getItem("userid"),
      goodslistImg:"",
      isDelete:true
    };
  },
  created() {
    axios.get("/api/personCart/findCartByUid", {}).then(res => {
      this.goodslist = res.data.data[0];
      console.log("goodsnews", "res", res.data.data[0]);
      this.goodslistImg="./img/"+this.goodslist.image;
    });
  },
  methods: {
    getOrder() {
      axios
        .post("/api/order/insertOrder/", {
          uid: sessionStorage.getItem("userid"),
          shopid: this.$route.query.shopId,
          gid: this.$route.query.goodsId,
          goodsnumber: this.goodslist.goodnumber,
          price:  this.goodslist.goodprice,
        })
        .then(res => {
          console.log("res", res.data.data);
        });
    },
    reduce() {
      this.goodslist.goodnumber--;
    },
    add() {
      this.goodslist.goodnumber++;
    },
    delGoods() {
      Dialog.confirm({
        title: "亲,您要删除该商品吗？"
      })
        .then(() => {
          this.isDelete=false;
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 0.52rem;
  background-color: #ffcc33;
  padding: 0 0.1rem;
  line-height: 0.52rem;
  text-align: center;
  position: relative;
}
.header input {
  font-size: 0.18rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.1rem;
}
.content {
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.address {
  width: 100%;
  height: 1.2rem;
  background-image: linear-gradient(#ffcc33, #fff);
  padding: 0 0.1rem 0.1rem 0.1rem;
}
.address .address-con {
  height: 100%;
  background-color: #ffffff;
  border-radius: 0.15rem;
  overflow: hidden;
  margin: 0 auto;
}
.address .address-con-title {
  height: 0.26rem;
  font-size: 0.12rem;
  line-height: 0.26rem;
}
.address .address-con-title > span {
  display: inline-block;
  width: 50%;
  font-weight: bold;
  text-align: center;
}
.address .address-con-title .take-out {
  background-color: #fff;
}
.address .address-con-title .store {
  background-color: #fff4d6;
  position: relative;
}
.address .address-con-title .store span {
  position: absolute;
  width: 0.45rem;
  height: 0.1rem;
  line-height: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  background-color: #fe4c44;
  font-size: 0.08rem;
  border-radius: 0.1rem;
}
.address h2 {
  color: #fda64c;
  font-size: 0.16rem;
  padding-left: 0.14rem;
  height: 0.44rem;
  line-height: 0.44rem;
  position: relative;
}
.address h2 input,
.address p input {
  background-color: transparent;
  border: none;
  color: #cbcbcb;
  float: right;
  margin-right: 0.14rem;
  font-size: 0.14rem;
  margin-top: 0.14rem;
}
.address p {
  padding-left: 0.14rem;
  font-size: 0.12rem;
  font-weight: bold;
  height: 0.44rem;
  line-height: 0.44rem;
  position: relative;
}
.address p span {
  color: #fda64c;
  margin-left: 1.83rem;
}
.wrapper {
  width: 100%;
  background-color: #f0f0f0;
  padding: 0 0.1rem 0.1rem 0.1rem;
}
.wrapper .wrapper-con {
  width: 100%;
  /* height: 4.19rem; */
  background-color: #fff;
  border-radius: 0.15rem;
  padding: 0 0.12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 购物车头部 */
.wrapper .wrapper-con h5 {
  width: 100%;
  height: 0.46rem;
  padding-top: 0.15rem;
  border-bottom: 0.01rem solid #eee;
}
.wrapper .wrapper-con h5 span {
  float: right;
  width: 0.45rem;
  height: 0.14rem;
  background-color: #eee;
  font-size: 0.1rem;
}
/* 购物车主体部分 */
.wrapper .wrapper-con .cart-list {
  flex: 1;
  padding-top: 0.17rem;
  font-size: 0.12rem;
}
.wrapper .cart-list tr {
  height: 0.62rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper .cart-list tr td img {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 0.1rem;
}
.wrapper .cart-list tr td [type="button"] {
  border: none;
  background-color: transparent;
  border: 1px solid #eee;
}
.wrapper .cart-list tr td:last-child {
  position: absolute;
  right: 0rem;
  top: 0rem;
  /* border: 1px solid #eee; */
}
/* 购物车附加部分 */
.wrapper .wrapper-con .detail {
  border-top: 0.01rem solid #eee;
  height: 2.37rem;
  font-size: 0.12rem;
}
.wrapper .wrapper-con .detail li {
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.wrapper .wrapper-con .detail li .text {
  color: #9ea09f;
}
.wrapper .wrapper-con .detail li .iconfont {
  font-size: 0.12rem;
  background-color: #fe4b22;
  color: #fff;
  border-radius: 0.03rem;
}
.wrapper .wrapper-con .detail li:nth-of-type(2) {
  height: 0.47rem;
  position: relative;
}
.wrapper .wrapper-con .detail li:nth-of-type(2) span:nth-of-type(1) {
  position: absolute;
  top: 0.2rem;
}
.wrapper .wrapper-con .detail li:nth-of-type(2) span:nth-of-type(2) {
  color: #9ea09f;
  text-decoration: line-through;
  position: absolute;
  right: 0.22rem;
}
.wrapper .wrapper-con .detail li:nth-of-type(3) i {
  color: #fe4b22;
  font-style: normal;
}
.wrapper .wrapper-con .detail p {
  width: 100%;
  border-radius: 0.1rem;
  background-color: #f7f7f7;
  height: 0.3rem;
  line-height: 0.3rem;
  padding-left: 0.1rem;
  color: #9ea09f;
}
.wrapper .wrapper-con .detail .total-price {
  height: 0.48rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  border-top: 0.01rem solid #fbfbfb;
}
.wrapper .wrapper-con .total-price .rule {
  color: #9ea09f;
}
.wrapper .total-price .ticket span:nth-of-type(1) b {
  color: #fe4b22;
}
.wrapper .total-price .ticket span:nth-of-type(2) b {
  font-size: 0.16rem;
}
.protect {
  width: 100%;
  height: 0.96rem;
  background-color: #f0f0f0;
  padding: 0 0.1rem 0.1rem 0.1rem;
}
.protect .pro-con {
  width: 100%;
  height: 0.88rem;
  background-color: #fff;
  border-radius: 0.15rem;
  padding: 0 0.14rem;
}
.protect .pro-con .pro-title {
  height: 0.42rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.12rem;
}
.protect .pro-con .pro-title .pro-tel {
  font-weight: bold;
}
.protect .pro-con p {
  font-size: 0.12rem;
  color: #9ea09f;
}
.item {
  width: 100%;
  height: 1.36rem;
  background-color: #f0f0f0;
  padding: 0 0.1rem 2rem 0.1rem;
}
.item .item-con {
  width: 100%;
  height: 1.26rem;
  background-color: #fff;
  border-radius: 0.15rem;
  padding: 0 0.14rem;
}
.item .item-con li {
  height: 0.42rem;
  line-height: 0.42rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
}
.item .item-con li span {
  color: #9ea09f;
}
.footer {
  width: 100%;
  height: 0.68rem;
  background-color: #f0f0f0;
  padding: 0 0.1rem;
}
.footer .footer-con {
  overflow: hidden;
  margin-top: 0.12rem;
  width: 100%;
  height: 0.45rem;
  background-color: #232426;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.1rem;
  margin: 0.2rem auto;
}
.footer .footer-con .footer-left {
  width: 2rem;
  color: #fff;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.footer .footer-con .footer-left p {
  font-weight: bold;
}
.footer .footer-left p:last-child {
  color: #747475;
  font-size: 0.1rem;
}
.footer .footer-con input {
  width: 0.72rem;
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