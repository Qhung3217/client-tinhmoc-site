import{a7 as h,j as t,s as B,bU as P,r as _,c as l,_ as a,a9 as R,cB as u,a as x,u as g,b as y,d as H,e as M,cC as E}from"./index-CWahQ5ZS.js";const O=h(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=h(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=h(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,n={root:["root",c&&"indeterminate",`color${l(s)}`,`size${l(r)}`]},d=M(n,E,e);return a({},e,d)},U=B(P,{shouldForwardProp:o=>_(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>a({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:R(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${u.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),F=t.jsx(S,{}),T=t.jsx(O,{}),W=t.jsx(V,{}),w=x.forwardRef(function(e,c){var s,r;const n=g({props:e,name:"MuiCheckbox"}),{checkedIcon:d=F,color:b="primary",icon:f=T,indeterminate:i=!1,indeterminateIcon:m=W,inputProps:z,size:p="medium",className:$}=n,j=y(n,L),C=i?m:f,k=i?m:d,v=a({},n,{color:b,indeterminate:i,size:p}),I=N(v);return t.jsx(U,a({type:"checkbox",inputProps:a({"data-indeterminate":i},z),icon:x.cloneElement(C,{fontSize:(s=C.props.fontSize)!=null?s:p}),checkedIcon:x.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:H(I.root,$)},j,{classes:I}))});export{w as C};
