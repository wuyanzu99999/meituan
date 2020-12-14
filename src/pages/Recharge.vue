<template>
  <div class="box">
    <div class="header">
      <p>
        <router-link to="/my" tag="span">
          <input type="button" value="<" />
        </router-link>
        充值中心
      </p>
    </div>
    <div class="phone">
      <input type="text" v-model="username" />
      <p>首次充值，请仔细核对充值号码（陕西电信）</p>
    </div>
    <div class="Discount">
      <p>💎使用美团支付，最高再享<span>&nbsp;5元&nbsp;</span>优惠</p>
    </div>
    <div class="charges">
      <div class="btn">
        <input type="button" value="充话费" />
        <input type="button" value="充流量" />
      </div>
      <ul>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
        <li>
          <p>10元</p>
          <span>售价10.00元</span>
        </li>
      </ul>
    </div>
    <div class="other">
      <h1>其他充值</h1>
      <ul>
        <li>
          <p>视频会员</p>
          <span>百万补贴优惠</span>
        </li>
        <li>
          <p>视频会员</p>
          <span>百万补贴优惠</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li>充值记录</li>
        <li>充值提醒</li>
        <li>常见问题</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recharge",
  data() {
    return {
      username:"",
      userId:sessionStorage.getItem("userid")
    };
  },
  created() {
    console.log(22);
    axios.get("/api/user/findOneById?id="+this.userId, {}).then((res) => {
      this.username = res.data.data.username;
      console.log("会员中心返回的商品信息", this.username);
    });
  },
};
</script>

<style scoped>
.header {
  height: 42px;
  background-color: #eeeef0;
}
.header p {
  text-align: center;
  line-height: 42px;
}
.header p input {
  border: none;
  float: left;
  margin-left: 10px;
  font-size: 20px;
  color: #888;
}
.phone {
  height: 70px;
  border-bottom: 2px solid #efeff1;
  padding-left: 16px;
  padding-top: 22px;
}
.phone input {
  height: 22px;
  font-size: 22px;
  border: none;
  outline: 0;
}
.phone p {
  font-size: 12px;
  color: #e84038;
}
.Discount {
  font-size: 13px;
  color: #7c7c8c;
  background-color: #f7f7f8;
  line-height: 38px;
  width: 330px;
  height: 38px;
  border-radius: 5px;
  margin: 10px auto;
}
.Discount span {
  color: #e94357;
}
.charges .btn {
  display: flex;
  justify-content: space-around;
}
.charges .btn input {
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
}
.charges .btn input:first-child {
  border-bottom: 3px solid #fec100;
}
.charges ul {
  margin-top: 18px;
}
.charges li {
  float: left;
  width: 100px;
  height: 60px;
  border: 2px solid #fec100;
  border-radius: 5px;
  text-align: center;
  margin-left: 15px;
  margin-top: 12px;
}
.charges li p {
  font-size: 14px;
  color: #090929;
  padding-top: 10px;
  padding-bottom: 6px;
  font-weight: bold;
}
.charges li span {
  font-size: 12px;
  color: #818191;
}
.charges {
  height: 280px;
  border-bottom: 10px solid #f2f2f4;
}
.other h1 {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 20px;
}
.other li {
  float: left;
  width: 160px;
  height: 74px;
  border: 2px solid #dedee2;
  border-radius: 5px;
}
.other li:first-child {
  margin-right: 6px;
  margin-left: 20px;
}
.other li p {
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 12px;
  margin-left: 22px;
}
.other li span {
  font-size: 11px;
  margin-left: 22px;
  color: #9f9fac;
}

.footer li {
  float: left;
  margin-right: 8px;
  font-size: 12px;
  color: #0d539b;
  width: 60px;
  text-align: center;
  border-right: 1px solid #80a3c9;
  margin-top: 15px;
}
.footer li:first-child {
  margin-left: 90px;
}
.footer li:last-child {
  border: 0;
}
</style>
