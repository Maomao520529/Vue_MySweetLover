<template>
  <div>
    <loading :active.sync="isLoading">
       <img src="../assets/images/load.gif" alt="loading">
      <!-- <Circle4></Circle4> -->
    </loading>

    <nav class="navbar navbar-expand-lg navbar-dark back-color">
      <h3 class="navbar" href="#">後台管理</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'ProductsList'}">
              <span data-feather="users"></span>
              <i class="fas fa-box-open"></i> 產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Coupons'}">
              <span data-feather="layers"></span>
              <i class="fas fa-ticket-alt"></i> 優惠券
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'OrderList'}">
              <span data-feather="report"></span>
              <i class="far fa-list-alt"></i> 訂單管理
            </router-link>
          </li>
          <!-- <span class="m-2">前台購物</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a> -->
          <li class="nav-item">
            <router-link to="/" target="_blank" class="nav-link">
              <i class="fas fa-home mr-2"></i>MY SWEET L <i class="fas fa-heart"></i> VER
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav flex-row ml-md-auto d-md-flex">
          <li class="nav-item text-nowrap">
            <a class="nav-link mr-5" href="#" @click.prevent="signOut">
              <span>
                <i class="fas fa-sign-out-alt"></i>
                登出
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// import { Circle4 } from 'vue-loading-spinner'

export default {
  name: 'dashboardNav',
  components: {
    // Circle4
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    signOut () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      vm.isLoading = true
      vm.$http.post(api).then(response => {
        console.log(response.data)
        vm.isLoading = false
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>
