(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{279:function(t,n,i){},354:function(t,n,i){"use strict";var e=i(279);i.n(e).a},514:function(t,n,i){"use strict";i.r(n);i(61),i(29);var e={data:function(){return{current:1,list:[1,2,3,4,5,6,7,8,9,10]}},computed:{filteredList:function(){var t=this;return this.list.filter(function(n){return n%t.current==0})}},methods:{doAdd:function(){var t=Math.max.apply(null,this.list)+1,n=Math.floor(Math.random()*(this.list.length+1));this.list.splice(n,0,t)},doRemove:function(t){this.list.splice(this.list.indexOf(t),1)}}},s=(i(354),i(1)),o=Object(s.a)(e,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"example"},[i("p",[i("button",{on:{click:t.doAdd}},[t._v("추가")]),t._v(" "),i("button",{on:{click:function(n){t.current=1}}},[t._v("すべて")]),t._v(" "),t._l([3,5],function(n){return i("button",{key:n,on:{click:function(i){t.current=n}}},[t._v("\n      "+t._s(n)+"の倍数\n    ")])})],2),t._v(" "),i("transition-group",{staticClass:"list",attrs:{tag:"ul"}},t._l(t.filteredList,function(n,e){return i("li",{key:n,staticClass:"item",attrs:{"data-index":e},on:{click:function(i){t.doRemove(n)}}},[t._v(t._s(n))])}),0)],1)},[],!1,null,"a827eb14",null);o.options.__file="demo0.vue";n.default=o.exports}}]);