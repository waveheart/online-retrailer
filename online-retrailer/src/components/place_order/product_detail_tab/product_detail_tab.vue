<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="product_detail_tab">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el_tabs">
      <el-tab-pane label="产品详情" name="first">
        <Comments></Comments>
      </el-tab-pane>
      <el-tab-pane label="规格与包装" name="second">
        <Specifications></Specifications>
      </el-tab-pane>
      <el-tab-pane label="评论" name="third">
        <Details></Details>
      </el-tab-pane>
      <!-- <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item"></el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import Comments from './comments/comments.vue'
import Specifications from './specifications/specifications.vue'
import Details from './details/details.vue'

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  props: {
    tabs: {
      type: Array,
      default: () => ['产品详情', '规格与包装', '评论']
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    Comments,
    Specifications,
    Details
  }
}
</script>

<style lang="sass" type="text/css">
.product_detail_tab
  margin-top: 50px;
  .el_tabs
    .el-tabs__item
      height: 46px;
      line-height: 30px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #A0A0A0;
      &.is-active
        color: #000;
      &:hover
        color: #000;
      &:focus.is-active.is-focus:not(:active)
        box-shadow: none;
        border-radius: 0;
    .el-tabs__active-bar
      height: 3px;
      color: #343434;
      background-color: #343434;
    .el-tabs__nav-wrap::after
      bottom: 1px;
      height: 1px;
      background-color: #eeeeee;
    .el-tabs__header
      margin-bottom: 0px;

</style>
