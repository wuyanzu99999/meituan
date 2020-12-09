<template>
  <div>
    <!-- GoodsHeader -->
    <div class="GoodsNews-header">
      <div class="GNheader-top">
        <span class="iconfont iconxiajiankuohao"></span>
        <span class="iconfont iconrengongkefu"></span>
        <span class="iconfont iconxiaoxi-copy"></span>
      </div>
      <div class="GNheader-center">
        <b>图片仅供参考，请以实物为准</b>
      </div>
      <div class="GNheader-bottom">
        <ul>
          <li class="GNheader-bottom1"><b>94</b>%好评</li>
          <li>"味道非常好，下次还会光顾"</li>
          <li>1791条评论</li>
        </ul>
      </div>
    </div>

    <!-- FoodsNews -->
    <div class="GoodsNews-foods">
      <h4>{{goodsnews.goodsname}}</h4>
      <ul>
        <li>
          <p>一人份</p>
          <p>香辣<span></span></p>
        </li>
        <li>月销4775</li>
        <li>
          <span>￥{{goodsnews.goodprice}} &nbsp; &nbsp; </span><del>￥28</del>打包费&nbsp;&nbsp;
          ￥1.0/1份
        </li>
        <li><span></span>4.96折&nbsp;| &nbsp;限30份</li>
      </ul>
      <div class="GoodsNews-foodscar">+加入购物车</div>
    </div>

    <!-- FoodsDescribe -->
    <div class="describe">
      <p class="describe-p1"><span>详情</span><b>评价</b></p>
      <p class="describe-p2">
        <span>掌柜描述:</span
        ><span>
          单入荤素套餐: 【8荤】 【16素】<br />(食材重量: 500克)<br />套餐内容超过3种菜品不吃的，请单点，谢谢。素菜:娃娃菜，麻花，生菜，菠菜，小青菜，红薯片，蘑菇，面筋，豆芽，豆腐皮，香菇，，有机菜花，土豆，木耳，西兰花，青笋，鹌鹑蛋，海带丝，千页豆腐，杏鲍菇，<br />
          荤菜:鱼豆腐，包心鱼丸，亲亲肠，开花肠，鱼丸，虾丸，虾饺，蟹棒，鱼肉卷，蟹排，培根，海螺丸。
        </span>
      </p>
      <p class="describe-p2"><span>主料: </span><span>&nbsp;辣椒</span></p>
      <p class="describe-p2"><span>分量：</span><span>1人份</span></p>
      <p class="describe-p2"><span>口味：</span><span>香辣</span></p>
      <p class="describe-p3">价格说明<span>?</span></p>
    </div>

    <!-- FoodPinjia -->
    <div class="taking">
      <div class="taking-top">
        <ul>
          <li class="taking-top1"><span>外面评价</span>&nbsp; (94%好评度)</li>
          <li class="taking-top2">
            1791条评论&nbsp;&nbsp;&nbsp; <span>> </span>
          </li>
        </ul>
      </div>
      <div class="taking-center">
        <ul>
          <li>有图1145</li>
          <li><span class="iconfont icondianzan1"></span>1540</li>
          <li><span class="iconfont iconbuzan"></span>66</li>
        </ul>
      </div>
      <div class="taking-text1">
        <div class="text1-header">
          <b><img src="../../public/img/bankimg/0001.png" /></b>
          <ul>
            <li>匿名用户</li>
            <li><span class="iconfont iconbuzan"></span>踩了该商品</li>
          </ul>
          <p>2020.12.1</p>
        </div>
        <div class="text1-hidden">
          <p>
            从下单到接单送单，再到吃到我嘴里8分钟，速度不得不佩服，问题来了，虽然跟近，商家你们不用做饭的吗?我收到菜和饭都是温温的，并不是刚出锅的，不知道问题出在哪里?难道套餐是之前就做好直接就盛的吗?还是说别人退单的给我送过来的?我很是不解，为什么我的外卖没有温度，这个天气吃不冷不热的饭舒服
          </p>
          <span>全文</span>
        </div>
      </div>
      <div class="taking-text1" id="taking-text2">
        <div class="text1-header">
          <b><img src="../../public/img/bankimg/0001.png" /></b>
          <ul>
            <li>lsg8271624325</li>
            <li><span class="iconfont icondianzan1"></span>踩了该商品</li>
          </ul>
          <p>2020.12.6</p>
        </div>
        <div class="text1-hidden">
          <p>一直选择他们家,味道好,价格实惠！值得推荐</p>
          <!-- <span>全文</span> -->
        </div>
      </div>
      <div class="taking-end">
        <p>999+条外面评论&nbsp;></p>
        <p>满25减13,满38减17,满55减28,满85减3,满119减53</p>
        <div class="taking-end2">
          <a class="taking-end2-p">￥0 <span>免配送费</span></a>
          <ul>
            <li>￥15起送</li>
            <li>来点必送品</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "GoodsNews",
  components: {},
  data() {
    return {
      goodsnews: {},
      goodsId: this.$route.params.id,
    };
  },
  created() {
    console.log(this.goodsId);
    axios.get("/api/goods/selectGoodsByGoodsId?goodsid=" + this.goodsId, {
      })
      .then((res) => {
        console.log("res", res.data);
        this.goodsnews = res.data.data;
      });
  },
};
</script>
<style scoped>
@import url("../assets/font_goodsnews/iconfont.css");
/* GoodsHeader */
.GoodsNews-header {
  width: 100%;
  height: 2.36rem;
  background-color: pink;
  position: relative;
}
.GNheader-top {
  width: 100%;
  height: 0.34rem;
  display: flex;
}
.GNheader-center {
  width: 1.3rem;
  height: 0.12rem;
  position: absolute;
  right: 0.35rem;
  bottom: 0.5rem;
}
.GNheader-center b {
  font-size: 0.1rem;
  color: #b3b6a0;
}
.GNheader-bottom {
  width: 2.9rem;
  height: 0.25rem;
  background-color: #fff;
  border-radius: 0.1rem;
  line-height: 0.25rem;
  position: absolute;
  left: 0.13rem;
  bottom: 0.13rem;
}
.GNheader-bottom ul {
  display: flex;
}
.GNheader-bottom ul li {
  font-size: 0.1rem;
  margin-left: 0.12rem;
  color: #2e2d2b;
}
.GNheader-bottom .GNheader-bottom1 {
  color: #fe9f05;
}

/* FoodsNews */
.GoodsNews-foods {
  width: 100%;
  height: 1.36rem;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
}
.GoodsNews-foods h4 {
  margin-left: 0.15rem;
}
.GoodsNews-foods li {
  display: flex;
  margin-left: 0.15rem;
  text-align: center;
  margin-top: 0.08rem;
}
.GoodsNews-foods li p {
  width: 0.3rem;
  height: 0.13rem;
  font-size: 0.09rem;
  background-color: #d3d3d3;
  color: #000000;
  margin-right: 0.05rem;
  margin-top: 0.1rem;
}
.GoodsNews-foods ul li:nth-of-type(2) {
  color: #8d8f8e;
  font-size: 0.1rem;
}
.GoodsNews-foods ul li:nth-of-type(3) {
  color: #8d8f8e;
  font-size: 0.1rem;
  line-height: 0.15rem;
}
.GoodsNews-foods ul li:nth-of-type(3) span {
  color: #f91700;
  font-size: 0.15rem;
}
.GoodsNews-foods ul li:nth-of-type(4) {
  width: 0.78rem;
  height: 0.12rem;
  font-size: 0.09rem;
  text-align: center;
  line-height: 0.12rem;
  color: #ff3b3c;
}
.GoodsNews-foods .GoodsNews-foodscar {
  width: 0.96rem;
  height: 0.26rem;
  background-color: #ffd161;
  line-height: 0.26rem;
  text-align: center;
  border-radius: 0.05rem;
  position: absolute;
  right: 0.14rem;
  bottom: 0.26rem;
}

/* FoodsDescribe */
.describe {
  width: 100%;
  height: 3.27rem;
  margin-top: 0.08rem;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 0.15rem;
  position: relative;
}
.describe .describe-p1 {
  width: 100%;
  height: 0.38rem;
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.38rem;
  margin-bottom: 0.1rem;
  display: flex;
}
.describe .describe-p1 span {
  color: #272727;
  margin-right: 0.27rem;
  /* width: 0.18rem; */
  border-bottom: 0.02rem solid #fbc63d;
}
.describe .describe-p1 b {
  display: block;
  font-weight: normal;
  color: #8d8e8f;
}
.describe .describe-p2 {
  display: flex;
  margin-top: 0.08rem;
}
.describe .describe-p2 span:nth-of-type(1) {
  display: block;
  font-size: 0.12rem;
  color: #8d8e8f;
}
.describe .describe-p2 span:nth-of-type(2) {
  display: block;
  width: 2.55rem;
  font-size: 0.12rem;
  color: #2c2c2d;
  margin-left: 0.17rem;
}
.describe .describe-p3 {
  font-size: 0.12rem;
  color: #8d8e8f;
  margin-top: 0.08rem;
  display: flex;
}
.describe .describe-p3 span {
  display: block;
  width: 0.13rem;
  height: 0.13rem;
  border: 0.01rem solid #8d8e8f;
  text-align: center;
  line-height: 0.13rem;
  border-radius: 50%;
}

/* FoodPinjia */
.taking {
  background-color: #fff;
  margin-top: 0.08rem;
  height: 4.9rem;
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.13rem;
}
.taking .taking-top {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
}
.taking .taking-top ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.taking .taking-top1 {
  font-size: 0.11rem;
  color: #b5b5b5;
}
.taking .taking-top1 span {
  font-size: 0.15rem;
  color: #2c2c2d;
  font-weight: bold;
}
.taking .taking-top2 {
  font-size: 0.1rem;
  color: #b5b5b5;
}
.taking-center {
  width: 100%;
  height: 0.22rem;
}
.taking-center ul {
  height: 0.22rem;
  text-align: center;
  line-height: 0.22rem;
  font-size: 0.1rem;
  color: #777373;
  display: flex;
  margin-right: 0.07rem;
}
.taking-center ul li:nth-of-type(1) {
  width: 0.58rem;
  background-color: #fef8df;
  margin-right: 0.07rem;
  border-radius: 0.05rem;
}
.taking-center ul li:nth-of-type(2) {
  width: 0.47rem;
  background-color: #fef8df;
  margin-right: 0.07rem;
  border-radius: 0.05rem;
}
.taking-center ul li:nth-of-type(3) {
  width: 0.36rem;
  background-color: #efedee;
  border-radius: 0.08rem;
}
.taking-text1 {
  height: 1.92rem;
  margin-top: 0.2rem;
  margin-bottom: 0.25rem;
}
.text1-header {
  display: flex;
}
.text1-header ul li:nth-of-type(1) {
  margin-left: 0.08rem;
  font-size: 0.1rem;
  color: #242425;
}
.text1-header ul li:nth-of-type(2) {
  margin-left: 0.08rem;
  margin-top: 0.06rem;
  font-size: 0.1rem;
  color: #a8a9a8;
}
.text1-header p {
  font-size: 0.1rem;
  color: #a8a9a8;
  margin-left: 52%;
}
.text1-hidden {
  width: 2.9rem;
  margin-left: 12%;
}
.text1-hidden p {
  margin-top: 0.13rem;
  font-size: 0.12rem;
  color: #1f1f1e;
  letter-spacing: 0.02rem;
}
.text1-hidden span {
  display: block;
  margin-top: 0.12rem;
  font-size: 0.1rem;
  color: #b1b1b1;
}
#taking-text2 {
  height: 0.84rem;
}
.taking-end {
  height: 1.29rem;
  position: relative;
}
.taking-end p:nth-of-type(1) {
  width: 3.34rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.11rem;
  border-radius: 0.05rem;
  background-color: #fafafa;
}
.taking-end p:nth-of-type(2) {
  width: 3.34rem;
  height: 0.3rem;
  margin-top: 0.16rem;
  text-align: center;
  border-radius: 0.08rem;
  font-size: 0.09rem;
  background-color: #fff5e7;
}
.taking-end .taking-end2 {
  width: 3.34rem;
  height: 0.43rem;
  border-radius: 0.14rem;
  background-color: black;
  position: absolute;
  top: 0.6rem;
  display: flex;
  justify-content: space-around;
}
.taking-end2-p {
  font-size: 0.14rem;
  color: white;
  text-align: center;
  line-height: 0.43rem;
}
.taking-end2-p span {
  font-size: 0.09rem;
  padding-left: 0.03rem;
  color: #a5a5a5;
  border-left: 0.01rem solid #a5a5a5;
  margin-left: 0.03rem;
}
.taking-end2 li {
  color: #a5a5a5;
  font-size: 0.09rem;
}
.taking-end2 ul li:nth-of-type(1) {
  margin-top: 0.1rem;
}
</style>