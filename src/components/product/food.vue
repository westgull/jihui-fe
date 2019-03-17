<template lang="html">
  <div class="rift">
    <div class="recommend">
      <p class="desc">寻找你身边的美食</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/noodle">
              <el-card>
                <div class="img-container">
                  <img src="images/food1.jpg">
                </div>
                <p class="pro-name">SAMYANG</p>
                <p class="desc">三养超辣鸡肉味奶油拌面</p>
                <p class="price">¥36.90</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/cookie">
              <el-card>
                <div class="img-container">
                  <img src="images/food2.jpg">
                </div>
                <p class="pro-name">网易严选</p>
                <p class="desc">苏打饼干 360克</p>
                <p class="price">¥12.80</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/oatmeal">
              <el-card>
                <div class="img-container">
                  <img src="images/food3.jpg">
                </div>
                <p class="pro-name">Calbee 卡乐比</p>
                <p class="desc">水果麦片</p>
                <p class="price">¥169.00</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/milk">
              <el-card>
                <div class="img-container">
                  <img src="images/food4.jpg">
                </div>
                <p class="pro-name">Devondale 德运</p>
                <p class="desc">高钙全脂成人牛奶粉</p>
                <p class="price">¥126.00 </p>
              </el-card>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import $ from 'jQuery';
  import Init from 'components/default/init';
  import {
    getProduct,
    addCart,
    placeOrder
  } from 'api/product.js';

  export default {
    name: 'rift',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        function objec(val) {
          if (val >= 1 && val <= 9) {
            val = "0" + val;
          }
          return val;
        }
        month = objec(month);
        strDate = objec(strDate);
        h = objec(h);
        m = objec(m);
        s = objec(s);
        var currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + h + ':' + m + ':' + s;
        return currentdate;
      },
      addcar() {
        if ($.cookie('userName')) {
          addCart({
            user: $.cookie('userName'),
            product: 8,
            num: 1,
            time: this.getNowFormatDate(),
            switch: []
          })
          location.reload();
        } else {
          this.$router.push('/login');
        }
      }
    },
    mounted() {

      Init();
      let n = 1;
      setInterval(function () {
        n == 6 ? n = 1 : n++;
        $("#show").attr('src', 'images/rift-show' + n + '.jpg');
      }, 1500);
    }
  }

</script>

<style lang="scss">


</style>
