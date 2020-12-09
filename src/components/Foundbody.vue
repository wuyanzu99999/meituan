<template>
    <div class="box">
        <ul>
            <li>
                <img src="../../public/img/Found/body1.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            <li>
                <img src="../../public/img/Found/body2.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang2.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            <li>
                <img src="../../public/img/Found/body3.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            <li>
                <img src="../../public/img/Found/body4.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang2.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            <li>
                <img src="../../public/img/Found/body1.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            <li>
                <img src="../../public/img/Found/body2.jpg" alt="" class="person">
                <div class="li-bottom">
                    <p>一笼接一笼、一定要吃现蒸的，冒热气的那种</p>
                    <div class="li-b-b">
                        <div>
                            <img src="../../public/img/Found/touxiang2.jpg" alt="" class="touxiang">
                            <b>二月逛吃逛吃</b>
                        </div>
                        <div>
                            <span></span>
                            <i>21</i>
                        </div>
                        
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:"Foundbody"
}
</script>

<style scoped>
    .box{
        width: 100%;
        padding: 12px 12px 0 12px;
        background-color: #f6f6f6;
        margin-top: 72px;
    }
    .box ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }
    .box ul li{
        width: 48%;
        height: 288px;
        margin-bottom: 10px;
        background-color: #fff;
    }
    .box ul li .person{
        width: 100%;
        height: 218px;
        border-radius: 5px;
    }
    .box ul li .li-bottom{
        height: 70px;
        padding: 5px 10px 0 10px;
    }
    .box ul li .li-bottom p{
        font-size: 12px;
        line-height: 16px;
    }
    .box ul li .li-bottom .li-b-b{
        height: 20px;
        line-height: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .box ul li .li-bottom .li-b-b .touxiang{
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        background-color: yellow;
        margin-right: 5px;
    }
    .box ul li .li-bottom .li-b-b b,
    .box ul li .li-bottom .li-b-b span,
    .box ul li .li-bottom .li-b-b i{
        display: inline-block;
        font-size: 10px;
        line-height: 20px;
        /* transform: translateY(-5px); */
    }
</style>