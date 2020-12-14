<template>
  <div class="bigbox">
    <h1>欢迎登录美团</h1>
    <ul>
      <li>
        +86 >
        <input
          type="text"
          placeholder="请输入手机号"
          v-model="username"
          @input="judgeusername"
          :style="[namebor]"
        />
      </li>
      <li>
        <input
          class="bottomint"
          type="password"
          placeholder="请输入密码"
          v-model="password"
          @input="judgepassword"
          :style="[pwdbor]"
        />
        <span class="iconfont"></span>
      </li>
    </ul>
    <div class="loginBtn" @click="regSave" :style="[savebgc]">登录</div>
    <div class="problem">
      <router-link to="Reg">
        <a>没有账号？去注册</a>
      </router-link>

      <a>遇到问题</a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Notify } from "vant";
export default {
  name: "Toreg",
  data() {
    return {
      namebor: {
        border: "",
      },
      pwdbor: {
        border: "",
      },
      savebgc: {
        backgroundColor: "",
      },
      username: "",
      password: "",
      flagname: false,
      flagpassword: false,
      sessionStorage: "null",
    };
  },
  methods: {
    judgeusername() {
      let regphonenum = /^\d{11}$/;
      let that = this;
      if (!regphonenum.test(this.username)) {
        that.namebor.border = "1px solid red";
      } else {
        that.namebor.border = "none";
        this.flagname = true;
      }
    },
    judgepassword() {
      let regpwd = /^.{6,20}$/;
      let that = this;
      if (!regpwd.test(this.password)) {
        that.pwdbor.border = "1px solid red";
      } else {
        that.pwdbor.border = "none";
        this.flagpassword = true;
      }
      console.log(this.flagname);
      if (this.flagname && this.flagpassword) {
        that.savebgc.backgroundColor = "orange";
      } else {
        that.savebgc.backgroundColor = "#fff4ca";
      }
    },
    regSave() {
      axios
        .post("/api/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$router.push("/index");
            sessionStorage.setItem("userid", res.data.data.id); //保存后端返回的data 中的userid到session中
            console.log(sessionStorage);
          } else if (res.data.message == "登录失败") {
            Notify({
              message: "用户名或者密码错误！",
              color: "#333",
              background: "#ffd101",
            });
          }
          console.log(res.data);
        });
    },
  },
};
</script>

<style scoped>
.bigbox {
  position: relative;
  width: 100%;
  height: 252px;
  padding: 0 36px;
  margin-top: 50px;
}

h1 {
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  width: 100%;
  margin-bottom: 22px;
}

.bigbox ul {
  height: 105px;
  width: 100%;
  margin-bottom: 30px;
}
.bigbox ul li {
  height: 52px;
  line-height: 52px;
  width: 100%;
  border-bottom: 2px solid #eaeaea;
}
.bigbox ul li input {
  border: none;
  height: 80%;
}
.bigbox ul li .bottomint {
  margin-left: 46px;
}
.bigbox .loginBtn {
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 40px;
  background-color: #fff4ca;
  margin-bottom: 20px;
}
.bigbox .problem {
  height: 12px;
  display: flex;
  justify-content: space-between;
}
.bigbox .problem p {
  height: 12px;
  font-size: 12px;
  line-height: 12px;
  width: 150px;
}
</style>
