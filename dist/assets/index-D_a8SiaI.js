import{be as S,bd as w,aF as M,T as p,aG as W,r as i,aK as I,aL as L,j as e,aI as k,aM as A,aN as G,p as u,ad as o,au as B,B as d,d8 as y,I as b,aV as R,b1 as P,b2 as U,b0 as E,fi as D,fj as N,e3 as O,t as V,ap as H,w as _,H as q,l as $}from"./index-CZQdhxL6.js";import{C as z}from"./custom-breadcrumbs-Cstz3_WJ.js";import{D as x}from"./dialogTitleClasses-CEl360C-.js";import{D as m}from"./DialogTitle-0aPq7ynf.js";import{D as j}from"./DialogContent-DclWW8HV.js";import{D as g}from"./DialogActions-q6AF7Mz6.js";import{L as f}from"./ListItemButton-B1Oqx7Ea.js";import{L as v}from"./ListItemText-Cr03FIqH.js";import{M as h}from"./MenuItem-B-kec-ET.js";import{F as K}from"./FormControlLabel-BkPFkiPo.js";import{C as Y}from"./component-hero-BJiM_yPn.js";import{C as J,a as c}from"./component-block-hYLYKLgG.js";import"./Link-aHbKcscn.js";import"./listItemButtonClasses-DXIYlEZ6.js";import"./listItemTextClasses-tNQx_Nyt.js";function Q(n){return S("MuiDialogContentText",n)}w("MuiDialogContentText",["root"]);const X=["children","className"],Z=n=>{const{classes:s}=n,l=G({root:["root"]},Q,s);return k({},s,l)},ee=M(p,{shouldForwardProp:n=>W(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,s)=>s.root})({}),ne=i.forwardRef(function(s,r){const l=I({props:s,name:"MuiDialogContentText"}),{className:t}=l,a=L(l,X),C=Z(a);return e.jsx(ee,k({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:A(C.root,t)},l,{classes:C}))});function se(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"warning",onClick:n.onTrue,children:"Form Dialogs"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Subscribe"}),e.jsxs(j,{children:[e.jsx(p,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(B,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email address"})]}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function oe(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"info",variant:"outlined",onClick:n.onTrue,children:"Open alert dialog"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function le(){const n=u(),[s,r]=i.useState("paper"),l=i.useCallback(a=>()=>{n.onTrue(),r(a)},[n]),t=i.useRef(null);return i.useEffect(()=>{if(n.value){const{current:a}=t;a&&a.focus()}},[n.value]),e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:l("paper"),sx:{mr:2},children:"scroll=paper"}),e.jsx(o,{variant:"outlined",onClick:l("body"),children:"scroll=body"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,scroll:s,children:[e.jsx(m,{sx:{pb:2},children:"Subscribe"}),e.jsx(j,{dividers:s==="paper",children:e.jsx(ne,{ref:t,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,children:"Cancel"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,children:"Subscribe"})]})]})]})}const T=["username@gmail.com","user02@gmail.com"];function ie(){const n=u(),[s,r]=i.useState(T[1]),l=i.useCallback(t=>{n.onFalse(),r(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Open simple dialog"}),e.jsxs(p,{variant:"subtitle1",children:["Selected: ",s]}),e.jsxs(x,{open:n.value,onClose:()=>l(s),children:[e.jsx(m,{children:"Set backup account"}),e.jsxs(d,{component:"ul",children:[T.map(t=>e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{onClick:()=>l(t),children:[e.jsx(y,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:e.jsx(b,{icon:"solar:user-rounded-bold"})}),e.jsx(v,{primary:t})]})},t)),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{autoFocus:!0,onClick:()=>l("addAccount"),children:[e.jsx(y,{sx:{mr:2},children:e.jsx(b,{icon:"mingcute:add-line"})}),e.jsx(v,{primary:"Add account"})]})})]})]})]})}function te(){const n=u(),[s,r]=i.useState(!0),[l,t]=i.useState("sm"),a=i.useCallback(F=>{t(F.target.value)},[]),C=i.useCallback(F=>{r(F.target.checked)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Max width dialog"}),e.jsxs(x,{open:n.value,maxWidth:l,onClose:n.onFalse,fullWidth:s,children:[e.jsx(m,{children:"Optional sizes"}),e.jsxs(j,{children:[e.jsx(p,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(d,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[e.jsxs(R,{sx:{my:3,minWidth:160},children:[e.jsx(P,{htmlFor:"max-width-label",children:"maxWidth"}),e.jsxs(U,{autoFocus:!0,value:l,onChange:a,label:"maxWidth",inputProps:{id:"max-width-label"},children:[e.jsx(h,{value:!1,children:"false"}),e.jsx(h,{value:"xs",children:"xs"}),e.jsx(h,{value:"sm",children:"sm"}),e.jsx(h,{value:"md",children:"md"}),e.jsx(h,{value:"lg",children:"lg"}),e.jsx(h,{value:"xl",children:"xl"})]})]}),e.jsx(K,{control:e.jsx(E,{checked:s,onChange:C}),label:"Full width",sx:{mt:1}})]})]}),e.jsx(g,{children:e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Close"})})]})]})}const ae=i.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function re(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",color:"error",onClick:n.onTrue,children:"Full screen dialogs"}),e.jsxs(x,{fullScreen:!0,open:n.value,onClose:n.onFalse,TransitionComponent:ae,children:[e.jsx(N,{position:"relative",color:"default",children:e.jsxs(O,{children:[e.jsx(V,{color:"inherit",edge:"start",onClick:n.onFalse,children:e.jsx(b,{icon:"mingcute:close-line"})}),e.jsx(p,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),e.jsx(o,{autoFocus:!0,color:"inherit",variant:"contained",onClick:n.onFalse,children:"Save"})]})}),e.jsxs(d,{component:"ul",children:[e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Phone ringtone",secondary:"Titania"})})}),e.jsx(H,{}),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Default notification ringtone",secondary:"Tethys"})})})]})]})]})}const ce=i.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function de(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"success",onClick:n.onTrue,children:"Transitions dialogs"}),e.jsxs(x,{keepMounted:!0,open:n.value,TransitionComponent:ce,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsx(z,{heading:"Dialog",links:[{name:"Components",href:_.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),e.jsxs(J,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}},children:[e.jsx(c,{title:"Simple",children:e.jsx(ie,{})}),e.jsx(c,{title:"Alerts",children:e.jsx(oe,{})}),e.jsx(c,{title:"Transitions",children:e.jsx(de,{})}),e.jsx(c,{title:"Form",children:e.jsx(se,{})}),e.jsx(c,{title:"Full Screen",children:e.jsx(re,{})}),e.jsx(c,{title:"Max width dialog",children:e.jsx(te,{})}),e.jsx(c,{title:"Scrolling content dialogs",children:e.jsx(le,{})})]})]})}const xe={title:`Dialog | MUI - ${$.site.name}`};function we(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsxs("title",{children:[" ",xe.title]})}),e.jsx(ue,{})]})}export{we as default};
