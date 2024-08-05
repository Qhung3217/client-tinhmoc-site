import{aF as X,aI as v,fk as l,bg as Y,r as E,aK as z,aL as ii,j as i,aM as ni,bm as ei,fl as oi,aH as x,aN as ri,fm as ti,h as F,t as g,I as o,m as q,ff as I,ad as r,B as ai,fn as si,aJ as li,w as ci,H as di,l as ui}from"./index-CZQdhxL6.js";import{C as xi}from"./custom-breadcrumbs-Cstz3_WJ.js";import{a as t}from"./component-block-hYLYKLgG.js";import{g as hi,T as B,a as d}from"./ToggleButtonGroup-D93pVtaH.js";import{L as O}from"./LoadingButton-CHo-zp-G.js";import{C as mi}from"./component-hero-BJiM_yPn.js";import{S as ji}from"./component-template-CaUhfcoW.js";import{F as a}from"./Fab-Bbgn4_zt.js";import"./Link-aHbKcscn.js";import"./CircularProgress-BNfym32c.js";import"./use-event-listener-qwc5tveS.js";import"./Card-BpNMtBWE.js";import"./CardHeader-OkCeJUez.js";import"./CardContent-BvRVTpRQ.js";const pi=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],fi=(n,e)=>{const{ownerState:c}=n;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${x(c.orientation)}`]},{[`& .${l.grouped}`]:e[`grouped${x(c.variant)}`]},{[`& .${l.grouped}`]:e[`grouped${x(c.variant)}${x(c.orientation)}`]},{[`& .${l.grouped}`]:e[`grouped${x(c.variant)}${x(c.color)}`]},{[`& .${l.firstButton}`]:e.firstButton},{[`& .${l.lastButton}`]:e.lastButton},{[`& .${l.middleButton}`]:e.middleButton},e.root,e[c.variant],c.disableElevation===!0&&e.disableElevation,c.fullWidth&&e.fullWidth,c.orientation==="vertical"&&e.vertical]},gi=n=>{const{classes:e,color:c,disabled:b,disableElevation:$,fullWidth:y,orientation:u,variant:m}=n,p={root:["root",m,u==="vertical"&&"vertical",y&&"fullWidth",$&&"disableElevation"],grouped:["grouped",`grouped${x(u)}`,`grouped${x(m)}`,`grouped${x(m)}${x(u)}`,`grouped${x(m)}${x(c)}`,b&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ri(p,ti,e)},vi=X("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:fi})(({theme:n,ownerState:e})=>v({display:"inline-flex",borderRadius:(n.vars||n).shape.borderRadius},e.variant==="contained"&&{boxShadow:(n.vars||n).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},e.orientation==="vertical"&&{flexDirection:"column"},{[`& .${l.grouped}`]:v({minWidth:40,"&:hover":v({},e.variant==="contained"&&{boxShadow:"none"})},e.variant==="contained"&&{boxShadow:"none"}),[`& .${l.firstButton},& .${l.middleButton}`]:v({},e.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},e.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},e.variant==="text"&&e.orientation==="horizontal"&&{borderRight:n.vars?`1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${l.disabled}`]:{borderRight:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="text"&&e.orientation==="vertical"&&{borderBottom:n.vars?`1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${l.disabled}`]:{borderBottom:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="text"&&e.color!=="inherit"&&{borderColor:n.vars?`rgba(${n.vars.palette[e.color].mainChannel} / 0.5)`:Y(n.palette[e.color].main,.5)},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"transparent"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"transparent"},e.variant==="contained"&&e.orientation==="horizontal"&&{borderRight:`1px solid ${(n.vars||n).palette.grey[400]}`,[`&.${l.disabled}`]:{borderRight:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="contained"&&e.orientation==="vertical"&&{borderBottom:`1px solid ${(n.vars||n).palette.grey[400]}`,[`&.${l.disabled}`]:{borderBottom:`1px solid ${(n.vars||n).palette.action.disabled}`}},e.variant==="contained"&&e.color!=="inherit"&&{borderColor:(n.vars||n).palette[e.color].dark},{"&:hover":v({},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"currentColor"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${l.lastButton},& .${l.middleButton}`]:v({},e.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},e.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},e.variant==="outlined"&&e.orientation==="horizontal"&&{marginLeft:-1},e.variant==="outlined"&&e.orientation==="vertical"&&{marginTop:-1})})),h=E.forwardRef(function(e,c){const b=z({props:e,name:"MuiButtonGroup"}),{children:$,className:y,color:u="primary",component:m="div",disabled:p=!1,disableElevation:G=!1,disableFocusRipple:T=!1,disableRipple:R=!1,fullWidth:f=!1,orientation:A="horizontal",size:s="medium",variant:j="outlined"}=b,U=ii(b,pi),M=v({},b,{color:u,component:m,disabled:p,disableElevation:G,disableFocusRipple:T,disableRipple:R,fullWidth:f,orientation:A,size:s,variant:j}),w=gi(M),J=E.useMemo(()=>({className:w.grouped,color:u,disabled:p,disableElevation:G,disableFocusRipple:T,disableRipple:R,fullWidth:f,size:s,variant:j}),[u,p,G,T,R,f,s,j,w.grouped]),S=hi($),K=S.length,Q=W=>{const L=W===0,V=W===K-1;return L&&V?"":L?w.firstButton:V?w.lastButton:w.middleButton};return i.jsx(vi,v({as:m,role:"group",className:ni(w.root,y),ref:c,ownerState:M},U,{children:i.jsx(ei.Provider,{value:J,children:S.map((W,L)=>i.jsx(oi.Provider,{value:Q(L),children:W},L))})}))}),bi=["inherit","default","primary","secondary","info","success","warning","error"],D=["small","medium","large"];function Bi(){return i.jsxs(F,{rowGap:5,columnGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},children:[i.jsxs(t,{title:"Base",children:[i.jsx(g,{color:"inherit",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(g,{children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(g,{color:"primary",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(g,{color:"secondary",children:i.jsx(o,{icon:"ic:round-access-alarm"})}),i.jsx(g,{disabled:!0,children:i.jsx(o,{icon:"ic:round-access-alarm"})})]}),i.jsx(t,{title:"Colors",children:bi.map(n=>i.jsx(g,{color:n,children:i.jsx(o,{icon:"ic:round-access-alarm"})},n))}),i.jsx(t,{title:"Sizes",children:D.map(n=>i.jsx(g,{size:n,color:"info",children:i.jsx(o,{icon:"ic:round-access-alarm"})},n))}),i.jsx(t,{title:"With Animate",children:D.map(n=>i.jsx(g,{component:q.button,whileTap:"tap",whileHover:"hover",variants:n==="small"&&I(1.1,.95)||n==="large"&&I(1.08,.99)||I(),size:n,color:"error",children:i.jsx(o,{fontSize:"inherit",icon:"ic:round-access-alarm"})},n))})]})}const P=["inherit","primary","secondary","success","error","info","warning"],Ci=["small","medium","large"],$i=["contained","outlined","text","soft"];function Ti(){return i.jsxs(F,{gap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},children:[i.jsxs(t,{title:"Contained",children:[P.map(n=>i.jsxs(h,{variant:"contained",color:n,children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n)),i.jsxs(h,{disabled:!0,variant:"contained",color:"info",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]})]}),i.jsxs(t,{title:"Outlined",children:[P.map(n=>i.jsxs(h,{variant:"outlined",color:n,children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n)),i.jsxs(h,{disabled:!0,variant:"outlined",color:"info",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]})]}),i.jsxs(t,{title:"Text",children:[P.map(n=>i.jsxs(h,{variant:"text",color:n,children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n)),i.jsxs(h,{disabled:!0,variant:"text",color:"info",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]})]}),i.jsxs(t,{title:"Soft",children:[P.map(n=>i.jsxs(h,{variant:"soft",color:n,children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n)),i.jsxs(h,{disabled:!0,variant:"soft",color:"info",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]})]}),i.jsx(t,{title:"Sizes",children:Ci.map(n=>i.jsxs(h,{size:n,variant:"contained",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n))}),i.jsxs(t,{title:"Orientation",children:[$i.map(n=>i.jsxs(h,{variant:n,orientation:"vertical",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]},n)),i.jsxs(h,{disabled:!0,variant:"soft",color:"info",orientation:"vertical",children:[i.jsx(r,{children:"One"}),i.jsx(r,{children:"Two"}),i.jsx(r,{children:"Three"})]})]})]})}const Z=["standard","primary","secondary","info","success","warning","error"],_=["small","medium","large"];function Ri(){const[n,e]=E.useState("left"),[c,b]=E.useState(()=>["bold","italic"]),[$,y]=E.useState("list"),[u,m]=E.useState(!0),p=(s,j)=>{e(j)},G=(s,j)=>{b(j)},T=(s,j)=>{y(j)},R=[i.jsx(d,{value:"list",children:i.jsx(o,{icon:"ic:round-view-list"})},"list"),i.jsx(d,{value:"module",children:i.jsx(o,{icon:"ic:round-view-module"})},"module"),i.jsx(d,{value:"quilt",children:i.jsx(o,{icon:"ic:round-view-quilt"})},"quilt")],f=[i.jsx(d,{value:"left",children:i.jsx(o,{icon:"ic:round-format-align-left"})},"left"),i.jsx(d,{value:"center",children:i.jsx(o,{icon:"ic:round-format-align-center"})},"center"),i.jsx(d,{value:"right",children:i.jsx(o,{icon:"ic:round-format-align-right"})},"right"),i.jsx(d,{value:"justify",disabled:!0,children:i.jsx(o,{icon:"ic:round-format-align-justify"})},"justify")],A=[i.jsx(d,{value:"bold",children:i.jsx(o,{icon:"ic:round-format-bold"})},"bold"),i.jsx(d,{value:"italic",children:i.jsx(o,{icon:"ic:round-format-italic"})},"italic"),i.jsx(d,{value:"underlined",children:i.jsx(o,{icon:"ic:round-format-underlined"})},"underlined"),i.jsxs(d,{value:"color",disabled:!0,children:[i.jsx(o,{icon:"ic:baseline-format-color-fill"}),i.jsx(o,{icon:"ic:baseline-arrow-drop-down"})]},"color")];return i.jsxs(F,{rowGap:5,columnGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},children:[i.jsx(t,{title:"Exclusive selection",children:i.jsx(B,{value:n,exclusive:!0,onChange:p,children:f})}),i.jsx(t,{title:"Multiple selection",children:i.jsx(B,{value:c,onChange:G,children:A})}),i.jsxs(t,{title:"Sizes",children:[_.map(s=>i.jsx(d,{size:s,value:"check",children:i.jsx(o,{icon:"eva:checkmark-fill"})},s)),_.map(s=>i.jsx(B,{exclusive:!0,size:s,value:n,onChange:p,children:f},s))]}),i.jsxs(t,{title:"Disabled",children:[i.jsx(d,{value:"check",disabled:!0,children:i.jsx(o,{icon:"eva:checkmark-fill"})}),i.jsx(d,{value:"check",disabled:!0,selected:!0,children:i.jsx(o,{icon:"eva:checkmark-fill"})}),i.jsx(B,{value:"left",exclusive:!0,children:f}),i.jsx(B,{disabled:!0,value:"left",exclusive:!0,children:f})]}),i.jsxs(t,{title:"Colors",children:[Z.map(s=>i.jsx(B,{exclusive:!0,color:s,value:$,onChange:T,children:R},s)),i.jsx(ai,{sx:{display:"block",width:1,height:16}}),Z.map(s=>i.jsx(d,{color:s,value:"check",selected:u,onChange:()=>{m(!u)},children:i.jsx(o,{icon:"eva:checkmark-fill"})},s))]}),i.jsxs(t,{title:"Vertical & Standalone buttons",children:[i.jsx(B,{orientation:"vertical",value:$,exclusive:!0,onChange:T,children:R}),i.jsx(d,{value:"check",selected:u,onChange:()=>{m(!u)},children:i.jsx(o,{icon:"eva:checkmark-fill"})})]})]})}const wi=["inherit","primary","secondary","info","success","warning","error"],H=["small","medium","large"];function N({variant:n="text"}){return i.jsxs(F,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},[`& .${si.root}`]:{textTransform:"capitalize"}},children:[i.jsxs(t,{title:"Base",sx:{gap:1},children:[i.jsx(r,{variant:n,color:"inherit",children:"Default"}),i.jsx(r,{variant:n,color:"primary",children:"Primary"}),i.jsx(r,{variant:n,color:"secondary",children:"Secondary"}),i.jsx(r,{variant:n,color:"primary",disabled:!0,children:"Disabled"}),i.jsx(r,{variant:n,children:"Link"})]}),i.jsx(t,{title:"Colors",sx:{gap:1},children:wi.map(e=>i.jsx(r,{variant:n,color:e,children:e==="inherit"?"default":e},e))}),i.jsxs(t,{title:"With icon & loading",sx:{gap:1},children:[i.jsx(r,{color:"error",variant:n,startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),i.jsx(r,{variant:n,color:"error",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),i.jsx(O,{loading:!0,variant:n,children:"Submit"}),i.jsx(O,{loading:!0,loadingIndicator:"Loading...",variant:n,children:"Fetch data"}),i.jsx(O,{loading:!0,size:"large",loadingPosition:"start",startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:"Start"}),i.jsx(O,{loading:!0,size:"large",loadingPosition:"end",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:"End"})]}),i.jsxs(t,{title:"Sizes",sx:{gap:1},children:[H.map(e=>i.jsx(r,{variant:n,color:"info",size:e,children:e},e)),H.map(e=>i.jsx(O,{loading:!0,size:e,loadingPosition:"start",startIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:e},e)),H.map(e=>i.jsx(O,{loading:!0,size:e,loadingPosition:"end",endIcon:i.jsx(o,{icon:"ic:round-access-alarm"}),variant:n,children:e},e))]})]})}const k=["default","inherit","primary","secondary","info","success","warning","error"],C=["small","medium","large"];function Oi(){return i.jsxs(F,{rowGap:5,columnGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},sx:{[`& .${li.root}`]:{textTransform:"capitalize"}},children:[i.jsxs(t,{title:"Default",children:[k.map(n=>i.jsx(a,{color:n,children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),k.map(n=>i.jsxs(a,{color:n,variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(a,{color:"info",disabled:!0,children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(a,{color:"info",disabled:!0,variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(t,{title:"Outlined",children:[k.map(n=>i.jsx(a,{color:n,variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),k.map(n=>i.jsxs(a,{color:n,variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(a,{color:"info",disabled:!0,variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(a,{color:"info",disabled:!0,variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(t,{title:"Soft",children:[k.map(n=>i.jsx(a,{color:n,variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),k.map(n=>i.jsxs(a,{color:n,variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),i.jsx(a,{color:"info",disabled:!0,variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})}),i.jsxs(a,{color:"info",disabled:!0,variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),"disabled"]})]}),i.jsxs(t,{title:"Sizes",children:[C.map(n=>i.jsx(a,{size:n,color:"info",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),C.map(n=>i.jsxs(a,{size:n,color:"info",variant:"extended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),C.map(n=>i.jsx(a,{size:n,color:"info",variant:"soft",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),C.map(n=>i.jsxs(a,{size:n,color:"info",variant:"softExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n)),C.map(n=>i.jsx(a,{size:n,color:"info",variant:"outlined",children:i.jsx(o,{icon:"ic:round-access-alarm",width:24})},n)),C.map(n=>i.jsxs(a,{size:n,color:"info",variant:"outlinedExtended",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n))]}),i.jsx(t,{title:"With Animate",children:C.map(n=>i.jsxs(a,{component:q.button,whileTap:"tap",whileHover:"hover",variants:n==="small"&&I(1.1,.95)||n==="large"&&I(1.08,.99)||I(),variant:"extended",size:n,color:"info",children:[i.jsx(o,{icon:"ic:round-access-alarm",width:24}),n]},n))})]})}function ki(){const n=[{name:"Contained",component:i.jsx(N,{variant:"contained"})},{name:"Outlined",component:i.jsx(N,{variant:"outlined"})},{name:"Text",component:i.jsx(N,{variant:"text"})},{name:"Soft",component:i.jsx(N,{variant:"soft"})},{name:"Icon button",component:i.jsx(Bi,{})},{name:"Fab",component:i.jsx(Oi,{})},{name:"Groups",component:i.jsx(Ti,{})},{name:"Toggle",component:i.jsx(Ri,{})}];return i.jsxs(i.Fragment,{children:[i.jsx(mi,{children:i.jsx(xi,{heading:"Buttons",links:[{name:"Components",href:ci.components},{name:"Buttons"}],moreLink:["https://mui.com/components/buttons","https://mui.com/components/button-group","https://mui.com/components/floating-action-button","https://mui.com/components/toggle-button"]})}),i.jsx(ji,{data:n})]})}const Ei={title:`Button | MUI - ${ui.site.name}`};function Zi(){return i.jsxs(i.Fragment,{children:[i.jsx(di,{children:i.jsxs("title",{children:[" ",Ei.title]})}),i.jsx(ki,{})]})}export{Zi as default};
