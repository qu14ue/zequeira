/* ============================================================
   Tipologías (tabs + ficha) + tabla maestra de unidades
   ============================================================ */
(function(){
  const tabsEl   = document.getElementById('tipoTabs');
  const panelsEl = document.getElementById('tipoPanels');
  if(!tabsEl) return;

  /* ---- tabs ---- */
  tabsEl.innerHTML = TIPOS.map((t,i)=>
    `<button class="ttab${i===0?' active':''}" data-i="${i}">${t.tab}</button>`
  ).join('');

  /* ---- panels ---- */
  panelsEl.innerHTML = TIPOS.map((t,i)=>{
    const thumbs = t.gallery.map((src,gi)=>
      `<img src="${src}" alt="${t.title} ${gi+1}" class="${gi===0?'sel':''}" data-src="${src}" loading="lazy">`).join('');
    const specs = t.specs.map(s=>
      `<div class="spec"><div class="k">${s[0]}</div><div class="v">${s[1]}${s[2]?`<small>${s[2]}</small>`:''}</div></div>`).join('');
    const priceRows = t.precios.map(p=>
      `<div class="pt-r"><span class="u">${p.u}</span><span class="m">${p.m}${t.isCochera?'':' m²'}</span><span class="p">USD ${p.p}</span></div>`).join('');
    const waTxt = `Hola AKPROP, me interesa la tipología "${t.title}" de Zequeira 7054. Quisiera más información.`;

    return `<div class="tpanel${i===0?' active':''}" data-panel="${i}" id="tp-${t.key}">
      <div class="tpanel__grid">
        <div class="tgal">
          <div class="tgal__main" data-gallery="${i}">
            <img src="${t.gallery[0]}" alt="${t.title}" id="tgalMain-${i}">
            <span class="zoom">⤢ ampliar</span>
          </div>
          <div class="tgal__thumbs" data-thumbs="${i}">${thumbs}</div>
        </div>
        <div class="ficha">
          <div class="ficha__ori">${t.ori}</div>
          <h3 class="h3">${t.title}</h3>
          <div class="chip-row" style="margin-top:14px"><span class="chip">${t.amb}</span>${t.isCochera?'':`<span class="chip">Expensas ${t.expensas}</span>`}</div>
          <p class="muted" style="margin-top:18px;font-size:15.5px">${t.desc}</p>
          <div class="specs">${specs}</div>
          <div class="priceTable">
            <div class="pt-h"><span>${t.isCochera?'Ubicación':'Unidad'}</span><span>${t.isCochera?'Disponibles':'M² totales'}</span><span style="text-align:right">Precio</span></div>
            ${priceRows}
          </div>
          ${t.note?`<div class="ficha__note">${t.note}</div>`:''}
          <div class="btn-row">
            <a class="btn btn-primary" href="${waLink(waTxt)}" target="_blank" rel="noopener" data-gtm="contact_whatsapp">${t.isCochera?'Consultar disponibilidad':'Consultar por esta tipología'}</a>
            <button class="btn btn-ghost" data-plano="${t.plano}" data-planotitle="Plano · ${t.title}">Ver plano</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  /* ---- tab switching ---- */
  tabsEl.addEventListener('click', e=>{
    const b = e.target.closest('.ttab'); if(!b) return;
    const i = b.dataset.i;
    tabsEl.querySelectorAll('.ttab').forEach(x=>x.classList.toggle('active', x===b));
    panelsEl.querySelectorAll('.tpanel').forEach(p=>p.classList.toggle('active', p.dataset.panel===i));
    if(window.__gtm) window.__gtm('tipologia_view', {tipologia:TIPOS[i].key});
  });

  /* ---- gallery thumb switching ---- */
  panelsEl.addEventListener('click', e=>{
    const th = e.target.closest('.tgal__thumbs img');
    if(th){
      const wrap = th.closest('.tgal__thumbs'); const i = wrap.dataset.thumbs;
      document.getElementById('tgalMain-'+i).src = th.dataset.src;
      wrap.querySelectorAll('img').forEach(x=>x.classList.toggle('sel', x===th));
      return;
    }
    const main = e.target.closest('.tgal__main');
    if(main){
      const i = main.dataset.gallery;
      const srcs = TIPOS[i].gallery;
      const cur = document.getElementById('tgalMain-'+i).src;
      const idx = Math.max(0, srcs.findIndex(s=>cur.endsWith(s)));
      window.openLightbox(srcs, idx, TIPOS[i].title);
      return;
    }
    const pb = e.target.closest('[data-plano]');
    if(pb){ window.openLightbox([pb.dataset.plano], 0, pb.dataset.planotitle); }
  });

  /* ============================================================
     Tabla maestra de unidades
     ============================================================ */
  const tbody = document.getElementById('uTableBody');
  if(tbody){
    function render(filter){
      const rows = UNITS.filter(u=> filter==='all' || u.cat===filter || (filter==='duplex'&&u.cat==='duplex'));
      tbody.innerHTML = rows.map(u=>{
        const waTxt = `Hola AKPROP, me interesa la unidad ${u.id} (${u.tipo}) de Zequeira 7054 — USD ${u.precio}. Quisiera coordinar una visita.`;
        return `<tr class="${u.cat==='duplex'?'dx':''}">
          <td data-l="Unidad"><span class="u-id">${u.id}</span></td>
          <td data-l="Tipología"><span class="u-type">${u.tipo}</span></td>
          <td data-l="Orient." class="hide-sm"><span class="u-ori">${u.ori}</span></td>
          <td data-l="Piso" class="hide-sm">${u.piso}</td>
          <td data-l="M² tot.">${u.tot}</td>
          <td data-l="Precio" class="r"><span class="u-price">USD ${u.precio}</span></td>
          <td data-l="Estado" class="r"><span class="u-state"><span class="d"></span>Disponible</span></td>
          <td data-l="" class="r"><a class="u-cta" href="${waLink(waTxt)}" target="_blank" rel="noopener" data-gtm="contact_whatsapp">Consultar →</a></td>
        </tr>`;
      }).join('');
    }
    render('all');
    const filtersEl = document.getElementById('uFilters');
    filtersEl.addEventListener('click', e=>{
      const b = e.target.closest('.mfilter'); if(!b) return;
      filtersEl.querySelectorAll('.mfilter').forEach(x=>x.classList.toggle('active', x===b));
      render(b.dataset.filter);
    });
  }
})();
