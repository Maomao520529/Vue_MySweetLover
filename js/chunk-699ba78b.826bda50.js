(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-699ba78b"],{"1c1b":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("Circle4")],1),a("Header"),a("div",{staticClass:"container mt-4"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("form",[a("table",{staticClass:"table mb-5"},[t._m(1),a("tbody",[t._l(t.order.products,(function(s){return a("tr",{key:s.id},[a("td",{staticClass:"text-left"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"text-center"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])})),a("tr",[a("td",{staticClass:"text-right checkoutFinalTotal",attrs:{colspan:"2"}},[t._v("總計")]),a("td",{staticClass:"text-right checkoutFinalTotal"},[t._v(t._s(t._f("currency")(t.order.total)))])])],2)]),a("table",{staticClass:"table mb-5"},[t._m(2),a("tr",[a("td",{attrs:{width:"20%"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("td",{attrs:{width:"20%"}},[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("td",{attrs:{width:"20%"}},[t._v("電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("td",{attrs:{width:"20%"}},[t._v("地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("td",{attrs:{width:"20%"}},[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])]),a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-secondary mb-4 mr-4",attrs:{to:"/"}},[t._v("回首頁")]),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/products"}},[t._v("繼續購物")])],1)])])])]),a("Footer")],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-10 offset-md-1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[a("div",{staticClass:"step"},[t._v("資料填寫")])]),a("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[a("div",{staticClass:"step"},[t._v("確認訂單")])]),a("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[a("div",{staticClass:"step active"},[t._v("完成")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("td",{staticClass:"text-left"},[t._v("品名")]),a("td",{staticClass:"text-center",attrs:{width:"20%"}},[t._v("數量")]),a("td",{staticClass:"text-center",attrs:{width:"30%"}},[t._v("單價")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"text-center border-0 memberTitle",attrs:{colspan:"2"}},[t._v("會員資料核對")])])}],i=a("d58b"),d=a("0418"),c=a("fd2d"),o={name:"customerCheckuot",data:function(){return{isLoading:!1,order:{user:{}},orderId:""}},components:{Circle4:i["a"],Header:d["a"],Footer:c["a"]},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("auroratour","/order/").concat(t.orderId);t.isLoading=!0,t.$http.get(s).then((function(s){t.order=s.data.order,t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},n=o,l=(a("64888"),a("2877")),u=Object(l["a"])(n,e,r,!1,null,"34b73b4c",null);s["default"]=u.exports},64888:function(t,s,a){"use strict";var e=a("8e06"),r=a.n(e);r.a},"8e06":function(t,s,a){}}]);
//# sourceMappingURL=chunk-699ba78b.826bda50.js.map