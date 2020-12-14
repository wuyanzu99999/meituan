<template>
  <div class="box">
    <div class="box11" :class="{ is_fixed: isFixed }">
      <div class="head">
        <ul>
          <li>点菜</li>
          <li>评价</li>
          <li>商家</li>
        </ul>
        <p>好友拼单</p>
      </div>
      <div class="box111">
        <div class="list-left">
          <ul>
            <li><span class="sun">?</span> 实惠单人餐</li>
            <li><span class="Fireworks">?</span> 尊享多人餐</li>
            <li><span class="Clover">?</span> 单点素菜</li>
          </ul>
        </div>
        <div class="list-right">
          <ul>
            <li v-for="(item, index) in goods" :key="index">
              <div class="img">
                <img :src="item.image" />
              </div>
              <div class="right-wrods">
                <p id="goodsname">
                  {{ item.goodsname }}<span>+</span>米饭（限时特价)
                </p>
                <p class="a">“很喜欢，味道也不错”</p>
                <p class="b">月售4840&nbsp;好评度94%</p>
                <div class="news">
                  <p>￥{{ item.goodprice }} <span class="aa">￥28</span></p>
                  <input
                    type="button"
                    value="详情"
                    :key="item.id"
                    @click="goDetail(item.id)"
                  />
                </div>
                <p class="bb">4.6折&nbsp;限30份</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "goodslist",
  props: {
    title: String,
  },
  data() {
    return {
      isFixed: false,
      goods: [],
      shopId: this.$route.params.shopId,
    };
  },
  created() {
    console.log("goodslist",this.shopId);
    axios
      .get("/api/goods/selectGoodsByShopId?shopid=" + this.shopId, {})
      .then((res) => {
        console.log("res", res.data);
        this.goods = res.data.data;
        console.log("根据商铺id查询出来的商家商品信息", this.goods);
        this.goods.forEach((item) => {
          item.image = "./img/" + item.image;
          console.log(item.image);
        });
      });
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 330 ? true : false; //通过document对象的一些方法获取到页面换页时的坐标，在将坐标进行逻辑判断，若大于则悬浮窗显示
    },
    goDetail(id) {
      this.$router.push({
        path: "/goodsnews",
        query: {
          goodsId:id,
          shopId:this.shopId
        },
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
};
</script>
<style  scoped>
.box {
  height: 800px;
}
.box11 {
  height: 800px;
}
.box .head {
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
}
.is_fixed {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
}
.box .head ul {
  display: flex;
}
.box .head li {
  text-align: center;
  width: 80px;
  color: #727373;
  font-size: 14px;
}
.box .head p {
  font-size: 10px;
  width: 52px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid #edd7b1;
  color: #fa7100;
  text-align: center;
  line-height: 22px;
}
.box111 .list-left li {
  width: 80px;
  height: 56px;
  padding: 14px;
  background-color: #f7f8fa;
}
.box111 {
  height: 570px;
  display: flex;
  justify-content: space-between;
}
.list-right,
.list-left {
  background-color: #f7f8fa;
  height: 570px;
  overflow: scroll;
}
.box111 .sun {
  color: #f6ce38;
}
.box111 .Fireworks {
  color: #e73c0e;
  font-size: 10px;
}
.box111 .Clover {
  color: #0c9000;
}
.list-right ul {
  background-color: #fff;
}
.list-right li {
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 130px;
}
.list-right li .img {
  padding: 18px 8px;
}
.list-right li img,
.list-right li .img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
}
.list-right .right-wrods {
  padding: 18px 0;
  width: 204px;
}
.list-right .right-wrods p {
  margin-bottom: 4px;
}
.list-right .right-wrods #goodsname {
  font-size: 14px;
  color: #f75c00;
  font-weight: bold;
}
.list-right .right-wrods #goodsname span {
  color: #000;
}
.list-right .right-wrods .a {
  font-size: 10px;
  color: #f5b15f;
  width: 110px;
  height: 14px;
  background-color: #fef8e0;
  border-radius: 5px;
}
.list-right .right-wrods .b {
  color: #bdbebf;
  font-size: 10px;
}
.list-right .news p {
  color: #f9281c;
  font-size: 11px;
}
.list-right .news p .aa {
  color: #b0b0b0;
  font-size: 8px;
  text-decoration: line-through;
}
.list-right .bb {
  color: #f66764;
  font-size: 8px;
}
.news {
  display: flex;
  justify-content: space-between;
}
.news input {
  width: 36px;
  height: 26px;
  font-size: 12px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ffd838;
  outline: none;
  border: 1px solid transparent;
}
</style>