var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("9fLg1"),r("cQGr2");var n=r("eLqhd");const s=function(e,t){const o=document.querySelectorAll(".read"),r=(new Date).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"}).replaceAll(".","/");o.forEach((o=>{if(e.target===o){const e={category:o.closest(".set").childNodes[3].childNodes[5].innerText,photo:o.closest(".set").childNodes[3].firstElementChild.src,date:o.closest(".wrapper").firstElementChild.innerText,url:o.href,title:o.closest(".set").childNodes[5].innerText,abstract:o.closest(".set").childNodes[7].innerText,id:o.closest(".set").dataset.id,readDate:r};for(const o of t)if(o.id===e.id)return;const s=o.closest(".set").firstElementChild,i=o.closest(".set").childNodes[3].childNodes[3];s.classList.remove("noActive-over"),s.classList.add("active-over"),i.classList.remove("noActive-rmBtn"),i.classList.add("active-rmBtn"),t.push(e),(0,n.setStorage)("readNews",t)}}))};n=r("eLqhd");var i=r("6eyJa");let a=[];a=(0,n.getStorage)("readNews")?[...(0,n.getStorage)("readNews")]:[];const d=document.querySelector(".list-news");let c=localStorage.getItem("ID-SAVE-FAVORITE"),l=JSON.parse(c)||[];function u(){l.map((e=>{d.querySelectorAll(".set").forEach((t=>{t.dataset.id===e.id&&(t.querySelector(".js-button_favorites").setAttribute("checked","true"),t.querySelector(".js-button_favorites").classList.add("add"),t.querySelector(".icon").classList.add("add"),t.querySelector("lable").innerHTML="Remove From Favorite")}))}))}d.addEventListener("click",(e=>{!function(e){if(!e.target.classList.contains("button"))return;if(e.target.classList.contains("add")){const t=+l.findIndex((t=>t.idLenght===+e.target.attributes[2].value));l.splice(t,1),localStorage.setItem("ID-SAVE-FAVORITE",JSON.stringify(l)),e.target.parentNode.parentNode.parentNode.remove()}}(e),s(e,a)})),function(e){if(console.log(c),l.length){let t=e.map((({url:e,media:t,title:o,abstract:r,date:n,photo:s,id:a,idLenght:d,category:c})=>(0,i.markUpPage)(s,o,r,n,e,c,a,d))).join("");d.insertAdjacentHTML("beforeend",t)}else{console.log("hello");document.querySelector(".not-found").classList.remove("not-found-hidden")}}(l),function(e){e();const t=document.querySelectorAll(".set"),o=(0,n.getStorage)("readNews");o&&t.forEach((e=>{for(let t=0;t<o.length;t++){const r=o[t];if(e.dataset.id===r.id){const t=e.childNodes[3].childNodes[3],o=e.firstElementChild;o.classList.add("active-over"),o.classList.remove("noActive-over"),t.classList.remove("noActive-rmBtn"),t.classList.add("active-rmBtn")}}}))}(u);var f=r("iQIUW"),h=r("icTnc");n=r("eLqhd"),i=r("6eyJa");h.searchForm.addEventListener("submit",(function(e){e.preventDefault();const t=e.target.search.value.trim().toLowerCase();if(!t)return function(e){if(window.matchMedia("(max-width: 767px)").matches)return;f.Notify.info(e)}("What would you like to find?");(function(e){let t="ID-SAVE-FAVORITE";const o=document.querySelector(".list-news");o.innerHTML="";const r=(0,n.getStorage)(t).filter((t=>t.title.toLowerCase().includes(e)));s=r,h.notFound.classList.add("not-found-hidden"),0===s.length&&h.notFound.classList.remove("not-found-hidden"),function(e,t){const o=e.map((({photo:e,title:t,abstract:o,date:r,url:n,category:s,id:a,idLenght:d})=>(0,i.markUpPage)(e,t,o,r,n,s,a,d))).join("");t.innerHTML=o}(r,o),u();var s})(t),e.currentTarget.reset()}));
//# sourceMappingURL=favorite.59f8d76e.js.map
