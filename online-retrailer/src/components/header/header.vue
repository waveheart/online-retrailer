<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="header_wrapper">
    <div class="logo">
      <span>Sensoro Tracker</span>
    </div>
    <div class="nav">
      <ul class="nav_list">
        <li class="nav_item">Tracker Pro</li>
        <li class="nav_item">Tracker Classic</li>
        <li class="nav_item">Tracker APP</li>
      </ul>
    </div>
    <div class="personal_center">
      <img src="http://via.placeholder.com/32x32" alt="avatar" class="avatar">
      <span class="name">张粒</span>
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

.header_wrapper
  display: flex;
  padding: 0 150px;
  height: 90px;
  width: 100%;
  min-width: 1280px;
  box-sizing: border-box;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
  .logo
    margin-right: 50px;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    font-family: AvenirNext-Bold;
    color: #000000;
    letter-spacing: 0;
    text-align: left;
  .nav_list
    display: flex;
    align-items: center;
    .nav_item
      margin-right: 40px;
      height: 20px;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #343434;
      letter-spacing: 0;
      text-align: left;
      line-height: 20px;
  .personal_center
    display: flex;
    flex: auto;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    .avatar
      width: 32px;
      height: 32px;
      margin-right: 10px;
      border-radius: 50%;
    .name
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #222222;
      letter-spacing: 0;
      text-align: left;
      line-height: 18px;
</style>
