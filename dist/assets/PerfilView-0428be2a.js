import{o as e,c as l,d as o,_ as s,n,s as i,l as r}from"./index-68fe578a.js";const a={class:"d-flex m-auto"},c=o("div",{class:"w-50 d-flex"},[o("img",{class:"img-fluid",src:s})],-1),d=n('<div class="form-control"><input class="input-control" type="text" id="inNombre"><label class="input-control" for="inNombre">Nombre </label></div><div class="form-control"><input class="input-control" type="text" id="inNombre"><label class="input-control" for="apellido">Nombre</label></div><div class="form-control"><input class="input-control" type="text" id="inNombre"><label class="input-control" for="inNombre">Nombre</label></div><div class="form-control"><input class="input-control" type="text" id="inNombre"><label class="input-control" for="inNombre">Nombre</label></div>',4),f={__name:"PerfilView",setup(p){function t(){i.dispatch("logout").then(()=>{r.push({name:"login"})})}return(u,m)=>(e(),l("div",a,[o("div",{class:"d-flex mt-3 justify-content-center gap-3 flex-wrap"},[c,o("div",{class:"d-flex flex-column gap-3"},[d,o("button",{class:"btn btn-outline-danger",onClick:t},"Cerrar Sesion")])])]))}};export{f as default};
