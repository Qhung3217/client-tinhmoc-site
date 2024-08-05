import{j as t,w as j,aP as b,e as o,c0 as p,T as r,h as l,B as a,fh as S,H as C,l as T}from"./index-CZQdhxL6.js";import{C as k}from"./custom-breadcrumbs-Cstz3_WJ.js";import{C as B}from"./component-hero-BJiM_yPn.js";import{S as v}from"./component-template-CaUhfcoW.js";import"./Link-aHbKcscn.js";import"./use-event-listener-qwc5tveS.js";import"./Card-BpNMtBWE.js";import"./CardHeader-OkCeJUez.js";import"./CardContent-BvRVTpRQ.js";const F=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],z=F.map(s=>({name:s[0].toUpperCase()+s.substring(1),component:t.jsx(H,{variant:s})}));function P(){const s=[...z,{name:"Colors",component:t.jsxs(l,{spacing:3,children:[["primary","secondary","disabled"].map(e=>t.jsxs(p,{children:[t.jsxs(r,{gutterBottom:!0,variant:"subtitle2",sx:{color:`text.${e}`,textTransform:"capitalize"},children:["text ",e]}),t.jsx(r,{gutterBottom:!0,variant:"body2",sx:{color:`text.${e}`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)),["primary","secondary","info","warning","error"].map(e=>t.jsxs(p,{children:[t.jsx(r,{gutterBottom:!0,variant:"subtitle2",sx:{color:`${e}.main`,textTransform:"capitalize"},children:e}),t.jsx(r,{gutterBottom:!0,variant:"body2",sx:{color:`${e}.main`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e))]})}];return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsx(k,{heading:"Typography",links:[{name:"Components",href:j.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})}),t.jsx(v,{data:s})]})}function H({variant:s}){var u,c,m;const e=b(),h=o("up","sm"),d=o("up","md"),x=o("up","lg"),i=e.typography[s],y=(f=>Object.keys(f).some(g=>g.startsWith("@media")))(i);let{fontSize:n}=i;return y&&(h&&(n=(u=i[e.breakpoints.up("sm")])==null?void 0:u.fontSize),d&&(n=(c=i[e.breakpoints.up("md")])==null?void 0:c.fontSize),x&&(n=(m=i[e.breakpoints.up("lg")])==null?void 0:m.fontSize)),t.jsxs(p,{variant:"outlined",sx:{p:3},children:[t.jsx(r,{variant:s,children:"How can you choose a typeface?"}),t.jsxs(l,{spacing:.5,sx:{mt:2,typography:"body2",color:"text.secondary",fontFamily:'"Lucida Console", Courier, monospace'},children:[t.jsxs(a,{component:"span",children:["fontSize: ",`${S(n)}px`]}),t.jsxs(a,{component:"span",children:["lineHeight: ",Number(i.lineHeight).toFixed(2)]}),t.jsxs(a,{component:"span",children:["fontWeight: ",i.fontWeight]})]})]})}const $={title:`Typography | Foundations - ${T.site.name}`};function R(){return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs("title",{children:[" ",$.title]})}),t.jsx(P,{})]})}export{R as default};
