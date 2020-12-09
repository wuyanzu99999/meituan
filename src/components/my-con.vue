<template>
    <div class="myCon">
         <h6>互动签到</h6>
            <ul class="l1">
                <li>小美果园</li>
                <li>0元领水果&nbsp;></li>
            </ul>
            <ul class="l2">
                <li>邀请有利</li>
                <li>分享得20元优惠&nbsp;></li>
            </ul>
            <ul class="l3">
                <li>红包签到</li>
                <li>连签7天领红包&nbsp;></li>
            </ul>
            <ul class="l4">
                <li>JJ斗地主</li>
                <li>兑10元无门槛券&nbsp;></li>
            </ul>
    </div>
</template>

<script>

export default {
  name: 'wallet',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.myCon {
    position: relative;
    width: 95%;
    height: 160px;
    background-color: #f5f3f3;
    top: 5px;
    left: 10px;
    border-radius: 9px;
}

.myCon h6 {
    font-size: 13px;
    text-decoration: none;
    display: block;
    position: absolute;
    top: 12px;
    left: 15px;
    font-weight: 600;
}

.myCon .l1 {
    position: absolute;
    top: 46px;
    left: 16px;
}

.myCon .l2 {
    position: absolute;
    top: 46px;
    right: 58px;
}

.myCon .l3 {
    position: absolute;
    top: 96px;
    left: 16px;
}

.myCon .l4 {
    position: absolute;
    top: 96px;
    right: 58px;
}

.myCon .l1 li:nth-of-type(1),
.myCon .l2 li:nth-of-type(1),
.myCon .l3 li:nth-of-type(1),
.myCon .l4 li:nth-of-type(1) {
    font-size: 12px;
    font-weight: bolder;
}

.myCon .l1 li:nth-of-type(2),
.myCon .l2 li:nth-of-type(2),
.myCon .l3 li:nth-of-type(2),
.myCon .l4 li:nth-of-type(2) {
    font-size: 11px;
    color: #e93c08;
}
</style>