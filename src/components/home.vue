<template lang="html">
  <div class="home">
    <div class="carousel">
      <el-carousel :height="carousel">
        <el-carousel-item>
          <img id="carousel-item" src="images/carousel2.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <!-- <img src="images/carousel4.jpg" style="position: relative;"> -->
          <div class="carous-des"></div>
        </el-carousel-item>
        <el-carousel-item>
          <img id="carousel-item" src="images/carousel1.png">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="change">
      <h2>全世界的好东西</h2>
      <p class="desc">吃喝玩乐买的日常，找到你想要的生活</p>
      <div class="ch-container">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="el-icon-star-on"></i>
              </div>
              <h3>关注</h3>
              <p>日常点滴，不再错过</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="iconfont icon-eye"></i>
              </div>
              <h3>发现</h3>
              <p>发现世界，分享生活</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="el-icon-goods"></i>
              </div>
              <h3>商城</h3>
              <p>爆款小众，应有尽有</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="ch-item">
              <div class="ch-item-bg">
                <i class="el-icon-tickets"></i>
              </div>
              <h3>笔记</h3>
              <p>更多经验，近在咫尺</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'home',
    data() {
      return {
        carousel: '' + window.innerWidth / 2.2 + 'px',
        activeIndex: '1',
      };
    },
    methods: {
      linkto() {
        this.$router.push('/rift');
      },
    },
    watch: {},
    mounted() {
      Init();
      window.onresize = () => {
        this.carousel = '' + window.innerWidth / 2.1 + 'px';
      }
    }
  }

</script>

<style lang="scss">


</style>
