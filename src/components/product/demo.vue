<template lang="html">
  <div>
    <div class="detail-container container">
      <div class="row">
        <div class="prod-demo col-lg-6 col-xs-12">
          <div class="bg">
            <div class="bg_left">
              <div class="show">
                <img :src="'images/' + product.image">
                <div class="mask"></div>
              </div>
              <!-- <div class="smallshow">
                <p class="prev prevnone"></p>
                <div class="middle_box">
                  <ul class="middle">
                    <li v-for="val in product.image">
                      <img :src="'images/' + val" alt="">
                    </li>
                  </ul>
                </div>
                <p class="next"></p>
              </div> -->
            </div>
            <div class="bg_right">
              <div class="bigshow">
                <div class="bigitem">
                  <img :src="'images/'+product.image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail col-lg-6 col-xs-12">
          <h1>{{product.name}}</h1>
          <div class="price">
            <span class="num">{{product.price}}元</span>
          </div>

          <!-- <div class="form-group" v-for="(v,k,index) in product.switch" v-if="k!='image'">
            <p>{{k}}</p>
            <el-radio-group v-model="switchRadio[index]" size="medium" @change="changeSwitch(k,v)">
              <el-radio-button v-for="val in v" :key="val" :label="val"></el-radio-button>
            </el-radio-group>
          </div> -->

          <div class="form-group">
            <p>数量</p>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="product.stock"></el-input-number>
          </div>

          <p>库存 {{product.stock}} 件</p>

          <div class="form-group">
            <el-button type="primary" @click="addCart">加入购物车</el-button>
            <el-button type="danger" @click="order">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <el-row :gutter="40">
          <el-col :xs="24" :md="18" class="introduce">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane class="details" label="详情" name="first">
                <div class="img-box">
                  <img v-for="val in product.detail" :src="'images/detail/' + val">
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :md="6" class="recommend hidden-sm-and-down">
            <p style="font-size: 24px;text-align: center;">推荐</p>
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
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import mag from 'components/default/show';
  import {
    getProduct,
    addCart,
    placeOrder
  } from 'api/product.js';

  export default {
    name: 'demo',
    data() {
      return {
        activeIndex: '',
        switchRadio: ['', '', '', '', '', ''],
        num1: 1,
        carNum: 1,
        activeName: 'first',
        product: {
          type:'noodle',
          name:'三养超辣鸡肉味奶油拌面',
          price:'36.90',
          stock:2,
          switch: {
            image: 'food1.jpg'
          },
          image: 'food1.jpg',
          detail:['detail2.jpg'],
          function: [],
          packing: []
        },
        productArr:[
          {
            type:'noodle',
            name:'三养超辣鸡肉味奶油拌面',
            price:'36.90',
            stock:2,
            switch: {
              image: 'food1.jpg'
            },
            image: 'food1.jpg',
            detail:['detail2.jpg'],
            function: [],
            packing: []
          },
          {
            type:'neck',
            name:'小黑天鹅吊坠项链',
            price:'389.00',
            stock:10,
            switch: {
              image: 'good4.jpg'
            },
            image: 'good4.jpg',
            detail:[''],
            function: [],
            packing: []
          },
          {
            type:'nike',
            name:'CORTEZ 白红元年阿甘鞋',
            price:'529.00',
            stock:6,
            switch: {
              image: 'good1.jpg'
            },
            image: 'good1.jpg',
            detail:['good1.jpg'],
            function: [],
            packing: []
          },
          {
            type:'bag',
            name:'MICHAEL KORS单肩包',
            price:'1299.00',
            stock:2,
            switch: {
              image: 'good2.jpg'
            },
            image: 'good2.jpg',
            detail:['good2.jpg'],
            function: [],
            packing: []
          },
          {
            type:'watch',
            name:'FILA/斐乐手表',
            price:'419.00',
            stock:2,
            switch: {
              image: 'good3.jpg'
            },
            image: 'good3.jpg',
            detail:['good3.jpg'],
            function: [],
            packing: []
          },
          {
            type:'cookie',
            name:'网易严选苏打饼干',
            price:'12.80',
            stock:20,
            switch: {
              image: 'food2.jpg'
            },
            image: 'food2.jpg',
            detail:['food2.jpg'],
            function: [],
            packing: []
          },
          {
            type:'oatmeal',
            name:'卡乐比水果麦片',
            price:'169.00',
            stock:2,
            switch: {
              image: 'food3.jpg'
            },
            image: 'food3.jpg',
            detail:['food3.jpg'],
            function: [],
            packing: []
          },
          {
            type:'milk',
            name:'德运高钙全脂成人牛奶粉',
            price:'126.00',
            stock:10,
            switch: {
              image: 'food4.jpg'
            },
            image: 'food4.jpg',
            detail:['food4.jpg'],
            function: [],
            packing: []
          },
          {
            type:'vr',
            name:'Oculus Rift VR眼镜',
            price:'1880',
            stock:4,
            switch: {
              image: 'Oculus Rift.png'
            },
            image: 'Oculus Rift.png',
            detail:['Oculus Rift.png'],
            function: [],
            packing: []
          },
          {
            type:'car',
            name:'九号平衡车',
            price:'1880',
            stock:2,
            switch: {
              image: 'products/九号平衡车/balanceCar_thumbnail_1.jpg'
            },
            image: 'products/九号平衡车/balanceCar_thumbnail_1.jpg',
            detail:['products/九号平衡车/balanceCar_thumbnail_1.jpg'],
            function: [],
            packing: []
          },
          {
            type:'Apple',
            name:'Apple Watch Sport',
            price:'2280',
            stock:2,
            switch: {
              image: 'Apple Watch Sport.jpg'
            },
            image: 'Apple Watch Sport.jpg',
            detail:['Apple Watch Sport.jpg'],
            function: [],
            packing: []
          },
          {
            type:'gear',
            name:'Gear VR',
            price:'1280',
            stock:2,
            switch: {
              image: 'Gear VR.jpg'
            },
            image: 'Gear VR.jpg',
            detail:['Gear VR.jpg'],
            function: [],
            packing: []
          }
        ],
        name: this.$route.params.name
      };
    },
    watch: {
      "$route.params.name": "initial"
    },
    methods: {
      initial() {
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
      handleChange(value) {
        if (value == this.product.stock) {
          this.$notify.error({
            title: "最大数量为库存量",
            duration: 1500
          });
        }
        console.log(value);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addCart() {
        if ($.cookie('userName')) {
          let swi = this.switchRadio.filter(v => {
            return v != ''
          })
          if (this.carNum > this.product.stock) {
            this.$notify.error({
              title: "最大数量为库存量",
              duration: 1000
            });
            return
          }
          this.$emit('getCarNum',this.carNum++)
        } else {
          this.$router.push('/login');
        }
      },
      order() {
        if ($.cookie('userName')) {
          let swi = this.switchRadio.filter(v => {
            return v != ''
          })
          let proData = [{
            user: $.cookie('userName'),
            product: this.product.id,
            pName: this.product.name,
            num: this.num1,
            image: this.product.image,
            sPrice: this.product.price,
            stock: this.product.stock,
            switch: swi,
            time: this.getNowFormatDate()
          }]
          sessionStorage.setItem("buy", JSON.stringify(proData));
          this.$router.push('/buy');
        } else {
          this.$router.push('/login');
        }
      }
    },
    created() {
      // console.log(this.name);
      this.initial();
      this.productArr.forEach((item)=>{
        if (item.type == this.$route.params.name) {
          this.product = item
        }
      })
    },
    mounted() {
      // Show();
      setTimeout(function () {
        $(function () {
          var obj = new mag('.show', '.bigshow', '.smallshow', '.mask', '.bigitem');
          obj.init();
        });
      }, 300);
    }
  }

</script>

<style lang="scss">


</style>
