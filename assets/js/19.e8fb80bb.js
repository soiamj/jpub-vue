(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{281:function(t,n,e){},356:function(t,n,e){"use strict";var i=e(281);e.n(i).a},518:function(t,n,e){"use strict";e.r(n);e(61),e(29);var i={data:function(){return{addEnter:!1,current:1,list:[1,2,3,4,5,6,7,8,9,10]}},computed:{filteredList:function(){var t=this;return this.list.filter(function(n){return n%t.current==0})}},methods:{doAdd:function(){this.addEnter=!0;var t=Math.max.apply(null,this.list)+1,n=Math.floor(Math.random()*(this.list.length+1));this.list.splice(n,0,t)},doRemove:function(t){this.list.splice(this.list.indexOf(t),1)},beforeEnter:function(t){var n=this;this.$nextTick(function(){n.addEnter?n.addEnter=!1:t.style.transitionDelay=100*parseInt(t.dataset.index,10)+"ms"})},afterEnter:function(t){t.style.transitionDelay=""}}},r=(e(356),e(1)),s=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"example"},[e("p",[e("button",{on:{click:t.doAdd}},[t._v("추가")]),t._v(" "),e("button",{on:{click:function(n){t.current=1}}},[t._v("すべて")]),t._v(" "),t._l([3,5],function(n){return e("button",{key:n,on:{click:function(e){t.current=n}}},[t._v("\n      "+t._s(n)+"の倍数\n    ")])})],2),t._v(" "),e("transition-group",{staticClass:"list",attrs:{tag:"ul"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,"enter-cancelled":t.afterEnter}},t._l(t.filteredList,function(n,i){return e("li",{key:n,staticClass:"item",attrs:{"data-index":i},on:{click:function(e){t.doRemove(n)}}},[t._v(t._s(n))])}),0)],1)},[],!1,null,"ecf950c2",null);s.options.__file="demo2.vue";n.default=s.exports}}]);