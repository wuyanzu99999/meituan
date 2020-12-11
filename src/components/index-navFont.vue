<template>
  <div class="navFont">
    <van-tabs v-model="active" color="#ffd101" line-width="65px">
      <van-tab title="猜你喜欢">
        <div class="shopList">
          <router-link to="/goodslist/1" tag="dl"
            ><dl class="one">
              <!-- <dt style="backgorund"></dt> -->
              <img :src="arr[0].image" alt="" width="166px" height="122px" />
              <dd>
                <p id="name-font">
                  {{ arr[0].shopname }}
                </p>
                <p id="back-font">{{ arr[0].shopdetail }}</p>
                <p class="cored">4.6 |</p>
                <p class="num">月销3360</p>
              </dd>
            </dl></router-link
          >
          <router-link to="/goodslist/2" tag="dl"
            ><dl class="two">
              <img :src="arr[1].image" alt="" width="166px" height="122px" />
              <dd>
                <p id="name-font">{{ arr[1].shopname }}</p>
                <p id="back-font">{{ arr[1].shopdetail }}</p>
                <p class="cored">4.8 |</p>
                <p class="num">半年售5000+</p>
              </dd>
            </dl></router-link
          >
          <router-link to="/goodslist/3" tag="dl"
            ><dl class="three">
              <img :src="arr[2].image" alt="" width="166px" height="122px" />
              <dd>
                <p id="name-font">{{ arr[2].shopname }}</p>
                <p id="back-font">{{ arr[2].shopdetail }}</p>
                <p class="cored">4.8 |</p>
                <p class="num">月售1211</p>
              </dd>
            </dl></router-link
>
          <router-link to="/goodslist/4" tag="dl"
            ><dl class="four">
              <img :src="arr[3].image" alt="" width="166px" height="122px" />
              <dd>
                <p id="name-font">{{ arr[3].shopname }}</p>
                <p id="back-font">{{ arr[3].shopdetail }}</p>
                <p class="cored">4.8 |</p>
                <p class="num">月销1625</p>
              </dd>
            </dl></router-link
          >
        </div>
      </van-tab>
      <van-tab title="今日特价">
        <div class="shopList">
          <dl class="one">
            <dt></dt>
            <dd>
              <p id="name-font">周先生的饭 （高新国际店）</p>
              <p id="back-font">一直在这家买，味道一如既...</p>
              <p class="cored">4.6 |</p>
              <p class="num">月销3360</p>
            </dd>
          </dl>
          <dl class="two">
            <dt></dt>
            <dd>
              <p id="name-font">汉堡王 【单人餐】狠霸王牛堡+鸡块</p>
              <p id="back-font">各方面都很好</p>
              <p class="cored">4.8 |</p>
              <p class="num">半年售5000+</p>
            </dd>
          </dl>
          <dl class="three">
            <dt></dt>
            <dd>
              <p id="name-font">咖喱咖喱·日式鸡排饭 （高新店）</p>
              <p id="back-font">太棒了，赞赞赞</p>
              <p class="cored">4.8 |</p>
              <p class="num">月售1211</p>
            </dd>
          </dl>
          <dl class="four">
            <dt></dt>
            <dd>
              <p id="name-font">戒不掉的煎肉饭</p>
              <p id="back-font">非常好，肉量很大</p>
              <p class="cored">4.8 |</p>
              <p class="num">月销1625</p>
            </dd>
          </dl>
        </div>
      </van-tab>
      <van-tab title="发现好店">
        <div class="shopList">
          <dl class="one">
            <dt></dt>
            <dd>
              <p id="name-font">周先生的饭 （高新国际店）</p>
              <p id="back-font">一直在这家买，味道一如既...</p>
              <p class="cored">4.6 |</p>
              <p class="num">月销3360</p>
            </dd>
          </dl>
          <dl class="two">
            <dt></dt>
            <dd>
              <p id="name-font">汉堡王 【单人餐】狠霸王牛堡+鸡块</p>
              <p id="back-font">各方面都很好</p>
              <p class="cored">4.8 |</p>
              <p class="num">半年售5000+</p>
            </dd>
          </dl>
          <dl class="three">
            <dt></dt>
            <dd>
              <p id="name-font">咖喱咖喱·日式鸡排饭 （高新店）</p>
              <p id="back-font">太棒了，赞赞赞</p>
              <p class="cored">4.8 |</p>
              <p class="num">月售1211</p>
            </dd>
          </dl>
          <dl class="four">
            <dt></dt>
            <dd>
              <p id="name-font">戒不掉的煎肉饭</p>
              <p id="back-font">非常好，肉量很大</p>
              <p class="cored">4.8 |</p>
              <p class="num">月销1625</p>
            </dd>
          </dl>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "navFont",
  data() {
    return {
      active: "",
      arr: [],

      //   imgArr="../../public/img/index/",
    };
  },
  created() {
    axios.get("/api/shop/findAll", {}).then((res) => {
      // this.imgArr += res.data.data;
      this.arr = res.data.data;
    //   console.log("查询出来的所有店家信息", res.data);
    //   console.log(res.data.data);
    //   console.log(res.data.data[0].shopname);
    //   console.log(this.arr[0].shopname);
      this.arr.forEach((item) => {
        item.image = "./img/" + item.image;
        console.log(item.image);
      });
    });
  },
};
</script>

<style scoped>
.navFont {
  width: 100%;
}
.shopList {
  padding-top: 5px;
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: rgb(245, 241, 241);
}
dl {
  width: 166px;
  height: 240px;
  border-radius: 9px;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
}
.one dt {
  /* background: url("../../public/img/index/index-img01.jpg"); */
  background-size: 166px 122px;
}
.two dt {
  /* background: url("../assets/img/1.jpg"); */
  background-size: 166px 122px;
}
.three dt {
  /* background: url("../assets/img/2.jpg"); */
  background-size: 166px 122px;
}
.four dt {
  /* background: url("../assets/img/3.jpg"); */
  background-size: 166px 122px;
}
dl dt {
  width: 166px;
  height: 122px;
}

dl dd {
  width: 166px;
  height: 118px;
  position: relative;
  margin-inline-start: 0rem;
}

dl dd #name-font {
  position: absolute;
  font-size: 14px;
  font-weight: bolder;
  top: 10px;
  left: 10px;
}

dl dd #back-font {
  position: absolute;
  font-size: 12px;
  color: #808080;
  top: 50px;
  left: 10px;
}

dl dd .cored {
  position: absolute;
  font-size: 12px;
  color: #808080;
  top: 79px;
  left: 10px;
}

dl dd .num {
  position: absolute;
  font-size: 12px;
  color: #808080;
  top: 78px;
  left: 39px;
}
</style>