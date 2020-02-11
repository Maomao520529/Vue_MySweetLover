<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <div class="container mt-5">
      <div class="pageFullBanner mb-3"></div>
      <section class="section">
        <!-- Start Breadcrumb -->
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb mb-3 p-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link :to="{name:'Index'}" class="breadcrumb-link">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">近期 News</li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="../../assets/images/choco.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">優惠券</h5>
                <p class="card-text">限期 1 個月 ，請輸入 「<span class=text-primary>LOVE</span>」，即可享有優惠。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="../../assets/images/Love.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">情人節活動優惠</h5>
                <p class="card-text">請密切注意情人節活動，近期會宣布。</p>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息3</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>
    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
  </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default {
  name: 'news',
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/all.scss";

.container {
  padding-top: 4vh;
}

.pageFullBanner{
  background-image: url('../../assets/images/monique.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/monique.jpg');
  }
  background-repeat: no-repeat;
  background-size: cover;
}

.breadcrumb-link:focus,
.breadcrumb-link:hover,
.breadcrumb-link:active{
  text-decoration: none;
}
</style>
