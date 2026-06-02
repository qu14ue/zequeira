/* ============================================================
   Wireframe kit — helpers compartidos (classic script, scope global)
   ============================================================ */

/* striped placeholder */
function ph(label, h, opts){
  opts = opts || {};
  const cls = ['ph', opts.dark ? 'dark' : '', opts.video ? 'video' : ''].join(' ').trim();
  const w = opts.w ? `width:${opts.w};` : '';
  return `<div class="${cls}" style="height:${h}px;${w}${opts.style||''}"><span>${label}</span></div>`;
}

/* fake paragraph text */
function bars(spec, opts){
  opts = opts || {};
  const items = (spec || ['l','l','m']).map(s => `<i class="${s}"></i>`).join('');
  return `<div class="bars ${opts.dark?'dark':''}" style="${opts.style||''}">${items}</div>`;
}

function eyebrow(t, light){ return `<div class="eyebrow ${light?'light':''}">${t}</div>`; }
function dh(t, size, light){
  const color = light ? 'color:#fff;' : '';
  return `<div class="dh" style="font-size:${size}px;${color}">${t}</div>`;
}
function sub(t, light){ return `<div class="sub ${light?'light':''}">${t}</div>`; }
function btnp(t){ return `<span class="btnp">${t}</span>`; }
function btng(t, light){ return `<span class="btng ${light?'light':''}">${t}</span>`; }
function chip(t, solid){ return `<span class="chip ${solid?'solid':''}">${t}</span>`; }
function price(v, lbl){ return `<div class="price">${lbl?`<small>${lbl}</small>`:''}${v}</div>`; }
function live(t){ return `<span class="live"><span class="dot"></span>${t||'En construcción'}</span>`; }

/* desktop navbar wire */
function wnav(dark){
  return `<div class="w-nav ${dark?'dark':''}">
    <span class="logo">AKPROP</span>
    <span class="nlinks"><span></span><span></span><span></span><span></span></span>
    <span class="ncta"></span>
  </div>`;
}
function mnav(dark){
  return `<div class="mnav ${dark?'dark':''}"><span class="logo">AKPROP</span><span class="burger"><i></i><i></i><i></i></span></div>`;
}

/* in-frame pin annotation */
function pin(t, pos){ return `<div class="pin" style="${pos}">✎ ${t}</div>`; }

/* device frames */
function desktop(inner, caption){
  return `<figure class="dev dev--desktop">
    <div class="scr"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
    <div class="view">${inner}</div></div>
    <figcaption>${caption||'Desktop · 1440'}</figcaption>
  </figure>`;
}
function mobile(inner, caption){
  return `<figure class="dev dev--mobile">
    <div class="scr"><div class="notch"></div><div class="view">${inner}</div></div>
    <figcaption>${caption||'Mobile · 390'}</figcaption>
  </figure>`;
}

/* note callout */
function note(t, kind){ return `<div class="note ${kind==='new'?'note--new':''}">${t}</div>`; }

/* variant block */
function variant(o){
  const star = o.recommended ? `<span class="star">★ recomendado</span>` : '';
  const notesHTML = (o.notes||[]).map(n => typeof n === 'string' ? note(n) : note(n.t, n.kind)).join('');
  return `<section class="variant">
    <div class="variant__head">
      <span class="vtag">${o.tag}</span>
      <h3>${o.title}</h3>
      <p class="blurb">${o.blurb||''}</p>
      ${star}
    </div>
    <div class="stage">
      <div class="stage__devices">${o.desktop||''}${o.mobile||''}</div>
      <div class="stage__notes">${notesHTML}</div>
    </div>
  </section>`;
}

/* ---------- storyboard pieces (panel 01) ---------- */
const ML = {
  hero:    `<div class="ml"><i style="flex:2"></i><div class="row"><i class="accent" style="flex:0 0 24%"></i><i style="flex:0 0 14%"></i></div></div>`,
  split:   `<div class="ml"><div class="row tall"><i style="flex:1"></i><i style="flex:1;opacity:.5"></i></div></div>`,
  editorial:`<div class="ml"><i style="flex:0 0 30%"></i><div class="row"><i style="flex:1"></i></div></div>`,
  bands:   `<div class="ml"><i style="flex:1"></i><i style="flex:1;opacity:.45"></i><i style="flex:1"></i></div>`,
  grid:    `<div class="ml"><div class="row"><i></i><i></i><i></i></div><div class="row"><i></i><i></i><i></i></div></div>`,
  tabs:    `<div class="ml"><div class="row" style="flex:0 0 22%"><i class="accent"></i><i></i><i></i></div><div class="row tall"><i style="flex:1"></i><i style="flex:1;opacity:.5"></i></div></div>`,
  table:   `<div class="ml"><i style="flex:0 0 20%"></i><i style="flex:0 0 16%;opacity:.6"></i><i style="flex:0 0 16%"></i><i style="flex:0 0 16%;opacity:.6"></i><i style="flex:0 0 16%"></i></div>`,
  cards:   `<div class="ml"><div class="row tall"><i></i><i></i><i></i></div></div>`,
  gallery: `<div class="ml"><div class="row"><i style="flex:2"></i><i></i></div><div class="row"><i></i><i style="flex:2"></i></div></div>`,
  form:    `<div class="ml"><div class="row tall"><i style="flex:1.2"></i><i style="flex:1;opacity:.5"></i></div></div>`,
  strip:   `<div class="ml" style="justify-content:center"><i style="flex:0 0 40%"></i></div>`,
  map:     `<div class="ml"><div class="row tall"><i style="flex:1;opacity:.5"></i><i class="accent" style="flex:0 0 18%"></i></div></div>`,
  text:    `<div class="ml" style="justify-content:center;padding:6px 8px"><i style="flex:0 0 8px;width:60%"></i><i style="flex:0 0 8px;width:85%;margin-top:3px"></i></div>`,
  footer:  `<div class="ml" style="justify-content:flex-end"><i style="flex:0 0 40%"></i></div>`
};
function secblock(s){
  const cls = ['secblock', s.dark?'dark':'', s.isNew?'is-new':''].join(' ').trim();
  return `<div class="${cls}">
    <span class="sb-num">${s.num}</span>
    <span class="sb-thumb">${ML[s.ml]||''}</span>
    <span class="sb-body"><span class="sb-name">${s.name}</span><span class="sb-purpose">${s.purpose}</span></span>
    ${s.isNew?'<span class="sb-tag">nueva</span>':''}
  </div>`;
}
function flow(o){
  const steps = o.steps.map((s,i)=> secblock(s) + (i<o.steps.length-1?'<div class="sb-arrow">▼</div>':'')).join('');
  return `<div class="flow ${o.recommended?'is-rec':''}">
    <div class="flow__head"><span class="vtag">${o.tag}</span><h3>${o.title}</h3><p>${o.blurb}</p></div>
    <div class="flow__steps">${steps}</div>
  </div>`;
}
