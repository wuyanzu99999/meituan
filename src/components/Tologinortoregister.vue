<template>
<div class="bigbox">
    <div class="topBox">
        <div class="box-login" @click="toLogin">登录</div>
        <div class="box-register" @click="toReg">注册</div>
    </div>
    <div class="box1" v-show="isLoginShow">
        <ul>
            <li>
                +86 ><input type="text"  placeholder="请输入手机号" v-model="useLoginName" @blur="judgeLoginName" :style="namebor">
            </li>
            <li>
                <input class="bottomint" type="password"  placeholder="请输入密码" v-model="userLoginPwd" @blur="judgeLoginPwd" :style="pwdbor">
            </li>
        </ul>
        <div class="loginBtn" @click="loginSave">
            登录
        </div>
        <div class="problem">
            <p>验证码登录</p>
            <p>遇到问题</p>
        </div>
    </div>
    <div class="box2" v-show="isRegShow">
        <ul>
            <li>
                +86 ><input type="text" v-model="userRegName"  placeholder="请输入手机号" @blur="judgeLoginName" :style="namebor">
            </li>
            <li>
                <input class="bottomint" type="password" v-model="userRegPwd" placeholder="请输入密码" @blur="judgeLoginPwd" :style="pwdbor">
            </li>
        </ul>
        <div class="regBtn" @click="loginSave">
            注册
        </div>
        
    </div>
</div>
    
</template>

<script>
// import axios from "axios";

export default {
    name:"Tologinortoregister",
    data(){ 
        return{
            isLoginShow: true,
            isRegShow: false,
            namebor:{
                border:"",
            },
            pwdbor:{
                border:"",
            },
            useLoginName:"",
            userLoginPwd:"",
            userRegName:"",
            userRegPwd:""
        }
    },
    methods:{
        toLogin(){
            console.log(this.isLoginShow)
           this.isLoginShow  = true;
           this.isRegShow = false;
        },
        toReg(){
            this.isLoginShow  = false;
           this.isRegShow = true;
        },
        judgeLoginName(){
            let regphonenum = /^\d{11}$/;
            let that = this;
            if(!(regphonenum.test(this.useLoginName))){
                that.namebor.border = "1px solid red";
            }
        },
        judgeLoginPwd(){
            let regpwd = /^.{6,20}$/;
            let that = this;
            if(!(regpwd.test(this.userLoginPwd))){
                that.pwdbor.border = "1px solid red";
            }
        },
        loginSave(){

        }
    }
    
}
</script>

<style scoped>
    .bigbox{
        position: relative;
        width: 100%;
        height: 252px
    }
    .bigbox .box1 .loginBtn:hover,
    .bigbox .box2 .regBtn:hover{
        background-color: orange;
    }
    .topBox{
        height:24px;
        width:100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 23px;
    }
    .topBox .box-login,.topBox .box-register{
        width: 70px;
        height: 100%;
        background-color: #f17e00;
        font-weight: bold;
        text-align: center;
        border-radius: 20px;
    }
    .box1{
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 210px;
        padding: 0 35px 0 35px;
    }
    .box1 ul{
        height: 104px;
        width: 100%;
        margin-bottom: 28px;
    }
    .box1 ul li{
        height: 52px;
        width: 100%;
        border-bottom: 2px solid #f1f1f1;
        position: relative;
    }
    .box1 ul li input{
        border: none;
        line-height: 48px;
        text-indent: 10px;
        outline: none;
    }
    /* .box1 ul li .bottomint{
        width: 222px;
    } */
    .box1 .loginBtn{
        width: 100%;
        height: 40px;
        background-color: #fef5ca;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        font-size: 12px;
        margin-bottom: 25px;
    }
    
    .box1 .problem{
        height: 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    .box1 .problem p{
        font-size: 12px;
        line-height: 12px;
        color: #323232;
    }

       .box2{
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 210px;
        padding: 0 35px 0 35px;
    }
    .box2 ul{
        height: 104px;
        width: 100%;
        margin-bottom: 28px;
    }
    .box2 ul li{
        height: 52px;
        line-height: 52px;
        width: 100%;
        border-bottom: 2px solid #f1f1f1;
        position: relative;
        /* display: flex;
        justify-content: space-between; */
    }
    .box2 ul li input{
        border: none;
        line-height: 48px;
        text-indent: 10px;
        outline: none;
    }
    .box2 ul li .bottomint{
        width: 100%;
    }
    .box2 .regBtn{
        width: 100%;
        height: 40px;
        background-color: #fef5ca;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        font-size: 12px;
        margin-bottom: 25px;
    }
    
   
</style>