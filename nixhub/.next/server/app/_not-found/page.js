(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},1348:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>h,routeModule:()=>c,tree:()=>d});var s=r(260),n=r(8203),a=r(5155),o=r.n(a),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8141)),"C:\\Users\\Guilherme\\Desktop\\Main VSCODE\\nixHub\\nixhub\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],h=[],u={require:r,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},294:(e,t,r)=>{Promise.resolve().then(r.bind(r,6749)),Promise.resolve().then(r.bind(r,8348)),Promise.resolve().then(r.t.bind(r,9607,23))},30:(e,t,r)=>{Promise.resolve().then(r.bind(r,6705)),Promise.resolve().then(r.bind(r,4176)),Promise.resolve().then(r.t.bind(r,8531,23))},6466:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},4618:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,4141,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6705:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(5512),n=r(8531),a=r.n(n),o=r(9334);let i=[{name:"home",path:"/"},{name:"services",path:"/services"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"contact",path:"/contact"}],l=()=>{let e=(0,o.usePathname)();return(0,s.jsx)("nav",{className:"flex gap-8",children:i.map((t,r)=>(0,s.jsx)(a(),{href:t.path,className:`${t.path===e&&"text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`,children:t.name},r))})}},4176:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(5512),n=r(9254),a=r(5598),o=r(9334);let i=({children:e})=>{let t=(0,o.usePathname)();return(0,s.jsx)(n.N,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(a.P.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none"}),e]},t)})}},8141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g,metadata:()=>f});var s=r(2740),n=r(3781),a=r.n(n);r(2704);var o=r(9607),i=r.n(o),l=r(6301),d=r(7606),h=r(7699),u=r(3673),c=r(7317);let m=(0,h.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=l.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...a},o)=>{let i=n?d.DX:"button";return(0,s.jsx)(i,{className:function(...e){return(0,c.QP)((0,u.$)(e))}(m({variant:t,size:r,className:e})),ref:o,...a})});p.displayName="Button";var x=r(6749);let v=()=>(0,s.jsx)("header",{className:"py-8 xl:py-12 text-white",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsxs)("h1",{className:"text-4xl font-semibold",children:["Guilherme",(0,s.jsx)("span",{className:"text-accent",children:"."})]})}),(0,s.jsxs)("div",{className:"hidden xl:flex items-center gap-8",children:[(0,s.jsx)(x.default,{}),(0,s.jsx)(i(),{href:"/contact",children:(0,s.jsx)(p,{children:"Hire me"})})]}),(0,s.jsx)("div",{className:"xl:hidden",children:"mobile nav"})]})});var b=r(8348);let f={title:"Create Next App",description:"Generated by create next app"};function g({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${a().variable} antialiased`,children:[(0,s.jsx)(v,{}),(0,s.jsx)(b.default,{children:e}),e]})})}},6749:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Guilherme\\\\Desktop\\\\Main VSCODE\\\\nixHub\\\\nixhub\\\\components\\\\Nav.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Guilherme\\Desktop\\Main VSCODE\\nixHub\\nixhub\\components\\Nav.jsx","default")},8348:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Guilherme\\\\Desktop\\\\Main VSCODE\\\\nixHub\\\\nixhub\\\\components\\\\PageTransition.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Guilherme\\Desktop\\Main VSCODE\\nixHub\\nixhub\\components\\PageTransition.jsx","default")},2704:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,488],()=>r(1348));module.exports=s})();