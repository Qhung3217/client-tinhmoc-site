import{a5 as _,a4 as j,bD as y,s as $,_ as h,bp as S,bE as m,a as A,u as U,b as E,j as l,d as M,e as F,F as N,a1 as p,w as T,J as X,T as b}from"./index-CWahQ5ZS.js";function B(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(t){return parseFloat(t)}function W(t){return _("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const G=["animation","className","component","height","style","variant","width"];let c=t=>t,f,x,v,C;const I=t=>{const{classes:e,variant:a,animation:i,hasChildren:n,width:r,height:s}=t;return F({root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!s&&"heightAuto"]},W,e)},O=y(f||(f=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),D=y(x||(x=c`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),J=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=B(t.shape.borderRadius)||"px",i=K(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(v||(v=c`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),O),({ownerState:t,theme:e})=>t.animation==="wave"&&m(C||(C=c`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),D,(e.vars||e).palette.action.hover)),V=A.forwardRef(function(e,a){const i=U({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:r,component:s="span",height:d,style:o,variant:k="text",width:w}=i,u=E(i,G),g=h({},i,{animation:n,component:s,variant:k,hasChildren:!!u.children}),R=I(g);return l.jsx(J,h({as:s,ref:a,className:M(R.root,r),ownerState:g},u,{style:h({width:w,height:d},o)}))});function q({sx:t,imgUrl:e,action:a,filled:i,slotProps:n,description:r,title:s="Không có dữ liệu",...d}){return l.jsxs(N,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...i&&{borderRadius:2,bgcolor:o=>p(o.vars.palette.grey["500Channel"],.04),border:o=>`dashed 1px ${p(o.vars.palette.grey["500Channel"],.08)}`},...t},...d,children:[l.jsx(T,{component:"img",alt:"empty content",src:e??`${X.site.basePath}/assets/icons/empty/ic-content.svg`,sx:{width:1,maxWidth:160,...n==null?void 0:n.img}}),s&&l.jsx(b,{variant:"h6",component:"span",sx:{mt:1,textAlign:"center",...n==null?void 0:n.title,color:"text.disabled"},children:s}),r&&l.jsx(b,{variant:"caption",sx:{mt:1,textAlign:"center",color:"text.disabled",...n==null?void 0:n.description},children:r}),a&&a]})}export{q as E,V as S};
