(this["webpackJsonpgithub-jobs"]=this["webpackJsonpgithub-jobs"]||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(39),s=c.n(a),r=(c(47),c(48),c(49),c(10)),o=c(14),l=c.n(o),j=c(19),u=c(8),d=(c(51),c(40)),b=c.n(d).a,h=(c(69),c(11)),O=c(12),f=c(1);var x=function(e){var t=Object(n.useState)(""),c=Object(u.a)(t,2),i=c[0],a=c[1];return Object(f.jsxs)("div",{className:"main-filter-container d-flex align-items-center",children:[Object(f.jsx)(h.a,{icon:O.b,style:{color:"#B9BDCF",marginLeft:"5px"}}),Object(f.jsx)("input",{name:"filter",placeholder:"Title, companies, expertise or benefits",className:"main-filter",value:i,onChange:function(e){a(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){e.onFilter(i)},className:"main-filter-button",children:"Search"})]})};c(75);var m=function(e){var t=Object(n.useState)(e.selectedPlace),c=Object(u.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),o=r[0],l=r[1],j=function(t){l(""),a(t.target.value),e.onCheckboxOfPlacesChange(t.target.value)};return Object(f.jsx)("div",{className:"side-filter-container w-100",children:Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onFilterByPlace(o)},children:[Object(f.jsxs)("label",{className:"checkbox",children:[Object(f.jsx)("input",{type:"checkbox",onChange:function(t){var c;c=t,e.onFullTimeFilterChange(c.target.checked)}}),"Full time"]}),Object(f.jsx)("h4",{style:{color:"#B9BDCF"},children:"LOCATION"}),Object(f.jsxs)("div",{className:"location-filter-container d-flex align-items-center",children:[Object(f.jsx)(h.a,{icon:O.d,style:{color:"#B9BDCF",marginLeft:"5px"}}),Object(f.jsx)("input",{name:"filter",placeholder:"City, state, zip code or country",className:"location-filter",value:o,onChange:function(e){var t;t=e,a(""),l(t.target.value)}})]}),Object(f.jsx)("ul",{className:"locations-check-list",children:["London","Amsterdam","New York","Berlin"].map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsxs)("label",{className:"checkbox",children:[Object(f.jsx)("input",{name:"places",type:"radio",value:e,checked:e===i,onChange:j}),e]})},t)}))})]})})};c(76);var p=function(e){return Object(f.jsxs)("div",{className:"card-container d-flex align-items-center w-100",onClick:function(){return e.onClick()},children:[Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{src:e.imgSrc})}),Object(f.jsxs)("div",{className:"w-100",children:[Object(f.jsx)("h5",{children:e.title}),Object(f.jsx)("p",{children:e.description}),Object(f.jsxs)("div",{className:"d-flex w-100 justify-content-sbw",children:[Object(f.jsx)("div",{children:e.specialMarker?Object(f.jsx)("h5",{className:"special-marker",children:e.specialMarker}):""}),Object(f.jsx)("div",{className:"side-content d-flex align-items-center",children:e.sideContent.map((function(e,t){return Object(f.jsxs)("p",{style:{marginLeft:"15px"},children:["globe"===e.icon?Object(f.jsx)(h.a,{icon:O.d,style:{marginRight:"5px"}}):"","time"===e.icon?Object(f.jsx)(h.a,{icon:O.c,style:{marginRight:"5px"}}):"",e.value]},t)}))})]})]})]})},g=c(3),v=c(20),y=c.n(v);var N=function(){var e=Object(g.f)(),t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)({search:"",location:"",description:"",full_time:""}),d=Object(u.a)(o,2),h=d[0],O=d[1],v=Object(n.useState)(!1),N=Object(u.a)(v,2),F=N[0],k=N[1];Object(n.useEffect)((function(){w()}),[h]);var w=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,S(h);case 4:t=e.sent,c=C(t),s(c),k(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(e){return e.map((function(e){return{imgSrc:e.company_logo,title:e.company,description:e.title,specialMarker:"Full Time"===e.type?e.type:"",sideContent:[{value:e.location,icon:"globe"},{value:P(e.created_at),icon:"time"}],onClick:function(){T(e.id)}}}))},S=function(e){var t=function(e){var t=new URLSearchParams(Object(r.a)({},e)),c=[];return t.forEach((function(e,t){""==e&&c.push(t)})),c.forEach((function(e){t.delete(e)})),t.toString()}(e);return new Promise((function(e,c){b.get("/positions.json?".concat(t)).then((function(t){t.data?e(t.data):c("Not Found")}),(function(e){c("Not Found")}))}))},T=function(t){e.push("/position/".concat(t))},P=function(e){return new Date(e).toISOString().slice(0,10)};return Object(f.jsxs)("section",{className:"main-container",children:[Object(f.jsx)("div",{className:"main-search-container d-flex align-items-center justify-content-center",children:Object(f.jsx)(x,{onFilter:function(e){O(Object(r.a)(Object(r.a)({},h),{},{search:e}))}})}),Object(f.jsxs)("div",{className:"content-wrapper d-flex w-100",style:{marginTop:"20px"},children:[Object(f.jsx)("div",{className:"side-filter-container",children:Object(f.jsx)(m,{selectedPlace:"New York",onCheckboxOfPlacesChange:function(e){O(Object(r.a)(Object(r.a)({},h),{},{location:e}))},onFullTimeFilterChange:function(e){O(Object(r.a)(Object(r.a)({},h),{},{full_time:e?"true":"false"}))},onFilterByPlace:function(e){O(Object(r.a)(Object(r.a)({},h),{},{location:e}))}})}),Object(f.jsx)("div",{className:"cards-container",children:F?Object(f.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100%"},children:Object(f.jsx)(y.a,{type:"ThreeDots",color:"#1E86FF",width:50,height:50})}):Object(f.jsx)(i.a.Fragment,{children:a.map((function(e,t){return Object(n.createElement)(p,Object(r.a)(Object(r.a)({},e),{},{key:t}))}))})})]})]})},F=c(15),k=c(25);c(110);var w=function(){var e=Object(g.g)(),t=Object(n.useState)(!1),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({company:"",company_logo:"",company_url:"",created_at:"",description:"",how_to_apply:"",id:"",location:"",title:"",type:"",url:""}),o=Object(u.a)(r,2),d=o[0],x=o[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var t=Object(j.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,p(e.positionId);case 3:c=t.sent,x(c),s(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(e){return new Promise((function(t,c){b.get("/positions/".concat(e,".json")).then((function(e){e&&e.data?t(e.data):c("NOT FOUND")}),(function(e){c("NOT FOUND")}))}))};return Object(f.jsx)("section",{className:"description-container d-flex",children:a?Object(f.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100%",height:"100vh"},children:Object(f.jsx)(y.a,{type:"ThreeDots",color:"#1E86FF",width:100,height:100})}):Object(f.jsxs)(i.a.Fragment,{children:[Object(f.jsxs)("div",{className:"side-info-container",children:[Object(f.jsxs)(F.b,{to:"/",children:[Object(f.jsx)(h.a,{style:{marginRight:"5px"},icon:O.a}),"Back to search"]}),Object(f.jsx)("h4",{children:"HOW TO APPLY"}),Object(f.jsx)("span",{children:Object(k.a)(d.how_to_apply)})]}),Object(f.jsxs)("div",{className:"article-container",children:[Object(f.jsxs)("h2",{className:"title",children:[d.title,"Full Time"===d.type?Object(f.jsx)("span",{className:"full-time-marker",children:"Full time"}):""]}),Object(f.jsxs)("div",{className:"visual-content d-flex",children:[Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:d.company_logo})}),Object(f.jsxs)("div",{className:"d-flex col justify-content-sbw",children:[Object(f.jsx)("h5",{children:d.company}),Object(f.jsxs)("p",{children:[Object(f.jsx)(h.a,{icon:O.d,style:{marginRight:"5px"}}),d.location]})]})]}),Object(f.jsx)("article",{className:"content",children:Object(k.a)(d.description)})]})]})})};c(111);var C=function(){return Object(f.jsxs)(F.a,{children:[Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/",children:Object(f.jsx)(N,{})}),Object(f.jsx)(g.a,{exact:!0,path:"/position/:positionId",children:Object(f.jsx)(w,{})})]}),Object(f.jsx)("footer",{className:"footer d-flex align-items-center justify-content-center",children:Object(f.jsx)("p",{children:"created by Nathan Chacon - devChallenges.io"})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),S()},47:function(e,t,c){},48:function(e,t,c){},51:function(e,t,c){},69:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.73be0f18.chunk.js.map