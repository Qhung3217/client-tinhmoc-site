import{aF as R,bP as t,aH as j,aI as d,r as v,aK as M,aL as A,bj as D,bQ as S,T as L,j as p,aM as F,h as w,aN as H,bR as I}from"./index-CZQdhxL6.js";const U=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],W=o=>{const{classes:e,disabled:l,labelPlacement:n,error:a,required:r}=o,m={root:["root",l&&"disabled",`labelPlacement${j(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return H(m,I,e)},z=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[{[`& .${t.label}`]:e.label},e.root,e[`labelPlacement${j(l.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${t.error}`]:{color:(o.vars||o).palette.error.main}})),B=v.forwardRef(function(e,l){var n,a;const r=M({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:$,label:q,labelPlacement:N="end",required:C,slotProps:T={}}=r,_=A(r,U),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=C??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const E=S({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:E.error}),h=W(f),g=(a=T.typography)!=null?a:k.typography;let s=q;return s!=null&&s.type!==L&&!$&&(s=p.jsx(L,d({component:"span"},g,{className:F(h.label,g==null?void 0:g.className),children:s}))),p.jsxs(z,d({className:F(h.root,m),ownerState:f,ref:l},_,{children:[v.cloneElement(i,x),u?p.jsxs(w,{display:"block",children:[s,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}):s]}))});export{B as F};
