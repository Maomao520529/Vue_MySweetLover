<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <div class="container mt-4">
      <!-- Start Carousel -->
      <header>
        <div id="mycarousel" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <span data-target="#mycarousel" data-slide-to="0" ><i class="fab fa-gratipay"></i></span>
                <span data-target="#mycarousel" data-slide-to="1"><i class="fab fa-gratipay"></i></span>
                <span data-target="#mycarousel" data-slide-to="2"><i class="fab fa-gratipay"></i></span>
            </ol>
            <div class="carousel-inner bg-cover">
                <div class="carousel-item active">
                   <img class="d-block w-100" src="../../assets/images/banner01.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../../assets/images/banner03.png" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../../assets/images/banner02.png" alt="Second slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev" aria-hidden="true"><i class="fas fa-arrow-alt-circle-left fa-2x"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                <span class="carousel-control-next" aria-hidden="true"><i class="fas fa-arrow-alt-circle-right fa-2x"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </header>
      <!-- End Carousel -->
      <!-- Start News -->
      <section class="section news">
        <h3 class="sectionTitle mb-4 text-center">News</h3>
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="../../assets/images/Love.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title text-danger">情人節活動優惠</h5>
                  <p class="card-text text-danger">請密切注意情人節活動，近期會宣布。</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="../../assets/images/choco.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title text-danger">優惠券</h5>
                  <p class="card-text text-danger">限期 1 個月 ，請輸入 「<span class=text-primary>LOVE</span>」，即可享有優惠。</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- <div class="col-md-4">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">活動消息3</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>
          </div> -->
        </div>
      </section>
      <!-- End News -->
      <!-- Start Vedio -->
      <section class="section vedio">
        <h3 class="sectionTitle mb-4 text-center">巧克力の故事</h3>
        <div class="row">
          <div class="col-md-12 mb-4 mb-md-0 text-center">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ibjUpk9Iagk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <!-- End Vedio -->
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
  name: 'product',
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
  padding-top: 9vh;
}
.section{
  padding-top: 80px;
  @include screen($mobile){
    padding-top: 40px;
  }
  .sectionTitle{
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
    letter-spacing: 1px;
    @include screen($mobile){
        font-size: 24px;
        line-height: 24px;
    }
  }
}

// .fa-gratipay {
//   color: rgb(248, 153, 248);
// }
// 輪播客製化
.carousel-indicators .active {
  background-color: transparent;
}

.carousel-indicators span {
  color: rgba(243, 162, 232, 0.466);
  padding-left: 0.8rem;
}

.carousel-indicators span:hover {
  color: rgb(243, 162, 232);
  padding-left: 0.8rem;
}

.carousel-control-prev span {
  color: rgba(243, 162, 232, 0.247);
  padding-left: 2rem;
}

.carousel-control-prev span:hover {
  color: rgb(243, 162, 232);
  padding-left: 2rem;
}

.carousel-control-next span {
  color: rgba(243, 162, 232, 0.247);
  padding-right: 2rem;
}

.carousel-control-next span:hover {
  color: rgb(243, 162, 232);
  padding-right: 2rem;
}
.newsLink:hover{
  text-decoration: none !important;
}

.charactersLink{
  display: block;
  width: 100%;
  height: 100%;
  transition: all .5s;
  .charactersBtn{
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  &:hover{
    text-decoration: none !important;
    .charactersBtn{
      display: block;
      z-index: 15;
    }
    &::before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(245, 184, 87, 0.47);
      z-index: 10;
    }
  }
}
</style>
