<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{'disabled': !pages.has_pre}"
          @click="updatePage(pages.current_page - 1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pages.total_pages"
          :key="page"
          :class="{'active': page === pages.current_page}"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{'disabled': !pages.has_next}"
          @click="updatePage(pages.current_page + 1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['pages'],
  data () {
    return {}
  },
  methods: {
    updatePage (page) {
      this.$emit('emitPages', page)
    }
  }
}
</script>

<!--觀念澄清
父子元素互動使用 props/emit
props 為子元素接收父元素指令(外→內)；emit 為子元素回傳給父元素指令(內→外)
-->

<!--
  step1. 父元件動態綁定 pages(:pages)，將 pagination 資料往子元件傳送
  step2. 子元件使用 props['pages'] 接收由父元件傳來的 pagination 資料
  ** 此時 pagination.XXX 將寫成 pages.XXX **
  step3. 在子元件中觸發 updatePage() 事件並將參數攜帶著往父元素移動
  step4. updatePage() 使用 $emit 往父元件找尋 emitPages 事件
  step5. 父元件下觸發 @emitPages="getProducts"，並將 updatePages 所帶參數帶入事件中
-->
