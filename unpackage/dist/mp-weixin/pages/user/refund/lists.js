(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/refund/lists"],{2879:function(t,e,n){"use strict";n.r(e);var a=n("d162"),o=n("d7ea");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var u,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},"2ec1":function(t,e,n){"use strict";(function(t){n("e954");a(n("66fd"));var e=a(n("2879"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"44cc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,r,u){try{var s=t[r](u),c=s.value}catch(i){return void n(i)}s.done?e(c):Promise.resolve(c).then(a,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var u=t.apply(e,n);function s(t){r(u,a,o,s,c,"next",t)}function c(t){r(u,a,o,s,c,"throw",t)}s(void 0)}))}}var s={data:function(){return{dataList:[],reload:!1,total:0,current_page:1,last_page:1,status:"more",contentText:{contentdown:" ",contentrefresh:"加载中",contentnomore:""}}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){this.current_page=1,this.reload=!0,this.loadData()},onReachBottom:function(){this.current_page>=this.last_page?this.status="noMore":(this.reload=!1,this.current_page=this.current_page+1,this.status="loading",this.loadData())},methods:{loadData:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$api.post({url:"/flbooth/refund/refundList",data:{page:e.current_page},success:function(n){t.stopPullDownRefresh(),e.dataList=e.reload?n.data:e.dataList.concat(n.data),e.total=n.total,e.current_page=n.current_page,e.last_page=n.last_page,e.status=0==n.total?"noMore":"more"}});case 1:case"end":return n.stop()}}),n)})))()},closeRefund:function(t){var e=this;return u(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=e.dataList[t],e.$api.get({url:"/flbooth/refund/closeRefund",data:{id:o.id},success:function(t){e.$store.commit("statistics/order",{customer:e.$store.state.statistics.order.customer-1}),o.state=5,e.$flbooth.msg("退款已关闭")}});case 2:case"end":return n.stop()}}),n)})))()},getStateText:function(t){return["等待卖家同意","等待买家退货","卖家拒绝退款","平台介入","退款完成","退款关闭","等待卖家签收退货"][t]},getStateInfo:function(t){return["成功发起退款等待卖家同意","卖家已同意，请退货","您可以修改退货申请再次发起","已申请平台介入，请等待平台判定","退款完成","您已关闭退款申请","等待商家收到货物并退款给您"][t]},onRefund:function(t){this.$flbooth.to("/pages/user/refund/details?id=".concat(t))}}};e.default=s}).call(this,n("543d")["default"])},d162:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={wanlEmpty:function(){return n.e("components/wanl-empty/wanl-empty").then(n.bind(null,"e5e5"))},uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"1e1f"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.dataList,(function(e,n){var a=t.__get_orig(e),o=t.$flbooth.oss(e.goods.image,70,70),r=t.getStateText(e.state),u=t.getStateInfo(e.state);return{$orig:a,g0:o,m0:r,m1:u}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},d7ea:function(t,e,n){"use strict";n.r(e);var a=n("44cc"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a}},[["2ec1","common/runtime","common/vendor"]]]);