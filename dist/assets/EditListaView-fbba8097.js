import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,o,c as n,d as e,t as c,g as h,p as f,h as v,e as x,f as p,F as l,b as y,i as g}from"./index-68fe578a.js";const d=t=>(f("data-v-817f04ad"),t=t(),v(),t),b={class:"mb-4"},k={class:"card text-dark card-has-bg click-col",style:{"background-image":"url('https://source.unsplash.com/600x900/?tech,street')"}},S=d(()=>e("img",{class:"card-img d-none",src:"https://source.unsplash.com/600x300/?tech,street",alt:"Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"},null,-1)),$={class:"card-img-overlay d-flex flex-column"},I={class:"card-body"},N={class:"card-meta mb-2"},q={class:"card-title mt-0"},B={class:"text-dark",herf:"https://creativemanner.com"},C=d(()=>e("i",{class:"far fa-clock"},null,-1)),L={class:"card-footer"},w={class:"media"},V=d(()=>e("img",{class:"mr-3 rounded-circle",src:"https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80",alt:"Generic placeholder image",style:{"max-width":"50px"}},null,-1)),j={class:"media-body"},D={class:"my-0 text-dark d-block"},F={__name:"itemComponent",props:{id:{type:Number,required:!0},name:{type:String,required:!0},comprado:{type:Boolean,required:!0},cantidad:{type:Number,required:!0}},setup(t){const s=t,a=m("Descricción no trabajada aún");return(i,u)=>(o(),n("div",b,[e("div",k,[S,e("div",$,[e("div",I,[e("small",N,c(s.name),1),e("h4",q,[e("a",B,c(a.value),1)]),e("small",null,[C,h(" "+c(s.cantidad),1)])]),e("div",L,[e("div",w,[V,e("div",j,[e("h6",D,c(s.name),1),e("small",null,c(s.comprado),1)])])])])])]))}},E=_(F,[["__scopeId","data-v-817f04ad"]]),A={},G={class:"position-fixed end-0 bottom-0 m-5"};function M(t,s){return o(),n("div",G," 20.20€ ")}const P=_(A,[["render",M]]),T={class:"d-flex justify-content-center"},z={class:"m-3 p-3"},H={class:"display-3 text-center"},J={class:"display-5 text-center"},K={class:"d-flex justify-content-center flex-column"},O={__name:"ListaComponent",props:{id:{type:String,required:!0}},setup(t){const s=t,a=m({});return a.value=x.getters.getListaById(Number.parseInt(s.id)),(i,u)=>(o(),n(l,null,[p(P),e("div",T,[e("div",z,[e("h3",H,c(a.value.listName),1),e("h5",J,c(a.value.descripcion),1),e("div",K,[(o(!0),n(l,null,y(a.value.items,r=>(o(),g(E,{key:a.value.id,id:r.id,name:r.name,comprado:r.comprado,cantidad:r.cantidad},null,8,["id","name","comprado","cantidad"]))),128))])])])],64))}},U={__name:"EditListaView",props:{id:{type:String,required:!0}},setup(t){const s=t;return(a,i)=>(o(),n("div",null,[p(O,{id:s.id},null,8,["id"])]))}};export{U as default};
