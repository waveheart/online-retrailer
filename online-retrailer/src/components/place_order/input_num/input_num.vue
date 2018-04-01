<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div>
    <el-input-number v-model="buy_num" @change="handleChange" :min="1" :max="100" label="购买数量"></el-input-number>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buy_num: 1
    }
  },
  methods: {
    handleChange (value) {
      // console.log(value)
    }
  }
}
</script>

<style lang="sass" type="text/css">
.el-input-number
  width: 124px;
.el-input-number__increase:hover, .el-input-number__decrease:hover
  color: #333;
</style>
