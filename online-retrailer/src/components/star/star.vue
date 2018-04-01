<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="star">
    <i v-for="(item_class,index) in item_classes" :key="index" class="iconfont icon-favorites" :class="item_class"></i>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'

export default {
  data () {
    return {

    }
  },
  props: {
    score: {
      type: Number,
      default: () => 5
    }
  },
  computed: {
    item_classes () {
      let result = []
      let score = Math.floor(this.score)
      for (let i = 0; i < score; i++) {
        result.push(CLS_ON)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.iconfont.icon-favorites
  &.on
    color: #E2713C;
  &.off
    color: #EEEEEE;
</style>
