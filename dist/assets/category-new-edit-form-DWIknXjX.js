import{K as v,aV as w,a as o,bG as S,bH as E,ao as F,X as V,j as e,ai as A,F as l}from"./index-CWahQ5ZS.js";import{z as d,u as D,t as g,F as h,a as k,L as z}from"./form-provider-CaIsVnSA.js";import{L as G}from"./index-CbZhzOjM.js";import"./image-Ds2WO9mA.js";import{C as H}from"./Card-C6GOi25m.js";import{C as K}from"./CardHeader-DunmSz8L.js";const N=d.object({name:d.string().min(1,{message:"Tên sản phẩm là bắt buộc!"}),parentId:d.string().nullable()});function X({currentCategory:s}){const c=v(),{categories:x,categoriesLoading:f}=w(),i=o.useMemo(()=>({name:(s==null?void 0:s.name)||"",parentId:typeof(s==null?void 0:s.parentId)=="string"?s==null?void 0:s.parentId:null}),[s]);console.dir(s),console.dir(i);const n=D({mode:"all",resolver:g(N),defaultValues:i});o.useEffect(()=>{n.reset(i)},[s,i,n]);const{reset:t,watch:r,setValue:m,handleSubmit:u,formState:{isSubmitting:b}}=n,p=r();o.useEffect(()=>{m("parentId",p.parentId,{shouldValidate:!0})},[m,p.parentId]),o.useEffect(()=>{s&&t(i)},[s,i,t]);const j=u(async a=>{try{console.log("DATA after upload",a),a.parentId===""&&(a.parentId=null),s?await E(s.id,a):await S(a),t(),F.success(s?"Chỉnh sửa thành công!":"Thêm thành công!"),c.push(V.dashboard.category.root)}catch(T){console.error(T)}}),I=e.jsxs(H,{children:[e.jsx(K,{title:"Thông tin loại sản phẩm",subheader:"Tên sản phẩm",sx:{mb:3}}),e.jsx(A,{}),e.jsxs(l,{spacing:3,sx:{p:3},children:[e.jsx(h.Text,{name:"name",label:"Tên loại sản phẩm *"}),f?e.jsx(G,{}):e.jsxs(h.Select,{native:!0,name:"parentId",label:"Loại sản phẩm cấp 1",InputLabelProps:{shrink:!0},children:[e.jsx("option",{value:"",children:"Không có"},""),x.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]})]}),L=e.jsx(l,{spacing:3,direction:"row",alignItems:"center",flexWrap:"wrap",children:e.jsx(z,{type:"submit",variant:"contained",size:"large",loading:b,children:s?"Lưu thay đổi":"Thêm loại sản phẩm"})});return e.jsx(k,{methods:n,onSubmit:j,children:e.jsxs(l,{spacing:{xs:3,md:5},sx:{mx:"auto",maxWidth:{xs:720,xl:880}},children:[I,L]})})}export{X as C};
