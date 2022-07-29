"use strict";(self.webpackChunkdartgm_vue=self.webpackChunkdartgm_vue||[]).push([[585],{1207:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(7537),i=t.n(o),r=t(3645),s=t.n(r)()(i());s.push([e.id,".index-container[data-v-0b304665]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;position:fixed;top:0}.index-footer[data-v-0b304665]{display:fixed;margin-bottom:10px;bottom:0;font-size:.7rem}.index-title[data-v-0b304665]{margin-top:1rem;font-size:1.3rem;font-weight:bold}.index-logo[data-v-0b304665]{width:5rem;height:5rem;margin-top:3rem}.index-desc[data-v-0b304665]{margin-top:1rem;font-size:1rem}.index-theme-config[data-v-0b304665]{width:10rem;margin-top:1rem;display:flex;flex-direction:row;align-items:center;justify-content:space-around}.index-theme-config .theme-config-item[data-v-0b304665]{width:1rem;height:1rem;border-radius:50%;border:2px solid #fff}.index-menu-choose[data-v-0b304665]{width:20rem;margin-top:1rem;display:flex;flex-direction:row;align-items:center;justify-content:space-around}.index-menu-choose .menu-choose-item[data-v-0b304665]{display:flex;flex-direction:column;justify-content:center;align-items:center;transform:1s ease-out;border-bottom:2px solid transparent;line-height:2rem;transition:.5s ease-in-out}.index-menu-choose .menu-choose-item[data-v-0b304665]:hover{border-bottom:2px solid #fff}\n","",{version:3,sources:["webpack://./src/view/index.vue"],names:[],mappings:"AACA,kCACE,UAAW,CACX,WAAY,CACZ,YAAa,CACb,qBAAsB,CACtB,kBAAmB,CACnB,cAAe,CACf,KAAM,CACP,+BAEC,aAAc,CACd,kBAAmB,CACnB,QAAS,CACT,eAAgB,CACjB,8BAEC,eAAgB,CAChB,gBAAiB,CACjB,gBAAiB,CAClB,6BAEC,UAAW,CACX,WAAY,CACZ,eAAgB,CACjB,6BAEC,eAAgB,CAChB,cAAe,CAChB,qCAEC,WAAY,CACZ,eAAgB,CAChB,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,4BAA6B,CAN/B,wDAQI,UAAW,CACX,WAAY,CACZ,iBAAkB,CAClB,qBAAsB,CACvB,oCAGD,WAAY,CACZ,eAAgB,CAChB,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,4BAA6B,CAN/B,sDAQI,YAAa,CACb,qBAAsB,CACtB,sBAAuB,CACvB,kBAAmB,CACnB,qBAAsB,CACtB,mCAAoC,CACpC,gBAAiB,CACjB,0BAA2B,CAf/B,4DAkBI,4BAA6B",sourcesContent:["\n.index-container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 0;\n}\n.index-footer{\n  display: fixed;\n  margin-bottom: 10px;\n  bottom: 0;\n  font-size: .7rem;\n}\n.index-title{\n  margin-top: 1rem;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n.index-logo{\n  width: 5rem;\n  height: 5rem;\n  margin-top: 3rem;\n}\n.index-desc{\n  margin-top: 1rem;\n  font-size: 1rem;\n}\n.index-theme-config{\n  width: 10rem;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  .theme-config-item{\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    border: 2px solid #fff;\n  }\n}\n.index-menu-choose{\n  width: 20rem;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  .menu-choose-item{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transform: 1s ease-out;\n    border-bottom: 2px solid transparent;\n    line-height: 2rem;\n    transition: .5s ease-in-out;\n  }\n  .menu-choose-item:hover{\n    border-bottom: 2px solid #fff;\n  }\n}\n"],sourceRoot:""}]);const A=s},2585:(e,n,t)=>{t.r(n),t.d(n,{default:()=>q});var o=t(6252),i=t(3577);const r=t.p+"logo-dartgm.png",s=e=>((0,o.dD)("data-v-0b304665"),e=e(),(0,o.Cn)(),e),A={class:"index-container",style:{}},a=s((()=>(0,o._)("section",{class:"index-logo"},[(0,o._)("img",{src:r,alt:"this is logo"})],-1))),m=s((()=>(0,o._)("section",{class:"index-title"},"自由编程协会简历生成软件",-1))),d=s((()=>(0,o._)("section",{class:"index-desc"},"一个模板制作简历的软件平台,让你的简历更加出众 ~",-1))),l={class:"index-theme-config"},c=["onClick"],C={class:"index-menu-choose"},g=s((()=>(0,o._)("footer",{class:"index-footer"},null,-1)));var h=t(2262),B=t(920);const u=(0,o.aZ)({setup(e,n){const t=(0,h.qj)({colors:[{name:"grg_main_theme",color:"#27292d"},{name:"grg_deepblue_theme",color:"#39485c"},{name:"grg_green_theme",color:"#4d705d"},{name:"grg_purple_theme",color:"#545667"},{name:"grg_accountred_theme",color:"#8d5a57"}],menus:[{path:"/",name:"介绍"},{path:"/resume",name:"简历"},{path:"/template",name:"模板"},{path:"/sourceCode",name:"源码"}]});return{...(0,h.BK)(t),handleConfigClick:e=>{document.querySelector(":root").style.setProperty("--grg_main_theme",`${e.color}`)},handleMenuChangeClick:e=>{"源码"!=e.name?"模板"!=e.name?B.Z.push(e.path):window.open("https://dartgm.github.io/gm_resume_template.github.io/"):window.open("https://github.com/the-didi")}}}});var f=t(3379),p=t.n(f),x=t(7795),b=t.n(x),w=t(569),k=t.n(w),_=t(3565),v=t.n(_),y=t(9216),j=t.n(y),Z=t(4589),Y=t.n(Z),D=t(1207),W={};W.styleTagTransform=Y(),W.setAttributes=v(),W.insert=k().bind(null,"head"),W.domAPI=b(),W.insertStyleElement=j(),p()(D.Z,W),D.Z&&D.Z.locals&&D.Z.locals;const q=(0,t(3744).Z)(u,[["render",function(e,n,t,r,s,h){const B=(0,o.up)("seciton");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",A,[a,m,d,(0,o._)("section",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.colors,((n,t)=>((0,o.wg)(),(0,o.iD)("section",{onClick:t=>e.handleConfigClick(n),key:t,class:"theme-config-item",style:(0,i.j5)({background:n.color})},null,12,c)))),128))]),(0,o._)("section",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menus,((n,t)=>((0,o.wg)(),(0,o.j4)(B,{onClick:t=>e.handleMenuChangeClick(n),key:t,class:"menu-choose-item"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(n.name),1)])),_:2},1032,["onClick"])))),128))])]),g],64)}],["__scopeId","data-v-0b304665"]])}}]);
//# sourceMappingURL=585.main.js.map