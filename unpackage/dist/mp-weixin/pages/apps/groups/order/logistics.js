(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apps/groups/order/logistics"],{"25e9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,o,a,u,r){try{var i=t[u](r),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(o,a)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var r=t.apply(n,e);function i(t){u(r,o,a,i,c,"next",t)}function c(t){u(r,o,a,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{data:{order_no:"加载中...",goods:[]},isLoad:!1}},onLoad:function(t){this.loadData({id:t.id})},methods:{loadData:function(t){var n=this;return r(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$api.post({url:"/flbooth/groups/order/getLogistics",loadingTip:"加载中",data:t,success:function(t){n.data=t,n.isLoad=!0}});case 1:case"end":return e.stop()}}),e)})))()},phoneCall:function(n){t.makePhoneCall({phoneNumber:n})},onCopy:function(t){this.$flbooth.copy(t)}}};n.default=i}).call(this,e("543d")["default"])},"66b2":function(t,n,e){},"795d":function(t,n,e){"use strict";var o=e("66b2"),a=e.n(o);a.a},"7f77":function(t,n,e){"use strict";(function(t){e("e954");o(e("66fd"));var n=o(e("ce8a"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},a8ed:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isLoad?t.$flbooth.oss(t.data.kuaidi.logo,40,40):null);t.$mp.data=Object.assign({},{$root:{g0:e}})},u=[]},b486:function(t,n,e){"use strict";e.r(n);var o=e("25e9"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},ce8a:function(t,n,e){"use strict";e.r(n);var o=e("a8ed"),a=e("b486");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("795d");var r,i=e("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports}},[["7f77","common/runtime","common/vendor"]]]);