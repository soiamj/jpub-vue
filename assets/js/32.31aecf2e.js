(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{300:function(n,t,i){},385:function(n,t,i){"use strict";var e=i(300);i.n(e).a},502:function(n,t,i){"use strict";i.r(t);var e={data:function(){return{list:[{id:1,name:"슬라임",hp:100},{id:2,name:"고블린",hp:200},{id:3,name:"드래곤",hp:500}]}},methods:{doAttack:function(n){this.list[n].hp-=10}}},s=(i(385),i(1)),o=Object(s.a)(e,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ul",n._l(n.list,function(t,e){return t.hp?i("li",{key:t.id},[n._v("\n    ID."+n._s(t.id)+" "+n._s(t.name)+" HP."+n._s(t.hp)+"\n    "),t.hp<50?i("span",{staticClass:"hinsi"},[n._v("빈사 상태! ")]):n._e(),n._v(" "),i("button",{on:{click:function(t){n.doAttack(e)}}},[n._v("공격하기")])]):n._e()}),0)},[],!1,null,"57e58fef",null);o.options.__file="demo07.vue";t.default=o.exports}}]);