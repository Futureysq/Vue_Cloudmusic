(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b01bd9f"],{"25d4":function(t,i,e){"use strict";var n=e("99f8"),a=e.n(n);a.a},"3afa":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"find"},[e("div",{staticClass:"tabbar"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"inner"},[e("ul",{staticClass:"clearfix"},t._l(t.tab,(function(i,n){return e("li",{key:n,on:{click:function(e){return t.liclick(i.name,n)}}},[e("em",{class:{act:n==t.ins}},[t._v(t._s(i.title))]),e("i",{staticClass:"arr"})])})),0)])])]),e("router-view")],1)},a=[],s={data:function(){return{ins:0,tab:[{name:"recommend",title:"推荐"},{name:"rank",title:"排行榜"},{name:"songSheet",title:"歌单"},{name:"anchorStation",title:"主播电台"},{name:"singer",title:"歌手"},{name:"newDiscs",title:"新碟上架"}],Images:[{img:"http://p1.music.126.net/NWoO7w6ewms0VoESXYZO-g==/109951165107884591.jpg?imageView&quality=89"},{img:"http://p1.music.126.net/EVxzbSruJ5kPa31RHa0CxA==/109951165108187064.jpg?imageView&quality=89"},{img:"http://p1.music.126.net/-JVsm8B4Rat0gzNFT3jttg==/109951165108374813.jpg?imageView&quality=89"}]}},methods:{liclick:function(t,i){this.$router.push({name:t,query:{index:i}}),this.ins=i}},mounted:function(){this.$route.query.index?this.ins=this.$route.query.index:this.ins=0}},c=s,r=(e("25d4"),e("9ca4")),u=Object(r["a"])(c,n,a,!1,null,"5d73dac7",null);i["default"]=u.exports},"99f8":function(t,i,e){}}]);
//# sourceMappingURL=chunk-6b01bd9f.010efd61.js.map