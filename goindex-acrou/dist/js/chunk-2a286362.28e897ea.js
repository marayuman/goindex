(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a286362"],{"2db9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"breadcrumb level g2-breadcrumb is-hidden-mobile is-hidden-touch",attrs:{"aria-label":"breadcrumbs"}},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",[n("li",[n("a",{directives:[{name:"show",rawName:"v-show",value:t.navs&&t.navs.length>0,expression:"navs && navs.length > 0"}],on:{click:function(e){return t.go("/"+t.index+":/")}}},[t._v(t._s(t.$t("index")))])]),t._l(t.navs,(function(e,a){return n("li",{key:a,class:a+1==t.navs.length?"is-active":""},[a+1==t.navs.length?n("a",{attrs:{"aria-current":"page",href:"#"}},[t._v(t._s(e.title))]):n("a",{on:{click:function(n){return t.go(e.path)}}},[t._v(t._s(e.title))])])}))],2)])]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("view-mode")],1)])])])},r=[],i=(n("ac1f"),n("466d"),n("1276"),n("498a"),n("f3f7")),s=n("45d8"),c={props:["name"],components:{ViewMode:i["a"]},data:function(){return{navs:[],index:"/"}},mounted:function(){this.render()},watch:{$route:"render"},methods:{go:function(t){this.$router.push({path:t})},render:function(){this.index=this.$route.params.id;var t=this.$route.params.cmd;if("search"!==t){var e=this.$route.path;t&&(e=Object(s["d"])(this.$route.params.path));var n=e.trim("/").split("/"),a="/";if(n.length>0){var r=[];for(var i in n){var c=n[i];""!=c&&(c=decodeURIComponent(c),a+=n[i]+"/",c.match("[0-9]+:")||r.push({path:a,title:c}))}this.navs=r}}else this.navs=[]}}},o=c,u=(n("c9d4"),n("2877")),l=Object(u["a"])(o,a,r,!1,null,"3b7c6fae",null);e["default"]=l.exports},"498a":function(t,e,n){"use strict";var a=n("23e7"),r=n("58a8").trim,i=n("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},a844:function(t,e,n){},c8d2:function(t,e,n){var a=n("d039"),r=n("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!r[t]()||i[t]()!=i||r[t].name!==t}))}},c9d4:function(t,e,n){"use strict";var a=n("a844"),r=n.n(a);r.a}}]);