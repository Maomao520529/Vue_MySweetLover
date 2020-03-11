<template>
  <div class="dashboard">
    <Navbar/>
    <Alert/>
    <div class="container pt-3">
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/DashboardNav'
import Alert from '../../components/AlertMessage'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    Alert
  }
}
</script>
