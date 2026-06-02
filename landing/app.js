/* ============================================================
   App · interacciones de la landing
   ============================================================ */

/* ---- GTM stub (dataLayer push) ---- */
window.dataLayer = window.dataLayer || [];
window.__gtm = function(ev, data){ window.dataLayer.push(Object.assign({event:ev}, data||{})); };
document.addEventListener('click', e=>{
  const g = e.target.closest('[data-gtm]');
  if(g) window.__gtm(g.dataset.gtm);
});

/* ---- nav scroll state ---- */
const nav = document.getElementById('nav');
function onScroll(){
  if(window.scrollY > 40) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
}
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* ---- burger / mobile menu ---- */
const burger = document.getElementById('burger');
const mmenu  = document.getElementById('mmenu');
if(burger){
  burger.addEventListener('click', ()=> mmenu.classList.toggle('open'));
  mmenu.addEventListener('click', e=>{ if(e.target.closest('a')) mmenu.classList.remove('open'); });
}

/* ---- reveal on scroll ---- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
/* safety: reveal everything after 2.4s in case observer never fires */
setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>el.classList.add('in')), 2400);

/* ---- lazy gallery images fade-in ---- */
document.querySelectorAll('.gal__item img').forEach(img=>{
  if(img.complete) img.classList.add('loaded');
  else img.addEventListener('load', ()=>img.classList.add('loaded'));
});

/* ---- hero video: play on ready, pause offscreen ---- */
const hv = document.getElementById('heroVideo');
if(hv){
  const tryPlay = ()=>{ const p = hv.play(); if(p&&p.catch) p.catch(()=>{}); };
  hv.addEventListener('loadeddata', tryPlay);
  if(hv.readyState>=2) tryPlay();
  new IntersectionObserver(es=>es.forEach(e=>{ e.isIntersecting?tryPlay():hv.pause(); }),{threshold:.05})
    .observe(hv);
}

/* ---- map facade (load iframe on click) ---- */
const map = document.getElementById('map');
if(map){
  map.addEventListener('click', ()=>{
    if(map.dataset.loaded) return;
    map.dataset.loaded = '1';
    const f = document.createElement('iframe');
    f.src = 'https://www.google.com/maps?q='+encodeURIComponent('Severo García Grande de Zequeira 7054, CABA')+'&output=embed';
    f.loading = 'lazy'; f.allowFullscreen = true;
    map.querySelector('.map__facade').style.display = 'none';
    map.appendChild(f);
  });
}

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq__q').forEach(q=>{
  q.addEventListener('click', ()=>{
    const item = q.closest('.faq__item');
    const a = item.querySelector('.faq__a');
    const open = item.classList.contains('open');
    if(open){ item.classList.remove('open'); a.style.maxHeight = null; }
    else { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});

/* ---- lightbox ---- */
const lb       = document.getElementById('lb');
const lbImg    = document.getElementById('lbImg');
const lbCap    = document.getElementById('lbCap');
let lbList = [], lbIdx = 0, lbTitle = '';
window.openLightbox = function(list, idx, title){
  lbList = list; lbIdx = idx||0; lbTitle = title||'';
  showLb();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
};
function showLb(){
  lbImg.src = lbList[lbIdx];
  lbCap.textContent = lbTitle + (lbList.length>1 ? `  ·  ${lbIdx+1} / ${lbList.length}` : '');
  document.querySelectorAll('.lb__nav').forEach(n=>n.style.display = lbList.length>1?'flex':'none');
}
function closeLb(){ lb.classList.remove('open'); document.body.style.overflow=''; }
function nav_(d){ lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); }
document.getElementById('lbClose').addEventListener('click', closeLb);
document.querySelector('.lb__nav.prev').addEventListener('click', ()=>nav_(-1));
document.querySelector('.lb__nav.next').addEventListener('click', ()=>nav_(1));
lb.addEventListener('click', e=>{ if(e.target===lb) closeLb(); });
document.addEventListener('keydown', e=>{
  if(!lb.classList.contains('open')) return;
  if(e.key==='Escape') closeLb();
  if(e.key==='ArrowLeft') nav_(-1);
  if(e.key==='ArrowRight') nav_(1);
});

/* gallery items open lightbox */
(function(){
  const items = [...document.querySelectorAll('.gal__item[data-src]')];
  const srcs = items.map(it=>it.dataset.src);
  items.forEach((it,i)=> it.addEventListener('click', ()=>{
    if(it.dataset.video){ window.openVideo(it.dataset.video); return; }
    window.openLightbox(srcs, i, 'Zequeira 7054');
  }));
})();

/* ---- video lightbox (YouTube) ---- */
window.openVideo = function(id){
  const vlb = document.getElementById('vlb');
  vlb.querySelector('.vlb__frame').innerHTML =
    `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  vlb.classList.add('open'); document.body.style.overflow='hidden';
  window.__gtm('video_play');
};
(function(){
  const vlb = document.getElementById('vlb');
  if(!vlb) return;
  const close = ()=>{ vlb.classList.remove('open'); vlb.querySelector('.vlb__frame').innerHTML=''; document.body.style.overflow=''; };
  vlb.addEventListener('click', e=>{ if(e.target===vlb||e.target.closest('.vlb__close')) close(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });
})();

/* ---- form validation + mock submit ---- */
const form = document.getElementById('leadForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(f=>{
      const field = f.closest('.field');
      let valid = f.value.trim().length>0;
      if(f.type==='email') valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value);
      if(f.type==='tel')   valid = f.value.replace(/\D/g,'').length>=6;
      field.classList.toggle('err', !valid);
      if(!valid) ok=false;
    });
    if(!ok) return;
    form.classList.add('sent');
    document.getElementById('formSuccess').classList.add('show');
    window.__gtm('generate_lead', {emprendimiento:'EMPZEQUEIRA7054'});
  });
  form.querySelectorAll('input,select,textarea').forEach(f=>{
    f.addEventListener('input', ()=> f.closest('.field').classList.remove('err'));
  });
}
