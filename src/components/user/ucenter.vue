<template lang="html">

  <div class="ucenter">
    <el-menu :default-active="active" :collapse="iscollapse" class="el-menu-vertical-demo dashbord" @select="handleSelect" :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-people_fill"></i>
          <span slot="title">{{username}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">个人中心</el-menu-item>
          <el-menu-item index="1-2">我的订单</el-menu-item>
          <el-menu-item index="1-3">我的优惠券</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div class="u-body">
      <div class="index-1-1" v-if="active == '1-1'">
        <div class="head-card">
          <img src="images/carousel1.jpg">
          <p class="name">{{username}}</p>
        </div>
        <div class="row body-card">
          <div class="col-xs-4 col-sm-4 offset-xs-2 offset-sm-1">
            <p class="num" @click="jump('1-2')">{{num.Paying}}</p>
            <p class="desc">待支付</p>
          </div>
          <div class="col-xs-4 col-sm-2">
            <p class="num" @click="jump('1-2')">{{num.Auditing}}</p>
            <p class="desc">待收货</p>
          </div>
          <div class="col-xs-12 col-sm-4">
            <p class="num" onclick="javascript:window.location='#/cart'">{{carNum}} 件</p>
            <p class="desc">购物车</p>
          </div>
        </div>
        <div class="menu-card">
          <p @click="jump('1-2')">
            <i class="iconfont icon-order"></i> 查看所有订单
            <span class="linkto"> > </span>
          </p>
          <p @click="jump('1-3')">
            <i class="iconfont icon-bookmark"></i> 我的优惠券
            <span class="linkto"> > </span>
          </p>
          <!-- <p @click="jump('1-2')"><i class="iconfont icon-payment"></i> 消费明细 <span class="linkto"> > </span></p> -->
          <!-- <p @click="jump('1-5')"><i class="iconfont icon-edit"></i> 修改个人信息 <span class="linkto"> > </span></p>          -->
        </div>
      </div>

      <div class="index-1-2" v-if="active == '1-2'">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="first">
            <div class="order-item" v-for="item in orderInfo">
              <div class="order-info row">
                <div class="col-sm-8 col-xs-12">
                  <p class="status">{{statusMap[item.status]}}</p>
                  <p>{{item.time}} {{item.payWay}}</p>
                </div>
                <div class="col-sm-4 col-xs-12 order-num">
                  <p>订单金额：
                    <span class="price">{{item.price}}元</span>
                  </p>
                </div>
              </div>
              <div class="order-product row" v-for="p in item.product">
                <div class="col-xs-12">
                  <div class="img-box">
                    <a :href="'#/product/' + p.name">
                      <img :src="'images/' + p.image">
                    </a>
                  </div>
                  <div class="desc">
                    <p class="name">
                      <a href="#/rift">{{p.name}}</a>
                    </p>
                    <p class="num">{{p.price}}元 x {{p.num}}</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="index-1-3" v-if="active == '1-3'">
        <el-tabs v-model="coupon" @tab-click="handleClick">
          <el-tab-pane label="已领取" name="first">
            <div class="demo">
              <div class="stamp stamp01">
                <div class="par">
                  <p>新用户优惠券</p>
                  <sub class="sign">￥</sub>
                  <span>50.00</span>
                  <p>订单满100.00元</p>
                </div>
                <div class="copy">副券
                  <p>2018-08-13
                    <br>2019-08-13</p>
                </div>
                <i></i>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待领取" name="second">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
          <el-tab-pane label="已使用" name="third">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
          <el-tab-pane label="已过期" name="fourth">
            <p class="no-data">没有符合条件的优惠券</p>
          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
  </div>


</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import $ from 'jQuery';
  import {
    city
  } from 'components/default/city';
  import {
    getOrderNum,
    getCartNum,
    getAddress,
    addAddress,
    deleteAddress,
    editAddress,
    updatePwd
  } from 'api/user.js';
  import {
    getOrderInfo,
    cancelOrder
  } from 'api/product.js';

  const statusMap = {
    'Auditing': '待审核发货',
    'Receiving': '待收货',
    'Paying': '待支付',
    'Closed': '已取消',
    'Finish': '已完成'
  };

  export default {
    name: 'ucenter',
    data() {
      return {
        username: $.cookie('userName'),
        active: '1-1',
        activeName: 'first',
        coupon: 'first',
        iscollapse: false,
        carNum: 0,
        ispaying: false,
        orderInfo: [
          {
            product:[{
                name:'三养超辣鸡肉味奶油拌面',
                image:'food1.jpg',
                price:'36.90',
                num:'2'
              },
              {
                name:'Nike耐克阿甘鞋',
                image:'good1.jpg',
                price:'529.00',
                num:'1'
              },
            ],
            time:'2019-02-01',
            payWay:'在线支付',
            price:400,
            status:'Finish',
          }
        ],
        num: {
          Auditing: 0,
          Paying: 0,
          Finish: 0
        },
        statusMap: statusMap,
        isaddorEdit: '',
        oldAddress: {},
        oldIndex: '',
        formLabelWidth: '120px'
      };
    },
    methods: {
      jump(val) {
        this.active = val;
      },
      handleSelect(key, keyPath) {
        this.active = key;
      },
      handleClick(tab, event) {

      },
    },
    mounted() {
      Init();
      if (window.innerWidth <= 600) {
        this.iscollapse = true;
      } else {
        this.iscollapse = false;
      }
      window.onresize = () => {
        if (window.innerWidth <= 600) {
          this.iscollapse = true;
        } else {
          this.iscollapse = false;
        }
      }
    },
    created() {
    }
  }

</script>

<style lang="scss">


</style>
