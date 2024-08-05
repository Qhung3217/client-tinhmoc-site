import{r as s,j as e,w as l,b0 as m,h as c,T as d,H as p,l as u}from"./index-u4c5uTy0.js";import{E as h}from"./editor-Dm0D5q3G.js";import{M as x}from"./markdown-dOsybbtG.js";import{C as f}from"./custom-breadcrumbs-IydSAGRK.js";import{C}from"./component-hero-D-RhbPvf.js";import{C as g}from"./component-block-B_Xl4fgM.js";import{C as j}from"./Card-Ro7Utuy1.js";import{F as k}from"./FormControlLabel-ClSICk_D.js";import"./index-DQGwjOSW.js";import"./html-to-markdown-BZygC5Mi.js";import"./image-I9HL7nG0.js";import"./Link-BJNZ9OZB.js";const b=`

<h4>This is Heading 4</h4>
<code>This is code</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>
`;function z(){const[r,a]=s.useState(!0),[o,i]=s.useState(b),n=t=>{a(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(f,{heading:"Editor",links:[{name:"Components",href:l.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(g,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(j,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(m,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(h,{fullItem:r,value:o,onChange:t=>i(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(x,{children:o})]})]})]})}const E={title:`Editor | Components - ${u.site.name}`};function M(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs("title",{children:[" ",E.title]})}),e.jsx(z,{})]})}export{M as default};
