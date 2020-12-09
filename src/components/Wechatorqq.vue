<template>
    <div class="box">
        <div>
            <span class="iconfont iconQQ"></span>
        </div>
        <div>
            <span class="iconfont iconweixin"></span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Wechatorqq',
}
</script>

<style scoped>
@import url("../assets/font_2259294_v7bv6v64md/iconfont.css");
    .box{
        margin-top: 190px;
        height: 38px;
        width: 100%;
        padding: 0 110px 0 110px;
        display: flex;
        justify-content: space-between;
    }
    
    .box span{
        display: inline-block;
        font-size: 24px;
        line-height: 35px;
        text-align: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid #e8e8e8;
        overflow: hidden;
    }

    .box  .iconQQ{
        color: rgb(51, 105, 253);
    }
    .box  .iconweixin{
        color: rgb(5, 197, 79);
    }
</style>