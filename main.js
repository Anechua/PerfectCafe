(()=>{"use strict";const e=document.querySelector(".catalog__list"),t=document.querySelector("#cafe").content.querySelector(".catalog__item"),r=e=>{const t=new URL(window.location);t.searchParams.set("id",e),window.history.pushState(null,"",t.toString())},c=(e,t)=>{const r=e.cloneNode(!0);return((e,t)=>{const{name:r,address:c,landmark:n,cuisine:o,distance:a,time:l,photo:d,business_lunch:s,price:i}=t;e.querySelector(".card__picture").src=d,e.querySelector(".card__picture").alt=r,e.querySelector(".card__name").textContent=r,e.querySelector(".card__address").textContent=c,e.querySelector(".card__distance").textContent=`${a}м`,e.querySelector(".card__landmark").textContent=`Ориентир: ${n}`,e.querySelector(".card__cuisine").textContent=`Кухня: ${o}`,e.querySelector(".card__time").textContent=`${l} мин`,s?(e.querySelector(".card__price").style="display: block",e.querySelector(".card__lunch").textContent="Бизнес-ланч: есть",e.querySelector(".card__price").textContent=`Стоимость бизнес-ланча: ${i} р.`):(e.querySelector(".card__lunch").textContent="Бизнес-ланч: нет",e.querySelector(".card__price").style="display: none")})(r,t),r},n=document.querySelector(".modal"),o=document.querySelector("#modal").content.querySelector(".modal__card"),a=n.querySelector(".modal__close-button"),l=()=>{n.querySelector(".modal__card-container").innerHTML=""},d=()=>{n.classList.add("modal--close"),l(),(()=>{const e=new URL(window.location);e.searchParams.delete("id"),window.history.pushState(null,"",e.toString())})(),document.removeEventListener("keydown",i)},s=e=>{e.preventDefault(),d()};function i(e){(e=>"Escape"===e.key)(e)&&d()}const u=(e,t)=>{const l=t(e),d=c(o,l);return n.querySelector(".modal__card-container").append(d),((e,t)=>{a.addEventListener("click",s),document.addEventListener("keydown",i),e.querySelector(".card__share-button").addEventListener("click",(e=>{e.preventDefault(),r(t)}))})(d,l.id),n.classList.remove("modal--close"),d},_=document.querySelector(".header__random"),y=e=>{const t=e.slice();return(r=t)[((e,t)=>{if(t>=0){const e=Math.min(0,t),r=Math.max(0,t);return Math.floor(Math.random()*(r-e))+e}return NaN})(0,r.length-1)];var r},S=e=>{const t=u(e,y);t.querySelector(".card__catalog-button").style="display: none",((e,t)=>{e.querySelector(".card__random-button").addEventListener("click",(()=>{l(),S(t)}))})(t,e)},m=e=>{const t=parseInt(new URLSearchParams(window.location.search).get("id"),10);return e.slice().find((e=>e.id===t))},q=n=>{const o=n.slice();(n=>{let o=n.slice();e.append(...o.map((e=>{const n=c(t,e);return((e,t)=>{const c=e.querySelector(".card__details-button"),n=e.querySelector(".card__share-button");c.addEventListener("click",(t=>{var r,n;t.preventDefault(),n=c,(r=e).querySelector(".card").classList.contains("card--large")?((e,t)=>{e.querySelector(".card").classList.remove("card--large"),t.textContent="Подробнее"})(r,n):((e,t)=>{e.querySelector(".card").classList.add("card--large"),t.textContent="Свернуть"})(r,n)})),n.addEventListener("click",(e=>{e.preventDefault(),r(t)}))})(n,e.id),n})))})(o),(e=>{_.addEventListener("click",(t=>{t.preventDefault(),S(e)}))})(o),(e=>{const t=e.slice(),r=u(t,m);r.querySelector(".card__random-button").style="display: none",r.querySelector(".card__catalog-button").style="display: block",(e=>{e.querySelector(".card__catalog-button").addEventListener("click",(()=>{d()}))})(r)})(o)};var p;p=e=>{const t=e.data;q(t)},fetch("https://bandaumnikov.ru/api/test/site/get-index").then((e=>e.json())).then((e=>p(e)))})();