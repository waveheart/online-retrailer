<!-- 产品详情，规格与包装，评论页面 -->

<template>
  <div class="place_order_comtainer">
    <div class="product">
      <div class="product_imgs">
        <div class="bg_img">
          <img src="http://via.placeholder.com/400x400" alt="大图" width="400" height="400">
        </div>
        <ul class="preview_imgs_list">
          <li class="preview_img">
            <img src="http://via.placeholder.com/85x85" alt="小图" width="85" height="85">
          </li>
          <li class="preview_img">
            <img src="http://via.placeholder.com/85x85" alt="小图" width="85" height="85">
          </li>
          <li class="preview_img">
            <img src="http://via.placeholder.com/85x85" alt="小图" width="85" height="85">
          </li>
          <li class="preview_img">
            <img src="http://via.placeholder.com/85x85" alt="小图" width="85" height="85">
          </li>
        </ul>
      </div>
      <div class="order_detail">
        <h2 class="product_name">Sensoro Tracker PRO</h2>
        <div class="product_feature">
          <span>高清双向通话 / </span><span>五重精准定位 / </span><span>十天超长待机</span>
        </div>
        <div class="order_parameter">
          <div class="product_price">
            <span class="parameter_title">价格</span><span class="price">￥320</span><span>免运费</span>
          </div>
          <div class="product_color">
            <span class="parameter_title">选择颜色</span><span class="color"></span>
          </div>
          <div class="product_num">
            <span class="parameter_title">数量</span><div></div>
          </div>
        </div>
        <span class="buy_button">立即购买</span>
        <ul class="product_guarantee">
          <li class="guarantee_item"><i class="iconfont"></i>官方正品</li>
          <li class="guarantee_item"><i class="iconfont"></i>3个月质保</li>
          <li class="guarantee_item"><i class="iconfont"></i>7天无理由退货</li>
        </ul>
      </div>
    </div>
    <div class="product_detail_tab"></div>
    <div class="routers">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped="" type="text/css">
.place_order_comtainer
  width: 980px;
  margin: 0 auto;
  .product
    display: flex;
    margin-top: 40px;
    .product_imgs
      display: flex;
      flex-direction: column;
      flex: 0 0 400px;
      width: 400px;
      margin-right: 120px;
      .bg_img
        width: 400px;
        height: 400px;
      .preview_imgs_list
        display: flex;
        margin-top: 20px;
        .preview_img
          width: 85px;
          height: 85px;
          margin-right: 20px;
        .preview_img:last-child
          margin-right: 0;
    .order_detail
      display: flex;
      flex-direction: column;
      color: #A0A0A0;
      .product_name
        height: 40px;
        line-height: 40px;
        margin-bottom: 5px;
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #000000;
      .product_feature
        height: 20px;
        line-height: 20px;
        margin-bottom: 70px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        letter-spacing: 0;
      .order_parameter
        display: flex;
        flex-direction: column;
        margin-bottom: 70px;
        .parameter_title
            font-family: PingFangSC-Regular;
            font-size: 12px;
        .product_price, .product_color, .product_num
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        .product_price
          height: 40px;
          font-size: 12px;
          .parameter_title
            margin-right: 74px;
          .price
            font-family: PingFangSC-Semibold;
            font-size: 28px;
            color: #CC5254;
            margin-right: 10px
        .product_color
          height: 25px;
          .parameter_title
            margin-right: 50px;
          .color
            width: 25px;
            height: 25px;
            box-sizing: border-box;
            background-color: #000;
            border: 2px solid rgba(0,0,0,0.20);
            border-radius: 50%;
        .product_num
          height: 40px;
          margin-bottom: 0;
      .buy_button
        width: 232px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-bottom: 30px;
        background-color: #CC5254;
        font-family: AppleSystemUIFont;
        font-size: 18px;
        color: #FFFFFF;
      .product_guarantee
        display: flex;
        height: 20px;
        align-items: center;
        .guarantee_item
          margin-right: 30px;
</style>
