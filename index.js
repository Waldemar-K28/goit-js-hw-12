import{a as f,S as m,i as n}from"./assets/vendor-BAvAuoY_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function p(e){const o="53051578-6e8f28ab3f0bf52fa1c2ada27",s="https://pixabay.com/api/",i={key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(s,{params:i}).then(t=>t.data)}const d=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="info-item"><b>Views:</b> ${e.views}</p>
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `}function h(e,o){const s=e.map(g).join("");o.innerHTML=s,d.refresh()}function y(e){e.innerHTML=""}const u=document.querySelector(".loader");function b(){u.classList.add("is-visible")}function L(){u.classList.remove("is-visible")}const l=document.querySelector(".form"),c=document.querySelector(".gallery");l.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(o===""){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y(c),b(),p(o).then(s=>{const i=s.hits;if(i.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i,c)}).catch(s=>{console.error("Error fetching images:",s),n.error({title:"Error",message:"Something went wrong with the request. Please try again later.",position:"topRight"})}).finally(()=>{L()}),l.reset()});
//# sourceMappingURL=index.js.map
