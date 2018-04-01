<!--
    **author:gyx
    **msg:Be happy! Guy!
 -->

<template>
  <div class="change_psw_wrapper">
    <h1 class="title">修改密码</h1>
    <el-form label-position="top" status-icon label-width="80px"  :rules="rules2" ref="ruleForm2"  :model="ruleForm2" class="form">
      <el-form-item label="当前密码" prop="current_psw">
        <el-input type="password" v-model="ruleForm2.current_psw" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="confirm_button" @click="submitForm">确认需改</div>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        current_psw: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        current_psw: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log('submit!!')
    }
  }
}
</script>

<style lang="sass" type="text/css">
.change_psw_wrapper
  .title
    margin-bottom: 30px;
    font-size: 28px;
    color: #000000;
  .form
    width: 540px;
    padding: 40px 60px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    .el-input
      border-bottom: 1px solid #eee;
    .el-input__inner
      border: none;
    .confirm_button
      width: 230px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #CC5254;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 2px;
      &:hover
        cursor: pointer;
</style>
