<template>
  <div class="emile-messageList">
     <ul>
            <li>
                <span class="iconfont icon-meifa"></span>
                <p>丽人/美发</p>
                <span class="font">叮咚~送你5元优惠券！剪发9块9现时...</span>
                <u>20.51</u>
            </li>
            <li>
                <span class="iconfont icon-sweep"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
            <li>
                <span class="iconfont icon-fuli"></span>
                <p>优惠福利</p>
                <span class="font">快抢！！！糖心烟薯【1.9元5斤】</span>
                <u>20.36</u>
            </li>
            <li>
                <span class="iconfont icon-dianying"></span>
                <p>猫眼电影演出</p>
                <span class="font">猫眼X美团外卖联合会员限时抢 超...</span>
                <u>20.36</u>
            </li>
            <li>
                <span class="iconfont icon-fenzu"></span>
                <p>美食</p>
                <span class="font">2020尖叫菜榜单入围餐厅 上亿用户...</span>
                <u>12.36</u>
            </li>
            <li>
                <span class="iconfont icon-yule"></span>
                <p>休闲娱乐</p>
                <span class="font">【周一桌游优惠】一起组团去烧脑  挑到...</span>
                <u>周一</u>
            </li>
            <li>
                <span class="iconfont icon-zihangche"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
            <li>
                <span class="iconfont icon-jiudian"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
            <li>
                <span class="iconfont icon-huochepiao"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
            <li>
                <span class="iconfont icon-jieqian"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
            <li>
                <span class="iconfont icon-meituan"></span>
                <p>美团月付</p>
                <span class="font">【美团月付】交易成功25.45元，抽奖...</span>
                <u>20.38</u>
            </li>
        </ul>
  </div>
</template>

<script>

export default {
  name: 'emileMessageList',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
@import url("../assets/font-emile/iconfont.css");
.emile-messageList {
    width: 100%;
}

.emile-messageList ul {
    width: 100%;
}

.emile-messageList ul li {
    list-style: none;
    width: 80%;
    height: 72px;
    position: relative;
    border-bottom: 1px solid #cccccc;
    margin-left: 15%;
}
.emile-messageList .iconfont{
        position: absolute;
        left: -13%;
}
.emile-messageList .icon-meifa {
    font-size: 30px;
    top: 20px;

    color: #fe4f86;
}

.emile-messageList .icon-sweep {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ffc300;
}

.emile-messageList .icon-fuli {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ff734f;
}

.emile-messageList .icon-dianying {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ff4c48;
}

.emile-messageList .icon-fenzu {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ff5f14;
}

.emile-messageList .icon-yule {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #c15aff;
}

.emile-messageList .icon-zihangche {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #c87f56;
}

.emile-messageList .icon-jiudian {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #fecc45;
}

.emile-messageList .icon-huochepiao {
    font-size: 30px;
    top: 20px;
    /* left: -55px; */
    color: #00bbfe;
}

.emile-messageList .icon-jieqian {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ffc300;
}

.emile-messageList .icon-meituan {
    font-size: 30px;
    top: 20px;
    /* left: -47px; */
    color: #ffc300;
}

.emile-messageList ul li:nth-of-type(1) p,
.emile-messageList ul li:nth-of-type(2) p,
.emile-messageList ul li:nth-of-type(3) p,
.emile-messageList ul li:nth-of-type(4) p,
.emile-messageList ul li:nth-of-type(5) p,
.emile-messageList ul li:nth-of-type(6) p,
.emile-messageList ul li:nth-of-type(7) p,
.emile-messageList ul li:nth-of-type(8) p,
.emile-messageList ul li:nth-of-type(9) p,
.emile-messageList ul li:nth-of-type(10) p,
.emile-messageList ul li:nth-of-type(11) p {
    font-size: 16px;
    position: absolute;
    top: 16px;
}

.emile-messageList ul li:nth-of-type(1) .font,
.emile-messageList ul li:nth-of-type(2) .font,
.emile-messageList ul li:nth-of-type(3) .font,
.emile-messageList ul li:nth-of-type(4) .font,
.emile-messageList ul li:nth-of-type(5) .font,
.emile-messageList ul li:nth-of-type(6) .font,
.emile-messageList ul li:nth-of-type(7) .font,
.emile-messageList ul li:nth-of-type(8) .font,
.emile-messageList ul li:nth-of-type(9) .font,
.emile-messageList ul li:nth-of-type(10) .font,
.emile-messageList ul li:nth-of-type(11) .font {
    font-size: 13px;
    color: #676767;
    position: absolute;
    top: 47px;
}

.emile-messageList ul li:nth-of-type(1) u,
.emile-messageList ul li:nth-of-type(2) u,
.emile-messageList ul li:nth-of-type(3) u,
.emile-messageList ul li:nth-of-type(4) u,
.emile-messageList ul li:nth-of-type(5) u,
.emile-messageList ul li:nth-of-type(6) u,
.emile-messageList ul li:nth-of-type(7) u,
.emile-messageList ul li:nth-of-type(8) u,
.emile-messageList ul li:nth-of-type(9) u,
.emile-messageList ul li:nth-of-type(10) u,
.emile-messageList ul li:nth-of-type(11) u {
    text-decoration: none;
    font-size: 11px;
    color: #676767;
    position: absolute;
    top: 20px;
    right: 7px;
}
</style>