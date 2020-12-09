<template>
    <div class="box">
        <ul>
            <li class="selected">
                所有订单
            </li>
            <li>
                待付款
            </li>
            <li>
                待使用
            </li>
            <li>
                待评价（<span>2</span>）
            </li>
            <li>
                退款/售后
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Ordernav',
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 30px;
    padding: 0 13px 0 13px;
}
.box ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.box ul li{
    height: 100%;
    line-height: 100%;
    font-size: 12px;
}
.box ul .selected{
    font-size: 12px;
    font-weight: bold;
    border-bottom: 2px solid #f6ce06;
}
</style>