<template>
  <div>
    <div class="box1">
      <div class="content">
        <span>  </span>
        <div class="init">
          <span class="iconfont"></span>

          <input type="text" placeholder="搜索我的订单" />
        </div>
      </div>
    </div>

    <div class="box2">
      <ul>
        <li class="selected">所有订单</li>
        <li>待付款</li>
        <li>待使用</li>
        <li>待评价（<span>2</span>）</li>
        <li>退款/售后</li>
      </ul>
    </div>

    <div class="ordercontent">
      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门铁板炒面</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop1.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥15.5</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门烤肉拌饭</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop2.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥21</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门铁板炒面</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop1.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥15.5</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门烤肉拌饭</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop2.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥21</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门铁板炒面</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop1.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥15.5</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门烤肉拌饭</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop2.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥21</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>

      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门铁板炒面</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop1.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥15.5</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>
      <div class="ordercontent-son">
        <div class="son-top">
          <div class="goodsname">
            <span><img src="../../public/img/Order/meituan.jpg" alt="" /></span>
            <p>北门烤肉拌饭</p>
          </div>
          <p>已完成</p>
        </div>
        <div class="son-bottom">
          <div class="goodsmsg">
            <img src="../../public/img/Order/shop2.jpg" alt="" />
            <div>
              <p>下单时间：2018-07-07 16：15</p>
              <p>总价：￥21</p>
            </div>
          </div>
          <div class="son-again">再来一单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scope>
.box1 {
  height: 37px;
  width: 100%;
  padding: 5px 13px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 999;
}
.box1 .content {
  width: 100%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
}
.box1 .content span {
  width: 11px;
  height: 16px;
  font-size: 16px;
  line-height: 26px;
}
.box1 .content .init {
  width: 95%;
  height: 100%;
  background-color: #f7f7ff;
  border: none;
}
.box1 .content input {
  width: 100%;
  height: 100%;
  background-color: #f7f7ff;
  border: none;
  text-indent: 35px;
}

.box2 {
  width: 100%;
  height: 30px;
  padding: 0 13px 0 13px;
  position: fixed;
  top: 37px;
  background-color: #fff;
  z-index: 999;
}
.box2 ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.box2 ul li {
  height: 100%;
  line-height: 30px;
  font-size: 12px;
}
.box2 ul .selected {
  font-size: 12px;
  font-weight: bold;
  border-bottom: 2px solid #f6ce06;
}

.ordercontent {
  margin-top: 59px;
  width: 100%;
  padding: 15px 13px;
  background-color: #f7f7f7;
}
.ordercontent .ordercontent-son {
  width: 100%;
  height: 138px;
  padding: 0 10px;
  background-color: #fff;
  margin-bottom: 6px;
  border-radius: 5px;
}
.ordercontent .ordercontent-son .son-top {
  width: 100%;
  height: 38px;
  line-height: 38px;
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
}
.ordercontent .ordercontent-son .son-top .goodsname {
  font-size: 12px;
  line-height: 38px;
  display: flex;
}
.ordercontent .ordercontent-son .son-top .goodsname span {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: orange;
  transform: translateY(10px);
  margin-right: 5px;
  position: relative;
}
.ordercontent .ordercontent-son .son-top .goodsname span img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.ordercontent .ordercontent-son .son-top .goodsname p {
  color: #000;
}
.ordercontent .ordercontent-son .son-top p {
  font-size: 10px;
  color: #5f615f;
}
.ordercontent .ordercontent-son .son-bottom {
  height: 90px;
  width: 100%;
  position: relative;
}
.ordercontent .ordercontent-son .son-bottom .goodsmsg {
  display: flex;
  justify-content: space-between;
  height: 54px;
  width: 197px;
  padding-top: 10px;
}
.ordercontent .ordercontent-son .son-bottom .goodsmsg img {
  width: 44px;
  height: 44px;
  margin-right: 10px;
}
.ordercontent .ordercontent-son .son-bottom .goodsmsg p {
  font-size: 10px;
  line-height: 15px;
  color: #808080;
}
.ordercontent .ordercontent-son .son-bottom .son-again {
  position: absolute;
  right: 0;
  bottom: 12px;
  width: 66px;
  height: 26px;
  border: 2px solid #edeced;
  border-radius: 10px;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
}
</style>
