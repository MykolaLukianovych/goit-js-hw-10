import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as d}from"./assets/vendor-BbSUbo7J.js";const c=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let i=null,a=null;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(i=t,r.disabled=!1)}};y("#datetime-picker",q);function w(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}function u({days:e,hours:t,minutes:n,seconds:s}){p.textContent=o(e),S.textContent=o(t),D.textContent=o(n),b.textContent=o(s)}function C(){r.disabled=!0,c.disabled=!0,a=setInterval(()=>{const t=i-new Date;if(t<=0){clearInterval(a),u({days:0,hours:0,minutes:0,seconds:0}),c.disabled=!1,d.success({title:"Success",message:"Countdown completed!"});return}const n=w(t);u(n)},1e3)}r.addEventListener("click",C);
//# sourceMappingURL=1-timer.js.map
