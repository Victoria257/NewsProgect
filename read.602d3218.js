!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("4vdsI"),r("8jECO");var a=r("bpWze"),o=r("aDyNI"),i=r("7rHhr"),s=(i=r("7rHhr"),"ID-SAVE-FAVORITE"),d=localStorage.getItem("ID-SAVE-FAVORITE"),l=JSON.parse(d)||[],c=0,u=function(e){e.target.classList.contains("button")&&(e.target.classList.contains("add")?function(e){var t=e.target.closest(".set").attributes[1].value;l.map((function(n){if(t===n.id){var r=l.map((function(e){return e.id})).indexOf(t);return console.log(r),l.splice(r,1),localStorage.setItem(s,JSON.stringify(l)),e.target.parentNode.childNodes[1].innerHTML="Add To Favorite",e.target.classList.remove("add"),void e.target.parentNode.childNodes[3].classList.remove("add")}}))}(e):h(e))};var f,h=function(e){var t={photo:e.target.closest(".thumb").childNodes[1].attributes[1].value,date:e.target.closest(".set").childNodes[9].childNodes[1].innerText,url:e.target.closest(".set").childNodes[9].childNodes[3].attributes[0].value,title:e.target.closest(".set").childNodes[5].innerText,abstract:e.target.closest(".set").childNodes[7].innerText,idLenght:c,id:e.target.closest(".set").attributes[1].value,category:e.target.closest(".thumb").childNodes[5].innerText};l.push(t),localStorage.setItem(s,JSON.stringify(l)),e.target.parentNode.childNodes[3].classList.add("add"),e.target.classList.add("add"),e.target.parentNode.childNodes[1].innerHTML="Remove From Favorite",c+=1},g=function(e){l.map((function(t){e.querySelectorAll(".set").forEach((function(e){e.dataset.id===t.id&&(e.querySelector(".js-button_favorites").setAttribute("checked","true"),e.querySelector(".js-button_favorites").classList.add("add"),e.querySelector(".icon").classList.add("add"),e.querySelector("lable").innerHTML="Remove From Favorite")}))}))},v=function(){0!==l.length&&(c=l[l.length-1].idLenght+1||0)},b=null,m=function(e){var t={};if(!e)return;for(var n=0;n<e.length;n+=1){var r=e[n].readDate,a=e[n];t[r]?t[r].push(a):t[r]=[a]}return t}((0,a.getStorage)("readNews"));function p(e){return e.map((function(e){var t=e.photo,n=e.title,r=e.abstract,a=e.date,i=e.url,s=e.category,d=e.id,l=e.idLenght;return(0,o.markUpPage)(t,n,r,a,i,s,d,l)})).join("")}m?(f=m,Object.keys(f).forEach((function(e){var t="<div class='date-card'>\n  <button class='date-btn'><span class='date-btn__text'>".concat(e,'</span><span class=\'read_icon\'>\n  <svg class="date-btn___arrow" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg >\n  </span>\n  </button>\n   <div id=\'dateNowList\' class=\'list-news dates\'></div>\n  </div>');i.readNewsDateContainer.insertAdjacentHTML("beforeend",t)})),document.querySelectorAll(".date-btn").forEach((function(e){b=e.nextSibling.nextSibling;var t=e.firstElementChild.innerText,n=Object.keys(m),r=!0,a=!1,o=void 0;try{for(var i,s=n[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var d=i.value;d===t&&(b.innerHTML=p(m[d]),v(),document.querySelectorAll("#dateNowList").forEach((function(e){g(e),e.addEventListener("click",u)})))}}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}e.addEventListener("click",(function(){console.log(e.lastElementChild.firstElementChild),e.lastElementChild.firstElementChild.classList.toggle("arrow_rotate"),e.nextSibling.nextSibling.classList.toggle("show");var t=document.querySelector("#dateNowList");console.log(t),t.addEventListener("click",u)}))}))):i.notFound.classList.remove("not-found-hidden");var L=r("h6c0i");i=r("7rHhr"),a=r("bpWze"),o=r("aDyNI");focusable="true",focusableInTouchMode="true";var y=document.querySelector(".header-form__btn");i.searchForm.addEventListener("submit",(function(e){e.preventDefault(),i.input.blur(),y.focus();var t=e.target.search.value.trim().toLowerCase();if(!t)return function(e){if(window.matchMedia("(max-width: 767px)").matches)return;L.Notify.info(e)}("What would you like to find?");(function(e){var t="readNews";i.readNewsDateContainer.innerHTML="";var n=document.querySelector(".read-list-news"),r=(0,a.getStorage)(t).filter((function(t){return t.title.toLowerCase().includes(e)}));s=r,i.notFound.classList.add("not-found-hidden"),0===s.length&&i.notFound.classList.remove("not-found-hidden"),function(e,t){var n=e.map((function(e){var t=e.photo,n=e.title,r=e.abstract,a=e.date,i=e.url,s=e.category,d=e.id,l=e.idLenght;return(0,o.markUpPage)(t,n,r,a,i,s,d,l)})).join("");t.innerHTML=n}(r,n),g(n),n.addEventListener("click",u);var s})(t),e.currentTarget.reset()})),v()}();
//# sourceMappingURL=read.602d3218.js.map