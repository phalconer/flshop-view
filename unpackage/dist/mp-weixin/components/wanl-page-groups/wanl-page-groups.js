(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-page-groups/wanl-page-groups"],{2085:function(t,a,n){"use strict";n.r(a);var e=n("2282"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a},2282:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,a,n,e,o,r,u){try{var s=t[r](u),c=s.value}catch(i){return void n(i)}s.done?a(c):Promise.resolve(c).then(e,o)}function u(t){return function(){var a=this,n=arguments;return new Promise((function(e,o){var u=t.apply(a,n);function s(t){r(u,e,o,s,c,"next",t)}function c(t){r(u,e,o,s,c,"throw",t)}s(void 0)}))}}var s={name:"WanlPageGroups",props:{pageData:{type:Object,default:function(){return{name:"拼团组件",type:"groups",params:[],style:[],data:[]}}},shopData:{type:Object,default:function(){}}},data:function(){return{data:[]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return u(e.default.mark((function a(){return e.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$api.get({url:"/flbooth/page/groups",data:{shop_id:t.shopData?t.shopData.id:0},success:function(a){t.data=a}});case 1:case"end":return a.stop()}}),a)})))()},handleGoods:function(t){this.$flbooth.to("/pages/apps/groups/goods?id=".concat(t))},handleGroups:function(){this.$flbooth.to("/pages/apps/groups/index")}}};a.default=s},"28f3":function(t,a,n){"use strict";var e=n("410d"),o=n.n(e);o.a},"410d":function(t,a,n){},"922d":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement,n=(t._self._c,t.__get_style([t.pageData.style])),e=t.$flbooth.oss(t.pageData.params.groupsBackground,0,50,1,"transparent","png"),o=t.__map(t.data,(function(a,n){var e=t.__get_orig(a),o=t.$flbooth.oss(a.image,100,100);return{$orig:e,g1:o}}));t.$mp.data=Object.assign({},{$root:{s0:n,g0:e,l0:o}})},r=[]},"9c5f":function(t,a,n){"use strict";n.r(a);var e=n("922d"),o=n("2085");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("28f3");var u,s=n("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);a["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-page-groups/wanl-page-groups-create-component',
    {
        'components/wanl-page-groups/wanl-page-groups-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9c5f"))
        })
    },
    [['components/wanl-page-groups/wanl-page-groups-create-component']]
]);
