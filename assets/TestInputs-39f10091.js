import{d as r,u as O,a as f,c as V,o,b as u,r as b,n as h,e as a,_ as v,f as D,w as J,g as E,h as K,i as $,j as l,k as c,l as S,F as k,m as Q,p as F,t as w,q as _,E as R,s as W,v as X,x as Y,y as Z,z as ee,A as te,B as ne,I as B,C as T,D as N,G as se,H as oe}from"./index-31ef6525.js";const le=r({name:"ElContainer"}),ae=r({...le,props:{direction:{type:String}},setup(i){const n=i,s=O(),t=f("container"),p=V(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:s&&s.default?s.default().some(y=>{const d=y.type.name;return d==="ElHeader"||d==="ElFooter"}):!1);return(m,y)=>(o(),u("section",{class:h([a(t).b(),a(t).is("vertical",a(p))])},[b(m.$slots,"default")],2))}});var ce=v(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const re=r({name:"ElAside"}),ie=r({...re,props:{width:{type:String,default:null}},setup(i){const n=i,s=f("aside"),t=V(()=>n.width?s.cssVarBlock({width:n.width}):{});return(p,m)=>(o(),u("aside",{class:h(a(s).b()),style:D(a(t))},[b(p.$slots,"default")],6))}});var H=v(ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const pe=r({name:"ElFooter"}),de=r({...pe,props:{height:{type:String,default:null}},setup(i){const n=i,s=f("footer"),t=V(()=>n.height?s.cssVarBlock({height:n.height}):{});return(p,m)=>(o(),u("footer",{class:h(a(s).b()),style:D(a(t))},[b(p.$slots,"default")],6))}});var U=v(de,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const ue=r({name:"ElHeader"}),me=r({...ue,props:{height:{type:String,default:null}},setup(i){const n=i,s=f("header"),t=V(()=>n.height?s.cssVarBlock({height:n.height}):{});return(p,m)=>(o(),u("header",{class:h(a(s).b()),style:D(a(t))},[b(p.$slots,"default")],6))}});var A=v(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const _e=r({name:"ElMain"}),fe=r({..._e,setup(i){const n=f("main");return(s,t)=>(o(),u("main",{class:h(a(n).b())},[b(s.$slots,"default")],2))}});var M=v(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const be=J(ce,{Aside:H,Footer:U,Header:A,Main:M});E(H);E(U);const he=E(A),ve=E(M);const ye=_("h1",{class:"text-2xl"},"Test Vue Components",-1),ge=_("h2",{class:"text-xl"},"Input types",-1),xe={class:"pl-2 flex flex-nowrap"},ke=["onUpdate:modelValue"],Te={__name:"TestInputs",setup(i){const n=[{"@id":"txc:ElicitationTask","@type":"DefinedTerm",description:"The collection protocol includes a task-based prompt to participants",inDefinedTermSet:{"@id":"txc:CollectionProtocolTypeTerms"},name:"ElicitationTask"},{"@id":"txc:TextSelectionCriteria","@type":"DefinedTerm",description:"A description of the criteria used to select texts in a collection",inDefinedTermSet:{"@id":"txc:CollectionProtocolTypeTerms"},name:"TextSelectionCriteria"},{"@id":"#testid",name:"Test",description:"Test description"}];n.map(d=>({value:d,label:d.name}));const s=[{label:"time",component:B,props:{type:"time"}},{label:"date",component:B,props:{type:"date"}},{label:"datetime",component:B,props:{type:"datetime"}},{label:"number",component:T,props:{type:"number"}},{label:"text",component:T,props:{type:"text"}},{label:"textarea",component:T,props:{type:"textarea"}},{label:"url",component:T,props:{type:"url"}},{label:"select",component:N,props:{options:["aaa","abc","bbbb","bbc"]}},{label:"selectobject",component:N,props:{options:n}},{label:"boolean",component:"el-checkbox",props:{border:!0}}],t=K({test:"a",datetime:"",values:{},form:{},select:null,options:[{name:"a",desc:"da",test:1},{name:"b",desc:"db",test:2},{name:"cc",desc:"dc",test:3}],items:["aaabbb","cccddd","sadfdsaf","eqwrds","xcvds","bbbbb","bbdfdasd","asdfdsf","gewrdsf","asdfsa","fgddaf","sgfdsg"]});window.data=t;function p(){}function m(d){}function y(d){window.alert(d)}return(d,g)=>{const z=he,C=R,I=se,P=W,j=oe,q=X,G=ve,L=be;return o(),$(L,null,{default:l(()=>[c(z,null,{default:l(()=>[ye]),_:1}),c(G,null,{default:l(()=>[ge,c(P,{"label-width":"auto",novalidate:""},{default:l(()=>[(o(),u(k,null,S(s,e=>(o(),u(k,{key:e},[c(I,{label:e.label},{default:l(()=>[(o(),$(Y(e.component),Z({class:"flex-grow",modelValue:t.values[e.label],"onUpdate:modelValue":x=>t.values[e.label]=x},e.props),null,16,["modelValue","onUpdate:modelValue"])),_("div",xe,[c(C,{onClick:p,type:"danger",plain:"",icon:a(ee)},null,8,["icon"]),c(C,null,{default:l(()=>[F(" Test ")]),_:1})])]),_:2},1032,["label"]),c(I,null,{default:l(()=>[te(_("input",{type:"text","onUpdate:modelValue":x=>t.values[e.label]=x},null,8,ke),[[ne,t.values[e.label]]])]),_:2},1024)],64))),64))]),_:1}),(o(),u(k,null,S(10,e=>_("div",null,w(e),1)),64)),c(q,{modelValue:t.select,"onUpdate:modelValue":g[0]||(g[0]=e=>t.select=e),"value-key":"name",onChange:m},{default:l(()=>[(o(!0),u(k,null,S(t.options,e=>(o(),$(j,{key:e.name,value:e,label:e.name},{default:l(()=>[F(w(e.name)+" - "+w(e.desc),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"]),c(Q,{modelValue:t.items,"onUpdate:modelValue":g[1]||(g[1]=e=>t.items=e)},{default:l(({index:e})=>[c(C,{onClick:x=>y(t.items[e])},{default:l(()=>[F(w(t.items[e]),1)]),_:2},1032,["onClick"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};export{Te as default};
