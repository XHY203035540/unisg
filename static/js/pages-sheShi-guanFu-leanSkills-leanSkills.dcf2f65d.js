(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sheShi-guanFu-leanSkills-leanSkills"],{"0dd2":function(t,n,e){"use strict";e.r(n);var a=e("60f7"),i=e("b3db");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("1090");var u,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"c99df822",null,!1,a["a"],u);n["default"]=s.exports},1090:function(t,n,e){"use strict";var a=e("6b6a"),i=e.n(a);i.a},"60f7":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={myBar:e("dd55").default,towBorder:e("39a9").default,colorsBtn:e("994c").default,yBtn:e("7c7e").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"outerr"},[e("myBar"),e("v-uni-view",{staticClass:"outer"},[e("towBorder",{staticStyle:{"z-index":"4"}}),e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("技能学校")])],1),e("v-uni-scroll-view",{staticClass:"ulClass",attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"liClass2"},[e("v-uni-text",[t._v("注：无论主将副将，技能学习需要10万银两供学取技能费用")])],1),e("v-uni-view",{staticClass:"liClass2"},[e("v-uni-text",{staticStyle:{color:"red"}},[t._v("主将学习技能：")])],1),t._l(t.iCanLean,(function(n,a){return e("v-uni-view",{key:n,staticClass:"liClass",class:a%2?"":"lightBG"},[e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.iLean(n)}}},[e("colorsBtn",{attrs:{color:"p",text:n,flashOnce:!0}})],1)],1)})),e("v-uni-view",{staticClass:"liClass2"},[e("v-uni-text",{staticStyle:{color:"blue"}},[t._v("副将学习技能：(注意：副将只能学习一个技能，重复学习会覆盖技能并熟练度置0)：")])],1),t._l(t.subInf,(function(n,a){return e("v-uni-view",{key:n._id,staticClass:"liClass",class:a%2?"":"lightBG"},[e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subLean(n,a)}}},[e("colorsBtn",{attrs:{color:"p",text:n.nikename,flashOnce:!0}})],1)],1)}))],2),e("v-uni-view",{staticClass:"backBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[e("yBtn",{attrs:{buttonType:"text",text:"返回",stopFlash:"no"}})],1)],1)],1)},r=[]},"6b6a":function(t,n,e){var a=e("cdc8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0d7bd10e",a,!0,{sourceMap:!1,shadowMode:!1})},b3db:function(t,n,e){"use strict";e.r(n);var a=e("bd2b"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},bd2b:function(t,n,e){"use strict";(function(t){var a=e("4ea4");e("4de4"),e("7db0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2909"));e("96cf");var r=a(e("1da1")),u=t.database(),o={data:function(){return{iCanLean:void 0,mainInf:void 0,subInf:void 0}},methods:{subLean:function(t,n){var e=this,a=this.getGenSkill(t);t.skills.length?uni.showModal({content:"目前"+t.nikename+"已有技能-"+t.skills[0].name+"-是否覆盖学习?\n将会习得："+JSON.stringify(a)+"中的一个！",success:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a.confirm){n.next=3;break}return n.next=3,e.leanSkill("general",t._id,void 0,t.nikename);case 3:case"end":return n.stop()}}),n)})));function a(t){return n.apply(this,arguments)}return a}()}):uni.showModal({content:t.nikename+"是否学习技能?\n将会习得："+JSON.stringify(a)+"中的一个！",success:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a.confirm){n.next=3;break}return n.next=3,e.leanSkill("general",t._id,void 0,t.nikename);case 3:case"end":return n.stop()}}),n)})));function a(t){return n.apply(this,arguments)}return a}()})},iLean:function(t){var n=this;uni.showModal({content:"主将是否学习"+t+"?",success:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=3;break}return e.next=3,n.leanSkill("account",uni.getStorageSync("accountId"),t,"你");case 3:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}()})},leanSkill:function(n,e,a,i){var u=this;return(0,r.default)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return uni.showLoading({title:"",mask:!0}),r.next=3,t.callFunction({name:"MY-USERFUNCTION",data:{action:"leanSkill",params:{table:n,id:e,skill:a,accountId:uni.getStorageSync("accountId")}}});case 3:return o=r.sent,r.next=6,u.initt();case 6:o.result.errCode?uni.showModal({content:o.result.msg,showCancel:!1}):uni.showModal({content:"恭喜"+i+"学得技能-"+o.result+"-!",showCancel:!1});case 7:case"end":return r.stop()}}),r)})))()},getGenSkill:function(t){var n=["舍命一击","气冲斗牛","凌波微步","固若金汤","呼风唤雨","妖火燎原","毁天灭地","暗度陈仓","妙手回春","金蝉脱壳","画地为牢"],e=[["力劈华山","趁火打劫","五雷轰顶"],["排山倒海","四面楚歌","巫蛊极毒"]];return n.push.apply(n,(0,i.default)(e[t.gender])),n.filter((function(n){return!t.skills.find((function(t){return t.name==n}))}))},getLeftSkills:function(t){var n=[["力劈华山","排山倒海"],["趁火打劫","四面楚歌"],["五雷轰顶","巫蛊极毒"]],e=[["舍命一击","气冲斗牛","凌波微步","固若金汤"],["暗度陈仓","妙手回春","金蝉脱壳","画地为牢"],["呼风唤雨","妖火燎原","毁天灭地"]],a=e[2],i=n[2];return"ws"==t.occupation?(a=e[0],i=n[0]):"wr"==t.occupation&&(a=e[1],i=n[1]),a.unshift(i[t.gender]),a.filter((function(n){return!t.skills.find((function(t){return t.name==n}))}))},initt:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u.collection("account").where({_id:uni.getStorageSync("accountId")}).field({skills:!0,occupation:!0,gender:!0}).get();case 2:return e=n.sent,t.mainInf=e.result.data[0],t.iCanLean=t.getLeftSkills(t.mainInf),n.next=7,u.collection("general").where({accountid:uni.getStorageSync("accountId")}).field({skills:!0,occupation:!0,gender:!0,nikename:!0}).get();case 7:a=n.sent,t.subInf=a.result.data,uni.hideLoading();case 10:case"end":return n.stop()}}),n)})))()},back:function(){uni.navigateBack()}},created:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"",mask:!0}),n.next=3,t.initt();case 3:case"end":return n.stop()}}),n)})))()}};n.default=o}).call(this,e("a9ff")["default"])},cdc8:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".lightBG[data-v-c99df822]{background-color:#634162}.btn[data-v-c99df822]{display:inline-block}.outerr .outer[data-v-c99df822]{position:relative;height:%?936?%;overflow:hidden;background-color:#310030;box-sizing:border-box}.outerr .outer .title[data-v-c99df822]{margin-top:%?10?%;position:absolute;width:100%;text-align:center;color:#ffbeb8;font-weight:600}.outerr .outer .ulClass[data-v-c99df822]{height:%?740?%;margin-top:%?70?%;box-sizing:border-box}.outerr .outer .ulClass .liClass[data-v-c99df822]{padding:0 %?100?%;height:%?70?%;line-height:%?70?%}.outerr .outer .ulClass .liClass2[data-v-c99df822]{margin:%?10?% 0 %?20?% 0;padding:0 %?100?%}.outerr .outer .backBtn[data-v-c99df822]{z-index:6;position:absolute;bottom:%?50?%;left:%?40?%}",""]),t.exports=n}}]);