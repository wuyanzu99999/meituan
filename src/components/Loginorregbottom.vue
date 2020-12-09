<template>
    <div class="box">
        <p>登录代表同意<span>美团用户协议</span>、<span>隐私政策</span>，并授权使用您的美团账号信息（如昵称、头像、收货地址）以使您统一管理</p>
    </div>
</template>

<script>
export default {
    name:'Loginorregbottom',
}
</script>

<style scoped>
    .box{
        height: 28px;
        width: 100%;
        padding: 0 22px 0 22px;
        margin-top: 40px;
    }
    .box p{
        width: 100%;
        height: 14px;
        font-size: 10px;
        line-height: 14px;
        text-align: center;
    }
    .box span{
        color: #f17e00;
    }
</style>