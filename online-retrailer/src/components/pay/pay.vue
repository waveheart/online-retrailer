<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="pay_wrapper">
    <div class="pay_info">
      <h2 class="info_title">
        <i class="iconfont icon-cc-question-square"></i>提交订单成功
      </h2>
      <p class="info_tip">请在24小时内完成支付，超时订单将自动取消，我们将在您完成支付后的72小时内发货</p>
      <div class="delivery_info">
        <span>收货信息：</span><span class="name">李晓峰</span><span class="phone_num">136****2985</span><span class="address">北京 北京市 朝阳区 左家庄街道 时间国际a座1709</span>
      </div>
      <div class="pay_amount">
        <span>应付金额:</span><span class="amount">￥10200.00</span>
      </div>
    </div>
    <div class="pay_mode">
      <h2 class="title">请选择支付方式</h2>
      <div class="select_pay_mode">
        <div class="pay_company" @click="change_pay_mode('wx_pay')">
          <div class="pay_logo" :class="{'active': pay_mode === 'wx_pay'}">
            <img src="../../common/imgs/wx_pay.jpg" alt="微信支付">
          </div>
          <div class="QR_code" v-show="pay_mode === 'wx_pay'">
            <img src="http://via.placeholder.com/150x150" alt="二维码">
            <p>请打开手机微信</p>
            <p>扫描二维码支付</p>
          </div>
        </div>
        <div class="pay_company" @click="change_pay_mode('ali_pay')">
          <div class="pay_logo" :class="{'active': pay_mode === 'ali_pay'}">
            <img src="../../common/imgs/ali_pay.jpg" alt="微信支付">
          </div>
          <div class="QR_code" v-show="pay_mode === 'ali_pay'">
            <img src="http://via.placeholder.com/150x150" alt="二维码">
            <p>请打开支付宝</p>
            <p>扫描二维码支付</p>
          </div>
        </div>
        <div class="pay_company" @click="change_pay_mode('baidu_pay')">
          <div class="pay_logo" :class="{'active': pay_mode === 'baidu_pay'}">
            <img src="../../common/imgs/baidu_pay.jpg" alt="微信支付">
          </div>
          <div class="QR_code" v-show="pay_mode === 'baidu_pay'">
            <img src="http://via.placeholder.com/150x150" alt="二维码">
            <p>请打开百度钱包</p>
            <p>扫描二维码支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pay_mode: 'wx_pay'
    }
  },
  methods: {
    change_pay_mode (mode) {
      // console.log(mode)
      this.pay_mode = mode
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.pay_wrapper
  width: 100%;
  min-width: 1280px;
  padding: 40px 0 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfc;
  .pay_info
    width: 780px;
    height: 260px;
    padding: 40px 60px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    .info_title
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      font-size: 24px;
      color: #000000;
      .iconfont
        display: inline-block;
        margin-right: 25px;
        font-size: 36px;
        vertical-align: middle;
    .info_tip
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      color: #5F5F5F;
      margin-bottom: 10px;
    .delivery_info
      height: 30px;
      line-height: 30px;
      margin-bottom: 20px;
      color: #5F5F5F;
      font-size: 16px;
      .name, .phone_num, .address
        color: #161616;
      .name
        font-family: PingFangSC-Semibold;
      .phone_num
        display: inline-block;
        margin: 0 20px;
    .pay_amount
      height: 30px;
      line-height: 30px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #A0A0A0;
      .amount
        display: inline-block;
        margin-left: 20px;
        font-family: SFNSDisplay;
        font-size: 24px;
        color: #CC5254;
        vertical-align: middle;
  .pay_mode
    width: 780px;
    height: 428px;
    padding: 40px 60px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEEE
    .title
      height: 30px;
      line-height: 30px;
      margin-bottom: 20px;
      font-family: PingFangSC-Semibold;
      font-size: 18px;
      color: #000000;
    .select_pay_mode
      display: flex;
      justify-content: space-between;
      .pay_company
        display: flex;
        flex-direction: column;
        align-items: center;
        .pay_logo
          width: 180px;
          height: 66px;
          line-height: 66px;
          box-sizing: border-box;
          text-align: center;
          border: 1px solid #eee;
          margin-bottom: 25px;
          &:hover
            cursor: pointer;
          &.active
            border: 1px solid transparent;
            background: url('../../common/imgs/border_img.jpg') no-repeat center center;
            background-size: contain;
          img
            width: 110px;
            height: 30px;
            vertical-align: middle;
        .QR_code
          width: 180px;
          padding: 10px 15px;
          text-align: center;
          box-sizing: border-box;
          border: 1px solid #eee;
          position: relative;
          &:before, &:after
            display: block;
            content: '';
            height: 0;
            width: 0;
            position: absolute;
          &:before
            top: -10px;
            left: 75px;
            border-right: 15px solid transparent;
            border-bottom: 10px solid #eee;
            border-left: 15px solid transparent;
          &:after
            top: -9px;
            left: 76px;
            border-right: 14px solid transparent;
            border-bottom: 9px solid #fff;
            border-left: 14px solid transparent;
          img
            width: 150px;
            height: 150px;
            margin-bottom: 5px;
          p
            font-family: PingFangSC-Regular;
            font-size: 12px;
            line-height: 16px;
            color: #A0A0A0;
</style>
