import{a as w,S,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const q="51885982-6956decd6d250e953d7b24c18",E="https://pixabay.com/api/",B=15;async function u(a,r){return(await w.get(E,{params:{key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:B}})).data}const p=document.querySelector(".gallery"),f=document.querySelector("#load-more-btn"),m=document.querySelector("#loader");let P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:L,downloads:v})=>`
        <div class="photo-card">
          <a href="${i}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="image-info">
            <p>
              <span class="label">Likes</span><br />
              <span class="value">${t}</span>
            </p>
            <p>
              <span class="label">Views</span><br />
              <span class="value">${n}</span>
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
        </div>
      `).join("");p.insertAdjacentHTML("beforeend",r),P.refresh()}function $(){p.innerHTML=""}function y(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}function M(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}const O=document.querySelector("#search-form"),A=document.querySelector("#load-more-btn");let o=1,l="",d=0;O.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.searchQuery.value.trim();if(r){l=r,o=1,$(),b();try{y();const s=await u(l,o);if(d=s.totalHits,s.hits.length===0){c.info({message:"No images found. Try again."});return}h(s.hits),d>o*15&&M()}catch{c.error({message:"Error fetching images."})}finally{g()}}});A.addEventListener("click",async()=>{o+=1;try{y();const a=await u(l,o);h(a.hits);const r=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),o*15>=d&&(b(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch{c.error({message:"Error fetching more images."})}finally{g()}});
//# sourceMappingURL=index.js.map
