<template>
    <div>
		<!-- top -->
        <div class="ktv-top">
			<van-search class="ktv-top-content"
  				v-model="value"
  				shape="round"
  				background="#fff"
  				placeholder="请输入商家名、品类或商圈"
			npm/>
		</div>
		<!-- banner -->
		<div class="ktv-banner">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  				<van-swipe-item><img src="../../public/img/ktv/banner1.jpg" alt=""></van-swipe-item>
  				<van-swipe-item><img src="../../public/img/ktv/banner2.jpg" alt=""></van-swipe-item>
			</van-swipe>
		</div>
		<!-- list-type -->
		<div class="list-type">
			<ul>
				<li>
					量贩式KTV
				</li>
				<li>
					附近
				</li>
				<li style="border:none;">
					智能排序
				</li>
			</ul>
			<div class="list-bottom">
				<span>当前可定</span>
				<p>人数</p>
			</div>
		</div>

		<div class="ktv">
			<div class="ktv-l">
				<img src="../../public/img/ktv/ktv.jpg" alt="">
			</div>
			<div class="ktv-r">
				<h6>奈斯KTV</h6>
				<div class="ktv-r-msg">
					<img src="../../public/img/ktv/star.jpg" alt="">
					<span>0.6km</span>
				</div>
				<div class="ktv-r-msg">
					<p>丈八&nbsp;&nbsp;|&nbsp;&nbsp;量贩式KTV</p>
					<b>1小时前有人购买</b>
				</div>
				<div class="ktv-r-recommend">
					<img src="../../public/img/ktv/qipao.jpg" alt="">
					<p>强烈推荐，音质很棒，价格实惠，可以来呦</p>
				</div>
				<div class="ktv-r-last">
					<img src="../../public/img/ktv/ding.jpg" alt="">
					<p>大包3小时欢唱598元</p>
				</div>
			</div>
		</div>
		

    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Ktv',
  components: {
    
  },
  data(){
    return{
		ktvs:[],
		value:""
    }
  },
  created(){
	    axios.get("/api/shop/findAll", {}).then((res) => {
		this.ktvs = res.data.data;
		this.ktvs.forEach(item => {
			item.ktvimg= "./img/ktv/"+item.ktvimg;
			console.log(item.ktvimg);
    //   console.log("查询出来的所有店家信息",res.data);
    });  
  }

</script>

<style scope>
	.ktv-top{
		width: 100%;
		height: 36px;
		/* background-color: yellow; */
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.ktv-top ,.ktv-top-content{
		width: 100%;
		height: 36px;
		background-color: #fff;
	}
	.ktv-banner{
		height: 96px;
		width: 100%;
		background-color: red;
		margin-top: 36px;
	}
	.my-swipe{
		height: 96px;
	}
	.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
	.ktv-banner img{
		width: 100%;
		height: 100%;
	}
	.list-type{
		height: 80px;
		width: 100%;
		/* background-color: #168465;s */
	}
	.list-type ul{
		height: 37px;
		display: flex;
		justify-content: space-evenly;
		padding: 10px 0 10px 0;
		/* background-color: #789615; */
	}
	.list-type ul li{
		width: 33%;
		height: 17px;
		font-size: 12px;
		line-height: 17px;
		text-align: center;
		border-right: 1px solid #e4e4e4;
		/* background-color: #129465; */
	}
	.list-type .list-bottom{
		height: 43px;
		width: 100%;
		padding: 9px 0 0 10px;
	}
	.list-type .list-bottom span{
		display: inline-block;
		width: 65px;
		height: 25px;
		border: 1px solid #f7eaaf;
		background-color: #fffcf5;
		font-size: 10px;
		line-height: 25px;
		text-align: center;
		border-radius: 5px;
		margin-right: 5px;
	}
	.list-type .list-bottom p{
		display: inline-block;
		width: 54px;
		height: 25px;
		border: 1px solid #f5f5f5;
		background-color: #fff;
		font-size: 10px;
		line-height: 25px;
		text-align: center;
		border-radius: 5px;
	}
	.ktv{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 130px;
		padding: 13px 10px 0 10px;
		/* background-color: #654816; */
		border-top: 1px solid #f6f6f6;
		border-bottom: 1px solid #f6f6f6;
		margin-bottom: 13px;
	}
	.ktv .ktv-l{
		width: 65px;
		/* background-color: #654891; */
	}
	.ktv .ktv-l img{
		width: 65px;
		height: 65px;
		border: 1px solid #f6f6f6;
		/* background-color: #198415; */
	}
	.ktv .ktv-r{
		width: 275px;
		height: 109px;
		padding-left: 8px;
	}
	.ktv .ktv-r h6{
		height: 22px;
		font-size: 14px;
		line-height: 22px;
	}
	.ktv .ktv-r .ktv-r-msg{
		display: flex;
		justify-content: space-between;
		height: 20px;
		font-size: 10px;
		line-height: 20px;
	}
	.ktv .ktv-r .ktv-r-msg p{
		color: #939393;
	}
	.ktv .ktv-r .ktv-r-msg b{
		color: #f3b247;
	}
	.ktv .ktv-r .ktv-r-recommend{
		height: 16px;
		font-size: 10px;
		line-height: 10px;
		color: #939393;
	}
	.ktv .ktv-r .ktv-r-recommend img{
		float: left;
		width: 11px;
		height: 11px;
		margin-right: 5px;
	}
	.ktv .ktv-r .ktv-r-recommend p{
		float: left;
	}
	.ktv .ktv-r .ktv-r-last{
		height: 26px;
		font-size: 10px;
		color: #535353;
	}
	.ktv .ktv-r .ktv-r-last img{
		float: left;
		width: 11px;
		height: 11px;
		margin-right: 5px;
		transform: translateY(2px);
	}
	.ktv .ktv-r .ktv-r-last p{
		float: left;
	}
</style>
