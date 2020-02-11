<template>
  <div class="footerContent">
    <footer class="footer">
      <!-- <img src="../assets/images/MYSWEETLOVER.svg" class="footer_logo mb-3" alt=""> -->
      <ul class="footer_mediaIcon d-flex flex-row justify-content-center mb-3">
        <li class="icon">
          <i class="fab fa-facebook-f"></i>
        </li>
        <li class="icon">
          <i class="fab fa-twitter"></i>
        </li>
        <li class="icon">
          <i class="far fa-envelope-open"></i>
        </li>
        <li class="icon">
          <i class="fab fa-facebook-messenger"></i>
        </li>
        <li class="icon">
          <i class="fab fa-instagram"></i>
        </li>
      </ul>
      <p class="m-0 footer_text">
        | &copy; 2019 All rights reserved | 以上僅學習參考用，無任何商業用途
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

*{
  position: relative;
}

.footerContent{
  width: 100%;
  position: relative;
  left: 0;
  bottom: 0;
  .footer{
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: $primary;
    &_logo{
      margin: 0 auto;
      width: 80px;
      height: 80px;
      display: block;
    }
    &_mediaIcon{
      padding: 0;
      margin: 0;
      list-style: none;
      .icon{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid white;
        margin-right: 26px;
        &:last-child{
          margin-right: 0;
        }
        i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
    &_text{
      font-size: 12px;
      line-height: 12px;
      color: white;
      text-align: center;
    }
  }
}
</style>
