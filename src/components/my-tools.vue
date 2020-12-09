<template>
    <div class="myTools">
       <span id="tools">推荐工具</span>
                <ul class="icon1">
                    <li>
                        <router-link to="recharge">
                            <span class="iconfont icon-chongzhi"></span>
                        </router-link>
                    </li>
                    <li>
                        <span class="iconfont icon-ren"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-hezuo"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-chongdianbao"></span>
                    </li>
                </ul>
                <ul class="icon1-font">
                    <router-link to="recharge">
                        <li>充值中心</li>
                    </router-link>
                    <li>团长招募</li>
                    <li>招聘/合作</li>
                    <li>充电宝</li>
                </ul>
                <ul class="icon2">
                    <li>
                        <span class="iconfont icon-dianxin"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-dapingzhanshi"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-lajixiang-s"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-fapiao"></span>
                    </li>
                </ul>
                <ul class="icon2-font">
                    <li>电信营业厅</li>
                    <li>火车站大屏</li>
                    <li>垃圾回收</li>
                    <li>发票助手</li>
                </ul>
                <ul class="icon3">
                    <li>
                        <span class="iconfont icon-tianqi"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-huabanwang"></span>
                    </li>
                </ul>
                <ul class="icon3-font">
                    <li>墨迹天气</li>
                    <li>美团大学</li>
                </ul>
     </div> 
</template>

<script>

export default {
  name: 'wallet',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
@import url("../assets/font-myHeader/iconfont.css");
.myTools {
    width: 95%;
    height: 250px;
    position: relative;
    left: 10px;
    top: 10px;
    border-radius: 9px;
    background-color: #f5f3f3;
}

.myTools #tools {
    position: absolute;
    top: 15px;
    left: 14px;
    font-size: 13px;
    font-weight: bolder;
}

.myTools .icon1 li {
    float: left;
}

.myTools .icon1 {
    height: 42px;
    line-height: 42px;
    list-style: none;
    width: 83%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 56px;
    left: 18px;
}

.myTools .icon-chongzhi {
    font-size: 33px;
    color: #fc3100;
}

.myTools .icon-ren {
    font-size: 34px;
    color: #fc1300;
}

.myTools .icon-hezuo {
    font-size: 33px;
    color: #fab11a;
}

.myTools .icon-chongdianbao {
    font-size: 38px;
    color: #ffc201;
}

.myTools .icon1-font {
    height: 30px;
    line-height: 30px;
    list-style: none;
    width: 86.4%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 96px;
    left: 10px;
    font-size: 12px;
}

.myTools .icon2 {
    height: 42px;
    line-height: 42px;
    list-style: none;
    width: 83%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 125px;
    left: 18px;
}

.myTools .icon-dianxin {
    font-size: 33px;
    color: #000f7d;
}

.myTools .icon-dapingzhanshi {
    font-size: 34px;
    color: #ffb900;
}

.myTools .icon-lajixiang-s {
    font-size: 36px;
    color: #00a89b;
}

.myTools .icon-fapiao {
    font-size: 38px;
    color: #22a7f8;
}

.myTools .icon2-font {
    height: 30px;
    line-height: 30px;
    list-style: none;
    width: 86%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 161px;
    left: 10px;
    font-size: 12px;
}

.myTools .icon3 {
    height: 42px;
    line-height: 42px;
    list-style: none;
    width: 31%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 189px;
    left: 18px;
}

.myTools .icon-tianqi {
    font-size: 33px;
    color: #0097f5;
}

.myTools .icon-huabanwang {
    font-size: 34px;
    color: #ffcb00;
}

.myTools .icon3-font {
    height: 30px;
    line-height: 30px;
    list-style: none;
    width: 33%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 223px;
    left: 10px;
    font-size: 12px;
}
</style>