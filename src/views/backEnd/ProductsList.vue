<template>
  <div class="products">
    <loading :active.sync="isLoading">
      <img src="../../assets/images/load.gif" alt="loading">
      <!-- <Circle4></Circle4> -->
    </loading>

    <div class="text-right mb-4">
      <button class="btn btn-outline-primary" @click.prevent="openProductModal(true)">
        <i class="fas fa-plus mr-2"></i>新增產品
      </button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="text-left" width="120">分類</th>
          <th class="text-left">產品名稱</th>
          <th class="text-center" width="100">原價</th>
          <th class="text-center" width="100">網路價</th>
          <th class="text-center" width="100">是否販售</th>
          <th class="text-center" width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="text-left">{{ item.category }}</td>
          <td class="text-left">{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click.prevent="openProductModal(false, item)"
              >
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-orange"
                @click.prevent="delModal(item)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Start Pagination -->
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>
    </div>
    <!-- End Pagination -->

    <!-- Start ProductModal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title editModalTitle" id="productModalLabel">
              <span>編輯產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="far fa-times-circle text-white" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt
                  :src="tempProduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.discription"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary addProduct" @click="updateProduct">更新確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End ProductModal -->

    <!-- Start DelModal -->
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-orange text-white">
            <h5 class="modal-title delModalTitle" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="far fa-times-circle text-white" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-orange">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-orange" @click.prevent="delProduct"><i class="fas fa-spinner fa-spin mr-2" v-if="status.loadingItem === tempProduct.id"></i>確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End DelModal -->
  </div>
</template>
<script>
import Pagination from '../../components/Pagination'
import $ from 'jquery'

export default {
  name: 'products',
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
        loadingItem: ''
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        console.log(response)
        vm.isLoading = false
        vm.products = response.data.products
        vm.pagination = response.data.pagination
      })
    },
    openProductModal (isNew, item) {
      const vm = this
      if (isNew) {
        vm.isNew = true
        vm.tempProduct = {}
        $('.editModalTitle').text('新增產品')
        $('.addProduct').text('確認新增產品')
      } else {
        vm.isNew = false
        vm.tempProduct = Object.assign({}, item)
        $('.editModalTitle').text(`編輯產品: ${vm.tempProduct.title}`)
        $('.addProduct').text('更新產品')
      }
      $('#productModal').modal('show')
    },
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          vm.getProducts()
        } else {
          $('#productModal').modal('hide')
          console.log('新增失敗')
        }
      })
    },
    uploadFile () {
      const vm = this
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      // 使用 FormData 來傳送資料到後端
      formData.append('file-to-upload', uploadedFile)
      vm.status.fileUploading = true
      vm.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        if (response.data.success) {
          vm.status.fileUploading = false
          // 透過 $set(寫入的目標, key值, 寫入的資料) 指令，將欄位名稱強制寫入
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
        } else {
          // 透過 $bus.$emit() 指令，跳出提示視窗
          vm.$bus.$emit('message:push', response.data.message, 'danger')
        }
      })
    },
    delModal (item) {
      const vm = this
      vm.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    delProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      vm.status.loadingItem = vm.tempProduct.id
      vm.$http.delete(api).then(response => {
        console.log(response)
        $('#delProductModal').modal('hide')
        vm.status.loadingItem = ''
        vm.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped>
textarea {
  resize : none;
}
</style>
