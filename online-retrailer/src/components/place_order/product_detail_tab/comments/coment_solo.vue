<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="comment_wrapper">
    <img :src="comment.avatar" alt="avatar" class="avatar">
    <div class="comment_content">
      <p class="title">{{comment.name}}</p>
      <p class="content">{{comment.comment_content}}</p>
    </div>
    <div class="time_and_rate">
      <p class="time">{{comment.comment_time | format_Date}}</p>
      <Star :score="comment.rate"></Star>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/js/data.js'
import Star from '@/components/star/star'

export default {
  data () {
    return {

    }
  },
  props: {
    comment: {
      type: Object,
      default: () => ({
        avatar: 'http://via.placeholder.com/70x70',
        name: 'Gene Garcia',
        comment_content: '评论内容。。。',
        comment_time: new Date().getTime(),
        rate: 5
      })
    }
    // avatar: {
    //   type: String,
    //   default: () => 'http://via.placeholder.com/70x70'
    // },
    // name: {
    //   type: String,
    //   default: () => 'Gene Garcia'
    // },
    // comment_content: {
    //   type: String,
    //   default: () => '评论内容。。。'
    // },
    // comment_time: {
    //   type: Number,
    //   default: () => new Date().getTime()
    // },
    // rate: {
    //   type: Number,
    //   default: () => 5
    // }
  },
  filters: {
    format_Date (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  mounted () {
    // console.log(this.comment)
  },
  components: {
    Star
  }
}
</script>

<style lang="sass" scoped="" type="text/css">
.comment_wrapper
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  .avatar
    border-radius: 50%;
    margin-right: 30px;
  .comment_content
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    font-family: PingFangSC-Regular;
    .title
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 16px;
      color: #5F5F5F;
    .content
      font-size: 18px;
      color: #000000;
      line-height: 30px;
  .time_and_rate
    display: flex;
    flex-direction: column;
    align-items: flex-end;
</style>
