<template>
<div class="box">
    <div class="goodslist-banner">
       <img src="../../public/img/goodslist/banner1.jpg" alt="">
            <div class="goodslist-banner-topic">
                 <img src="../../public/img/goodslist/banner-con.png" alt="">
            </div>
    <div class="goodslist-banner-words">
         <!-- <img src="../../public/img/goodslist/logo.png" alt=""> -->
         <h1>千味一锅·香锅冒菜</h1>
     <p><span>⭐4.7</span>&nbsp;月售7801&nbsp;配送约30分钟&nbsp;（商家10分钟内出餐）</p>
    <div class="ul">
        <ul>
           <li>25减13</li>
           <li>38减17</li>
           <li>55减28</li>
           <li>85减38</li>
          <li>119减53</li>
        </ul>
            <span>天天神券</span>
             <span>新客减1</span>
    </div>
       <p>公告：做人做生意……</p>
        <span class=""></span>
    </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'goodsBanner',
  data(){
    return {
            shopId:this.$route.params.id,
            shop:{}
    }
  },
      created(){
        axios.get("/api/goods/selectGoodsByShopId?shopid="+this.shopId,{
        //    data:"shopid="+this.shopId,
        })
        .then(res=>{
            console.log("res",res.data);
            this.goods = res.data.data;
        });               
    },
}
</script>
<style scoped>
.box{
  height: 330px;
}
.goodslist-banner,
.goodslist-banner img
{
     width: 100%;
    height:12.5em;
}
.goodslist-banner-topic,.goodslist-banner-topic img{
  width: 94%;
  height: 6.25em;
}
.goodslist-banner{
  position: relative;
}
.goodslist-banner-topic{
  position: absolute;
  bottom: -15%;
  left: 6%;
}
.goodslist-banner-words img{
  position: absolute;
  top: 2.4em;
  right: 1.1em;
  width: 2.8125em;
  height: 2.8125em;
}
.goodslist-banner-words { 
  width: 360px;
  position: relative;
  padding-top: 2.5em;
  height: 2.8125em;
  margin-left: 0.875em;
}
.goodslist-banner-words h1{
font-size: 1.125em;
margin-bottom: 5px;
}
.goodslist-banner-words p{
  font-size: 0.625em;
  color: #b3b3b5;
  margin-bottom: 5px;
}
.goodslist-banner-words p span{
  color: #ff7400;
}
.goodslist-banner-words ul{
  height: 0.75em;
  width: 208px;
  border: 1px solid #fcebed;
  border-radius:0.1875rem;
  margin-bottom: 5px;
}
.goodslist-banner-words ul li{
  padding: 2px 3px;
  font-size: 8px;
  line-height: 8px;
  text-align: center;
  color:#e86145;
  border-right: 1px solid #f1beb5;  
  float: left;
}
.goodslist-banner-words ul li:last-child{
  border: none;
}
.goodslist-banner-words .ul{
  display: flex;
}
.goodslist-banner-words .ul span{
color: #e86145;
padding: 2px 4px;
 font-size: 8px;
  line-height: 8px;
  text-align: center;
 border: 1px solid #fcebed;
  border-radius:0.1875rem;
  margin-left: 3px;
}
.goodslist-banner-words p:last-child{
  font-size:10px;
  color: #959595;
}
</style>