import{r as n,e as i,a as d,o as a,c as r,b as l,F as _,d as t,t as o,f as m,w as p,g as u}from"./index-68fe578a.js";const h={class:"card-header"},f={class:"card-title"},v={class:"card-body"},x={class:"card-text"},b={__name:"ListasView",setup(y){const s=n([]);return s.value=i.getters.getAllListas,(g,k)=>{const c=d("router-link");return a(!0),r(_,null,l(s.value,e=>(a(),r("div",{key:e.id,class:"card my-2 mx-auto w-50"},[t("div",h,[t("h5",f,o(e.listName),1)]),t("div",v,[t("p",x,o(e.descripcion),1),m(c,{to:{name:"lista",params:{id:e.id}},class:"btn btn-primary"},{default:p(()=>[u("Go somewhere")]),_:2},1032,["to"])])]))),128)}}};export{b as default};