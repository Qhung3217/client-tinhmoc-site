import{p as R,aX as P,j as e,h as g,d8 as M,B as F,f as y,t as C,I as p,cw as I,aZ as D,ad as k,r as d,aV as _,b1 as z,b2 as H,dM as V,au as K,b3 as v,n as q,ex as G,dK as Q,cM as T,w as b,cY as W,q as $,aw as J,ey as X,cz as Y,eu as Z,H as ee,l as se}from"./index-CZQdhxL6.js";import{U as te}from"./user-quick-edit-form-BQ-0tYyi.js";import{L as E}from"./label-VukvCSVc.js";import{C as A}from"./confirm-dialog-1qdBg838.js";import{C as oe}from"./custom-breadcrumbs-Cstz3_WJ.js";import{u as ae,g as le,r as ne,T as re,e as ie,a as ce}from"./table-pagination-custom-CLUydGY4.js";import{T as de}from"./table-no-data-Do4RW2gP.js";import{T as me}from"./table-empty-rows-DRvaa4a1.js";import{T as he}from"./table-head-custom-6V7ilj5w.js";import{b as pe,T as ue,a as xe}from"./TableRow-fVvKj13G.js";import{T as u}from"./TableCell-DpYGOSsU.js";import{C as L}from"./Checkbox-vPWnpj5r.js";import{L as je}from"./Link-aHbKcscn.js";import{M as j}from"./MenuItem-B-kec-ET.js";import{I as ge}from"./InputAdornment-FYGjj27N.js";import{F as be,a as f,c as S}from"./filters-result-BjhVJUlj.js";import{C as Ce}from"./Card-BpNMtBWE.js";import{T as we,a as ve}from"./Tabs-B1eQZdBL.js";import"./image-BKqVmPzF.js";import"./form-provider-CgY9D6Kg.js";import"./Rating-CUg9OHpq.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CDG2HKGW.js";import"./index-SBExoyVP.js";import"./Slider-Cgtky4hB.js";import"./RadioGroup-Cdn6J0S9.js";import"./FormGroup-BHWDss9q.js";import"./FormControlLabel-BkPFkiPo.js";import"./index-BlO45MYk.js";import"./countries-DSLisFCy.js";import"./search-not-found-DUPrzHz6.js";import"./ListItemText-Cr03FIqH.js";import"./listItemTextClasses-tNQx_Nyt.js";import"./country-select-DInEscmA.js";import"./upload-Cc3l3Jk3.js";import"./preview-multi-file-DA87ns5L.js";import"./format-number-BMTKi65b.js";import"./file-thumbnail-DwL3Xnqg.js";import"./upload-box-BxodnsWX.js";import"./upload-avatar-B-zuBAMk.js";import"./DatePicker-DnV5-WsQ.js";import"./DialogActions-q6AF7Mz6.js";import"./ListItem-B0RV7hht.js";import"./listItemButtonClasses-DXIYlEZ6.js";import"./dialogTitleClasses-CEl360C-.js";import"./DialogContent-DclWW8HV.js";import"./MobileDateTimePicker-8HOBSqCX.js";import"./schema-helper-B-83MGJ7.js";import"./Grid2-BKvGeVSI.js";import"./LoadingButton-CHo-zp-G.js";import"./CircularProgress-BNfym32c.js";import"./DialogTitle-0aPq7ynf.js";import"./TablePagination-BnD_foh1.js";import"./KeyboardArrowRight-CiRDKZM6.js";import"./LastPage-BXs-7qE5.js";import"./empty-content-CNoNRi_C.js";function fe({row:s,selected:r,onEditRow:i,onSelectRow:l,onDeleteRow:m}){const n=R(),t=P(),a=R();return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{hover:!0,selected:r,"aria-checked":r,tabIndex:-1,children:[e.jsx(u,{padding:"checkbox",children:e.jsx(L,{id:s.id,checked:r,onClick:l})}),e.jsx(u,{children:e.jsxs(g,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(M,{alt:s.name,src:s.avatarUrl}),e.jsxs(g,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(je,{color:"inherit",onClick:i,sx:{cursor:"pointer"},children:s.name}),e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:s.email})]})]})}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.phoneNumber}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.company}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.role}),e.jsx(u,{children:e.jsx(E,{variant:"soft",color:s.status==="active"&&"success"||s.status==="pending"&&"warning"||s.status==="banned"&&"error"||"default",children:s.status})}),e.jsx(u,{children:e.jsxs(g,{direction:"row",alignItems:"center",children:[e.jsx(y,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(C,{color:a.value?"inherit":"default",onClick:a.onTrue,children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsx(C,{color:t.open?"inherit":"default",onClick:t.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})})]}),e.jsx(te,{currentUser:s,open:a.value,onClose:a.onFalse}),e.jsx(I,{open:t.open,anchorEl:t.anchorEl,onClose:t.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(D,{children:[e.jsxs(j,{onClick:()=>{n.onTrue(),t.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(j,{onClick:()=>{i(),t.onClose()},children:[e.jsx(p,{icon:"solar:pen-bold"}),"Edit"]})]})}),e.jsx(A,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(k,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}function Se({filters:s,options:r,onResetPage:i}){const l=P(),m=d.useCallback(t=>{i(),s.setState({name:t.target.value})},[s,i]),n=d.useCallback(t=>{const a=typeof t.target.value=="string"?t.target.value.split(","):t.target.value;i(),s.setState({role:a})},[s,i]);return e.jsxs(e.Fragment,{children:[e.jsxs(g,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(_,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(z,{htmlFor:"user-filter-role-select-label",children:"Role"}),e.jsx(H,{multiple:!0,value:s.state.role,onChange:n,input:e.jsx(V,{label:"Role"}),renderValue:t=>t.map(a=>a).join(", "),inputProps:{id:"user-filter-role-select-label"},MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:r.roles.map(t=>e.jsxs(j,{value:t,children:[e.jsx(L,{disableRipple:!0,size:"small",checked:s.state.role.includes(t)}),t]},t))})]}),e.jsxs(g,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(K,{fullWidth:!0,value:s.state.name,onChange:m,placeholder:"Search...",InputProps:{startAdornment:e.jsx(ge,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(C,{onClick:l.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(I,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(D,{children:[e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:export-bold"}),"Export"]})]})})]})}function Re({filters:s,onResetPage:r,totalResults:i,sx:l}){const m=d.useCallback(()=>{r(),s.setState({name:""})},[s,r]),n=d.useCallback(()=>{r(),s.setState({status:"all"})},[s,r]),t=d.useCallback(c=>{const x=s.state.role.filter(w=>w!==c);r(),s.setState({role:x})},[s,r]),a=d.useCallback(()=>{r(),s.onResetState()},[s,r]);return e.jsxs(be,{totalResults:i,onReset:a,sx:l,children:[e.jsx(f,{label:"Status:",isShow:s.state.status!=="all",children:e.jsx(v,{...S,label:s.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),e.jsx(f,{label:"Role:",isShow:!!s.state.role.length,children:s.state.role.map(c=>d.createElement(v,{...S,key:c,label:c,onDelete:()=>t(c)}))}),e.jsx(f,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(v,{...S,label:s.state.name,onDelete:m})})]})}const ke=[{value:"all",label:"All"},...Z],Te=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}];function Pe(){const s=ae(),r=q(),i=R(),[l,m]=d.useState(G),n=Q({name:"",role:[],status:"all"}),t=Fe({inputData:l,comparator:le(s.order,s.orderBy),filters:n.state}),a=ne(t,s.page,s.rowsPerPage),c=!!n.state.name||n.state.role.length>0||n.state.status!=="all",x=!t.length&&c||!t.length,w=d.useCallback(o=>{const h=l.filter(O=>O.id!==o);T.success("Delete success!"),m(h),s.onUpdatePageDeleteRow(a.length)},[a.length,s,l]),U=d.useCallback(()=>{const o=l.filter(h=>!s.selected.includes(h.id));T.success("Delete success!"),m(o),s.onUpdatePageDeleteRows({totalRowsInPage:a.length,totalRowsFiltered:t.length})},[t.length,a.length,s,l]),B=d.useCallback(o=>{r.push(b.dashboard.user.edit(o))},[r]),N=d.useCallback((o,h)=>{s.onResetPage(),n.setState({status:h})},[n,s]);return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[e.jsx(oe,{heading:"List",links:[{name:"Dashboard",href:b.dashboard.root},{name:"User",href:b.dashboard.user.root},{name:"List"}],action:e.jsx(k,{component:$,href:b.dashboard.user.new,variant:"contained",startIcon:e.jsx(p,{icon:"mingcute:add-line"}),children:"New user"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(Ce,{children:[e.jsx(we,{value:n.state.status,onChange:N,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${J(o.vars.palette.grey["500Channel"],.08)}`},children:ke.map(o=>e.jsx(ve,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(E,{variant:(o.value==="all"||o.value===n.state.status)&&"filled"||"soft",color:o.value==="active"&&"success"||o.value==="pending"&&"warning"||o.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(o.value)?l.filter(h=>h.status===o.value).length:l.length})},o.value))}),e.jsx(Se,{filters:n,onResetPage:s.onResetPage,options:{roles:X}}),c&&e.jsx(Re,{filters:n,totalResults:t.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(F,{sx:{position:"relative"},children:[e.jsx(re,{dense:s.dense,numSelected:s.selected.length,rowCount:t.length,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id)),action:e.jsx(y,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:i.onTrue,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Y,{children:e.jsxs(ue,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:Te,rowCount:t.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id))}),e.jsxs(xe,{children:[t.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(fe,{row:o,selected:s.selected.includes(o.id),onSelectRow:()=>s.onSelectRow(o.id),onDeleteRow:()=>w(o.id),onEditRow:()=>B(o.id)},o.id)),e.jsx(me,{height:s.dense?56:76,emptyRows:ie(s.page,s.rowsPerPage,t.length)}),e.jsx(de,{notFound:x})]})]})})]}),e.jsx(ce,{page:s.page,dense:s.dense,count:t.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]}),e.jsx(A,{open:i.value,onClose:i.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(k,{variant:"contained",color:"error",onClick:()=>{U(),i.onFalse()},children:"Delete"})})]})}function Fe({inputData:s,comparator:r,filters:i}){const{name:l,status:m,role:n}=i,t=s.map((a,c)=>[a,c]);return t.sort((a,c)=>{const x=r(a[0],c[0]);return x!==0?x:a[1]-c[1]}),s=t.map(a=>a[0]),l&&(s=s.filter(a=>a.name.toLowerCase().indexOf(l.toLowerCase())!==-1)),m!=="all"&&(s=s.filter(a=>a.status===m)),n.length&&(s=s.filter(a=>n.includes(a.role))),s}const ye={title:`User list | Dashboard - ${se.site.name}`};function Es(){return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsxs("title",{children:[" ",ye.title]})}),e.jsx(Pe,{})]})}export{Es as default};
