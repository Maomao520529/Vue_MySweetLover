<template>
  <div class="products">
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>

    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th class="text-left" width="150">購買時間</th>
          <th class="text-left">Email</th>
          <th class="text-left">購買款項</th>
          <th class="text-center" width="100">應付金額</th>
          <th class="text-center" width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders"
            :key="item.id"
            :class="{'text-secondary': !item.is_paid}"
        >
          <td class="text-left">{{item.create_at | date }}</td>
          <td class="text-left">{{item.user.email}}</td>
          <td class="text-left">
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">{{ product.product.title }} 數量：{{product.qty}}/{{ product.product.unit }}</li>
            </ul>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td class="text-center">
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未起用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Start Pagination -->
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
    </div>
    <!-- End Pagination -->
  </div>
</template>
<script>
import { Circle4 } from 'vue-loading-spinner'
import Pagination from '../../components/Pagination'

export default {
  name: 'orderList',
  components: {
    Pagination,
    Circle4
  },
  data () {
    return {
      orders: [],
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        console.log(response)
        vm.isLoading = false
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
