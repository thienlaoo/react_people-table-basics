(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(0)),s=c(2),i=c(8),j=c(12),o=c(4);function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=c(6),h=c.n(b),d=c(1),u=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(d.jsx)(a.b,{to:"/people/".concat(r),className:h()({"has-text-link":"m"===n,"has-text-danger":"f"===n}),children:c})},O=function(e){var t=e.people,c=e.selectedPerson;return Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.fatherName,s=e.motherName,i=e.mother,j=e.father,o=c===e.slug;return Object(d.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":o}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(u,{person:e})}),Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:n}),Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:i?Object(d.jsx)(u,{person:i}):s||"-"}),Object(d.jsx)("td",{children:j?Object(d.jsx)(u,{person:j}):r||"-"})]})}))})]})},x=(c(24),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),p=c(9),m=function(e){var t=function(e){var t=new Map;return e.forEach((function(e){return t.set(e.name,e)})),t}(e);return e.map((function(e){var c=t.get(e.fatherName),n=t.get(e.motherName);return Object(p.a)(Object(p.a)({},e),{},{father:c,mother:n})}))},f=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.h)().slug,b=void 0===a?"":a,h=Object(r.useState)(!1),u=Object(o.a)(h,2),p=u[0],f=u[1],v=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:t=e.sent,c=m(t),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("something went wrong:".concat(e.t0));case 11:return e.prev=11,f(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){v()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),p?Object(d.jsx)(x,{}):Object(d.jsx)(O,{people:c,selectedPerson:b})]})},v=function(){return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(a.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(d.jsx)(a.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},g=(c(25),function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(v,{}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(s.b,{path:"home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsxs)(s.b,{path:"/people",children:[Object(d.jsx)(s.b,{index:!0,element:Object(d.jsx)(f,{})}),Object(d.jsx)(s.b,{path:"/people/:slug",element:Object(d.jsx)(f,{})})]}),Object(d.jsx)(s.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(g,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.af34f126.chunk.js.map