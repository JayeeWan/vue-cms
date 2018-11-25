<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="http://i8.mifile.cn/a1/pms_1527735168.55324506!560x560.jpg">
            <h1 class="title">
                小米8
                <br>
                <span>6GB+128GB 白色</span>
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2699</span>
                    <span class="old">￥2999</span>
                 </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://i8.mifile.cn/a1/pms_1540429657.8272281!560x560.jpg">
            <h1 class="title">
                小米MIX3
                <br>
                <span>8GB+128GB 黑色</span>
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥3599</span>
                 </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://i8.mifile.cn/a1/pms_1539931570.3843664!560x560.jpg">
            <h1 class="title">
                小米8青春版
                <br>
                <span>4GB+64GB 蓝色</span>
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1399</span>
                 </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://i8.mifile.cn/a1/pms_1539913759.18356169!560x560.jpg">
            <h1 class="title">
                黑鲨游戏手机 Helo
                <br>
                <span>8GB+128GB 黑色</span>
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥3499</span>
                 </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>

    </div>
</template>

<style lang="less">
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img {
            width: 100%;
        }
        .title {
            font-weight: 700;
            span {
                font-weight: 400;
                font-size: 14px;
            }
        }
        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>