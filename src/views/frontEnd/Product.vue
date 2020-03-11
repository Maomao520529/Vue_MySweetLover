<template>
  <div class="mainContent">
    <Alert/>
    <loading :active.sync="isLoading">
        <img src="../../assets/images/load.gif" alt="loading">
    </loading>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->

    <!-- Start Content -->
    <div class="container">
       <nav aria-label="breadcrumb ">
          <ol class="breadcrumb mb-3 p-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link :to="{name:'Index'}" class="breadcrumb-link">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{name:'Products'}" class="breadcrumb-link">創意巧克力</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
          </ol>
        </nav>
      <div class="row">
        <div class="col-md-4">
          <h3 class="mb-4 productTitle">{{product.title}}</h3>
          <p class="mb-4 productPrice"><span class="origin_price mr-2" v-if="product.origin_price !== product.price">市價:{{product.origin_price | currency}}</span>網路價：<span class="price">{{product.price | currency}}</span></p>
          <select class="form-control mb-4" v-model="product.num">
            <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
          </select>
          <button class="btn btn-primary btn-block mb-4" @click="addToCart(product.id, product.num)">加入購物車<i class="fas fa-spinner fa-spin ml-2" v-if="status.addToCartIcon"></i></button>
        </div>
        <div class="col-md-8">
          <img :src="`${product.imageUrl}`" :alt="`${product.title}`" class="img img-fluid mb-4">
          <div class="jumbotron">
            {{product.discription}}
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- cart Icon -->
    <Cart :cart="carts" @emitDelete="deleteItem"></Cart>
    <!---->
  </div>
</template>

<script>
import Alert from '../../components/AlertMessage'
import Header from '../../components/Header'
import Cart from '../../components/Cart'

export default {
  name: 'product',
  data () {
    return {
      pageName: '系列產品',
      product: {},
      carts: [],
      isLoading: false,
      status: {
        addToCartIcon: false
      }
    }
  },
  components: {
    Header,
    Cart,
    Alert
  },
  methods: {
    getProduct () {
      const vm = this
      const productID = vm.$route.params.id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${productID}`
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        console.log(response.data.product)
        vm.isLoading = false
        vm.product = response.data.product
        // 數量預設值為1
        vm.product.num = 1
      })
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        console.log(response.data.data.carts)
        vm.carts = response.data.data.carts
      })
    },
    addToCart (id, qty = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty: qty
      }
      vm.status.addToCartIcon = true
      vm.$http.post(api, { data: cart }).then(response => {
        console.log(response)
        if (response.data.success) {
          console.log(response)
          vm.getCart()
          vm.status.addToCartIcon = false
          // vm.isLoading = false
          vm.$bus.$emit('message:push', response.data.message, 'primary')
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
        }
      })
    },
    deleteItem (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.isLoading = true
      vm.axios.delete(api).then((response) => {
        if (response.data.success) {
          vm.getCart()
          vm.isLoading = false
          vm.$bus.$emit('message:push', response.data.message, 'orange')
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
        }
      })
    }
  },
  created () {
    this.getProduct()
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/all.scss";

.container {
  padding-top: 8vh;
}
.breadcrumb-link:focus,
.breadcrumb-link:hover,
.breadcrumb-link:active{
  text-decoration: none;
}
.jumbotron {
  background-color: rgba(98, 171, 240, 0.288);
}
.mainContent{
  height: 100vh;
}
.productTitle{
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
}
.productPrice{
  font-size: 16px;
  line-height: 16px;
  .price{
    font-size: 20px;
    font-weight: bold;
  }
  .origin_price{
    text-decoration: line-through;
    color: #cccccc;
  }
}
</style>
