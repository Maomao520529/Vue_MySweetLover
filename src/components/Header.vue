<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary  fixed-top">
      <div class="container">
        <router-link class="logo" :to="{name:'Index'}"></router-link>
          <h5 class="text-white mt-2 ml-2"> MY SWEET L <i class="fas fa-heart"></i> VER</h5>
        <button
          class="navbar-toggler border-white" id="menuIcon"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="text-white">Menu</span>
        </button>

        <div class="collapse mobileNav navbar-collapse" id="navbarSupportedContent">
          <div class="closeIcon" @click="closeNav">
            <i class="fas fa-times-circle text-white fa-3x"></i>
          </div>
          <ul class="navbar-nav mr-auto ml-3">
            <li class="nav-item active">
              <router-link class="item" :to="{name:'About'}">關於Chocolate</router-link>
            </li>
            <li class="nav-item">
              <router-link class="item" :to="{name:'News'}">NEWS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="item" :to="{name:'Products'}">創意巧克力</router-link>
            </li>
          </ul>
          <div class="d-flex flex-row justify-content-center">
            <router-link to="/login" target="_self" class="iconItem">
              <img src="../assets/images/login.png" alt=""><p class="iName d-black d-md-none text-center" @click="closeNav"></p>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {}
  },
  methods: {
    closeNav () {
      let mobileNav = document.querySelector('.mobileNav')
      mobileNav.classList.remove('show')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

.navbar {
  // padding-top: 15px;
  // padding-bottom: 10px;
  // border:2px solid red;
  .logo {
    background-image: url("../assets/images/MYSWEETLOVER.svg");
    background-repeat: no-repeat;
    width:50px;
    height: 50px;
    display: $black;
  }
  .navbar-nav {
    margin-left: 30px;
    .nav-item {
      margin-right: 20px;
      // &:last-child {
      //   margin-right: 0;
      // }
    }
    .item {
      font-size: 16px;
      line-height: 16px;
      color: #351e1e;
      font-weight: bold;
      &:hover,
      &:focus,
      &:active {
        text-decoration: none;
      }
    }
  }
}
.closeIcon{
  display: none
}
.iconItem i{
  font-size: 30px;
  line-height: 30px;
  // color: $primary;
}
@media screen and (max-width: 576px){
  .mobileNav{
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    &.show{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: $primary;
      height: 100vh;
      z-index: 99999;
      transition: all .3;
      // border: 2px solid red;
      .closeIcon{
        padding: 5px;
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 50px;
        top: 10px;
        // border: 2px solid red;
      }
      ul{
        margin: 0;
        margin-top: 70px;
        .nav-item{
          margin-right: 0;
          text-align: center;
          .item{
            font-size: 25px;
            font-weight: 550;
            line-height: 95px;
          }
        }
      }
    }
  }
}
</style>
