<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="personal_center_wrapper">
    <ul class="tab_list">
      <li class="tab_item">个人中心</li>
      <li class="tab_item">我的订单</li>
      <li class="tab_item">收货地址</li>
      <li class="tab_item active">修改密码</li>
    </ul>
    <div class="item_content">
      <ChangePsw></ChangePsw>
    </div>
  </div>
</template>

<script>
import ChangePsw from './change_psw/change_psw.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    ChangePsw
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.personal_center_wrapper
  width: 100%;
  min-width: 1280px;
  padding: 40px 150px 90px;
  box-sizing: border-box;
  display: flex;
  background-color: #fbfbfc;
  .tab_list
    padding: 40px 0;
    width: 180px;
    box-sizing: border-box;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    .tab_item
      height: 20px;
      line-height: 20px;
      margin-bottom: 60px;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #343434;
      letter-spacing: 0.1px;
      &:last-child
        margin-bottom: 0;
      &.active
        font-family: PingFangSC-Medium;
        border-left: 4px solid #CC5254;
</style>
