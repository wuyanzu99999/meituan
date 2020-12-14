<template>
  <div class="box">
    <div class="banner">
      <router-link to="/my">
        <input
          type="button"
          value="<"
          style="
            position: absolute;
            border: none;
            background-color: transparent;
            color: #b1adad;
            font-size: 26px;
            left: 4px;
            top: 6px;
          "
        />
      </router-link>
      <img src="../../public/img/vip/head.jpg" alt="" />
      <p>{{username}}</p>
      <p>成长值：0&nbsp;<span></span> &nbsp; 积分：0</p>
    </div>
    <div class="Grade">
      <div class="Grade-con">
        <p>我的会员</p>
        <p>会员攻略></p>
      </div>
      <div class="Grade-V">
        <h1>0/100</h1>
        <h2></h2>
        <ul>
          <li>V <span>0</span></li>
          <li>V <span>1</span></li>
          <li>V <span>2</span></li>
          <li>V <span>3</span></li>
          <li>V <span>4</span></li>
          <li>V <span>5</span></li>
          <li>V <span>6</span></li>
        </ul>
        <p>距下一等级还需<span>100</span>成长值</p>
      </div>
    </div>
    <div class="privilege">
      <div class="Grade-con">
        <p>我的特权</p>
        <p>查看全部></p>
      </div>
      <div class="identity">
        <img src="../../public/img/vip/identity.png" alt="" />
        <p>身份名牌</p>
      </div>
    </div>
    <div class="grow">
      <div class="Grade-con">
        <p>成长任务</p>
      </div>
      <div class="task">
        <ul>
          <li>
            <div class="left">
              <p>上传头像</p>
              <span>+10成长值</span>
            </div>
            <div class="right">
              <h1>立即设置</h1>
            </div>
          </li>
          <li>
            <div class="left">
              <p>初次绑定手机</p>
              <span>+15成长值</span>
            </div>
            <div class="right">
              <h1>领取奖励</h1>
            </div>
          </li>
          <li>
            <div class="left">
              <p>设置用户名</p>
              <span>+10成长值</span>
            </div>
            <div class="right">
              <h1>领取奖励</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Vip",
  data() {
    return {
      username: "",
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
.box {
  background-color: #f4f4f4;
}
.banner {
  background-color: #fec700;
  height: 180px;
  overflow: hidden;
  text-align: center;
}
.banner img {
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 70px;
  width: 70px;
}
.banner p:first-of-type {
  font-weight: bold;
}
.banner p:last-of-type {
  font-size: 14px;
}
.banner span {
  display: inline-block;
  height: 14px;
  border: 1px solid #997910;
}
.Grade {
  height: 140px;
  background-color: white;
}
.Grade-con {
  height: 32px;
  border-bottom: 2px solid #f7f7f7;
  display: flex;
  justify-content: space-between;
}
.Grade-con p {
  margin-top: 10px;
  font-size: 14px;
  color: #a4a4a4;
}
.Grade-V {
  height: 100px;
  padding-left: 10px;
}
.Grade-V h1 {
  font-size: 10px;
  margin-top: 12px;
  margin-bottom: 10px;
}
.Grade-V h2 {
  width: 340px;
  margin: 0 auto;
  border: 2px solid #e3e3e3;
  border-radius: 2px;
  margin-bottom: 10px;
}
.Grade-V ul {
  display: flex;
  justify-content: space-around;
}
.Grade-V li {
  font-size: 12px;
  font-style: italic;
  color: #d9d9d9;
}
.Grade-V li span {
  font-size: 6px;
}
.Grade-V li:first-of-type {
  color: #fc5d00;
}
.Grade-V p {
  margin-top: 18px;
  font-size: 12px;
  color: #727272;
}
.Grade-V p span {
  color: black;
  font-weight: bold;
}
.privilege {
  height: 110px;
  margin-top: 10px;
  background-color: white;
}
.identity img {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 17px;
}
.identity p {
  font-size: 10px;
  color: #9e9e9e;
  margin-left: 10px;
  margin-top: 14px;
}
.grow {
  background-color: white;
  margin-top: 10px;
}
.task li {
  display: flex;
  justify-content: space-between;
  height: 58px;
  border-bottom: 2px solid #e3e3e3;
  padding-left: 10px;
}
.task .left p {
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 8px;
}
.task .left span {
  font-size: 12px;
  color: #e69c45;
}
.task .right h1 {
  width: 54px;
  height: 20px;
  border: 2px solid #dbdbdb;
  border-radius: 4px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #b6b6b6;
  margin-top: 16px;
  margin-right: 10px;
}
.task li:nth-of-type(2) .right h1,
.task li:nth-of-type(3) .right h1 {
  border: 2px solid #ebc99a;
  color: #e6831d;
}
</style>