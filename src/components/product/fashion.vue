<template lang="html">
  <div class="rift">
    <div class="recommend">
      <p class="desc">时尚，是一种态度</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/neck">
              <el-card>
                <div class="img-container">
                  <img src="images/good4.jpg">
                </div>
                <p class="pro-name">SWAROVSKI</p>
                <p class="desc">小黑天鹅吊坠项链</p>
                <p class="price">¥389.00起 </p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/nike">
              <el-card>
                <div class="img-container">
                  <img src="images/good1.jpg">
                </div>
                <p class="pro-name">Nike耐克</p>
                <p class="desc">CORTEZ 白红元年阿甘鞋</p>
                <p class="price">¥529.00</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/bag">
              <el-card>
                <div class="img-container">
                  <img src="images/good2.jpg">
                </div>
                <p class="pro-name">MICHAEL KORS</p>
                <p class="desc">单肩斜挎包32F8GF5M5Y</p>
                <p class="price">¥1299.00</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/watch">
              <el-card>
                <div class="img-container">
                  <img src="images/good3.jpg">
                </div>
                <p class="pro-name">FILA/斐乐</p>
                <p class="desc">手表</p>
                <p class="price">¥419.00 </p>
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
