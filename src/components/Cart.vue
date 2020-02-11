<template>
  <div>
    <div class="cartInfo">
      <div class="cartIcon" data-toggle="collapse" data-target="#cartCollapse">
        <img src="../assets/images/shop.png" alt="">
        <div class="dot" v-if="cart.length !== 0"></div>
      </div>
      <div class="collapse cartCollapse" id="cartCollapse">
        <div class="card card-body p-3">
          <div class="overflowCtr">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col" width="25%" class="text-center">刪除</th>
                  <th scope="col" width="50%" class="text-left">品名</th>
                  <th scope="col" width="25%" class="text-left">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <th scope="row" class="px-0 text-center"><button class="btn btn-sm btn-outline-danger" @click="deleteItem(item.id)"><i class="far fa-trash-alt"></i></button></th>
                  <td>{{item.product.title}}</td>
                  <td>{{item.product.price * item.qty | currency}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-orange btn-block" :disabled="cart.length === 0" @click="getCart">結帳去</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: ['cart'],
  data () {
    return {}
  },
  methods: {
    deleteItem (id) {
      this.$emit('emitDelete', id)
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        vm.$router.push(`/checkout`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

$mobile: '568px';
$pad-m: '768px';
$pad-l: '960px';

@mixin screen($size){
  @media(max-width: $size){
    @content
  }
}

.cartInfo{
  position: fixed;
  right: 5%;
  bottom: 15%;
  z-index: 9999;
  cursor: pointer;
  @include screen($mobile){
    right: 3%;
    bottom: 2%
  }
  .cartCollapse{
    position: absolute;
    bottom: 60px;
    right: 0;
    width: 300px;
  }
  .overflowCtr{
    display: block;
    max-height: 190px;
    overflow: hidden;
    overflow-y: scroll;
  }
}
</style>
