(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-find/play"],{"08dc":function(t,e,n){"use strict";n.r(e);var a=n("c8ae"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"0eba":function(t,e,n){},"236e":function(t,e,n){"use strict";n.r(e);var a=n("c3d6"),o=n("08dc");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("f2a5e");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},c3d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"7158"))},wanlComment:function(){return n.e("components/wanl-comment/wanl-comment").then(n.bind(null,"cb0d6"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.videoList,(function(e,n){var a=t.__get_orig(e),o=Math.abs(t.videoIndex-n),i=o<=1?t.formatHtml(e.content):null,r=o<=1&&e.shop?t.oss(e.shop.avatar,35,35,2,"avatar"):null,s=o<=1&&e.user?t.oss(e.user.avatar,35,35,2,"avatar"):null,c=o<=1?t.__map(e.goods,(function(e,n){var a=t.__get_orig(e),o=t.oss(e.image,60,60);return{$orig:a,m3:o}})):null;return{$orig:a,g0:o,m0:i,m1:r,m2:s,l0:c}})));t.$mp.data=Object.assign({},{$root:{l1:n}})},i=[]},c8ae:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}function r(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function c(t,e,n,a,o,i,r){try{var s=t[i](r),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function r(t){c(i,a,o,r,s,"next",t)}function s(t){c(i,a,o,r,s,"throw",t)}r(void 0)}))}}var u=function(){n.e("components/wanl-find/video").then(function(){return resolve(n("0407"))}.bind(null,n)).catch(n.oe)},l=null,f={name:"wanlFindPlay",components:{wanlFindVideo:u},props:{find_id:{type:String,default:""},isComment:{type:String,default:"N"},height:{type:Number,default:0},width:{type:Number,default:0},bottom:{type:Number,default:0},safeBottom:{type:Number,default:0}},data:function(){return{preload:2,clickNum:0,videoList:[],current_page:1,last_page:1,status:"loading",videoIndex:0,oldVideoIndex:0,commentData:{},providerList:[]}},mounted:function(){var e=this;this.loadData(),t.getProvider({service:"share",success:function(t){var n=[];n.push({name:"生成海报",id:"poster",background:"bg-gray",sort:4},{name:"链接",id:"link",background:"bg-gray",sort:5}),e.isReport&&n.push({name:"举报",id:"report",background:"bg-gray",sort:6}),e.providerList=n.sort((function(t,e){return t.sort-e.sort}))},fail:function(e){t.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{loadData:function(e){var n=this;return d(a.default.mark((function o(){var i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.status="loading","update"!==e){a.next=8;break}if(!(n.current_page>=n.last_page)){a.next=7;break}return n.status="noMore",a.abrupt("return",!1);case 7:n.current_page+=1;case 8:i="",i="mp-flbooth",t.request({url:"".concat(n.$store.state.common.appUrl.api,"/flbooth/find/find/getList"),data:{type:"video",page:n.current_page,find_id:n.find_id},header:{"App-Client":i,"Accept-Language":"zh-CN,zh;q=0.9",token:n.$store.state.user.token},success:function(a){1===a.data.code?("lower"===e?n.videoList=n.videoList.concat(a.data.data.data):(n.videoList=a.data.data.data,a.data.data.data.length>0?n.$nextTick((function(){n.videoPlay(n.videoIndex)})):t.showToast({title:"系统还未上传任何视频！",icon:"none"})),n.current_page=a.data.data.current_page,n.last_page=a.data.data.last_page,a.data.data.current_page===a.data.data.last_page||0===a.data.data.total?n.status="noMore":n.status="more"):t.showToast({title:"服务器繁忙",icon:"none"})}});case 11:case"end":return a.stop()}}),o)})))()},handleFollow:function(){var e=arguments,n=this;return d(a.default.mark((function o(){var i,r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=e.length>0&&void 0!==e[0]?e[0]:null,n.$store.state.user.isLogin?(r=n.videoList[n.videoIndex],t.request({url:"".concat(n.$store.state.common.appUrl.api,"/flbooth/find/user/setFindUser"),method:"POST",data:{id:r.user_no,type:"follow"},header:{"Accept-Language":"zh-CN,zh;q=0.9",token:n.$store.state.user.token},success:function(e){if(1===e.data.code){if(i){var a=n.$store.state.statistics.dynamic.concern;0===e.data.data.data?a-=1:a+=1,n.$store.commit("statistics/dynamic",{concern:a})}r.isFollow=e.data.data.data}else t.showToast({title:"服务器繁忙",icon:"none"})}})):t.navigateTo({url:"/pages/user/auth/auth"});case 2:case"end":return a.stop()}}),o)})))()},handleLike:function(){var e=this;return d(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$store.state.user.isLogin?(o=e.videoList[e.videoIndex],t.request({url:"".concat(e.$store.state.common.appUrl.api,"/flbooth/find/user/setFindUser"),method:"POST",data:{id:o.id,type:"likes"},header:{"Accept-Language":"zh-CN,zh;q=0.9",token:e.$store.state.user.token},success:function(e){1===e.data.code?(0===e.data.data.data?o.likes-=1:o.likes+=1,o.isLike=e.data.data.data):t.showToast({title:"服务器繁忙",icon:"none"})}})):t.navigateTo({url:"/pages/user/auth/auth"});case 1:case"end":return n.stop()}}),n)})))()},handleComment:function(){var e=this;return d(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$store.state.user.isLogin?(o=e.videoList[e.videoIndex],t.request({url:"".concat(e.$store.state.common.appUrl.api,"/flbooth/find/comments/getList"),data:{id:o.id},header:{"Accept-Language":"zh-CN,zh;q=0.9",token:e.$store.state.user.token},success:function(n){1===n.data.code?(e.commentData=n.data.data,e.commentData.find_id=o.id,o.comments=n.data.data.count,e.$refs.wanlCommentPopup.open()):t.showToast({title:"服务器繁忙",icon:"none"})}})):t.navigateTo({url:"/pages/user/auth/auth"});case 1:case"end":return n.stop()}}),n)})))()},handleComplete:function(t){"add"===t.type&&this.handleCommentClose(),this.commentData.count=t.count,this.videoList[this.videoIndex].comments=t.count},handleUser:function(e){t.navigateTo({url:"/pages/apps/find/user?id=".concat(e)})},handleShop:function(e){t.navigateTo({url:"/pages/shop/index?id=".concat(e)})},handleGoods:function(e){t.navigateTo({url:"/pages/product/goods?id=".concat(e)})},handleCommentClose:function(){this.$refs.wanlCommentPopup.close()},handleShare:function(){this.$refs.wanlSharePopup.open()},handleOnShare:function(e){var n=this.videoList[this.videoIndex],a="".concat(this.$store.state.common.appConfig.domain,"/pages/apps/find/details/video?id=").concat(n.id),o=0,i=this.formatHtml(n.content),r=n.images[0],s="短视频分享";if("poster"==e.id)this.$flbooth.to("/pages/user/qrcode/qrcode?url="+encodeURIComponent(a));else if("link"==e.id)this.copy(a);else{var c={provider:e.id,scene:e.type&&"WXSenceTimeline"===e.type?"WXSenceTimeline":"WXSceneSession",type:o,success:function(e){t.showModal({content:"已分享",showCancel:!1})},fail:function(e){t.showModal({content:e.errMsg,showCancel:!1})}};switch(o){case 0:c.summary=i,c.imageUrl=r,c.title=s,c.href=a;break;case 1:c.summary=i;break;case 2:c.imageUrl=r;break;case 5:var d=getCurrentPages(),u=d[d.length-1].route;c.imageUrl=r,c.title=s,c.miniProgram={id:this.$store.state.common.appConfig.mp_weixin_id,path:u,webUrl:a,type:0};break;default:break}1===c.type&&"qq"===c.provider&&(c.href=a,c.title=s),t.share(c)}this.handleShareClose()},handleShareClose:function(){this.$refs.wanlSharePopup.close()},handleTag:function(){console.log("点击标签")},handleClicked:function(){var t=this;l&&clearTimeout(l),this.clickNum++,l=setTimeout((function(){t.clickNum>=2?t.handleLike():t.videoList[t.videoIndex].play=!t.videoList[t.videoIndex].play,t.clickNum=0}),300)},videoPlay:function(t){this.videoList[t].play=!this.videoList[t].play},handleVideoPlay:function(){var t=this;this.videoList.length>0&&this.$nextTick((function(){t.videoList[t.videoIndex].play=!0}))},handleVideoPause:function(){var t,e=i(this.videoList);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.play=!1}}catch(a){e.e(a)}finally{e.f()}},pauseVideo:function(t){},animationFinish:function(t){},changeCurrent:function(t){var e=this;this.videoIndex=t.detail.current,this.$nextTick((function(){var t,n=i(e.videoList);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.play=!1}}catch(o){n.e(o)}finally{n.f()}e.videoList[e.videoIndex].play=!0}))},formatHtml:function(t){return t.replace(/<\/?.+?>/g,"").replace(/ /g,"")},copy:function(e){e="string"===typeof e?e:e.toString(),t.setClipboardData({data:e,success:function(){t.showToast({title:"复制成功 ".concat(e),icon:"none"})},fail:function(){t.showToast({title:"复制失败",icon:"none"})}})},oss:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:120,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpg",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"resize",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:3,c=this.$store.state.common.appUrl.oss,d="",u=["m_lfit","m_mfit","m_fill","m_fixed"],l=["?x-oss-process=image","auto-orient,1","interlace,1","format,jpg","quality,q_90","sharpen,50","resize,m_fixed,w_120,h_120"];return"png"==i&&(l[3]=["format","png"].join(",")),l[6]=0==e?[r,u[a],"h_".concat(n*s)].join(","):0==n?[r,u[a],"w_".concat(e*s)].join(","):[r,u[a],"w_".concat(e*s),"h_".concat(n*s)].join(","),t?/^data:image\//.test(t)?d=t:/^(http|https):\/\/.+/.test(t)?(l.pop(),d=t+l.join("/")):d=c+t+l.join("/"):"transparent"==o||(d="avatar"==o?c+"/common/mine_def_touxiang_3x.png":c+"/common/img_default3x.png"),d}},watch:{videoIndex:function(t,e){this.videoList.length-this.videoIndex-1<=this.preload&&this.loadData("update"),this.oldVideoIndex=e}}};e.default=f}).call(this,n("543d")["default"])},f2a5e:function(t,e,n){"use strict";var a=n("0eba"),o=n.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-find/play-create-component',
    {
        'components/wanl-find/play-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("236e"))
        })
    },
    [['components/wanl-find/play-create-component']]
]);