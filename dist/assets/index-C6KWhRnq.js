import{j as e,t as A,I as u,B as n,T as S,d9 as U,h as y,aP as I,l as p,S as R,ad as G,p as C,aX as Y,r as m,cM as H,dc as J,dA as _,d8 as V,c0 as X,cw as Z,aZ as q,ap as K,cg as Q,cY as ee,w as M,cz as se,dB as $,dC as ae,H as te}from"./index-CZQdhxL6.js";import{U as oe}from"./upload-box-BxodnsWX.js";import"./image-BKqVmPzF.js";import{f as v}from"./format-number-BMTKi65b.js";import{C as k}from"./Card-BpNMtBWE.js";import{u as ne}from"./use-copy-to-clipboard-DTVjvh8S.js";import{F as ie}from"./file-thumbnail-DwL3Xnqg.js";import{F as re,a as le,b as E,c as ce,d as O}from"./file-manager-folder-item-DaBm7FcU.js";import{C as de}from"./Checkbox-vPWnpj5r.js";import{L as pe}from"./ListItemText-Cr03FIqH.js";import{A as me}from"./AvatarGroup-DeclGaCX.js";import{M as w}from"./MenuItem-B-kec-ET.js";import{u as W,C as L}from"./chart-legends-D6SzDrcO.js";import{C as xe}from"./chart-select-HwVb1RFl.js";import{C as he}from"./CardHeader-OkCeJUez.js";import{G as f}from"./Grid2-BKvGeVSI.js";import"./preview-multi-file-DA87ns5L.js";import"./index-BlO45MYk.js";import"./confirm-dialog-1qdBg838.js";import"./dialogTitleClasses-CEl360C-.js";import"./DialogTitle-0aPq7ynf.js";import"./DialogContent-DclWW8HV.js";import"./DialogActions-q6AF7Mz6.js";import"./InputAdornment-FYGjj27N.js";import"./upload-Cc3l3Jk3.js";import"./listItemTextClasses-tNQx_Nyt.js";function D({title:s,value:l,total:o,icon:x,sx:a,...i}){return e.jsxs(k,{sx:{p:3,...a},...i,children:[e.jsx(A,{sx:{position:"absolute",top:8,right:8},children:e.jsx(u,{icon:"eva:more-vertical-fill"})}),e.jsx(n,{component:"img",src:x,sx:{width:48,height:48}}),e.jsx(S,{variant:"h6",sx:{mt:3},children:s}),e.jsx(U,{value:24,variant:"determinate",color:"inherit",sx:{my:2,height:6,"&::before":{bgcolor:"divider",opacity:1}}}),e.jsxs(y,{direction:"row",spacing:.5,justifyContent:"flex-end",sx:{typography:"subtitle2"},children:[e.jsx(n,{sx:{mr:.5,typography:"body2",color:"text.disabled"},children:v(l)}),` / ${v(o)}`]})]})}function ge({sx:s,...l}){const o=I();return e.jsxs(k,{sx:{p:5,display:"flex",alignItems:"center",color:"common.white",background:`radial-gradient(70% 70% at 0% 0%, ${o.vars.palette.grey[700]} 0%, ${o.vars.palette.common.black} 100%)`,...s},...l,children:[e.jsx(n,{component:"img",alt:"Upgrade Illustration",src:`${p.site.basePath}/assets/illustrations/illustration-upgrade.webp`,sx:{right:16,zIndex:9,width:120,height:150,position:"absolute"}}),e.jsx(R,{src:`${p.site.basePath}/assets/background/shape-circle-1.svg`,sx:{zIndex:8,width:200,right:-32,height:200,opacity:.12,position:"absolute"}}),e.jsxs(y,{spacing:3,sx:{alignItems:"flex-start"},children:[e.jsx(S,{variant:"h6",sx:{maxWidth:180},children:"Upgrade your plan and get more space"}),e.jsx(G,{color:"warning",variant:"contained",children:"Upgrade plan"})]})]})}function ue({file:s,onDelete:l,sx:o,...x}){var P,T;const{copy:a}=ne(),i=C(),c=Y(),t=C(),g=C(s.isFavorited),[b,r]=m.useState(""),h=m.useCallback(j=>{r(j.target.value)},[]),F=m.useCallback(()=>{H.success("Copied!"),a(s.url)},[a,s.url]),B=e.jsxs(n,{sx:{top:8,right:8,flexShrink:{sm:0},position:{xs:"absolute",sm:"unset"}},children:[e.jsx(de,{color:"warning",icon:e.jsx(u,{icon:"eva:star-outline"}),checkedIcon:e.jsx(u,{icon:"eva:star-fill"}),checked:g.value,onChange:g.onToggle,inputProps:{name:"checkbox-favorite","aria-label":"Checkbox favorite"}}),e.jsx(A,{color:c.open?"inherit":"default",onClick:c.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]}),z=e.jsx(pe,{onClick:t.onTrue,primary:s.name,secondary:e.jsxs(e.Fragment,{children:[v(s.size),e.jsx(n,{sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),J(s.modifiedAt)]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),N=e.jsx(me,{max:3,sx:{[`& .${_.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(P=s.shared)==null?void 0:P.map(j=>e.jsx(V,{alt:j.name,src:j.avatarUrl},j.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(X,{variant:"outlined",sx:{gap:2,borderRadius:2,display:"flex",cursor:"pointer",position:"relative",bgcolor:"transparent",p:{xs:2.5,sm:2},alignItems:{xs:"unset",sm:"center"},flexDirection:{xs:"column",sm:"row"},"&:hover":{bgcolor:"background.paper",boxShadow:j=>j.customShadows.z20},...o},...x,children:[e.jsx(ie,{file:s.type}),z,!!((T=s==null?void 0:s.shared)!=null&&T.length)&&N,B]}),e.jsx(Z,{open:c.open,anchorEl:c.anchorEl,onClose:c.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(q,{children:[e.jsxs(w,{onClick:()=>{c.onClose(),F()},children:[e.jsx(u,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(w,{onClick:()=>{c.onClose(),i.onTrue()},children:[e.jsx(u,{icon:"solar:share-bold"}),"Share"]}),e.jsx(K,{sx:{borderStyle:"dashed"}}),e.jsxs(w,{onClick:()=>{c.onClose(),l()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(re,{item:s,favorited:g.value,onFavorite:g.onToggle,onCopyLink:F,open:t.value,onClose:t.onFalse,onDelete:()=>{t.onFalse(),l()}}),e.jsx(le,{open:i.value,shared:s.shared,inviteEmail:b,onChangeInvite:h,onCopyLink:F,onClose:()=>{i.onFalse(),r("")}})]})}function je({title:s,subheader:l,chart:o,...x}){const a=I(),[i,c]=m.useState("Yearly"),t=o.series.find(h=>h.name===i),g=o.colors??[a.palette.primary.main,a.palette.error.main,a.palette.warning.main,Q(a.palette.grey[500],.48)],b=W({chart:{stacked:!0},colors:g,stroke:{width:0},legend:{show:!0},xaxis:{categories:t==null?void 0:t.categories},tooltip:{y:{formatter:h=>v(h)}},...o.options}),r=m.useCallback(h=>{c(h)},[]);return e.jsxs(k,{...x,children:[e.jsx(he,{title:s,subheader:l,action:e.jsx(xe,{options:o.series.map(h=>h.name),value:i,onChange:r})}),e.jsx(L,{type:"bar",series:t==null?void 0:t.data,options:b,height:370,sx:{py:2.5,pl:1,pr:2.5}})]})}function fe({data:s,total:l,chart:o,...x}){const a=I(),i=o.colors??[a.palette.secondary.main,a.palette.secondary.light],c=W({chart:{sparkline:{enabled:!0}},stroke:{width:0},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:i[0],opacity:1},{offset:100,color:i[1],opacity:1}]}},plotOptions:{radialBar:{offsetY:40,startAngle:-90,endAngle:90,hollow:{margin:-24},track:{margin:-24},dataLabels:{name:{offsetY:8},value:{offsetY:-36},total:{label:`Used of ${v(l)} / ${v(l*2)}`,color:a.vars.palette.text.disabled,fontSize:a.typography.caption.fontSize,fontWeight:a.typography.caption.fontWeight}}}},...o.options});return e.jsxs(k,{...x,children:[e.jsx(L,{type:"radialBar",series:[o.series],options:c,width:240,height:240,sx:{mx:"auto"}}),e.jsx(y,{spacing:3,sx:{px:3,pb:5,mt:-4,zIndex:1,position:"relative",bgcolor:"background.paper"},children:s.map(t=>e.jsxs(y,{spacing:2,direction:"row",alignItems:"center",sx:{typography:"subtitle2"},children:[e.jsx(n,{sx:{width:36,height:36},children:t.icon}),e.jsxs(y,{flex:"1 1 auto",children:[e.jsx("div",{children:t.name}),e.jsx(n,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:`${t.filesCount} files`})]}),e.jsxs(n,{component:"span",children:[" ",v(t.usedStorage)," "]})]},t.name))})]})}const d=1e9*24;function ve(){const[s,l]=m.useState(""),[o,x]=m.useState([]),a=C(),i=C(),c=m.useCallback(r=>{l(r.target.value)},[]),t=m.useCallback(()=>{i.onFalse(),l(""),console.info("CREATE NEW FOLDER")},[i]),g=m.useCallback(r=>{x([...o,...r])},[o]),b=e.jsx(fe,{total:d,chart:{series:76},data:[{name:"Images",usedStorage:d/2,filesCount:223,icon:e.jsx(n,{component:"img",src:`${p.site.basePath}/assets/icons/files/ic-img.svg`})},{name:"Media",usedStorage:d/5,filesCount:223,icon:e.jsx(n,{component:"img",src:`${p.site.basePath}/assets/icons/files/ic-video.svg`})},{name:"Documents",usedStorage:d/5,filesCount:223,icon:e.jsx(n,{component:"img",src:`${p.site.basePath}/assets/icons/files/ic-document.svg`})},{name:"Other",usedStorage:d/10,filesCount:223,icon:e.jsx(n,{component:"img",src:`${p.site.basePath}/assets/icons/files/ic-file.svg`})}]});return e.jsxs(e.Fragment,{children:[e.jsx(ee,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,sx:{display:{xs:"block",sm:"none"}},children:b}),e.jsx(f,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Dropbox",value:d/10,total:d,icon:`${p.site.basePath}/assets/icons/app/ic-app-dropbox.svg`})}),e.jsx(f,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"Drive",value:d/5,total:d,icon:`${p.site.basePath}/assets/icons/app/ic-app-drive.svg`})}),e.jsx(f,{xs:12,sm:6,md:4,children:e.jsx(D,{title:"OneDrive",value:d/2,total:d,icon:`${p.site.basePath}/assets/icons/app/ic-app-onedrive.svg`})}),e.jsxs(f,{xs:12,md:6,lg:8,children:[e.jsx(je,{title:"Data activity",chart:{series:[{name:"Weekly",categories:["Week 1","Week 2","Week 3","Week 4","Week 5"],data:[{name:"Images",data:[20,34,48,65,37]},{name:"Media",data:[10,34,13,26,27]},{name:"Documents",data:[10,14,13,16,17]},{name:"Other",data:[5,12,6,7,8]}]},{name:"Monthly",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],data:[{name:"Images",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Media",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Documents",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Other",data:[10,34,13,56,77,88,99,77,45,12,43,34]}]},{name:"Yearly",categories:["2018","2019","2020","2021","2022","2023"],data:[{name:"Images",data:[24,34,32,56,77,48]},{name:"Media",data:[24,34,32,56,77,48]},{name:"Documents",data:[24,34,32,56,77,48]},{name:"Other",data:[24,34,32,56,77,48]}]}]}}),e.jsxs(n,{sx:{mt:5},children:[e.jsx(E,{title:"Folders",link:M.dashboard.fileManager,onOpen:i.onTrue}),e.jsx(se,{sx:{mb:3,minHeight:186},children:e.jsx(n,{sx:{gap:3,display:"flex"},children:$.map(r=>e.jsx(ce,{folder:r,onDelete:()=>console.info("DELETE",r.id),sx:{...$.length>3&&{width:240,flexShrink:0}}},r.id))})}),e.jsx(E,{title:"Recent files",link:M.dashboard.fileManager,onOpen:a.onTrue}),e.jsx(n,{sx:{gap:2,display:"flex",flexDirection:"column"},children:ae.slice(0,5).map(r=>e.jsx(ue,{file:r,onDelete:()=>console.info("DELETE",r.id)},r.id))})]})]}),e.jsx(f,{xs:12,md:6,lg:4,children:e.jsxs(n,{sx:{gap:3,display:"flex",flexDirection:"column"},children:[e.jsx(oe,{onDrop:g,placeholder:e.jsxs(n,{sx:{gap:.5,display:"flex",alignItems:"center",color:"text.disabled",flexDirection:"column"},children:[e.jsx(u,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(S,{variant:"body2",children:"Upload file"})]}),sx:{py:2.5,width:"auto",height:"auto",borderRadius:1.5}}),e.jsx(n,{sx:{display:{xs:"none",sm:"block"}},children:b}),e.jsx(ge,{})]})})]})}),e.jsx(O,{open:a.value,onClose:a.onFalse}),e.jsx(O,{open:i.value,onClose:i.onFalse,title:"New Folder",folderName:s,onChangeFolderName:c,onCreate:t})]})}const be={title:`File | Dashboard - ${p.site.name}`};function _e(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(ve,{})]})}export{_e as default};
