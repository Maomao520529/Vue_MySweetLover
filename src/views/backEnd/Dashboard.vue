<template>
  <div class="dashboard">
    <Navbar/>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/DashboardNav'
import Sidebar from '../../components/DashboardSidebar'
import Alert from '../../components/AlertMessage'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
