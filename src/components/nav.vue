
<template>
  <div class="main">
      <div class="header">
      </div>
      <!-- <div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>
      <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div> -->
    <div class="content" >
        <div class="content1" :class="auto_fixed">
        <div class="head" >
        <ul>
            <li>点菜</li>
            <li>评价</li>
            <li>商家</li>
        </ul>
        <p>好友拼单</p>
        </div>
        <div class="box1"  >
           <!-- <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div> -->
        <div class="list-left">
            <ul>
                <li><span class="sun">☀</span> 实惠单人餐</li>
                <li><span class="Fireworks">⭐</span> 尊享多人餐</li>
                <li><span class="Clover">☘</span> 单点素菜</li>
                 <li><span class="sun">☀</span> 实惠单人餐</li>
                <li><span class="Fireworks">⭐</span> 尊享多人餐</li>
                <li><span class="Clover">☘</span> 单点素菜</li>
                 <li><span class="sun">☀</span> 实惠单人餐</li>
                <li><span class="Fireworks">⭐</span> 尊享多人餐</li>
                <li><span class="Clover">☘</span> 单点素菜</li>
            </ul>
        </div>
        <div class="list-right">
            <ul>
                <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
                 <li>
                    <div class="img">
                        <img src="../assets/img/list1.jpg" alt="">
                    </div>
                    <div class="right-wrods">
                        <p id="goodsname">单人荤素香锅·冒菜套餐<span>+</span>米饭（限时特价</p>
                        <p class="a">“很喜欢，味道也不错”</p>
                        <p class="b">月售4840&nbsp;好评度94%</p>
                    <div class="news">
                        <p>￥13.9 <span class="aa">￥28</span></p>
                        <input type="button" value="+">
                    </div>
                        <p class="bb">4.6折&nbsp;限30份</p>
                    
                    </div>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
</div>
</template>
 
<script>
export default {
 
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      auto_fixed: {
        fixed: false
      }
    }
  },
  methods: {
    onScroll(){
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let header_height = null
      if(document.getElementsByClassName('header')[0]){
        header_height = document.getElementsByClassName('header')[0].offsetHeight
      }
      console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)
      this.auto_fixed = {
        auto_fixed: true,
        fixed: scrolled >= header_height
      }
    }
  },
   destroyed(){
        window.removeEventListener('scroll',this.initHeight,false)
    },
  mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  }
 
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fixed{
    position: fixed;
    top: 0px;
    width: 100%;
  }
  .content{
    height:520px;
}
  .content1{
    height:520px;
}
.content .head{
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
    background-color:#fafafa
}

.content .head ul{
    display: flex;
}
.content .head li{
    text-align: center;
    width: 80px;
    color: #727373;
    font-size: 14px;
}
.content .head p{
    font-size: 10px;
    width: 52px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid #edd7b1;
    color:#fa7100;
    text-align: center;
    line-height: 22px;
}
.box1 .list-left li{
    width: 47px;
    height: 56px;
    padding: 14px;
    background-color: #f7f8fa;
}
.box1{
    height:520px;
    display: flex;
    justify-content: space-between;
}
.list-right,.list-left{
    height:520px;
    overflow: scroll;
}
.box1 .sun{
    color: #f6ce38;
}
.box1 .Fireworks{
    color: #e73c0e;
    font-size:10px;
}
.box1 .Clover{
    color: #0c9000;
}
.list-right ul{
    background-color: #fff;
}
.list-right li{
    display: flex;
    justify-content: space-between;
    width: 300px;
    height:130px;
}
.list-right li .img{
    padding: 18px 8px;
}
.list-right li img,.list-right li .img{
    width: 80px;
    height: 80px;
    border-radius:5px;
}
.list-right .right-wrods{
    padding: 18px 0;
}
.list-right .right-wrods p{
    margin-bottom: 4px;
}
.list-right .right-wrods #goodsname{
    font-size: 14px;
    color: #f75c00;
    font-weight: bold;
}
.list-right .right-wrods #goodsname span{
    color: #000;
}
.list-right .right-wrods .a{
    font-size: 10px;
    color: #f5b15f;
    width: 110px;
    height: 14px;
    background-color: #fef8e0;
    border-radius: 5px;
}
.list-right .right-wrods .b{
    color: #bdbebf;
    font-size: 10px;
}
.list-right .news p{
    color: #f9281c;
    font-size: 11px;
}
.list-right .news p .aa{
    color: #b0b0b0;
    font-size: 8px;
    text-decoration: line-through;
}
.list-right  .bb{
    color: #f66764;
    font-size: 8px;
}
.news{
    display: flex;
    justify-content: space-between;
}
.news input{
    width: 18px;
    height: 18px;
    border-radius: 3px;
    background-color: #ffd838;
    outline: none;
    border: 1px solid transparent;
}
  </style>