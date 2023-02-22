const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;let o;t.addEventListener("click",(function(){o=setInterval((function(){const t=Math.floor(16777215*Math.random()).toString(16);n.style.backgroundColor="#"+t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.5bb46dd7.js.map
