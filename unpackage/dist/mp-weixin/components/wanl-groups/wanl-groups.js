(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-groups/wanl-groups"],{"0b67":function(t,e,n){},"12e6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,r,o,u){try{var i=t[o](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var u=t.apply(e,n);function i(t){o(u,a,r,i,c,"next",t)}function c(t){o(u,a,r,i,c,"throw",t)}i(void 0)}))}}var i={name:"wanlGroups",props:{headHeight:{type:Number,default:0},windowHeight:{type:Number,default:0},itemId:{type:Number,default:0},currentItemId:{type:String,default:""},childlist:{type:Array,default:function(){return[]}}},data:function(){return{dataList:[],current_page:1,last_page:1,status:"loading",contentText:{contentdown:"下拉加载更多",contentrefresh:"疯狂加载中...",contentnomore:"没有更多商品了"}}},watch:{currentItemId:function(t,e){t==="cid"+this.itemId&&0===this.dataList.length&&this.loadData()}},mounted:function(){this.currentItemId==="cid"+this.itemId&&this.loadData()},methods:{loadData:function(t){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.status="loading","upper"!==t){n.next=5;break}e.current_page=1,n.next=12;break;case 5:if("lower"!==t){n.next=12;break}if(!(e.current_page>=e.last_page)){n.next=11;break}return e.status="noMore",n.abrupt("return",!1);case 11:e.current_page+=1;case 12:return n.next=14,e.$api.get({url:"/flbooth/groups/product/recommend",data:{cid:e.itemId,page:e.current_page},success:function(n){e.dataList="lower"===t?e.dataList.concat(n.data):n.data,e.current_page=n.current_page,e.last_page=n.last_page,n.current_page===n.last_page||0===n.total?e.status="noMore":e.status="more"}});case 14:case"end":return n.stop()}}),n)})))()},handleUpper:function(){},handleLower:function(){this.loadData("lower")},productList:function(t,e){this.$flbooth.to("/pages/product/list?type=groups&data=".concat(JSON.stringify({category_id:t,category_name:e})))},handleGroups:function(t){this.$flbooth.to("/pages/apps/groups/index?id=".concat(t))},handleGroupsGoods:function(t){this.$flbooth.to("/pages/apps/groups/goods?id=".concat(t))},handleMenu:function(t,e){var n={id:"cid"+t,index:e};this.$emit("handleMenu",n)}}};e.default=i},3289:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={wanlProduct:function(){return n.e("components/wanl-product/wanl-product").then(n.bind(null,"8121"))},uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"1e1f"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.childlist.length>0&&0===t.itemId?t.__map(t.childlist,(function(e,n){var a=t.__get_orig(e),r=t.$flbooth.oss(e.image,50,50);return{$orig:a,g0:r}})):null),a=t.childlist.length>0&&0!==t.itemId?t.__map(t.childlist,(function(e,n){var a=t.__get_orig(e),r=t.$flbooth.oss(e.image,50,50);return{$orig:a,g1:r}})):null;t.$mp.data=Object.assign({},{$root:{l0:n,l1:a}})},o=[]},ae04:function(t,e,n){"use strict";n.r(e);var a=n("12e6"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},b777:function(t,e,n){"use strict";var a=n("0b67"),r=n.n(a);r.a},d987:function(t,e,n){"use strict";n.r(e);var a=n("3289"),r=n("ae04");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("b777");var u,i=n("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"3278fe8d",null,!1,a["a"],u);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-groups/wanl-groups-create-component',
    {
        'components/wanl-groups/wanl-groups-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d987"))
        })
    },
    [['components/wanl-groups/wanl-groups-create-component']]
]);
