/*! For license information please see 939.060958cb.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[939],{7100:function(e,n,t){"use strict";t(2791);n.Z=t.p+"static/media/default-avatar.c1e948835e196f3d0cec1cb100fe13ab.svg"},9939:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var r=t(5671),o=t(3144),i=t(136),u=t(2882),s=t(4420),c=t(8386),a=t(2791),l=t(7774),f=t(4942),p=t(9439),g="Paginator_selectedPage__-4FEt",d="Paginator_pageNumber__6RIH6",v="Paginator_countPage__qY09q",h=t(1418),y=t.n(h),m=t(184),w=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.onClickPageChanges,o=e.currentPage,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(n/t),c=[],l=1;l<=s;l++)c.push(l);var h=Math.ceil(s/u),w=(0,a.useState)(1),C=(0,p.Z)(w,2),j=C[0],P=C[1],x=(j-1)*u+1,b=j*u;return(0,m.jsxs)("div",{className:v,children:[j>1&&(0,m.jsx)("button",{onClick:function(){P(j-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),c.filter((function(e){return e>=x&&e<=b})).map((function(e){return(0,m.jsx)("span",{className:y()((0,f.Z)({},g,o===e),d),onClick:function(n){return r(e)},children:e},e)})),h>j&&(0,m.jsx)("button",{onClick:function(){return P(j+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]})},C="Users_userWrapper__G7On7",j=t(8023),P=t(7100),x=t(2426),b=function(e){var n=e.user,t=e.followingProgress,r=e.unfollowUser,o=e.followUser;return(0,m.jsxs)("div",{className:C,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:(0,m.jsx)(x.OL,{to:"/profile/".concat(n.id),children:(0,m.jsx)("img",{src:null!==n.photos.small?n.photos.small:P.Z,width:"90px",height:"auto",alt:"user-avatar"})})}),(0,m.jsx)("div",{children:n.followed?(0,m.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,m.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:n.name}),(0,m.jsx)("div",{children:n.status})]})})]},(0,j.Z)())},k=function(e){var n=e.users,t=e.currentPage,r=e.pageSize,o=e.totalUsersCount,i=e.onClickPageChanges,u=e.followingProgress,s=e.followUser,c=e.unfollowUser;return(0,m.jsxs)("div",{children:[(0,m.jsx)(w,{currentPage:t,onClickPageChanges:i,totalItemsCount:o,pageSize:r}),n.map((function(e){return(0,m.jsx)(b,{user:e,followingProgress:u,followUser:s,unfollowUser:c},e.id)}))]})},S=t(1154),Z=t(1413),U=t(3433);function z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(n)}var _=function(e){return Array.isArray(e)?e:[e]};function A(e){var n=Array.isArray(e[0])?e[0]:e;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((function(e){return"function"===typeof e}))){var t=e.map((function(e){return"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e})).join(", ");throw new TypeError("".concat(n,"[").concat(t,"]"))}}(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}Symbol(),Object.getPrototypeOf({});var O="undefined"!==typeof WeakRef?WeakRef:function(){function e(n){(0,r.Z)(this,e),this.value=n}return(0,o.Z)(e,[{key:"deref",value:function(){return this.value}}]),e}(),T=0,R=1;function F(){return{s:T,v:void 0,o:null,p:null}}function M(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=F(),o=t.resultEqualityCheck,i=0;function u(){for(var t=r,u=0,s=arguments.length;u<s;u++){var c=arguments[u];if("function"===typeof c||"object"===typeof c&&null!==c){var a=t.o;null===a&&(t.o=a=new WeakMap);var l=a.get(c);void 0===l?(t=F(),a.set(c,t)):t=l}else{var f=t.p;null===f&&(t.p=f=new Map);var p=f.get(c);void 0===p?(t=F(),f.set(c,t)):t=p}}var g,d=t;if(t.s===R?g=t.v:(g=e.apply(null,arguments),i++),d.s=R,o){var v,h,y,m=null!==(v=null===(h=n)||void 0===h||null===(y=h.deref)||void 0===y?void 0:y.call(h))&&void 0!==v?v:n;null!=m&&o(m,g)&&(g=m,0!==i&&i--),n="object"===typeof g&&null!==g||"function"===typeof g?new O(g):g}return d.v=g,g}return u.clearCache=function(){r=F(),u.resetResultsCount()},u.resultsCount=function(){return i},u.resetResultsCount=function(){i=0},u}function E(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o="function"===typeof e?{memoize:e,memoizeOptions:t}:e,i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r,i=0,u=0,s={},c=n.pop();"object"===typeof c&&(s=c,c=n.pop()),z(c,"createSelector expects an output function after the inputs, but received: [".concat(typeof c,"]"));var a=(0,Z.Z)((0,Z.Z)({},o),s),l=a.memoize,f=a.memoizeOptions,p=void 0===f?[]:f,g=a.argsMemoize,d=void 0===g?M:g,v=a.argsMemoizeOptions,h=void 0===v?[]:v,y=(a.devModeChecks,_(p)),m=_(h),w=A(n),C=l.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat((0,U.Z)(y))),j=d.apply(void 0,[function(){u++;var e=function(e,n){for(var t=[],r=e.length,o=0;o<r;o++)t.push(e[o].apply(null,n));return t}(w,arguments);return r=C.apply(null,e)}].concat((0,U.Z)(m)));return Object.assign(j,{resultFunc:c,memoizedResultFunc:C,dependencies:w,dependencyRecomputations:function(){return u},resetDependencyRecomputations:function(){u=0},lastResult:function(){return r},recomputations:function(){return i},resetRecomputations:function(){i=0},memoize:l,argsMemoize:d})};return Object.assign(i,{withTypes:function(){return i}}),i}var q=E(M),D=Object.assign((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received ".concat(typeof e);if("object"!==typeof e)throw new TypeError(n)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ".concat(typeof e));var t=Object.keys(e),r=n(t.map((function(n){return e[n]})),(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.reduce((function(e,n,r){return e[t[r]]=n,e}),{})}));return r}),{withTypes:function(){return D}}),N=function(e){return e.usersPage.pageSize},W=function(e){return e.usersPage.totalUsersCount},H=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},G=function(e){return e.usersPage.followingProgress},L=q((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),$=t(2932),Q=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).onClickPageChanges=function(n){e.props.getUsersTC(n,e.props.pageSize)},e}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,m.jsxs)(m.Fragment,{children:[this.props.isFetching?(0,m.jsx)(l.Z,{}):null,(0,m.jsx)(k,{users:this.props.users,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onClickPageChanges:this.onClickPageChanges,followingProgress:this.props.followingProgress,followUser:this.props.followUserTC,unfollowUser:this.props.unfollowUserTC})]})}}]),t}(a.Component),V=(0,S.qC)($.D,(0,s.$j)((function(e){return{users:L(e),pageSize:N(e),totalUsersCount:W(e),currentPage:H(e),isFetching:I(e),followingProgress:G(e)}}),{followSuccess:c.GF,unfollowSuccess:c.VQ,toggleFollowingProgress:c.ZH,getUsersTC:c.Zw,followUserTC:c.iH,unfollowUserTC:c.Lt}))(Q)},2932:function(e,n,t){"use strict";t.d(n,{D:function(){return g}});var r=t(1413),o=t(5671),i=t(3144),u=t(136),s=t(2882),c=t(2791),a=t(2558),l=t(4420),f=t(184),p=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var n=function(n){(0,u.Z)(c,n);var t=(0,s.Z)(c);function c(){return(0,o.Z)(this,c),t.apply(this,arguments)}return(0,i.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,r.Z)({},this.props)):(0,f.jsx)(a.l_,{to:"/login"})}}]),c}(c.Component);return(0,l.$j)(p)(n)}},1418:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=u(e,i(t)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)r.call(e,t)&&e[t]&&(n=u(n,t));return n}function u(e,n){return n?e?e+" "+n:e+n:e}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=939.060958cb.chunk.js.map