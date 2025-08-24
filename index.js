import{a as w,S as P,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const q="51885982-6956decd6d250e953d7b24c18",S="https://pixabay.com/api/",E=15;async function u(r,o){return(await w.get(S,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:E}})).data}const p=document.querySelector(".gallery"),f=document.querySelector("#load-more-btn"),h=document.querySelector(".loader");let M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:L,downloads:v})=>`
        <li class="photo-card">
          <a href="${n}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="image-info">
            <p>
              <span class="label">Likes</span><br />
              <span class="value">${t}</span>
            </p>
            <p>
              <span class="label">Views</span><br />
              <span class="value">${i}</span>
            </p>
            <p>
              <span class="label">Comments</span><br />
              <span class="value">${L}</span>
            </p>
            <p>
              <span class="label">Downloads</span><br />
              <span class="value">${v}</span>
            </p>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",o),M.refresh()}function R(){p.innerHTML=""}function m(){h.classList.remove("hidden")}function y(){h.classList.add("hidden")}function B(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}const $=document.querySelector(".form"),O=document.querySelector("#load-more-btn");let c=1,l="",d=0;$.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.searchQuery.value.trim();if(!o){a.warning({message:"Please enter a search query.",position:"topRight"});return}l=o,c=1,R(),b();try{m();const s=await u(l,c);if(d=s.totalHits,s.hits.length===0){a.info({message:"No images found. Try again.",position:"topRight"});return}g(s.hits),Math.ceil(d/15)===1?a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):B()}catch{a.error({message:"Error fetching images.",position:"topRight"})}finally{y()}});O.addEventListener("click",async()=>{c+=1;try{m();const r=await u(l,c);g(r.hits);const o=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"});const s=Math.ceil(d/15);c>=s&&(b(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Error fetching more images.",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
