<template lang="html">

  <div class="buy-body">
    <div class="container">
      <p class="title">支付方式
        <span class="buy-way ischose" @click="buyWay('货到付款',$event)">货到付款</span>
        <span class="buy-way" @click="buyWay('在线支付',$event)">在线支付</span>
      </p>
      <hr>

      <p class="title">配送方式
        <span class="distribution">快递配送（免运费）</span>
      </p>
      <hr>

      <p class="title">商品</p>
      <div class="cart-body">
        <el-table :show-header="false" ref="multipleTable" :data="data" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="商品" min-width="300">
            <template slot-scope="scope">
              <div class="img-box">
                <img :src="'images/' + scope.row.image">
              </div>
              <div class="title">
                <p class="name">{{scope.row.pName}}</p>
                <p class="switch">
                  <span v-for="val in scope.row.switch">{{val}}&nbsp; &nbsp; </span>
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="单价" width="120">
            <template slot-scope="scope">
              <p class="sPrice">{{scope.row.sPrice}}元</p>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="180">
            <template slot-scope="scope">
              <p>{{scope.row.num}}</p>
              <!-- <el-input-number size="mini" v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="scope.row.stock"></el-input-number> -->
            </template>
          </el-table-column>
          <el-table-column label="小计" width="120">
            <template slot-scope="scope">
              <p class="tPrice">{{(scope.row.sPrice * scope.row.num).toFixed(2)}}元</p>
            </template>
          </el-table-column>
        </el-table>
        <el-input type="textarea" v-model="tip" placeholder="给商家留言"></el-input>
      </div>
      <!-- <hr> -->

      <div class="row" style="margin-top: 20px">
        <div class="col-md-8 col-sm-8 col-xs-6 total">
          <p>共 {{data.length}} 件商品， 合计 :
            <span class="price">{{totalPrice}}元</span>
          </p>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12 buy-btn">

          <p>
            <el-button type="info" onclick="javascript:window.location='#/cart'">返回购物车</el-button>
            <el-button type="danger" @click="pay">提交订单</el-button>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import Init from 'components/default/init';
  import $ from 'jQuery';

  export default {
    name: 'buy',
    data() {
      return {
        data: [],
        tip: '',
        formLabelWidth: '120px',
        payWay: '货到付款',
        isaddorEdit: '',
        oldIndex: '',
        chosed: '',
      };
    },
    computed: {
      totalPrice: function () {
        if (this.data.length > 1) {
          return this.data.reduce(function (p, c) {
            return (p.num * p.sPrice + c.num * c.sPrice).toFixed(2);
          })
        } else if (this.data.length == 1) {
          return (this.data[0].num * this.data[0].sPrice).toFixed(2);
        } else {
          return 0;
        }
      }
    },
    methods: {
      buyWay(val, el) {
        this.payWay = val;
        $('.buy-way').removeClass('ischose');
        $($(el.currentTarget)[0]).addClass('ischose');
        console.log(this.payWay);
      },
      chose(val, ev) {
        this.chosed = val;
        $('.address-box').removeClass('ischose');
        $($(ev.currentTarget)[0]).addClass('ischose');
      },
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
      pay() {
          this.$router.push('/ucenter');
      },
    },
    created() {
      this.data = sessionStorage.getItem('buy');
      this.data = eval('(' + this.data + ')');
      // console.log(this.data);
    },
    mounted() {
      Init();
    }
  }

</script>

<style lang="scss">


</style>
