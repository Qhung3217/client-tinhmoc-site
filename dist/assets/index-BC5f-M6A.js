import{r as c,j as e,h as p,I as x,bF as s,aw as g,B as h,w as y,H as C,l as V}from"./index-CZQdhxL6.js";import{C as k}from"./custom-breadcrumbs-Cstz3_WJ.js";import{C as $}from"./component-hero-BJiM_yPn.js";import{a as t}from"./component-block-hYLYKLgG.js";import{S}from"./component-template-CaUhfcoW.js";import{S as n}from"./Slider-Cgtky4hB.js";import"./Link-aHbKcscn.js";import"./use-event-listener-qwc5tveS.js";import"./Card-BpNMtBWE.js";import"./CardHeader-OkCeJUez.js";import"./CardContent-BvRVTpRQ.js";import"./visuallyHidden-Dan1xhjv.js";const L=["inherit","primary","secondary","error","info","success","warning"],d=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}],D=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}];function u(a){return a>0?`$${a}0`:`${a}`}function T(a){return a>0?`$${a}`:a}function i(a){return`$${a}°C`}function w(a){return d.findIndex(r=>r.value===a)+1}function A(){const[a,r]=c.useState(30),[o,j]=c.useState([20,37]),v=(l,m)=>{r(m)},b=(l,m)=>{j(m)},f=[{name:"Volume",component:e.jsx(t,{children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,width:1,children:[e.jsx(x,{icon:"eva:volume-mute-fill",width:24}),e.jsx(n,{value:a,onChange:v,"aria-labelledby":"continuous-slider"}),e.jsx(x,{icon:"eva:volume-up-fill",width:24})]})})},{name:"Disabled",component:e.jsx(t,{children:e.jsx(n,{disabled:!0,defaultValue:30})})},{name:"Temperature",component:e.jsx(t,{children:e.jsx(n,{defaultValue:30,getAriaValueText:i,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110,sx:{[`& .${s.mark}[data-index="10"]`]:{display:"none"}}})})},{name:"Sizes",component:e.jsxs(t,{children:[e.jsx(n,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:i,sx:{[`& .${s.mark}[data-index="10"]`]:{display:"none"}}}),e.jsx(n,{size:"small",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:i,sx:{[`& .${s.mark}[data-index="10"]`]:{display:"none"}}})]})},{name:"Small steps",component:e.jsx(t,{children:e.jsx(n,{defaultValue:5e-8,getAriaValueText:i,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})})},{name:"Custom marks",component:e.jsx(t,{children:e.jsx(n,{defaultValue:20,getAriaValueText:i,step:10,valueLabelDisplay:"auto",marks:d,sx:{[`& .${s.mark}[data-index="3"]`]:{display:"none"}}})})},{name:"Restricted values",component:e.jsx(t,{children:e.jsx(n,{defaultValue:20,valueLabelFormat:w,getAriaValueText:i,step:null,valueLabelDisplay:"auto",marks:d,sx:{[`& .${s.mark}[data-index="3"]`]:{display:"none"}}})})},{name:"Range",component:e.jsxs(t,{sx:{gap:8,flexDirection:"column"},children:[e.jsx(n,{scale:l=>l*10,step:10,marks:D,value:o,onChange:b,valueLabelDisplay:"on",getAriaValueText:u,valueLabelFormat:T,sx:{[`& .${s.mark}[data-index="4"]`]:{display:"none"}}}),e.jsxs(p,{spacing:5,direction:"row",sx:{p:2,borderRadius:1,typography:"subtitle2",bgcolor:l=>g(l.vars.palette.grey["500Channel"],.12)},children:[e.jsxs(h,{component:"span",children:["Min: ",u(o[0])]}),e.jsxs(h,{component:"span",children:["Max: ",u(o[1])]})]})]})},{name:"Color",component:e.jsx(t,{sx:{flexDirection:"column"},children:L.map(l=>e.jsx(n,{color:l,marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:i,sx:{[`& .${s.mark}[data-index="10"]`]:{display:"none"}}},l))})}];return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx(k,{heading:"Slider",links:[{name:"Components",href:y.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})}),e.jsx(S,{data:f})]})}const F={title:`Slider | MUI - ${V.site.name}`};function q(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(A,{})]})}export{q as default};
