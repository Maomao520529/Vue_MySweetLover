(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585cf2b8"],{1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre},on:{click:function(a){return t.updatePage(t.pages.current_page-1)}}},[t._m(0)]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next},on:{click:function(a){return t.updatePage(t.pages.current_page+1)}}},[t._m(1)])],2)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],n={name:"Pagination",props:["pages"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("emitPages",t)}}},i=n,l=e("2877"),A=Object(l["a"])(i,o,s,!1,null,null,null);a["a"]=A.exports},"87ae":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"products"},[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[o("img",{attrs:{src:e("ed22"),alt:"loading"}})]),o("div",{staticClass:"text-right mb-4"},[o("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return a.preventDefault(),t.openCouponModal(!0)}}},[o("i",{staticClass:"fas fa-plus mr-2"}),t._v("新增優惠券 ")])]),o("table",{staticClass:"table table-hover"},[t._m(0),o("tbody",t._l(t.coupons,(function(a){return o("tr",{key:a.id},[o("td",{staticClass:"text-left"},[t._v(t._s(a.title))]),o("td",{staticClass:"text-left"},[t._v(t._s(a.code))]),o("td",{staticClass:"text-center"},[t._v(t._s(a.percent)+"%")]),o("td",{staticClass:"text-center"},[t._v(t._s(t._f("date")(a.due_date)))]),o("td",{staticClass:"text-center"},[a.is_enabled?o("span",{staticClass:"text-success"},[t._v("啟用")]):o("span",[t._v("未啟用")])]),o("td",{staticClass:"text-center"},[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.openCouponModal(!1,a)}}},[o("i",{staticClass:"fas fa-pencil-alt"})]),o("button",{staticClass:"btn btn-outline-orange",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.openDelModal(a)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])])])})),0)]),t.pagination.length?o("div",{staticClass:"d-flex justify-content-center"},[o("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getCoupons}})],1):t._e(),o("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(1),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("標題")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon_code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"due_date"}},[t._v("到期日")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.due_date},on:{input:function(a){a.target.composing||(t.due_date=a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(a){var e=t.tempCoupon.is_enabled,o=a.target,s=o.checked?1:0;if(Array.isArray(e)){var n=null,i=t._i(e,n);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",e.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),o("button",{staticClass:"btn btn-primary addCoupon",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("更新優惠券")])])])])]),o("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(2),o("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),o("strong",{staticClass:"text-orange"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),o("button",{staticClass:"btn btn-orange",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delCoupon(a)}}},[t.status.loadingItem===t.tempCoupon.id?o("i",{staticClass:"fas fa-spinner fa-spin mr-2"}):t._e(),t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("名稱")]),e("th",{staticClass:"text-left"},[t._v("優待碼")]),e("th",{staticClass:"text-center"},[t._v("折扣百分比")]),e("th",{staticClass:"text-center"},[t._v("到期日")]),e("th",{staticClass:"text-center"},[t._v("是否啟用")]),e("th",{staticClass:"text-center"},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-primary text-white"},[e("h5",{staticClass:"modal-title couponTitle",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("編輯優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-orange text-white"},[e("h5",{staticClass:"modal-title delModalTitle",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=e("1799"),i=e("1157"),l=e.n(i),A={name:"coupons",components:{Pagination:n["a"]},data:function(){return{coupons:[],pagination:{},tempCoupon:{title:"",is_enabled:0,percent:100,due_date:0,code:""},isNew:!1,due_date:new Date,isLoading:!1,status:{loadingItem:""}}},watch:{due_date:function(){var t=this,a=Math.floor(new Date(t.due_date)/1e3);t.tempCoupon.due_date=a}},methods:{getCoupons:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("auroratour","/admin/coupons");t.isLoading=!0,t.$http.get(a).then((function(a){t.isLoading=!1,t.coupons=a.data.coupons}))},openCouponModal:function(t,a){var e=this;t?(e.isNew=!0,e.tempCoupon={},l()(".couponTitle").text("新增優惠券"),l()(".addCoupon").text("確認新增優惠券")):(e.isNew=!1,e.tempCoupon=Object.assign({},a),l()(".couponTitle").text("編輯優惠券"),l()(".addCoupon").text("更新優惠券")),l()("#couponModal").modal("show")},updateCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("auroratour","/admin/coupon"),e="post";t.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("auroratour","/admin/coupon/").concat(t.tempCoupon.id),e="put"),t.isLoading=!0,t.$http[e](a,{data:t.tempCoupon}).then((function(a){t.isLoading=!1,l()("#couponModal").modal("hide"),t.getCoupons()}))},openDelModal:function(t){var a=this;a.tempCoupon=Object.assign({},t),l()(".delModalTitle").text("刪除優惠券：".concat(a.tempCoupon.title)),l()("#delCouponModal").modal("show")},delCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("auroratour","/admin/coupon/").concat(t.tempCoupon.id);t.status.loadingItem=t.tempCoupon.id,t.$http.delete(a).then((function(a){t.status.loadingItem="",l()("#delCouponModal").modal("hide"),t.getCoupons()}))}},created:function(){this.getCoupons()}},c=A,r=e("2877"),p=Object(r["a"])(c,o,s,!1,null,null,null);a["default"]=p.exports},ed22:function(t,a){t.exports="data:image/gif;base64,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"}}]);
//# sourceMappingURL=chunk-585cf2b8.6b6c6a00.js.map