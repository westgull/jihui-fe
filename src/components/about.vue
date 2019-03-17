<template lang="html">
  <div class="about">
    <div class="about-us animate-box animate-one">
      <div class="img-box">
        <img src="images/about.jpg">
      </div>

      <hr>

      <div class="desc">
        <h2 data-v-c0cf70a4="" class="title">什么是草莓街</h2>
        <div class="content">
          <p>草莓街是一个年轻生活方式分享平台</p> 
          <p>截止2019年1月，草莓街用户数超过2亿，其中90后和95后是最活跃的用户群体。</p> 
          <p>在草莓街，用户通过短视频、图文等形式记录生活的点滴。</p>
          <p>社区每天产生数十亿次的笔记曝光，内容覆盖时尚、护肤、彩妆、美食、旅行、影视、读书、健身等各个生活方式领域。</p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import Vue from 'vue';
  import Init from 'components/default/init';

  export default {
    name: 'about',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {

    },
    mounted() {
      Init();
    }
  }

</script>

<style lang="scss">


</style>
