<template lang="html">
  <div>
    <div class="register-header">
      <div class="register-title">
        <span>草莓街</span>
      </div>
      <div class="user-section">
        <a href="#/login">
          <span>登录</span>
        </a>
        |
        <a href="#/register">
          <span>注册</span>
        </a>
      </div>
    </div>

    <el-row type="flex" class="row-bg" justify="center" style="margin-top:30px">
      <el-col :sm="16" :xs="20">
        <el-steps :active="step" finish-status="success">
          <el-step title="填写账号信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>

        <div v-show="step == 1" style="margin: 40px auto;width:80%;max-width:550px">
          <el-form :model="register" status-icon :rules="rules" ref="register" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name" :required="true">
              <el-input v-model.number="register.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :required="true">
              <el-input type="password" v-model="register.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword" :required="true">
              <el-input type="password" v-model="register.checkpassword" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone" :required="true">
              <el-input v-model.number="register.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model.number="register.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('register')">提交</el-button>
              <el-button @click="resetForm('register')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div v-show="step == 2" style="margin-top: 100px">
          <h1 style="text-align: center">注册成功！请前往登录</h1>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'register',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        if (value.length < 2 || value.length > 30) {
          return callback(new Error('用户名长度必须在2~30之间'));
        }else {
          callback();
        }
      };
      var validatepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 8 || value.length > 30) {
            callback(new Error('密码长度必须在8~30之间'));
          }
          if (this.register.checkpassword !== '') {
            this.$refs.register.validateField('checkpassword');
          }
          callback();
        }
      };
      var validatepassword2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(value)) {
          return callback(new Error('手机号码格式错误'));
          this.$confirm('手机号码格式错误，请重新填写！', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } else {
           callback();
        }
      };
      let validateEmail = (rule, value, callback) => {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        if (value == '') {
          return callback();
        }
        if (!reg.test(value)) {
          return callback(new Error('邮箱格式错误，请重新填写'));
        }else {
          callback();
        }
      }
      return {
        register: {
          password: '',
          checkpassword: '',
          name: '',
          email: '',
          phone: ''
        },
        rules: {

          password: [{
            validator: validatepassword,
            trigger: 'blur'
          }],
          checkpassword: [{
            validator: validatepassword2,
            trigger: 'blur'
          }],
          name: [{
            validator: checkName,
            trigger: 'blur'
          }],
          email: [{
            validator: validateEmail,
            trigger: 'blur'
          }],
          phone: [{
            validator: validatePhone,
            trigger: 'blur'
          }]
        },
        step: 1
      };
    },
    methods: {
      submitForm(formName) {
        console.log(22)
        this.$refs.register.validate((valid) => {
          console.log(1)
          if (valid) {
            this.step = 2;
          } else {
            console.log('请正确输入信息');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style lang="scss">


</style>
