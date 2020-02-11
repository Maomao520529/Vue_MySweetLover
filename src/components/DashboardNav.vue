<template>
  <div>
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>

    <nav class="navbar navbar-expand-lg navbar-dark back-color">
      <span class="navbar-brand" href="#">後台管理</span>
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
            <router-link class="nav-link" to="/admin/listProducts">
              <span data-feather="users"></span>
              <i class="fas fa-box-open"></i> 產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">
              <span data-feather="layers"></span>
              <i class="fas fa-ticket-alt"></i> 優惠券
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">
              <span data-feather="report"></span>
              <i class="far fa-list-alt"></i> 訂單管理
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
import { Circle4 } from 'vue-loading-spinner'

export default {
  name: 'dashboardNav',
  components: {
    Circle4
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    signout () {
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
