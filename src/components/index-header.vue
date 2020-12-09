<template>
  <div class="box">
    <p id="xian">西安</p>
    <p id="rain">阴5·C</p>
    <input class="search" type="text" placeholder="美团优选 天天一元抢秒杀">
    <span class="iconfont icon-magnifier"></span>
    <span class="iconfont icon-yuyin"></span>
    <span class="iconfont icon-jia"></span>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
@import url("../assets/font/iconfont.css");
.box{
  width: 100%;
  height: 40px;
  background-color: #ffd101;
}
.box #xian {
    font-size: 16px;
    position: absolute;
    top: 4px;
    left: 20px;
}

.box #rain {
    font-size: 12px;
    position: absolute;
    top: 23px;
    left: 21px;
    transform: scale(0.8);
}

.box .search {
    text-indent: 3em;
    height: 30px;
    width: 64%;
    position: absolute;
    top: 5px;
    left: 64px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    font-size: 14px;
}

.box .iconfont {
    position: absolute;

}
.box .icon-magnifier{
    left: 20%;
    font-size: 22px;
    top: 7px;
}
.box .icon-yuyin {
    right: 37px;
    font-size: 25px;
    top: 7px;
}

.box .icon-jia {
    right: 9px;
    font-size: 22px;
    top: 9px;
}
</style>