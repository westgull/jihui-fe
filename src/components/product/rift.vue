<template lang="html">
  <div class="rift">
    <div class="recommend">
      <p class="desc">科技，与生活息息相关</p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/vr">
              <el-card>
                <div class="img-container">
                  <img src="images/Oculus Rift.png">
                </div>
                <p class="pro-name">Oculus Rift</p>
                <p class="desc">高性能VR眼镜</p>
                <p class="price">￥1880</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/car">
              <el-card>
                <div class="img-container">
                  <img src="images/products/九号平衡车/balanceCar_thumbnail_1.jpg">
                </div>
                <p class="pro-name">九号平衡车</p>
                <p class="desc">智能情感机器人</p>
                <p class="price">￥1880</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/Apple">
              <el-card>
                <div class="img-container">
                  <img src="images/Apple Watch Sport.jpg">
                </div>
                <p class="pro-name">Apple Watch Sport</p>
                <p class="desc">苹果智能运动Watch</p>
                <p class="price">￥2280</p>
              </el-card>
            </a>
          </div>
          <div class="col-xl-3 col-xs-12 col-md-4">
            <a href="#/product/gear">
              <el-card>
                <div class="img-container">
                  <img src="images/Gear VR.jpg">
                </div>
                <p class="pro-name">Gear VR</p>
                <p class="desc">高性能VR眼镜</p>
                <p class="price">￥1280</p>
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
