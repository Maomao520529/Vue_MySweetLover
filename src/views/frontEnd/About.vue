<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <div class="container">
          <!-- Start Breadcrumb -->
        <nav aria-label="breadcrumb abc">
          <ol class="breadcrumb mb-3 p-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link :to="{name:'Index'}" class="breadcrumb-link">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">關於Chocolate</li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
      <div class="pageFullBanner mb-5"></div>
      <h1 class="text-center text-danger mb-5">關於Chocolate</h1>
      <section class="section">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <img src="../../assets/images/chocolate.jpg" class="img img-fluid aboutImg mb-4" alt="Winnie the pooh">
            <p class="aboutText mb-4">可可樹為熱帶雨林植物，但要栽培它可是十分不容易的呢!!</p>
            <ul>
              <li>
                溫度最好保持恆溫25<sup>o</sup>C，不能低於10<sup>o</sup>C
              </li>
              <li>
                年降雨量1200~2500mm
              </li>
              <li>
                保持25% ~ 50%的陽光照射
              </li>
              <li>
                海拔1200公尺以下
              </li>
              <li>
                土壤終年保持溼度，且須含豐富礦物質
              </li>
            </ul>
            <p class="aboutText mb-4">可可果內含25~45顆可可豆，被白色果肉包裹著，果肉吃起來酸酸甜甜，聽說和山竹很像；具經濟價值的可可豆是苦澀的。</p>
            <p class="aboutText mb-4">最早，馬雅人都只吃果肉而把苦澀的可可豆丟掉。</p>
            <p class="aboutText mb-4">有一天，馬雅人吃完後，將可可豆丟到火堆中，接著聞到非常香的味道，於是撿起來竟發現超好吃，就這樣開啟巧克力之路。</p>
            <h5><strong>全世界栽培品種分為三種：</strong></h5>
            <ul>
              <li> <h6><strong>Criollo</strong></h6>
                <ul>
                  <li>約佔世界總產量5%。</li>
                  <li>分布於中南美洲，原產於委內瑞拉。</li>
                  <li>品質最佳；獨特的香氣。</li>
                  <li>栽種不易，珍貴稀少。</li>
                </ul>
              </li>
               <li> <h6><strong>Forastero</strong></h6>
                <ul>
                  <li>約佔世界產量80%。</li>
                  <li>主要分布於南美與西非。</li>
                  <li>口味淡，有明顯花香、果香的風味。</li>
                  <li>生長力強，具商業價值。</li>
                </ul>
              </li>
               <li> <h6><strong>Trinitario</strong></h6>
                <ul>
                  <li>約佔世界總產量15%。</li>
                  <li>原產地在加勒比海的特立尼達島。</li>
                  <li>風味濃郁、易栽種。</li>
                  <li>為<strong>Criollo</strong>與<strong>Forastero</strong>混合的新品種。</li>
                </ul>
              </li>
            </ul>

            <span><i class="fas fa-star star"></i> 可可豆的氣味與口感要看種植地的氣候，且會因地理條件的差異而有所不同。</span>
            <ul>
              <li>雨水多日照少，土壤養分豐厚–可可氣味溫和，花果香與微微果酸<strong>(亞馬遜森林)</strong>。</li>
              <li>日照強烈，土壤水分不易保持–可可濃厚香氣，口感厚實<strong>(西非沿海)</strong>。</li>
            </ul>
          </div>
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
  name: 'about',
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
  color: $red;
  padding-top: 9vh;
}

.breadcrumb-link:focus,
.breadcrumb-link:hover,
.breadcrumb-link:active{
  text-decoration: none;
}

.pageFullBanner{
  background-image: url('../../assets/images/cocoa-tree.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/cocoa-tree.jpg');
  }
}
.aboutText{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 27px;
}

.star{
    color:red;
    font-size: 0.9rem;
  }
</style>
