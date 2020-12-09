<template>
  <div class="header">
    <span class="iconfont icon-shezhi"></span>
    <div v-if="isShow">
      <router-link to="/vip" tag="p">
        <span class="iconfont icon-kefu"></span>
        <img src="../assets/img/id-img.png" alt="" id="id-img" />
        <p id="user-name">{{ username }}</p>
        <span id="up"><u>提升实名等级</u></span>
        <span id="strong"><u>成长值 521</u></span>
      </router-link>
    </div>
    <div v-else class="unlogin">
      <router-link to="/login" tag="p">
        <p>点击登录</p>
      </router-link>
    </div>

    <ul id="font-ul">
      <li>
        <span class="iconfont icon-shoucang"></span>
      </li>
      <li>
        <span class="iconfont icon-comment-w"></span>
      </li>
      <li>
        <span class="iconfont icon-zuji"></span>
      </li>
      <li>
        <span class="iconfont icon-kabao"></span>
      </li>
    </ul>
    <ul id="font-nav">
      <li>收藏</li>
      <li>评价</li>
      <li>足迹</li>
      <li>红包</li>
    </ul>
    <div id="middle-nav">
      <ul id="top-ul">
        <li>
          <span class="iconfont icon-icon"></span>
        </li>
        <li>
          <span class="iconfont icon-daifukuan"></span>
        </li>
        <li>
          <span class="iconfont icon-daishiyong"></span>
        </li>
        <li>
          <span class="iconfont icon-daipingjia"></span>
        </li>
        <li>
          <span class="iconfont icon-shouhou"></span>
        </li>
      </ul>
      <ul id="bottom-ul">
        <router-link tag="li" to="/Order">
          <li>我的订单</li>
        </router-link>

        <li>待付款</li>
        <li>待使用</li>
        <li>待评价</li>
        <li>退款/售后</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      isShow: sessionStorage.getItem("username"),
      // isShow: true,
      username:""
    };
  },
  created() {
    // console.log(22);
    axios.get("/api/user/findOneById?id=1", {}).then((res) => {
        this.username=res.data.data.username;
    //   console.log(res.data.data);
    });
  },
};
</script>

<style scoped>
@import url("../assets/font-myHeader/iconfont.css");
.header {
  height: 215px;
  width: 100%;
  background-color: #ffd101;
}
.header .icon-kefu {
  font-size: 23px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.unlogin {
  font-size: 18px;
  text-align: left;
  line-height: 40px;
  margin-left: 37px;
  padding-top: 30px;
}
.header #id-img {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  top: 32px;
  left: 15px;
}

.header #user-name {
  position: absolute;
  top: 33px;
  left: 70px;
  font-size: 16px;
}

.header #up {
  width: 20%;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #f5c70c;
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: 70px;
  font-size: 11px;
}

.header #up u {
  display: block;
  text-decoration: none;
  height: 22px;
  line-height: 22px;
  width: 73px;
  transform: scale(0.8);
}

.header #strong {
  width: 20%;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #f5c70c;
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: 160px;
  font-size: 11px;
}

.header #strong u {
  display: block;
  text-decoration: none;
  height: 22px;
  line-height: 22px;
  width: 73px;
  transform: scale(0.8);
}

.header #font-ul {
  position: absolute;
  height: 30px;
  line-height: 30px;
  top: 105px;
  width: 83.3%;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
}

.header #font-ul .icon-shoucang {
  font-size: 36px;
}

.header #font-ul .icon-comment-w {
  font-size: 26px;
}

.header #font-ul .icon-zuji {
  font-size: 26px;
}

.header #font-ul .icon-kabao {
  font-size: 36px;
}

.header #font-ul li {
  list-style: none;
  float: left;
}

.header #font-nav {
  position: absolute;
  height: 30px;
  line-height: 30px;
  top: 145px;
  width: 83.3%;
  justify-content: space-between;
  /* margin-left: 16px; */
  display: flex;
}

.header #font-nav li {
  list-style: none;
  float: left;
  width: 64px;
  text-align: center;
}

.header #middle-nav {
  width: 95%;
  height: 85px;
  position: absolute;
  top: 180px;
  /* margin-left: 2.5%; */
  background-color: #f5f3f3;
  border-radius: 10px;
}

.header #middle-nav #top-ul {
  /* padding-left:7%; */
  width: 85%;
  height: 45px;
  line-height: 45px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.header #middle-nav #bottom-ul {
  /* padding-left: 4.5%; */
  width: 85%;
  height: 45px;
  line-height: 45px;
  display: flex;
  margin-top: -11px;
  font-size: 16px;
  justify-content: space-between;
}

.header #middle-nav #bottom-ul li {
  font-size: 12px;
}

.header #middle-nav .icon-icon {
  font-size: 30px;
  color: #feb800;
}

.header #middle-nav .icon-daifukuan {
  font-size: 34px;
  color: #feb800;
}

.header #middle-nav .icon-daishiyong {
  font-size: 30px;
  color: #feb800;
}

.header #middle-nav .icon-daipingjia {
  font-size: 37px;
  color: #feb800;
}

.header #middle-nav .icon-shouhou {
  font-size: 30px;
  color: #feb800;
}
.header .icon-shezhi {
  font-size: 23px;
  position: absolute;
  top: 9px;
  right: 55px;
}

.header .icon-kefu {
  font-size: 23px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.header #id-img {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  top: 32px;
  left: 15px;
}

.header #user-name {
  position: absolute;
  top: 33px;
  left: 70px;
  font-size: 16px;
}

.header #up {
  width: 73px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #f5c70c;
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: 70px;
  font-size: 11px;
}

.header #up u {
  display: block;
  text-decoration: none;
  height: 22px;
  line-height: 22px;
  width: 73px;
  transform: scale(0.8);
}

.header #strong {
  width: 73px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #f5c70c;
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: 160px;
  font-size: 11px;
}

.header #strong u {
  display: block;
  text-decoration: none;
  height: 22px;
  line-height: 22px;
  width: 73px;
  transform: scale(0.8);
}

.header #font-ul {
  position: absolute;
  height: 30px;
  line-height: 30px;
  top: 105px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}

.header #font-ul .icon-shoucang {
  font-size: 36px;
}

.header #font-ul .icon-comment-w {
  font-size: 26px;
}

.header #font-ul .icon-zuji {
  font-size: 26px;
}

.header #font-ul .icon-kabao {
  font-size: 36px;
}
.header #font-ul li {
  list-style: none;
  float: left;
}

.header #font-nav {
  position: absolute;
  height: 30px;
  line-height: 30px;
  top: 145px;
  width: 100%;
  justify-content: space-between;
  /* margin-left: 5%; */
  display: flex;
}

.header #font-nav li {
  list-style: none;
  float: left;
  width: 64px;
  text-align: center;
}

.header #middle-nav {
  width: 94%;
  height: 85px;
  position: absolute;
  top: 180px;
  left: 10px;
  background-color: #ffff;
  border-radius: 10px;
}

.header #middle-nav #top-ul {
  margin-left: 16px;
  width: 83%;
  height: 45px;
  line-height: 45px;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.header #middle-nav #bottom-ul {
  margin-left: 10px;
  width: 89%;
  height: 45px;
  line-height: 45px;
  display: flex;
  margin-top: -11px;
  font-size: 16px;
  justify-content: space-between;
}

.header #middle-nav #bottom-ul li {
  font-size: 12px;
}

.header #middle-nav .icon-icon {
  font-size: 30px;
  color: #feb800;
}

.header #middle-nav .icon-daifukuan {
  font-size: 34px;
  color: #feb800;
}

.header #middle-nav .icon-daishiyong {
  font-size: 30px;
  color: #feb800;
}

.header #middle-nav .icon-daipingjia {
  font-size: 37px;
  color: #feb800;
}

.header #middle-nav .icon-shouhou {
  font-size: 30px;
  color: #feb800;
}
</style>