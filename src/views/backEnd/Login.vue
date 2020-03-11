<template>
  <div class="main-bg">
    <loading :active.sync="isLoading">
      <img src="../../assets/images/load.gif" alt="loading">
    </loading>
     <h1>Account Login Form</h1>
    <div class="sub-main-w3">
      <div class="bg-content-w3pvt">
        <div class="top-content-style">
          <img src="../../assets/images/flower.png" width="100" alt="maologo" />
        </div>
        <form action="#" method="post" @submit.prevent="signin">
          <!-- @submit.prevent 預設行為先移除-->
          <p class="legend">
            Login Here
            <span class="far fa-hand-point-down"></span>
          </p>
          <div class="input">
            <input type="email" placeholder="Email" name="email" v-model="user.username" required />
            <span class="fa fa-envelope"></span>
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              v-model="user.password"
              required
            />
            <span class="fa fa-unlock"></span>
          </div>
          <button type="submit" class="btn submit btn-aurora" @submit.prevent="signin">
            <span class="fa fa-sign-in-alt"></span>
          </button>
        </form>
        <a href="#" class="bottom-text-w3ls">Forgot Password?</a>
      </div>
    </div>
    <!-- //content -->
     <div class="copyright text-center">
      <p> | &copy; 2019 All rights reserved | </p>
      <p>以上僅學習參考用，無任何商業用途</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signin () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      vm.isLoading = true
      vm.$http.post(api, vm.user).then(response => {
        console.log(response.data)
        vm.isLoading = false
        if (response.data.success) {
          vm.$router.push('/admin/productsList')
        }
      })
    }
  }
}
</script>
