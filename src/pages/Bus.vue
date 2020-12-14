<template>
  <div class="container">
    <div class="bus-header">
      <router-link to="/index" tag="span">
        <input type="button" value="<" />
      </router-link>
      <van-search
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="bus-content">
      <div class="collection">
        <img src="../../public/img/bus/banner.jpg" alt="" />
      </div>
      <div class="station">
        <p class="title">
          附近站点
          <span>刷新</span>
        </p>
        <ul>
          <h5>
            高新六路科技四路口
            <span>距我最近</span>
          </h5>
          <li v-for="(bus,index) in busList1" :key="index">     
            <div class="left">
              <p> {{busList1[index].line}}</p>
              <p> {{busList1[index].to}}</p>
            </div>
            <div class="right">营运中</div>
          </li>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
      <div class="station">
        <ul>
          <h5>
            南窑头
            <b>231米</b>
          </h5>
          <li v-for="(bus,index) in busList2" :key="index">     
            <div class="left">
              <p> {{busList2[index].line}}</p>
              <p> {{busList2[index].to}}</p>
            </div>
            <div class="right">营运中</div>
          </li>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
      <div class="station">
        <ul>
          <h5>
            双水磨
            <b>308米</b>
          </h5>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
      <div class="station">
        <ul>
          <h5>
            团结南路科技四路口
            <b>425米</b>
          </h5>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
      <div class="station">
        <ul>
          <h5>
            鱼化一路科技四路口
            <b>534米</b>
          </h5>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
      <div class="station">
        <ul>
          <h5>
            西工大软件园
            <b>531米</b>
          </h5>
          <h6>
            <span>107路</span>
            <span>608路</span>
            <span>13C路</span>
          </h6>
        </ul>
      </div>
    </div>
    <div class="bus-footer">
      <dl>
        <dt>
          <img src="../../public/img/bus/footer-01.jpg" alt="" />
        </dt>
      </dl>
      <dl>
        <dt>
          <img src="../../public/img/bus/footer-02.jpg" alt="" />
        </dt>
      </dl>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "Bus",
  data(){
    return {
      busList1:[
        {
          "line":"34路",
          "to":"开往经九路西部家具城"
        },
        {
          "line":"251路",
          "to":"开往郁家庄"
        },
        {
          "line":"608路区间车",
          "to":"开往南窑头"
        },
      ],
      busList2:[
        {
          "line":"28路",
          "to":"开往钟楼"
        },
        {
          "line":"251路",
          "to":"开往鼓楼"
        },
        {
          "line":"608路区间车",
          "to":"开往高新六路科技四路口"
        },
      ]
    }
  },
  // created(){
  //   axios.all([
  //       axios({
  //           url:"http://localhost:3000/busList1"
  //         }),
  //       axios(
  //         {
  //           url:"http://localhost:3000/busList2"
  //         })
  //   ])
  //   .then(axios.spread(function(busList1,busList2){
  //     console.log("books",books.data);
  //       this.busList1=busList1.data;
  //     console.log("users",users.data);
  //       this.busList1=busList2.data;

  //   }))
  // }

};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bus-header {
  height: 0.53rem;
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
}
.bus-header input {
  position: absolute;
  border: none;
  background-color: transparent;
  color: #888;
  top: 18px;
  font-size: 20px;
}
.bus-content {
  flex: 1;
  overflow: auto;
  background-color: #f5f5f5;
  padding: 0.2rem 0.07rem;
  width: 100%;
}
.bus-content .collection {
  height: 0.88rem;
}
.bus-content .collection img {
  display: block;
  margin: 0 auto;
}
.bus-content .station {
  /* height: 3.1rem; */
  margin-bottom: 0.1rem;
}
.bus-content .station p {
  height: 0.3rem;
  color: #ababab;
  font-size: 0.12rem;
  padding: 0 0.1rem;
}
.bus-content .station p span {
  float: right;
}
.bus-content .station ul {
  width: 100%;
  background-color: #fff;
  /* height: 2.82rem; */
  padding: 0 0.18rem;
}
.bus-content .station h5 {
  background: url("../../public/img/bus/station-02.jpg") no-repeat left center;
  padding-left: 0.2rem;
  font-size: 0.12rem;
  border-bottom: 0.01rem solid #eee;
  height: 0.4rem;
  padding-top: 0.14rem;
}
.bus-content .station h5 span {
  color: #347afe;
  font-size: 0.1rem;
  display: inline-block;
  width: 0.45rem;
  height: 0.18rem;
  border: 0.01rem solid #347afe;
  margin-left: 0.1rem;
  font-size: 0.1rem;
  border-radius: 0.03rem;
}
.bus-content .station h5 b {
  color: #ababab;
  font-size: 0.1rem;
  font-weight: normal;
}
.bus-content .station li {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 0.63rem;
}
.bus-content .station li .left {
  background: url("../../public/img/bus/station-01.jpg") no-repeat left center;
  padding: 0 0.28rem;
}
.bus-content .station li .left p:first-child {
  font-weight: bold;
  font-size: 0.16rem;
  color: #000;
}
.bus-content .station li .right {
  align-self: center;
  font-size: 0.16rem;
  color: #000;
  font-weight: bold;
}
.bus-content .station h6 {
  margin-top: 0.25rem;
  font-weight: normal;
  padding-bottom: 0.1rem;
}
.bus-content .station h6 span {
  display: inline-block;
  width: 0.35rem;
  height: 0.15rem;
  border: 0.01rem solid #ababab;
  border-radius: 0.05rem;
  margin-right: 0.1rem;
}
.bus-footer {
  height: 0.56rem;
  padding: 0 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
