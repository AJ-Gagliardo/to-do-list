(()=>{"use strict";var n={621:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,":root{\n    /* background-color:black; */\n    /* color:whitesmoke; */\n   margin:0;\n}\n\n@media only screen and (max-width: 600px) {\n\n#rightSide, #header{\n    padding-right: 2%;\n}\n\n#taskMenu, #description{\n    margin-right: 2rem;\n}\n\n#addProjectBtn{\n    margin-right: 1rem;\n}\n\n}\n\nbody{\n    margin:0;\n    padding:0;\n}\n\n\nh1{\n    font-size: 2.2rem;\n}\n\nh2{\n    font-size: 2rem;\n\n}\n\nh3{\n    font-size: 1.7rem;\n}\n\np{\n    font-size: 1.3rem;\n}\n\n\n.taskName, .projectName, .projectsTitle, .tasksTitle, .tasksSubtitle, .projectName, {\n\n    padding: 1rem;\n    margin:0;\n\n\n}\n\n#theme{\n    height:2rem;\n    width:2rem;\n    /* background-color:white; */\n    margin-right: 1rem;\n    margin-left:1rem;\n\n}\n\n#theme{\n    filter: brightness(0) invert(1) grayscale(1);\n}\n/* .darkThemeImg{\n    filter: brightness(0) invert(1) grayscale(1);\n}\n\n.lightThemeImg{\n    filter: brightness(0) invert(0) grayscale(1);\n} */\n\n#leftNav{\n    display:flex;\n    align-items: center;\n}\n#menuSvg{\n    margin-right: 4px;\n}\n\n#rightNav{\n    display:flex;\n    align-items: center;\n}\n\n.projectsTitle{\n    display:flex;\n    align-items: center;\n  \n}\n\n.projectsTitle svg{\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n.project svg{\n    padding-right: 1rem\n}\n\n.tasksTitle{\n    padding-left: 1rem;\n}\n\n.projectName{\n    \n}\n\n.projectsTitle, .tasksTitle{\n    padding-top:1rem;\n    padding-bottom: 2rem;\n}\n\n.taskSubtitle{\n    padding-top:1rem;\n    padding:1rem;\n\n}\n\n\n\n.container{\ndisplay:grid;\ngrid-template-columns: 1fr 3fr;\n}\n\n#header{\n    grid-column: 1/3;\ndisplay:flex;\njustify-content: space-between;\npadding-left: 1rem;\npadding-right: 2rem;\n\n}\n\n#addProjectBtn{\n    background-color: transparent;\n    /* color:whitesmoke; */\n    border: none;\n    font-size: 1rem;\n\n    /* padding-left: 2rem ; */\n\n}\n\n#addProjectBtn2{\n    padding-left: 2rem;\n}\n/* left Side */\n\n#leftSide{\n    /* background-color: #111827; */\n}\n\n.svgImg{\n    width:2rem;\n    height:2rem;\n\n}\n\n.project{\n    display:flex;\n    align-items: center;\n}\n\n.project:hover{\n   background-color: gray;\n}\n\n.selectedProject{\n    background-color: gray;\n}\n\n\n\n\n/* right side  */\n#rightSide{\n/* background-color: #1f2937; */\nheight:90vh;\n}\n\n.task, .project{\n    display:flex;\n    padding-left: 1rem;\n}\n\n.footer a{\n    color:white;\n\n}\n\n#description{\n    margin-left: 1rem;\n}\n\n.completed{\n\n    text-decoration: line-through;\n    filter:brightness(50%)\n}\n\n.controlBtns{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.addTask{\n    color:green\n}\n\n.removeProject{\n    color:crimson;\n}\n\n\n.addTask:hover, .removeProject:hover, #addProjectBtn:hover, #addProjectBtn2:hover, #theme{\n\n    cursor:pointer;\n    color:goldenrod;\n    /* font-size: 2.2rem; */\n    transition: transform 0.3s;\n    transform: scale(1.20);\n    text-shadow: 2px 2px 4px rgba(253, 252, 252, 0.5);\n\n}\n\n#addProjectBtn:hover{\n    /* color:white; */\n    color:goldenrod;\n}\n\n.addTask, .removeProject{\n    /* margin:1rem; */\n    /* padding:1rem; */\n    \n}\n\n/* dialog */\n\n#projectDialog{\n    width:80%;\n    min-height: 15%;\n    font-size: 1rem;\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n}\n\n#projectDialog::backdrop{\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n/* Footer */\n.footer img{\n    height:2rem;\n    width:2rem;\n}\n\n\n\n\n.githublogo{\n    height:2rem;\n    width:2rem;\n    /* background-color: white; */\n    border-radius: 50%;\n  \n}\n\n.footer{\n    display:flex;\n    align-items:center;\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n    background-color: black;\n   \n}\n.delSvg{\n\n}\n\n.task{\n    display: grid;\n    grid-template-columns: 0.5fr 5fr 1fr;\n    align-content: center;\n    align-items:center ;\n}\n\n.checkbox{\n    height:40%;\n    width:40%;\n}\n\n\n.footer a{\n    margin-top:10px;\n    text-decoration: none ;\n\n    display:flex;\n    align-items:center;\n    }\n\n.footer a:hover{\n    color: #d2d441;\n}\n\n/* Themes */\n\n.lightTheme1{\n    color:black;\n    background-color: #c1c0b9;\n}\n\n.lightTheme2{\n    color:black;\n    background-color: #e7e6e1;\n}\n\n.lightTheme3{\n    color:black;\n    background-color:whitesmoke\n}\n\n\n.darkTheme1{\n  background-color:   #111827;\n  color:whitesmoke;\n\n}\n\n.darkTheme2{\n    background-color: #1f2937;\n    color:whitesmoke\n\n\n}\n\n.darkTheme3{\n\n}\n\n#header{\n    \n    background-color: black;\n    color:white;\n}\n\n#addProjectBtn{\n    color:white;\n}\n\n\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var u=t(m),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:m,updater:p,references:1})}a.push(m)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),c=t.n(a),s=t(56),d=t.n(s),l=t(540),m=t.n(l),u=t(113),g=t.n(u),p=t(621),h={};h.styleTagTransform=g(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m(),e()(p.A,h),p.A&&p.A.locals&&p.A.locals;const f=t.p+"c812e9de77f2a17abd5b.png",v=t.p+"b59201ef2ff446316717.png";let k=[];document.getElementById("header");const b=document.getElementById("menuSvg"),y=document.getElementById("leftSide"),w=document.getElementById("rightSide"),E=document.getElementById("tasksMenu"),x=document.getElementById("description"),T=document.getElementById("projectsMenu"),j=document.getElementById("addProjectBtn"),B=document.getElementById("addProjectBtn2"),L=document.getElementById("projectDialog"),I=document.getElementById("submitProjectBtn"),S=document.getElementById("taskDialog"),A=document.getElementById("addTask"),C=document.getElementById("removeProject"),P=document.getElementById("taskText"),M=document.getElementById("githublogo"),N=document.getElementById("theme");function z(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","svgImg"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("fill","none"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("stroke-width","1.5"),n.setAttribute("stroke","currentColor"),n.setAttribute("class","w-6 h-6"),n.classList.add("svgImg");const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("d","M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"),n.appendChild(e),n}function D(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","svgImg"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("fill","none"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("stroke-width","1.5"),n.setAttribute("stroke","currentColor"),n.setAttribute("class","w-6 h-6"),n.classList.add("svgImg"),n.classList.add("delSvg");const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("d","m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"),n.appendChild(e),n}function Z(n,e,t,r){const o={name:n,id:"_"+Math.random().toString(36).substr(2,9),description:e,dueDate:t,tasks:[],addTask:$,removeProject:_,removeTask:R,priority:r};return k.push(o),V(),K(),G(),o}N.src=f,M.src=v,console.log(w),j.addEventListener("click",(()=>{L.showModal()})),B.addEventListener("click",(()=>{L.showModal()})),document.querySelectorAll(".cancelButton").forEach((n=>{n.addEventListener("click",(()=>{L.close()}))}));const O=document.getElementById("projectTitleInput"),H=document.getElementById("projectPriority"),q=document.getElementById("projectDescriptionInput"),F=document.getElementById("submitTaskBtn");function J(n){return k.find((function(e){return e.id===n}))}function $(n){J(U).tasks.push(n),V(),W(),Q()}function _(){k.splice(function(n){for(i=0;i<k.length;i++)if(k[i].id===n)return i}(U),1),V(),K(),G(),W(),x.textContent=""}function R(n,e){k[n].tasks.splice(e,i+1)}let U;function V(){localStorage.setItem("myProjects",JSON.stringify(k))}function K(){T.querySelectorAll(".project").forEach((n=>{T.removeChild(n)}))}function G(){for(let n=0;n<k.length;n++){const e=document.createElement("div");e.classList.add("project");const t=z(),r=document.createElement("h3");r.textContent=k[n].name;const o=k[n].id;e.appendChild(t),e.appendChild(r),e.addEventListener("click",(()=>{console.log(o),U=o,W(),Q()})),T.appendChild(e)}}function Q(){x.textContent=J(U).description;for(let n=0;n<J(U).tasks.length;n++){const e=J(U).tasks,t=document.createElement("div");t.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.classList.add("checkbox"),r.addEventListener("change",(function(){this.checked?o.classList.add("completed"):o.classList.remove("completed")}));const o=document.createElement("p");o.classList.add("taskName"),o.textContent=J(U).tasks[n];const i=D();i.addEventListener("click",(function(){e.splice(n,1),V(),W(),Q()})),t.appendChild(r),t.appendChild(o),t.appendChild(i),E.appendChild(t)}}function W(){document.querySelectorAll(".task").forEach((n=>{E.removeChild(n)}))}I.addEventListener("click",(()=>{Z(O.value,q.value,2014,H.value)})),F.addEventListener("click",(()=>{$(P.value)})),function(){const n=localStorage.getItem("myProjects");n?(k=JSON.parse(n),G(),U=k[0].id,Q()):(Z("Trip to Seoul","Planning a trip to the beautiful city of Seoul in South Korea",2025),U=k[0].id,$("Buy flight ticket"),$("Book hotel"),G(),U=k[0].id,Q())}(),U=k[0].id,C.addEventListener("click",(()=>{_()})),A.addEventListener("click",(()=>{S.showModal()}));let X="light";function Y(){y.classList.toggle("expanded"),y.classList.toggle("collapsed"),y.classList.contains("expanded")?container.style.gridTemplateColumns="0% 100%":container.style.gridTemplateColumns="100% 0%",svg.style.display=y.classList.contains("collapsed")?"block":"none"}N.addEventListener("click",(()=>{"light"===X?(y.classList.remove("lightTheme2"),y.classList.add("darkTheme1"),w.classList.remove("lightTheme3"),w.classList.add("darkTheme2"),X="dark"):"dark"===X&&(y.classList.add("lightTheme2"),y.classList.remove("darkTheme1"),w.classList.add("lightTheme3"),w.classList.remove("darkTheme2"),X="light")})),window.matchMedia("(max-width: 600px)").matches&&(container.style.gridTemplateColumns="0% 100%"),window.matchMedia("(max-width: 600px)").matches?(b.addEventListener("click",Y),y.addEventListener("click",Y)):(b.removeEventListener("click",Y),y.addEventListener("click",Y))})()})();