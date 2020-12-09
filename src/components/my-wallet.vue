<template>
    <div class="wallet">
        <router-link to="/goBank">
            <span id="wallet">我的钱包</span>
            <span id="myWallet">进入钱包&nbsp;></span>
        </router-link>
        <ul id="spend-1">
            <li>6000</li>
            <li>400<u>元</u></li>
            <li>19.79<u>元</u></li>
            <li>5<u>元</u></li>
        </ul>
        <ul id="spend-2">
            <li>美团借钱</li>
            <li>美团月付</li>
            <li>账单抽免单</li>
            <li>新人福利</li>
        </ul>
        <ul id="spend-3">
            <li>享免息借款</li>
            <li>剩余可用</li>
            <li>最近支付</li>
            <li>最低可领</li>
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
.wallet {
    width: 95%;
    height: 132px;
    background-color: #f5f3f3;
    margin-top: 67px;
    margin-left: 5%;
    border-radius: 9px;
    position: relative;
}

.wallet #wallet {
    position: absolute;
    top: 15px;
    left: 14px;
    font-size: 13px;
    font-weight: bolder;
}

.wallet #myWallet {
    position: absolute;
    top: 18px;
    right: 14px;
    font-size: 12px;
}

.wallet #spend-1 {
    position: absolute;
    width: 89%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    top: 50px;
    /* right: 23px; */
    padding-left: 5%;
}

.wallet #spend-1 li,
.wallet #spend-2 li,
.wallet #spend-3 li {
    float: left;
}

.wallet #spend-1 li u {
    text-decoration: none;
    font-size: 12px;
}

.wallet #spend-2 {
    position: absolute;
    width: 89%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    top: 81px;
    /* right: 9px; */
    padding-left: 5%;
}

.wallet #spend-3 {
    position: absolute;
    width: 89%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    top: 102px;
    /* right: 11px; */
    padding-left: 5%;
    color: #646464;
}
</style>