<template>
    <div class="box">
        <ul>
            <li>
                <p class="selectedP">推荐</p>
                <span class="selectedSpan"></span>
            </li>
            <li>
                <p>丽人</p>
                <span></span>
            </li>
            <li>
                <p>旅行</p>
                <span></span>
            </li>
            <li>
                <p>电影</p>
                <span></span>
            </li>
            <li>
                <p>结婚</p>
                <span></span>
            </li>
            <li>
                <p>购物</p>
                <span></span>
            </li>
            <li>
                <p>教培</p>
                <span></span>
            </li>
            <li>
                <p>家装</p>
                <span></span>
            </li>
            <li>
                <p>亲子</p>
                <span></span>
            </li>
            <li>
                <p>医美</p>
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Foundnav"
}
</script>

<style scoped>
    .box{
        position: fixed;
        top: 44px;
        height: 28px;
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
        background-color: #fff;
    }
    ul{
        height: 28px;
        width: 500px;
        padding: 0 12px 0 12px;
        display: flex;
        justify-content: space-evenly;
        
    }
    ul li{
        width: 47px;
        height: 28px;
        text-align: center;
        position: relative;
        flex-shrink:0;
        
    }
    ul li p{
        font-size: 10px;
        line-height: 28px;
        width: 100%;
        text-align: center;
    }
    ul li .selectedP{
        font-size: 14px;
        font-weight: bold;
        line-height: 28px;
    }
    ul li span{
        position: absolute;
        left: 13px;
        bottom: 0;
        display: inline-block;
        width: 21px;
        height: 3px;
        border-radius: 2px;
        background-color: #fff;
    }
    ul li .selectedSpan{
        position: absolute;
        left: 13px;
        bottom: 0;
        display: inline-block;
        width: 21px;
        height: 3px;
        border-radius: 2px;
        background-color: #ffd101;
    }
</style>