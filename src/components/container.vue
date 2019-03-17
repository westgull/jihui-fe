<template lang="html">
  <el-container>
    <el-header class="header">
      <div class="logo_container">
        <a href="#/">
          <img class="logo" src="images/logo.png">
        </a>
      </div>
      <el-menu :default-active="activeIndex" :router='true' class="el-menu-demo" mode="horizontal" active-text-color="#4e97d9"
        @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="/product">
          <template slot="title">好物</template>
          <el-menu-item index="/fashion">时尚</el-menu-item>
          <el-menu-item index="/food">美食</el-menu-item>
          <el-menu-item index="/rift">科技</el-menu-item>
          <el-menu-item :index="'/product/'+p.name" :key="p.name" v-for="p in List" v-if="p.name!='Oculus Rift'">{{p.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-submenu v-if="islogin" index="10" style="width:90px">
          <template slot="title">
            <img src="images/carousel1.jpg" style="width:40px;height:40px;border-radius: 50px">
          </template>
          <el-menu-item index="/ucenter">个人中心</el-menu-item>
          <el-menu-item index="/re" @click="loginout">
            退出
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="islogin" index="/cart">
          购物车
          <i class="iconfont icon-publishgoods_fill"></i>
          <el-badge :value="carNum"></el-badge>
        </el-menu-item>
        <el-menu-item v-if="!islogin" index="/login">
          <p class="log">登录</p>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="padding:0" >
      <router-view @getCarNum="getCarNum"></router-view>
    </el-main>
  </el-container>

</template>

<script>
  import Vue from 'vue';
  import $ from 'jQuery';
  import {
    getCartNum
  } from 'api/user.js';
  import {
    productList
  } from 'api/product.js';

  export default {
    name: 'container',
    data() {
      return {
        activeIndex: this.$route.path,
        islogin: false,
        carNum: 2,
        List: []
      };
    },
    watch: {
      "$route": function () {
        if ($.cookie('userName')) {
          this.islogin = true;
        } else {
          this.islogin = false;
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      getCarNum (val) {
        this.carNum = val
      },
      loginout() {
        $.removeCookie('userName');
        $.removeCookie('token');
        this.$router.push('/');
        location.reload();
      }
    },
    created() {
      productList().then(res => {
        console.log('productList', res.data);
        this.List = res.data;
      });
      if ($.cookie('userName')) {
        this.islogin = true;
        getCartNum({
          user: $.cookie('userName')
        }).then(res => {
          this.carNum = res.num;
        })
      } else {
        this.islogin = false;
      }
    }
  }

</script>

<style lang="scss">


</style>
