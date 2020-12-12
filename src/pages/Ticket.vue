<template>
    <div class="container">
        <div class="banner">
            <router-link to="/index" tag="span">
                <span></span>
            </router-link>
            <img src="../../public/img/ticket/top-banner.jpg" alt="">
        </div>
        <div class="note">
           <ul>
               <li>
                   <p>火车票</p>
                   <p>高铁/学生票/抢票</p>
                   <input type="button" value=">">
               </li>
               <li>
                   <p>机票</p>
                   <p>单程/往返/特价</p>
                   <input type="button" value=">">
               </li>
               <li>
                   <p>汽车票</p>
                   <p>预订方便/出票快捷/服务优质</p>
                   <input type="button" value=">">
               </li>
           </ul>
        </div>
        <div class="serves">
            <dl>
                <dt>
                    <img src="../../public/img/ticket/server-01.jpg" alt="">
                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/server-02.jpg" alt="">

                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/server-03.jpg" alt="">
                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/server-04.jpg" alt="">    
                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/server-05.jpg" alt="">
                </dt>
            </dl>
        </div>
        <div class="plan">
            <h1>出行计划</h1>
            <div class="plan-con">
                <div class="title">
                    <h5>周边好去处</h5>
                    <h5>国内低价游<span>机票</span></h5>
                </div>
                <ul class="info">
                    <li>
                        <div class="left">
                            <img src="../../public/img/ticket/plan-1.jpg" alt="">
                        </div>
                        <div class="right">
                            <h6>咸阳 <span>12分钟</span></h6>
                            <p>秦川复地，历史古都，文物资源极其丰富，东方文化发祥地</p>
                            <h5><span>￥9.5</span>高铁 二等座</h5>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../../public/img/ticket/plan-2.jpg" alt="">
                        </div>
                        <div class="right">
                            <h6>咸阳 <span>12分钟</span></h6>
                            <p>秦川复地，历史古都，文物资源极其丰富，东方文化发祥地</p>
                            <h5><span>￥9.5</span>高铁 二等座</h5>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../../public/img/ticket/plan-3.jpg" alt="">
                        </div>
                        <div class="right">
                            <h6>咸阳 <span>12分钟</span></h6>
                            <p>秦川复地，历史古都，文物资源极其丰富，东方文化发祥地</p>
                            <h5><span>￥9.5</span>高铁 二等座</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rate">
            <h5>特价机票
                <span>更多></span>
            </h5>
            <div class="big-banner">
                <img src="../../public/img/ticket/big-1.jpg" alt="">
                <img src="../../public/img/ticket/big-2.jpg" alt="">
            </div>
            <div class="small-banner">
                <img src="../../public/img/ticket/samll-1.jpg" alt="">
                <img src="../../public/img/ticket/small-2.jpg"  alt="">
                <img src="../../public/img/ticket/small-3.jpg"  alt="">
            </div>
        </div>
        <div class="plane">
            <div class="plane-left">
                <span>预订享优惠</span>
                <p>长龙航空春运早鸟票</p>
                <b>点击订票></b>
            </div>
            <div class="plane-right">
                <img src="../../public/img/ticket/bottom-banner.jpg" alt="">
            </div>
        </div>
        <div class="footer">
            <dl>
                <dt>
                    <img src="../../public/img/ticket/footer-icon-01.jpg" alt="">
                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/footer-icon-02.jpg" alt="">

                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/footer-icon-03.jpg" alt="">

                </dt>
            </dl>
            <dl>
                <dt>
                    <img src="../../public/img/ticket/footer-icon-04.jpg" alt="">
                </dt>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:"Ticket"
}
</script>
<style scoped>

.banner{
    width: 100%;
    height: 1.62rem;
    background-color: red;
    position: relative;

}
.banner span{
    position: absolute;
    width: 100px;
    height: 30px;
    left: 17px;
    top: 10px;
    /* background-color: red; */
}

.banner img{
    width: 100%;
    height: 100%;
}
.note{
    width: 100%;
    /* height: 2.28rem; */
    background-color:#fecc96;

}
.note ul{
    width: 100%;
    /* height: 2.28rem; */
    background-color:#fff;
    border-radius: 0.1rem;
    padding-top: 0.15rem;
    color:#fff;

}
.note ul li{
    margin: 0 auto;
    width: 80%;
    height: 0.64rem;
    background-color:#4772fc;
    border-radius: 0.12rem;
    margin-bottom: 0.1rem;
    padding: 0.18rem ;
    position: relative;

}
.note ul li p:nth-of-type(1){
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
}
.note ul li  p:nth-of-type(2){
    font-size: 0.1rem;
    color: #eee;
}
.note ul li  input{
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0.18rem;
    top: 50%;
    font-size: 0.15rem;
    color: #fff;
    transform: rotateZ(90deg);
}
.note ul li:first-child{
    background-color:#ff624f;
}
.note ul li:last-child{
    background-color:#00bd87;
}
.serves{
    font-size: 0.12rem;
    height: 0.8rem;
    /* width: 100%; */
    display: flex;
    padding: 0 0.25rem;
    justify-content: space-between;
    align-items: center;
}
.serves dl{
    text-align: center;
}
.serves dl dt span{
    display:inline-block;
    width: 0.2rem;
    height:0.2rem;
   border-radius: 50%;
   background-color:pink;
}
.plan{
    padding: 0 0.14rem;
    
}
.plan h1{
    height:0.46rem;
    line-height: 0.46rem;
    font-size: 0.16rem;
}
.plan-con{
    height: 4.05rem;
}
.plan-con .title{
    height: 0.46rem;
   align-items:center;
    display: flex;
    justify-content: space-evenly;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
}
.plan-con .title h5:nth-child(1){
    border-bottom:0.01rem solid #fec301;

}
.plan-con .title h5{
    height: 100%;
    padding:0.1rem;
    position: relative;
}
.plan-con .title h5:nth-child(2) span{
    position:absolute;
    background-color: #fec301;
    width: 0.25rem;
    height: 0.14rem;
    border-radius: 0.1rem;
    font-size: 0.1rem;
}
.plan-con .info{
    height: 3.23rem;
    /* background-color: #900; */
    padding: 0 0.22rem;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.plan-con .info li {
    display: flex;
    justify-content: space-between;
    height: 0.77rem;
}
.plan-con .info .left{
    width: 1.14rem;
    /* background-color: skyblue; */
}
.plan-con .info .left img{
    width: 1.04rem;
    height: 0.97rem;
}
.plan-con .info .right {
    flex: 1;
    font-size: 0.12rem;
}
.plan-con .info .right h6{ 
    height: 0.3rem;
    font-weight: normal;
    position: relative;
}
.plan-con  .right h6 span{ 
    float: right;
    font-size: 0.1rem;
    color: #ababab;
}
.plan-con .info .right p{ 
    line-height:  0.17rem;
    color: #ababab;
}
.plan-con .info .right h5 { 
    font-weight: normal;
}
.plan-con .info .right h5 span{ 
    font-size: 0.12rem;
    color: #f9530d;
}
.rate{
    height: 3.16rem;
    margin-bottom: 0.46rem;
    padding: 0 0.1rem;
}
.rate h5{
    height:0.73rem;
    line-height: 0.73rem;
    font-size: 0.16rem;
}
.rate  .small-banner ,.rate  .big-banner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.08rem;
}
.rate  .small-banner img{
    width: 1.07rem;
    height: 1.17rem;
}
.rate h5 span{
    float:right;
    font-size: 0.12rem; 
    color: #ababab;   
}
.plane{
    height: 1rem;
    margin-bottom: 0.25rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.14rem;
    margin-bottom: 0.7rem;
}
.plane .plane-left{
    padding-left:0.14rem;
    width: 1.05rem;
    padding-left: 0.12rem;
    font-size: 0.12rem;
}
.plane .plane-left span{
   display: inline-block;
   width: 0.6rem;
   height: 0.15rem;
   border-radius: 0.05rem;
   background-color: #f9530d;
   font-size: 0.1rem;
   color: #fff;
}
.plane .plane-left p{
    margin-top: 0.1rem;
    margin-bottom: 0.16rem;

}
.plane .plane-left b{
    font-size: 0.12rem;
    color: #3f6955;
}
.plane .plane-right{
    flex: 1;
}
.plane .plane-right img{
    width:100%;
    height: 100%;
}
.footer{
    width: 100%;
    height: 0.53rem;
    padding: 0 0.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    line-height: 0.53rem;
    background-color: #fff;
}
</style>