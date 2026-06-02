/* ============================================================
   04 — TIPOLOGÍAS (3 enfoques · desktop + mobile) — el corazón
   ============================================================ */
function buildTipologias(){

  const TABS = ['3 Amb · Frente','3 Amb · Contrafrente','Dúplex · Frente','Dúplex · Contrafrente','Cocheras'];

  /* ---- A · Tabs horizontales + ficha ---- */
  function tabbar(active, dark){
    return `<div style="display:flex;gap:4px;flex-wrap:wrap;padding:14px 22px;${dark?'background:var(--ink)':'border-bottom:1px solid var(--line)'}">
      ${TABS.map((t,i)=>`<span style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.04em;padding:7px 11px;border-radius:2px;${i===active?'background:var(--accent);color:#fff':(dark?'color:rgba(255,255,255,.6)':'color:var(--muted);border:1px solid var(--line)')}">${t}</span>`).join('')}
    </div>`;
  }
  const a_desk = desktop(`
    <div style="padding:22px 22px 4px;background:var(--bg)">
      ${eyebrow('Tipologías · todas disponibles')}
      ${dh('Elegí tu planta.',24)}
    </div>
    ${tabbar(0,false)}
    <div style="display:flex;gap:18px;padding:20px 22px">
      <div style="flex:0 0 50%;display:flex;flex-direction:column;gap:8px">
        ${ph('render principal · galería',180)}
        <div style="display:flex;gap:8px">${ph('foto',46).replace('height:46px','height:46px;flex:1')}${ph('foto',46).replace('height:46px','height:46px;flex:1')}${ph('plano',46).replace('height:46px','height:46px;flex:1')}</div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">${chip('NOROESTE')}${chip('3 amb · 2 dorm · 2 baños')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
          ${[['M² cubiertos','75,90'],['M² balcón','14,30'],['M² totales','90,20'],['Expensas','$150.000']].map(r=>`<div style="border:1px solid var(--line);border-radius:2px;padding:7px 9px"><div style="font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">${r[0]}</div><div style="font-family:'Fraunces',serif;font-size:15px">${r[1]}</div></div>`).join('')}
        </div>
        <div style="border:1px solid var(--line);border-radius:3px;overflow:hidden">
          <div style="display:flex;background:var(--bg-soft);font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding:6px 10px"><span style="flex:1">Unidad</span><span>M² tot</span><span style="margin-left:auto">USD</span></div>
          ${[['1A','103,69','224.500'],['2A','90,20','215.900'],['3A','90,20','224.500'],['4A','90,20','232.500'],['5A','90,20','228.500']].map(r=>`<div style="display:flex;align-items:baseline;padding:6px 10px;border-top:1px solid var(--line);font-size:11px"><span style="flex:1;font-weight:600">${r[0]}</span><span style="color:var(--muted)">${r[1]}</span><span style="margin-left:auto;font-family:'Fraunces',serif;font-weight:600">${r[2]}</span></div>`).join('')}
        </div>
        <div>${btnp('Consultar por esta tipología')}</div>
      </div>
    </div>`, 'A · Desktop — tabs + ficha');
  const a_mob = mobile(`
    <div style="padding:16px 16px 6px">${eyebrow('Tipologías')}${dh('Elegí tu planta.',19)}</div>
    <div style="position:sticky;top:0;background:#fff;padding:10px 16px;border-bottom:1px solid var(--line)">
      <div style="border:1px solid var(--wire-ink);border-radius:2px;padding:9px 11px;display:flex;align-items:center;font-size:11px;font-weight:600">3 Amb · Frente <span style="margin-left:auto;color:var(--muted)">▾</span></div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${ph('galería',140)}
      <div style="display:flex;gap:6px;flex-wrap:wrap">${chip('NOROESTE')}${chip('90,20 m²')}</div>
      ${[['1A','224.500'],['2A','215.900'],['3A','224.500']].map(r=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line);font-size:12px"><b>${r[0]}</b><span style="font-family:'Fraunces',serif;font-weight:600">USD ${r[1]}</span></div>`).join('')}
      ${btnp('Consultar por WhatsApp')}
    </div>`, 'A · Mobile — dropdown sticky');

  /* ---- B · Tarjetas comparativas + detalle ---- */
  const CARDS = [
    ['3 amb · Frente','NOROESTE','90–104 m²','194.950',false],
    ['3 amb · Contrafrente','SUDESTE','80–94 m²','194.950',false],
    ['Dúplex · Frente','NOROESTE','182,75 m²','376.000',true],
    ['Dúplex · Contrafrente','SUDESTE','187,75 m²','380.700',true]
  ];
  function tcard(c){
    return `<div style="border:1px solid var(--line);border-radius:4px;overflow:hidden;background:#fff;${c[4]?'box-shadow:0 0 0 1px var(--accent) inset':''}">
      <div style="position:relative">${ph('render',110)}${c[4]?'<span style="position:absolute;top:8px;left:8px;font-family:\'Space Mono\',monospace;font-size:8px;letter-spacing:.08em;text-transform:uppercase;background:var(--accent);color:#fff;padding:3px 6px;border-radius:2px">solo 2</span>':''}</div>
      <div style="padding:12px 13px">
        <div style="font-family:'Fraunces',serif;font-size:15px">${c[0]}</div>
        <div style="display:flex;gap:6px;margin:7px 0">${chip(c[1])}<span style="font-size:11px;color:var(--muted);align-self:center">${c[2]}</span></div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--line);padding-top:8px">${price('USD '+c[3],'Desde')}<span style="font-size:14px;color:var(--accent)">→</span></div>
      </div>
    </div>`;
  }
  const b_desk = desktop(`
    <div style="padding:22px 22px 2px">${eyebrow('Tipologías · compará y elegí')}${dh('Cuatro tipologías. Dos por piso.',23)}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:18px 22px 10px">${CARDS.map(tcard).join('')}</div>
    <div style="margin:6px 22px 20px;border:1px dashed var(--wire-line);border-radius:4px;padding:12px 14px;display:flex;align-items:center;gap:12px;background:var(--bg-soft)">
      <span style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">+ Cocheras</span>
      <span style="font-size:12px;color:var(--ink-2)">7 disponibles · 4 subsuelo + 3 PB · USD 20.000 c/u</span>
      <span style="margin-left:auto">${btng('Consultar')}</span>
    </div>
    <div style="text-align:center;padding:0 0 16px;font-family:'Caveat',cursive;font-size:15px;color:var(--accent-2)">click en una tarjeta → abre ficha completa (galería + plano + precios por piso)</div>`,
    'B · Desktop — tarjetas comparativas');
  const b_mob = mobile(`
    <div style="padding:16px 16px 4px">${eyebrow('Tipologías')}${dh('Compará y elegí.',19)}</div>
    <div style="display:flex;flex-direction:column;gap:11px;padding:12px 16px">${CARDS.map(tcard).join('')}
      <div style="border:1px dashed var(--wire-line);border-radius:3px;padding:11px;font-size:11px;color:var(--ink-2);background:var(--bg-soft)">Cocheras · 7 disp · USD 20.000 c/u</div>
    </div>`, 'B · Mobile — cards stack');

  /* ---- C · Tabla maestra de disponibilidad ---- */
  const UNITS = [
    ['6B','Dúplex contrafrente','SE','187,75','380.700','disp'],
    ['6A','Dúplex frente','NW','182,75','376.000','disp'],
    ['4A','3 amb frente','NW','90,20','232.500','disp'],
    ['5A','3 amb frente','NW','90,20','228.500','disp'],
    ['1A','3 amb frente','NW','103,69','224.500','disp'],
    ['5B','3 amb contrafrente','SE','80,06','214.500','disp'],
    ['1B','3 amb contrafrente','SE','93,55','203.500','disp'],
    ['2B','3 amb contrafrente','SE','80,06','194.950','disp']
  ];
  function row(u){
    return `<div style="display:flex;align-items:baseline;gap:8px;padding:8px 14px;border-top:1px solid var(--line);font-size:11.5px">
      <span style="flex:0 0 34px;font-weight:700;font-family:'Space Mono',monospace">${u[0]}</span>
      <span style="flex:1;color:var(--ink-2)">${u[1]}</span>
      <span style="flex:0 0 30px"><span style="font-family:'Space Mono',monospace;font-size:8px;color:var(--muted)">${u[2]}</span></span>
      <span style="flex:0 0 56px;color:var(--muted)">${u[3]}</span>
      <span style="flex:0 0 70px;text-align:right;font-family:'Fraunces',serif;font-weight:600">${u[4]}</span>
      <span style="flex:0 0 56px;text-align:right"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--ok);margin-right:5px"></span><span style="font-size:9px;color:var(--ok);font-family:'Space Mono',monospace">DISP</span></span>
    </div>`;
  }
  const c_desk = desktop(`
    <div style="padding:22px 22px 4px">${eyebrow('Disponibilidad · 12 unidades + 2 dúplex')}${dh('Todas las unidades. Todos los precios. A la vista.',22)}</div>
    <div style="display:flex;gap:8px;padding:10px 22px;flex-wrap:wrap">${['Todas','3 amb frente','3 amb contrafrente','Dúplex'].map((f,i)=>`<span style="font-family:'Space Mono',monospace;font-size:10px;padding:6px 11px;border-radius:20px;${i===0?'background:var(--ink);color:#fff':'border:1px solid var(--line);color:var(--muted)'}">${f}</span>`).join('')}</div>
    <div style="margin:8px 22px 16px;border:1px solid var(--line);border-radius:4px;overflow:hidden">
      <div style="display:flex;gap:8px;padding:8px 14px;background:var(--bg-soft);font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">
        <span style="flex:0 0 34px">Un.</span><span style="flex:1">Tipología</span><span style="flex:0 0 30px">Ori</span><span style="flex:0 0 56px">M² tot</span><span style="flex:0 0 70px;text-align:right">USD</span><span style="flex:0 0 56px;text-align:right">Estado</span>
      </div>
      ${UNITS.map(row).join('')}
    </div>
    <div style="padding:0 22px 20px;display:flex;align-items:center;gap:14px">${btnp('Reservar una visita')}<span style="font-family:'Caveat',cursive;font-size:15px;color:var(--accent-2)">click en una fila → ficha de la unidad (galería + plano)</span></div>`,
    'C · Desktop — tabla maestra');
  const c_mob = mobile(`
    <div style="padding:16px 16px 4px">${eyebrow('Disponibilidad')}${dh('Todas las unidades.',18)}</div>
    <div style="display:flex;flex-direction:column;gap:8px;padding:12px 16px">
      ${UNITS.slice(0,6).map(u=>`<div style="border:1px solid var(--line);border-radius:3px;padding:10px 11px"><div style="display:flex;justify-content:space-between;align-items:baseline"><b style="font-family:'Space Mono',monospace">${u[0]}</b><span style="font-family:'Fraunces',serif;font-weight:600">USD ${u[4]}</span></div><div style="font-size:10px;color:var(--muted);margin-top:3px">${u[1]} · ${u[3]} m² · <span style="color:var(--ok)">disponible</span></div></div>`).join('')}
    </div>`, 'C · Mobile — cards por unidad');

  return `
    <div class="lead">
      <div class="kicker">Exploración 04 · tipologías — el corazón de la landing</div>
      <h2>El corazón: cómo mostrar las unidades</h2>
      <p>Acá se decide la compra. Hay 4 tipologías + cocheras y precios que varían por piso. Tres enfoques con distinto nivel de “mostrar todo”: <b>tabs</b> (foco en una tipología por vez), <b>tarjetas comparativas</b> (comparar primero, entrar al detalle después) o <b>tabla maestra</b> (radical transparencia: las 14 unidades y sus precios a la vista).</p>
    </div>
    ${variant({tag:'Tipologías A', title:'Tabs horizontales + ficha',
      blurb:'Una tipología por vez: galería, plano, características y precios por piso. Es el patrón del brief. Ordenado, pero esconde el resto detrás de cada tab.',
      desktop:a_desk, mobile:a_mob,
      notes:[note('Tab activo sticky al scrollear. En mobile, dropdown fijo arriba.'), note('Cada cambio de tab dispara <b>tipologia_view</b> (GTM).')]})}
    ${variant({tag:'Tipologías B', title:'Tarjetas comparativas + detalle',
      blurb:'Las 4 tipologías lado a lado con su precio “desde”, dúplex destacados. Comparás primero; el click abre la ficha completa. Pensado para el que duda entre frente y contrafrente.',
      desktop:b_desk, mobile:b_mob,
      notes:[note('Comparación inmediata = ayuda a decidir orientación y presupuesto.'), {t:'Cocheras como banda aparte, sin robar foco a los deptos.',kind:'new'}]})}
    ${variant({tag:'Tipologías C', title:'Tabla maestra de disponibilidad', recommended:true,
      blurb:'Las 14 unidades, su m², precio y estado, en una sola tabla filtrable. Radical transparencia — el movimiento que “deja todo claro”. Genera urgencia: se ve qué queda.',
      desktop:c_desk, mobile:c_mob,
      notes:[{t:'Es lo que el comprador final busca y casi nadie muestra: precio unidad por unidad.',kind:'new'}, note('La columna estado (disp/reservado) crea urgencia honesta.'), note('Fila → ficha de unidad con galería + plano. Lo mejor de los dos mundos.')]})}`;
}
