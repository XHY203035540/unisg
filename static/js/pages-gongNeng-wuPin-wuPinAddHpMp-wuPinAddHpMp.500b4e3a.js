(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gongNeng-wuPin-wuPinAddHpMp-wuPinAddHpMp"],{"22bb":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".lightBG[data-v-8282777c]{background-color:#192152}.btn[data-v-8282777c]{display:inline-block;height:%?50?%;position:absolute;margin:auto;top:0;bottom:0;right:%?100?%}.outerr .outer[data-v-8282777c]{position:relative;height:%?936?%;overflow:hidden;background-color:#000131;box-sizing:border-box}.outerr .outer .title[data-v-8282777c]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-8282777c]{height:%?720?%;margin-top:%?100?%;box-sizing:border-box}.outerr .outer .ulClass .liClass[data-v-8282777c]{position:relative;padding:0 %?100?%;line-height:%?70?%}.outerr .outer .backBtn[data-v-8282777c]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}",""]),e.exports=t},"38b3":function(e,t,n){var a=n("22bb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("43dbefe5",a,!0,{sourceMap:!1,shadowMode:!1})},"660a":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("7db0"),n("caad"),n("e25e"),n("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b85c")),o=a(n("5530"));n("96cf");var r=a(n("1da1")),c=e.database(),u={onLoad:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,r,u,s,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"",mask:!0}),t.medicine=(0,o.default)((0,o.default)({},t.getMediObj(e.medicineName)),{},{name:e.medicineName}),a=uni.getStorageSync("accountId"),n.next=5,c.collection("account").where({_id:a}).get();case 5:return r=n.sent,r=r.result.data[0],r.table="account",t.roles.push(r),n.next=11,c.collection("general").where({accountid:a}).get();case 11:u=n.sent,s=(0,i.default)(u.result.data);try{for(s.s();!(l=s.n()).done;)d=l.value,d.table="general",t.roles.push(d)}catch(p){s.e(p)}finally{s.f()}uni.hideLoading();case 15:case"end":return n.stop()}}),n)})))()},data:function(){return{roles:[],medicine:null}},methods:{takeMed:function(t,n,a){var i=this;.5!=a&&(uni.showLoading({title:"",mask:!0}),e.callFunction({name:"MY-USERFUNCTION",data:{action:"wuPinAddHpMp",params:{accountId:uni.getStorageSync("accountId"),id:t,table:n,medicineName:this.medicine.name}}}).then((function(){var e=i.getMediObj(i.medicine.name),n=i.roles.find((function(e){return e._id==t}));e.num<101&&(e.num=parseInt(n.maxhp*e.num/100)),n[e.type]=n[e.type]+e.num>n["max"+e.type]?n["max"+e.type]:n[e.type]+e.num;var a=i.$store.state.pagesInf.main;a[e.type]=a[e.type]+e.num>a["max"+e.type]?a["max"+e.type]:a[e.type]+e.num,uni.hideLoading(),uni.showModal({content:"成功使用药品!",showCancel:!1})})))},getMediObj:function(e){var t={type:"hp"};(e.includes("汤")||e.includes("酒")||e.includes("露"))&&(t.type="mp");var n={"跌打药":500,"止血药":1e3,"金创药":1500,"麻沸散":2e3,"酥合散":3e3,"断续膏":4500,"三黄丸":6e3,"百花丸":9e3,"熊胆丸":12e3,"首乌丸":15e3,"雪参丸":2e4,"小还丹":25,"大还丹":40,"护命丹":55,"回天丹":70,"九转丹":100,"回春汤":500,"花蜜酒":1e3,"清泉酒":1500,"菖蒲酒":2e3,"苦艾酒":3e3,"花雕酒":4500,"杜康酒":6e3,"虎骨酒":9e3,"雄黄酒":12e3,"强生酒":15e3,"万古酒":2e4,"芸香露":25,"红莲露":40,"镇魂露":55,"玄冰露":700,"龙涎露":100};return t.num=n[e],t},back:function(){uni.navigateBack()}}};t.default=u}).call(this,n("a9ff")["default"])},"9ed7":function(e,t,n){"use strict";n.r(t);var a=n("e1c3"),i=n("ce4d");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("c0a6");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"8282777c",null,!1,a["a"],r);t["default"]=u.exports},c0a6:function(e,t,n){"use strict";var a=n("38b3"),i=n.n(a);i.a},ce4d:function(e,t,n){"use strict";n.r(t);var a=n("660a"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},e1c3:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={myBar:n("dd55").default,towBorder:n("39a9").default,colorsBtn:n("994c").default,yBtn:n("7c7e").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"outerr"},[n("myBar"),n("v-uni-view",{staticClass:"outer"},[n("towBorder",{staticStyle:{"z-index":"4"}}),n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("使用"+e._s(e.medicine.name))])],1),n("v-uni-scroll-view",{staticClass:"ulClass",attrs:{"scroll-y":"true"}},e._l(e.roles,(function(t,a){return n("v-uni-view",{key:t._id,staticClass:"liClass",class:a%2?"":"lightBG"},[n("v-uni-text",[e._v(e._s(t.nikename)+":")]),n("v-uni-text",{staticStyle:{color:"#ffbeb8"}},[e._v("\\n气血:"+e._s(t.hp)+"/"+e._s(t.maxhp))]),n("v-uni-text",{staticStyle:{color:"#9898de"}},[e._v("\\n精力:"+e._s(t.mp)+"/"+e._s(t.maxmp))]),n("v-uni-view",{staticClass:"btn",style:"opacity:"+("hp"==e.medicine.type?t.hp>=t.maxhp?"0.5":"1":t.mp>=t.maxmp?"0.5":"1")+" ;",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.takeMed(t._id,t.table,"hp"==e.medicine.type?t.hp>=t.maxhp?"0.5":"1":t.mp>=t.maxmp?"0.5":"1")}}},[n("colorsBtn",{attrs:{color:"p",text:"选择",flashOnce:!0}})],1)],1)})),1),n("v-uni-view",{staticClass:"backBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[n("yBtn",{attrs:{buttonType:"text",text:"返回",stopFlash:"no"}})],1)],1)],1)},o=[]}}]);