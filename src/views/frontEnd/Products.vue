<template>
  <div class="mainContent">
    <Alert/>
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <!-- Start Content -->
    <div class="container mt-4">
      <div class="pageFullBanner mb-3"></div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-3 p-0 bg-transparent">
          <li class="breadcrumb-item">
            <router-link :to="{name:'Index'}" class="breadcrumb-link">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{breadcrumbName}}</li>
        </ol>
      </nav>
      <div class="row">
        <!-- Categories -->
        <div class="col-md-2 mb-4 mb-md-0 d-none d-md-block">
          <div class="row">
            <div class="col">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item categoryItem" :class="{active:currentCategory === ''}" @click="currentCategory = ''" >全部</li>
                  <li class="list-group-item categoryItem" :class="{active:currentCategory === item}" v-for="item in categories" :key="item" @click="currentCategory = item">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 mb-4 mb-md-0 d-block d-md-none">
          <div class="row">
            <div class="col">
              <div class="form-group mb-0">
                <select class="form-control" id="selectMobile" v-model="currentCategory">
                  <option value="">全部</option>
                  <option v-for="item in categories" :key="item" :value="`${item}`">{{item}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <!-- Products Item + Pagination -->
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4 mb-4" v-for="item in filterData[currentPage]" :key="item.id">
              <div class="card productItem">
                <img class="card-img-top" :src="`${item.imageUrl}`" :alt="`${item.title}`">
                <div class="card-body productItem_body">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <!-- <h5 class="card-title m-0">{{ item.title | titleFilter}}</h5> -->
                    <span class="badge badge-pill badge-primary">{{item.category}}</span>
                  </div>
                  <p class="card-text">{{ item.discription }}</p>
                </div>
                <div class="card-footer productItem_footer d-flex justify-content-between">
                  <button type="button" class="btn btn-primary px-0" @click="getProduct(item.id)">查看更多</button>
                  <button type="button" class="btn btn-orange px-0" @click="addToCart(item.id, item.qty)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-4 justify-content-center" v-if="filterData.length >= 2">
            <nav aria-label="Page navigation example">
              <ul class="pagination m-0">
                <li class="page-item" :class="{'disabled':currentPage === 0}">
                  <a class="page-link" href="#" aria-label="Previous" @click.prevent="currentPage = currentPage - 1">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item" :class="{active:currentPage === page-1}" v-for="page in filterData.length" :key="page"><a class="page-link" href="#" @click.prevent="currentPage = page - 1">{{page}}</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="currentPage = currentPage + 1">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!---->
      </div>
      <!-- cart Icon -->
      <Cart :cart="carts" @emitDelete="deleteItem"></Cart>
      <!---->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
  </div>
</template>

<script>
import Alert from '../../components/AlertMessage'
import { Circle4 } from 'vue-loading-spinner'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'

export default {
  name: 'product',
  data () {
    return {
      breadcrumbName: '限量系列產品',
      products: [],
      categories: [],
      currentCategory: '',
      currentPage: 0,
      carts: [],
      isLoading: false
    }
  },
  components: {
    Circle4,
    Header,
    Footer,
    Cart,
    Alert
  },
  computed: {
    filterData () {
      const vm = this
      // step1. 先過濾出要的資料
      let items = []
      vm.currentPage = 0
      if (vm.currentCategory !== '') {
        items = vm.products.filter((item, i) => {
          console.log(item)
          return item.category === vm.currentCategory
        })
      } else {
        items = vm.products
      }
      // step2. 依照過濾出的資料做分頁
      // 分頁要點1: 總共有幾頁
      // 分頁要點2: 每頁的內容
      // 分頁要點3: 組成二維陣列 [[1...],[2...],[3...]]
      console.log(vm.currentCategory)
      const newProducts = []
      items.forEach((item, i) => {
        if (i % 9 === 0) {
          newProducts.push([])
        }
        const page = parseInt(i / 9)
        newProducts[page].push(item)
      })
      console.log('newProducts', newProducts)
      return newProducts
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.isLoading = true
      vm.axios.get(api).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
        vm.getCategory()
        vm.isLoading = false
      })
    },
    getCategory () {
      const vm = this
      // Set() 為 ES6 語法，同 const categories = []
      const categories = new Set()
      vm.products.forEach((item) => {
        // Set() 下以 add() 取代 push()
        categories.add(item.category)
      })
      // 將類陣列轉換為陣列在回存到 categories 內
      vm.categories = Array.from(categories)
    },
    getProduct (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      vm.isLoading = true
      vm.axios.get(api).then((response) => {
        const pageID = response.data.product.id
        console.log('pageID', pageID)
        vm.$router.push(`/product/${pageID}`)
        vm.isLoading = false
      })
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.axios.get(api).then((response) => {
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
      vm.isLoading = true
      vm.$http.post(api, { data: cart }).then(response => {
        if (response.data.success) {
          console.log(response)
          vm.getCart()
          vm.isLoading = false
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
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/all.scss";

.container {
  padding-top: 7vh;
}

.pageFullBanner{
  background-image: url('../../assets/images/brigitte.png');
  @include screen($mobile){
    background-image: url('../../assets/images/brigitte.png');
  }
}
.mainContent{
  height: 100vh;
}
.carousel-indicators{
  li{
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
}
.breadcrumb-link:focus,
.breadcrumb-link:hover,
.breadcrumb-link:active{
  text-decoration: none;
}
.card{
  .categoryItem{
    cursor: pointer;
  }
  .productItem_body{
    padding-bottom: 16px;
    .badge{
      font-size: 12px;
      line-height: 12px;
      width: 60px;
      text-align: center;
    }
    .card-title{
      font-size: 24px;
      line-height: 24px;
      color: $black;
    }
    .card-text{
      font-size: 12px;
      line-height: 18px;
      color: $black
    }
  }
  .productItem_footer{
    padding: 0 20px 20px 20px;
    border: none;
    background-color: transparent;
    .btn{
      padding-top: calc((45px - 16px) / 2);
      padding-bottom: calc((45px - 16px) / 2);
      border-radius: 0;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      width: 50%;
    }
  }
}
</style>
