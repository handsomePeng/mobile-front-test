(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{204:function(t,e,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce((function(t,e){return t[e]=source[e],t}),t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],i=0;i<e.length;++i)for(var o=e[i],c=o.obj[o.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(e.push({obj:c,prop:f}),r.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(n(r)){for(var o=[],c=0;c<r.length;++c)void 0!==r[c]&&o.push(r[c]);e.obj[e.prop]=o}}}(e),t},decode:function(t,e,r){var o=t.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(t){return o}},encode:function(t,e,r){if(0===t.length)return t;var o="string"==typeof t?t:String(t);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var n="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=o.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,r){if(!source)return e;if("object"!=typeof source){if(n(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return n(e)&&!n(source)&&(c=l(e,r)),n(e)&&n(source)?(source.forEach((function(n,i){if(o.call(e,i)){var c=e[i];c&&"object"==typeof c&&n&&"object"==typeof n?e[i]=t(c,n,r):e.push(n)}else e[i]=n})),e):Object.keys(source).reduce((function(e,n){var c=source[n];return o.call(e,n)?e[n]=t(e[n],c,r):e[n]=c,e}),c)}}},205:function(t,e,r){"use strict";var o=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return o.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},206:function(t,e,r){"use strict";var o=r(207),n=r(208),c=r(205);t.exports={formats:c,parse:n,stringify:o}},207:function(t,e,r){"use strict";var o=r(204),n=r(205),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,r,n,c,l,filter,f,h,y,x,w,k){var j=object;if("function"==typeof filter?j=filter(e,j):j instanceof Date?j=y(j):"comma"===r&&d(j)&&(j=j.join(",")),null===j){if(n)return l&&!w?l(e,v.encoder,k):e;j=""}if("string"==typeof j||"number"==typeof j||"boolean"==typeof j||o.isBuffer(j))return l?[x(w?e:l(e,v.encoder,k))+"="+x(l(j,v.encoder,k))]:[x(e)+"="+x(String(j))];var O,C=[];if(void 0===j)return C;if(d(filter))O=filter;else{var P=Object.keys(j);O=f?P.sort(f):P}for(var i=0;i<O.length;++i){var S=O[i];c&&null===j[S]||(d(j)?m(C,t(j[S],"function"==typeof r?r(e,S):e,r,n,c,l,filter,f,h,y,x,w,k)):m(C,t(j[S],e+(h?"."+S:"["+S+"]"),r,n,c,l,filter,f,h,y,x,w,k)))}return C};t.exports=function(object,t){var e,r=object,o=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==t.format){if(!c.call(n.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var o=n.formatters[r],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof o.filter?r=(0,o.filter)("",r):d(o.filter)&&(e=o.filter);var f,h=[];if("object"!=typeof r||null===r)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var x=l[f];e||(e=Object.keys(r)),o.sort&&e.sort(o.sort);for(var i=0;i<e.length;++i){var w=e[i];o.skipNulls&&null===r[w]||m(h,y(r[w],w,x,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var k=h.join(o.delimiter),j=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?j+="utf8=%26%2310003%3B&":j+="utf8=%E2%9C%93&"),k.length>0?j+k:""}},208:function(t,e,r){"use strict";var o=r(204),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},d=function(t,e,r){if(t){var o=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),d=l?o.slice(0,l.index):o,f=[];if(d){if(!r.plainObjects&&n.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+o.slice(l.index)+"]"),function(t,e,r){for(var o=e,i=t.length-1;i>=0;--i){var n,c=t[i];if("[]"===c&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(n=[])[d]=o:n[l]=o:n={0:o}}o=n}return o}(f,e,r)}};t.exports=function(t,e){var r=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,r={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,x,w=m[i],k=w.indexOf("]="),j=-1===k?w.indexOf("="):k+1;-1===j?(y=e.decoder(w,c.decoder,v),x=e.strictNullHandling?null:""):(y=e.decoder(w.slice(0,j),c.decoder,v),x=e.decoder(w.slice(j+1),c.decoder,v)),x&&e.interpretNumericEntities&&"iso-8859-1"===v&&(x=l(x)),x&&e.comma&&x.indexOf(",")>-1&&(x=x.split(",")),n.call(r,y)?r[y]=o.combine(r[y],x):r[y]=x}return r}(t,r):t,m=r.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],r);m=o.merge(m,y,r)}return o.compact(m)}},210:function(t,e,r){var content=r(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2c372f14",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return o}))},213:function(t,e,r){"use strict";r(67);var o={name:"index",data:function(){return{selectedId:void 0,items:[{label:"首页",router:"index"},{label:"免费算力",router:"freeCompute"},{label:"硬件租赁",router:"product-list"},{label:"企业回收",router:"recover"},{label:"硬盘修复",router:"hardDiskRepair"},{label:"IT新闻",router:"forum"}],options:{activeColor:"#00c1de"}}},created:function(){this.selectedId=this.$route.name}},n=(r(214),r(30)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("van-tabs",{attrs:{"title-active-color":"#00c1de",color:"#00c1de"},model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}},t._l(t.items,(function(t,e){return r("van-tab",{key:e,attrs:{to:{name:t.router},replace:"",name:t.router,title:t.label}})})),1)],1)}),[],!1,null,"628858ce",null);e.a=component.exports},214:function(t,e,r){"use strict";var o=r(210);r.n(o).a},215:function(t,e,r){(e=r(28)(!1)).push([t.i,".content[data-v-628858ce]{padding:0 12px;position:relative;background-color:#fff}.content .link-text[data-v-628858ce]{color:#333}.content[data-v-628858ce] .van-tab--active .link-text{color:#00c1de}.content[data-v-628858ce] .van-tabs--line .van-tabs__wrap{height:38px}.content[data-v-628858ce] .van-tab{line-height:38px}",""]),t.exports=e},274:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("dc2a9408",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";var o=r(274);r.n(o).a},387:function(t,e,r){(e=r(28)(!1)).push([t.i,'.page-main[data-v-3e258b8e]{background-color:#f5f5f5;padding-bottom:20px}.page-main .search-content[data-v-3e258b8e]{background-color:#fff}.page-main .nav-content[data-v-3e258b8e]{padding-top:3px;background-color:#fff}.page-main .list-content[data-v-3e258b8e]{margin-top:10px;padding:10px;border-radius:9px;background-color:#fff}.page-main .list-content .products-list .list-item[data-v-3e258b8e]{position:relative;margin-bottom:10px}.page-main .list-content .products-list .list-item[data-v-3e258b8e]:last-of-type{margin-bottom:0}.page-main .list-content .products-list .list-item .item-img-box[data-v-3e258b8e]{float:left;width:128px;height:128px}.page-main .list-content .products-list .list-item .item-img-box .item-img[data-v-3e258b8e]{width:100%;height:100%}.page-main .list-content .products-list .list-item .item-img-box image[lazy=loading][data-v-3e258b8e]{width:128px;height:128px;margin:auto}.page-main .list-content .products-list .list-item .item-right[data-v-3e258b8e]{margin-left:138px;height:128px;position:relative}.page-main .list-content .products-list .list-item .item-right .item-title-box[data-v-3e258b8e]{padding:8px 0}.page-main .list-content .products-list .list-item .item-right .item-title-box .item-title[data-v-3e258b8e]{font-size:14px;color:#333;text-align:left;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-height:18px;overflow:hidden}.page-main .list-content .products-list .list-item .item-right .item-title-box .item-title .item-tag[data-v-3e258b8e]{display:inline-block;background-color:#00c1de;text-align:center;padding:2px 3px;border-radius:4px;color:#fff;font-size:12px;line-height:normal}.page-main .list-content .products-list .list-item .item-right .item-price-box[data-v-3e258b8e]{margin-top:3px;padding:0;text-align:left;position:absolute;left:0;bottom:10px}.page-main .list-content .products-list .list-item .item-right .item-price-box .item-type[data-v-3e258b8e]{font-size:12px;color:#ff6169}.page-main .list-content .products-list .list-item .item-right .item-price-box .item-num[data-v-3e258b8e]{font-size:18px;color:#ff6169}.page-main .list-content .products-list .list-item .item-right .item-price-box .item-unit[data-v-3e258b8e]{font-size:12px;color:#ff6169}.page-main .list-content .products-list .list-item .item-right .item-sub-title-box[data-v-3e258b8e]{height:41px;overflow:hidden}.page-main .list-content .products-list .list-item .item-right .item-sub-title-box .item-sub-title[data-v-3e258b8e]{font-size:13px;color:#999;text-align:left;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.page-main .tips-content[data-v-3e258b8e]{margin-top:20px;padding:0 12px}.page-main .tips-content .tip-box[data-v-3e258b8e]{text-align:center;overflow:hidden;background-color:#f5f5f5}.page-main .tips-content .tip-box .tips[data-v-3e258b8e]{font-size:12px;color:#9f9f9f;text-align:center;padding:0 10px;position:relative}.page-main .tips-content .tip-box .tips[data-v-3e258b8e]:before{left:-1000px}.page-main .tips-content .tip-box .tips[data-v-3e258b8e]:after,.page-main .tips-content .tip-box .tips[data-v-3e258b8e]:before{content:"";display:block;width:1000px;height:1px;background-color:#ccc;position:absolute;top:50%}.page-main .tips-content .tip-box .tips[data-v-3e258b8e]:after{right:-1000px}',""]),t.exports=e},409:function(t,e,r){"use strict";r.r(e);var o=r(211),n=(r(31),r(17),r(69),r(219)),c=r(213),l=r(206),d=r.n(l),f={name:"index",components:{searchComponent:n.a,swipNav:c.a},data:function(){return{productList:[],currPage:1,pageSize:10,keyWord:void 0,loading:!1,totalPages:void 0,isFinished:!1}},asyncData:function(t){var e;t.route.params.keyWord&&(e=decodeURIComponent(t.route.params.keyWord));var r={currPage:1,pageSize:10};return r.keyWord=e,Promise.all([t.app.$axios.post(t.app.$api.viewProductSearch,d.a.stringify(r))]).then((function(t){var r=t[0];return{keyWord:e,productList:r.data.data.itemList,totalPages:r.data.data.totalPages}}))},head:function(){return{title:this.keyWord+"_十次方",meta:[{hid:"description",name:"description",content:this.keyWord},{hid:"keywords",name:"keywords",content:this.keyWord}]}},methods:{searchData:function(t){this.$router.push({name:"product-search-keyWord",params:{keyWord:encodeURIComponent(t)}})},loadMore:function(){var t=this;if(this.loading=!0,this.currPage++,this.currPage>this.totalPages)return this.isFinished=!0,this.loading=!1,!1;var e={};e.keyWord=this.keyWord,e.currPage=this.currPage,e.pageSize=this.pageSize,this.$axios.post(this.$vueApi.viewProductSearch,d.a.stringify(e)).then((function(e){1e3===e.data.code&&(t.productList=[].concat(Object(o.a)(t.productList),Object(o.a)(e.data.data.itemList)),t.loading=!1)}))}}},m=(r(386),r(30)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content page-main"},[r("div",{staticClass:"search-content"},[r("searchComponent",{on:{search:t.searchData}})],1),t._v(" "),r("div",{staticClass:"nav-content"},[r("swipNav")],1),t._v(" "),t.productList.length>0?r("div",{staticClass:"list-content"},[r("van-list",{staticClass:"products-list",attrs:{finished:t.isFinished,"finished-text":"没有更多了"},on:{load:t.loadMore},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.productList,(function(e,o){return r("nuxt-link",{key:o,staticClass:"list-item",attrs:{to:{name:"product-id",params:{id:e.id}}}},[r("div",{staticClass:"item-img-box"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.itemImage,expression:"item.itemImage"}],staticClass:"item-img",attrs:{alt:e.itemTitle}})]),t._v(" "),r("div",{staticClass:"item-right"},[r("div",{staticClass:"item-title-box"},[r("p",{staticClass:"item-title"},[r("span",{domProps:{innerHTML:t._s(e.itemTitle)}})])]),t._v(" "),r("div",{staticClass:"item-price-box"},[2!=e.itemSpecSellType?r("span",{staticClass:"item-type"},[t._v(t._s(1==e.type?"￥":"$"))]):r("span",{staticClass:"item-type"},[t._v("￥")]),t._v(" "),r("span",{staticClass:"item-num"},[t._v(t._s(null!=e.itemPrice?t.$formatMoneyData(e.itemPrice):"登录可见"))]),t._v(" "),2==e.itemSpecSellType?r("span",{staticClass:"item-unit"},[t._v("/月")]):t._e()])])])})),1)],1):t._e(),t._v(" "),0==t.productList.length?r("div",{staticClass:"line",staticStyle:{height:"20px","background-color":"#ffffff"}}):t._e(),t._v(" "),0==t.productList.length?r("div",{staticClass:"tips-content",staticStyle:{"margin-top":"20px"}},[t._m(0)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip-box"},[e("span",{staticClass:"tips"},[this._v("暂无数据")])])}],!1,null,"3e258b8e",null);e.default=component.exports}}]);