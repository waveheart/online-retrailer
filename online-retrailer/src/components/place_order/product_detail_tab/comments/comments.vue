<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="comment_wrapper">
    <div class="summary_comment">
      <div class="satisfaction_rate">
        <span class="rate">98%</span><span class="test">满意度</span>
      </div>
      <div class="satisfaction_num">
        <span class="num">17263</span><span>人购买后满意</span>
      </div>
    </div>
    <template v-for="(comment, index) in comments">
      <Comment :key="index" :comment="comment"></Comment>
    </template>
  </div>
</template>

<script>
import Comment from './coment_solo.vue'

export default {
  data () {
    return {
      comments: [
        {
          avatar: 'http://via.placeholder.com/70x70',
          name: 'Gene Garcia',
          comment_content: 'hello world!。。。',
          comment_time: new Date().getTime(),
          rate: 4
        }
      ]
    }
  },
  components: {
    Comment
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.comment_wrapper
  padding-top: 21px;
  padding-bottom: 90px;
  .summary_comment
    height: 90px;
    background-color: #fbfbfb;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .satisfaction_rate
      height: 40px;
      line-height: 40px;
      color: #5f5f5f;
      .rate
        display: inline-block;
        margin-right: 10px;
        font-family: PingFangSC-Semibold;
        font-size: 36px;
        color: #CC5254;
        height: 50px;
        line-height: 50px;
        vertical-align: bottom;
    .satisfaction_num
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      .num
        display: inline-block;
        margin-right: 10px;
        font-family: PingFangSC-Medium;
        font-size: 22px;
        color: #000000;
        vertical-align: middle;

</style>
