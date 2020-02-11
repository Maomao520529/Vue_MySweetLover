<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>後台管理</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="productsList" class="nav-link">
              <i class="fas fa-box-open mr-2"></i>產品總覽
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="orderList" class="nav-link">
              <i class="fas fa-list mr-2"></i>訂購清單
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="coupons" class="nav-link">
              <i class="fas fa-ticket-alt mr-2"></i>優惠券列表
            </router-link>
          </li>
        </ul>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>前台購物</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/" target="_blank" class="nav-link">
              <i class="fas fa-home mr-2"></i>MY SWEET LOVER
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
