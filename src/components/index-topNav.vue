<template>
  <div class="top-nav">
            <span class="iconfont icon-richscan_icon"></span>
            <span class="iconfont icon-hongbao"></span>
            <span class="iconfont icon-kaquan"></span>
            <span class="iconfont icon-qiche"></span>
            <ul>
                <li>扫码</li>
                <li>付款</li>
                <li>卡券</li>
                <li>骑车</li>
            </ul>
  </div>
</template>

<script>

export default {
  name: 'TopNav',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
@import url("../assets/font-topNav/iconfont.css");
.top-nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 68px;
    background-color: #ffd101;
}

.top-nav .icon-richscan_icon {
    margin-top: 2px;
    font-size: 24px;
    font-weight: bolder;
}
.top-nav .icon-hongbao {
    font-size: 31px;
}
.top-nav .icon-kaquan {
    font-size: 30px;
}
.top-nav .icon-qiche {
    font-size: 30px;
}
.top-nav ul {
    list-style: none;
    width: 100%;
    position: absolute;
    overflow-x: hidden;
    bottom: 11px;
    display: flex;
    font-weight: bolder;
    justify-content: space-around;
}

</style>