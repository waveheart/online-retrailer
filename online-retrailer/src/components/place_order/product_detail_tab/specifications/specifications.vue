<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="specifications_wrapper">
    <div class="main_body specification_item">
      <div class="specification_title">主体</div>
      <div class="item_list">
        <div class="item">
          <span class="title">型号：</span>
          <span class="content">Sensoro</span>
        </div>
        <div class="item">
          <span class="title">上市年份：</span>
          <span class="content">2018</span>
        </div>
        <div class="item">
          <span class="title">上市月份：</span>
          <span class="content">9月</span>
        </div>
        <div class="item">
          <span class="title">机身颜色：</span>
          <span class="content">黑色</span>
        </div>
        <div class="item">
          <span class="title">机身长度：</span>
          <span class="content">53.5mm</span>
        </div>
        <div class="item">
          <span class="title">机身宽度：</span>
          <span class="content">30mm</span>
        </div>
        <div class="item">
          <span class="title">机身重量：</span>
          <span class="content">40g</span>
        </div>
        <div class="item">
          <span class="title">机身厚度：</span>
          <span class="content">16mm</span>
        </div>
        <div class="item">
          <span class="title">机身材质分类：</span>
          <span class="content">PVC</span>
        </div>
      </div>
    </div>
    <div class="main_chip specification_item">
      <div class="specification_title">主芯片</div>
      <div class="item_list">
        <div class="item">
          <span class="title">CPU品牌：</span>
          <span class="content">Sensor</span>
        </div>
        <div class="item">
          <span class="title">CPU频率：</span>
          <span class="content">220赫兹</span>
        </div>
      </div>
    </div>
    <div class="network_support specification_item">
      <div class="specification_title">网络支持</div>
      <div class="item_list">
        <div class="item">
          <span class="title">双卡机类型：</span>
          <span class="content">单卡</span>
        </div>
        <div class="item">
          <span class="title">支持SIM卡数量：</span>
          <span class="content">1个</span>
        </div>
        <div class="item">
          <span class="title">SIM卡类型：</span>
          <span class="content">1个</span>
        </div>
        <div class="item">
          <span class="title">4G网络：</span>
          <span class="content">4G：移动（TD-LTE）；4G：联通（FDD-LTE）；4G:联通（TD-LTE）</span>
        </div>
        <div class="item">
          <span class="title">3G/2G网络：</span>
          <span class="content">3G:移动（TD-SCDMA）；3G:联通（WCDMA）；2G:移动（GSM）+联通（GSM）；2G：移动联通（GSM）+电信（CDMA）</span>
        </div>
      </div>
    </div>
    <div class="packing_list specification_item">
      <div class="specification_title">包装清单</div>
      <div class="item_list">
        <div class="item">
          <span class="title">定位电话：</span>
          <span class="content">x1</span>
        </div>
        <div class="item">
          <span class="title">硅胶挂绳：</span>
          <span class="content">x1</span>
        </div>
        <div class="item">
          <span class="title">说明书/三包卡：</span>
          <span class="content">x1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.specifications_wrapper
  width: 100%;
  margin: 40px 0 90px 0;
  display: flex;
  flex-direction: column;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #A0A0A0;
  .specification_item
    display: flex;
    margin-bottom: 40px;
    &:last-child
      margin-bottom: 0;
    .specification_title
      flex: 0 0 100px;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: right;
    .item_list
      display: flex;
      flex-wrap: wrap;
      flex: 1 0 688px;
      padding: 0 96px;
      .item
        display: flex;
        min-width: 229px;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
        .title
          flex: 0 0 110px;
          width: 110px;
          text-align: right;
          margin-right: 10px;
        .content
          font-family: PingFangTC-Medium;
          color: #000000;
</style>
