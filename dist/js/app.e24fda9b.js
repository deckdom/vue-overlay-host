(function(t){function e(e){for(var o,l,i=e[0],r=e[1],c=e[2],p=0,v=[];p<i.length;p++)l=i[p],n[l]&&v.push(n[l][0]),n[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var r=s[i];0!==n[r]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=s[0]))}return t}var o={},n={app:0},a=[];function l(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=o,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(s,o,function(e){return t[e]}.bind(null,o));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=r;a.push(["56d7","chunk-vendors"]),s()})({"034f":function(t,e,s){"use strict";var o=s("c21b"),n=s.n(o);n.a},2618:function(t,e,s){},"2b69":function(t,e,s){},5155:function(t,e,s){"use strict";var o=s("2618"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var o=s("2b0e"),n=s("2f62"),a=s("ce5b"),l=s.n(a),i=s("402b"),r=(s("bf40"),s("d1e7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("v-content",[s("example")],1),s("overlay-host")],1)}),c=[],u={},p=u,v=(s("034f"),s("2877")),f=Object(v["a"])(p,r,c,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"example"},[s("h1",[t._v("Overlay Host")]),s("h2",[t._v("Example")]),s("v-layout",{attrs:{"mt-3":"",row:"",wrap:""}},[s("v-flex",{staticClass:"settings",attrs:{md8:"","pa-3":""}},[s("v-card",[s("v-card-title",[s("div",{staticClass:"headline"},[t._v("Options")])]),s("v-card-text",[s("v-checkbox",{attrs:{label:"Show Overlay"},model:{value:t.settings.overlay.show,callback:function(e){t.$set(t.settings.overlay,"show",e)},expression:"settings.overlay.show"}}),s("v-checkbox",{attrs:{disabled:!t.settings.overlay.show,label:"Close overlay on click"},model:{value:t.settings.overlay.closeOnClick,callback:function(e){t.$set(t.settings.overlay,"closeOnClick",e)},expression:"settings.overlay.closeOnClick"}}),s("v-checkbox",{attrs:{label:"Use timeout"},model:{value:t.doTimeout,callback:function(e){t.doTimeout=e},expression:"doTimeout"}}),s("v-slider",{attrs:{disabled:!t.doTimeout,messages:[this.settings.timeout/1e3+"s"],"thumb-label":"",min:"0",max:"10000",step:"100",label:"Timeout"},model:{value:t.settings.timeout,callback:function(e){t.$set(t.settings,"timeout",e)},expression:"settings.timeout"}}),s("v-checkbox",{attrs:{label:"Close on Escape"},model:{value:t.settings.closeOnEscape,callback:function(e){t.$set(t.settings,"closeOnEscape",e)},expression:"settings.closeOnEscape"}}),s("v-text-field",{attrs:{label:"Toast Title"},model:{value:t.settings.props.title,callback:function(e){t.$set(t.settings.props,"title",e)},expression:"settings.props.title"}}),s("v-textarea",{attrs:{label:"Toast Message"},model:{value:t.settings.props.message,callback:function(e){t.$set(t.settings.props,"message",e)},expression:"settings.props.message"}})],1)],1)],1),s("v-flex",{attrs:{md4:"","pa-3":""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{attrs:{"xs-12":"","pb-3":""}},[s("v-card",[s("v-card-title",[s("div",{staticClass:"headline"},[t._v("Toast Settings")])]),s("v-card-text",[s("pre",{staticClass:"output"},[t._v(t._s(t.finalSettings))])])],1)],1),s("v-flex",{attrs:{"xs-12":"","pt-3":""}},[s("v-card",[s("v-card-title",[s("div",{staticClass:"headline"},[t._v("Log")])]),s("v-card-text",[s("pre",{staticClass:"log"},[t._v(t._s(t.log))])])],1)],1)],1)],1)],1),s("v-btn",{staticClass:"show-toast-btn",attrs:{depressed:"",color:"primary"},on:{click:t.showToast}},[t._v("Show Toast")])],1)},g=[],h=s("c93e"),b={name:"example",data:function(){return{doTimeout:!0,log:"",settings:{overlay:{show:!0,closeOnClick:!0},timeout:3e3,closeOnEscape:!0,props:{title:"Hello World!",message:"This is an example of a simple Toast implementation using the Overlay Host!"}}}},computed:{finalSettings:function(){return Object(h["a"])({},this.settings,{timeout:this.doTimeout?this.settings.timeout:-1})}},methods:{showToast:function(){var t=this;""!==this.log&&(this.log+="\n"),this.$store.dispatch("overlay-host/show",Object(h["a"])({},this.finalSettings,{component:"toast"})).then(function(e){return t.log+="Opened Toast: "+JSON.stringify(e),e.promise}).then(function(e){t.log+="\nToast closed: "+JSON.stringify(e)})}}},x=b,y=(s("5155"),Object(v["a"])(x,m,g,!1,null,null,null));y.options.__file="Example.vue";var _=y.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toast"},[s("h1",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.message))])])},w=[],T={props:["title","message"]},k=T,C=(s("b054"),Object(v["a"])(k,O,w,!1,null,null,null));C.options.__file="Toast.vue";var S=C.exports;o["default"].config.productionTip=!1,o["default"].component("example",_),o["default"].component("overlay-host",i["OverlayHost"]),o["default"].component("toast",S),o["default"].use(n["a"]),o["default"].use(l.a);var j=new n["a"].Store({strict:!0,plugins:[i["OverlayHostPlugin"]]});new o["default"]({store:j,render:function(t){return t(d)}}).$mount("#app")},b054:function(t,e,s){"use strict";var o=s("2b69"),n=s.n(o);n.a},c21b:function(t,e,s){}});
//# sourceMappingURL=app.e24fda9b.js.map