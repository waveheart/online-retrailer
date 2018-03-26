<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="footer_wrapper">
    <div class="company_info">
      <div class="info_wrapper">
        <div class="product info">
          <p class="info_title">产品</p>
          <ul class="info_list">
            <li class="info_item">Tracker</li>
            <li class="info_item">Tracker Pro</li>
            <li class="info_item">Tracker Classic</li>
          </ul>
        </div>
        <div class="help info">
            <p class="info_title">帮助</p>
            <ul class="info_list">
              <li class="info_item">支持</li>
              <li class="info_item">常见问题</li>
              <li class="info_item">服务与保修</li>
            </ul>
        </div>
        <div class="download info">
          <p class="info_title">下载</p>
          <ul class="info_list">
            <li class="info_item">App Store</li>
            <li class="info_item">Google Play</li>
          </ul>
        </div>
        <div class="about info">
          <p class="info_title">关于</p>
          <ul class="info_list">
            <li class="info_item">法律条款</li>
            <li class="info_item">隐私政策</li>
            <li class="info_item">销售政策</li>
          </ul>
        </div>
      </div>
      <div class="contact">
        <p class="title">客服电话</p>
        <p class="phone_num contact_item">400-000-0000</p>
        <p class="work_time contact_item">周一至周日9:00-18:00</p>
        <span class="online_help contact_item">在线帮助</span>
      </div>
    </div>
    <p class="copyright">Copyright © 2018 SENSORO Co.,Ltd.京ICP备14023593号 京公网安备11010</p>
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
.footer_wrapper
  padding: 0 150px;
  height: 273px;
  width: 100%;
  min-width: 1280px;
  box-sizing: border-box;
  background-color: #343434;
  .company_info
    height: 207px;
    padding: 30px 0;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, .1)
    .info_wrapper
      display: flex;
      .info
        width: 160px;
        .info_title
          height: 30px;
          margin-bottom: 15px;
          pacity: 0.7;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: 30px;
        .info_list
          display: flex;
          flex-direction: column;
          .info_item
            height: 30px;
            margin-bottom: 6px;
            opacity: 0.8;
            font-family: PingFangSC-Medium;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 30px;
    .contact
      display: flex;
      flex-direction: column;
      .title
        height: 30px;
        margin-bottom: 15px;
        pacity: 0.7;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 30px;
        text-align: right;
      .contact_item
        height: 30px;
        line-height: 30px;
        margin-bottom: 6px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: right;
      .contact_item:last-child
        margin-bottom: 0;
      .phone_num
        font-family: PingFangSC-Semibold;
        font-size: 20px;
      .work_time
        opacity: 0.7;
        font-family: PingFangSC-Regular;
        font-size: 12px;
      .online_help
        opacity: 0.8;
        width: 100px;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        align-self: flex-end;
  .copyright
    height: 65px;
    line-height: 65px;
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFF3F3;
    letter-spacing: 0;
</style>
