/* ============================================================
   03 — PILARES (3 enfoques · desktop + mobile)
   Los 6: a estrenar · terminaciones · barrio · cocheras · 2 por piso · dúplex
   ============================================================ */
function buildPilares(){

  const P = [
    ['A estrenar','Nadie vivió acá antes. Y se nota en cada detalle.'],
    ['Calidad de construcción','Terminaciones que no piden disculpas.'],
    ['Barrio Naón','El oasis que la ciudad no sabe que tiene.'],
    ['Cocheras','7 disponibles. Para que el auto también esté bien.'],
    ['Privacidad','Solo dos por piso. El piso es tuyo.'],
    ['Dúplex','El único rooftop privado del edificio. Son dos.']
  ];

  /* ---- A · Bandas alternadas full-bleed ---- */
  function band(i, dark){
    const [eye,h] = P[i];
    const img = ph('render '+(i%2?'cocina/baño':'living/balcón'), 200, {dark});
    const txt = `<div style="flex:1;padding:24px 26px;display:flex;flex-direction:column;justify-content:center;gap:10px;${dark?'background:var(--ink);color:#fff':'background:var(--bg-soft)'}">
        ${eyebrow(eye.toUpperCase(),dark)}
        ${dh(h,21,dark)}
        ${bars(['l','m'],{dark})}
      </div>`;
    const imgWrap = `<div style="flex:0 0 44%;position:relative">${img}</div>`;
    return `<div style="display:flex">${i%2?imgWrap+txt:txt+imgWrap}</div>`;
  }
  const a_desk = desktop(`${band(0,true)}${band(1,false)}${band(2,true)}
    <div style="text-align:center;padding:10px;font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)">↓ pilares 4 · 5 · 6 siguen el mismo ritmo alternado</div>`,
    'A · Desktop — bandas alternadas');
  const a_mob = mobile(`
    ${P.slice(0,3).map((p,i)=>`
      ${ph('render',130,{dark:i%2===0})}
      <div style="padding:16px;${i%2===0?'background:var(--ink);color:#fff':''}">
        ${eyebrow(p[0].toUpperCase(),i%2===0)}${dh(p[1],17,i%2===0)}
      </div>`).join('')}`, 'A · Mobile — stack');

  /* ---- B · Grid de tarjetas (dúplex destacado) ---- */
  function card(i, big){
    const [eye,h] = P[i];
    return `<div style="border:1px solid var(--line);border-radius:4px;overflow:hidden;background:var(--bg);${big?'grid-column:span 2':''}">
      ${ph('img', big?150:88)}
      <div style="padding:13px 14px">
        ${eyebrow(eye.toUpperCase())}
        <div class="dh" style="font-size:${big?19:14}px;margin-top:5px">${h}</div>
        ${big?'<div style="margin-top:8px">'+bars(['l','m'])+'</div>':''}
      </div>
    </div>`;
  }
  const b_desk = desktop(`
    <div style="padding:24px 26px;background:var(--ink)">
      ${eyebrow('Por qué Zequeira 7054',true)}
      ${dh('Seis razones, sin vueltas.',24,true)}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:18px 26px 24px;background:var(--bg-soft)">
      ${card(5,true)}${card(0)}${card(1)}${card(2)}${card(4)}${card(3)}
    </div>`, 'B · Desktop — grid escaneable');
  const b_mob = mobile(`
    <div style="padding:16px;background:var(--ink)">${eyebrow('Por qué',true)}${dh('Seis razones.',19,true)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;padding:14px;background:var(--bg-soft)">
      ${[5,0,1,2,4,3].map(i=>`<div style="border:1px solid var(--line);border-radius:3px;overflow:hidden;background:#fff">${ph('img',56)}<div style="padding:9px"><div class="dh" style="font-size:12px">${P[i][0]}</div></div></div>`).join('')}
    </div>`, 'B · Mobile — grid 2 col');

  /* ---- C · Capítulos numerados con índice sticky ---- */
  const c_desk = desktop(`
    <div style="display:flex;min-height:340px">
      <div style="flex:0 0 32%;background:var(--ink);color:#fff;padding:26px 22px;display:flex;flex-direction:column;gap:14px">
        ${eyebrow('El edificio',true)}
        <div style="display:flex;flex-direction:column;gap:11px;margin-top:6px">
          ${P.map((p,i)=>`<div style="display:flex;gap:10px;align-items:baseline;${i===0?'':'opacity:.4'}">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--accent)">0${i+1}</span>
            <span style="font-family:'Fraunces',serif;font-size:14px">${p[0]}</span></div>`).join('')}
        </div>
      </div>
      <div style="flex:1;padding:28px;display:flex;flex-direction:column;justify-content:center;gap:12px">
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--accent-2)">01 / 06</span>
        ${dh('Nadie vivió acá antes.<br>Y se nota en cada detalle.',26)}
        ${bars(['l','l','m'])}
        ${ph('render interior living — a sangre derecha',150)}
      </div>
    </div>`, 'C · Desktop — índice sticky + capítulos');
  const c_mob = mobile(`
    <div style="position:sticky;top:0;display:flex;gap:6px;overflow-x:auto;padding:10px 12px;background:var(--ink)">
      ${P.map((p,i)=>`<span style="font-family:'Space Mono',monospace;font-size:9px;white-space:nowrap;padding:5px 9px;border-radius:20px;${i===0?'background:var(--accent);color:#fff':'color:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.2)'}">0${i+1} ${p[0]}</span>`).join('')}
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
      <span style="font-family:'Space Mono',monospace;font-size:10px;color:var(--accent-2)">01 / 06</span>
      ${dh('Nadie vivió acá antes.',19)}${bars(['l','m'])}${ph('render',130)}
    </div>`, 'C · Mobile — chips scroll');

  return `
    <div class="lead">
      <div class="kicker">Exploración 03 · los 6 pilares</div>
      <h2>Cómo presentar los seis argumentos</h2>
      <p>Son seis pilares con mucha carga de copy. El formato cambia el ritmo de lectura: <b>bandas</b> (inmersivo, scroll lento, cada pilar respira), <b>grid</b> (escaneable, rápido, ideal mobile) o <b>capítulos numerados</b> (editorial, da sensación de recorrido guiado).</p>
    </div>
    ${variant({tag:'Pilares A', title:'Bandas alternadas full-bleed', recommended:true,
      blurb:'Cada pilar ocupa el ancho completo, imagen y texto alternando lado y fondo claro/oscuro. Es el formato del brief: máximo peso visual, las imágenes lucen.',
      desktop:a_desk, mobile:a_mob,
      notes:[note('La alternancia claro/oscuro crea el “tono nocturno” que pide el brief sin saturar.'), note('Cuesta de escanear: el que apura puede aburrirse antes del pilar 6 (dúplex).')]})}
    ${variant({tag:'Pilares B', title:'Grid de tarjetas',
      blurb:'Los seis de un vistazo, con el dúplex como tarjeta destacada. Escaneable, compacto, perfecto para mobile y para el lector impaciente de ads.',
      desktop:b_desk, mobile:b_mob,
      notes:[note('Pierde profundidad de copy: cada pilar dice menos. Bueno si el copy va condensado.'), {t:'Combina con el recorrido B (producto primero).',kind:'new'}]})}
    ${variant({tag:'Pilares C', title:'Capítulos numerados · índice sticky',
      blurb:'Índice fijo a la izquierda (01–06) y el contenido pasando a la derecha. Editorial, ordenado, refuerza la idea de “recorrido”. En mobile, chips horizontales.',
      desktop:c_desk, mobile:c_mob,
      notes:[note('El índice sticky orienta: siempre se sabe dónde se está y cuánto falta.'), note('Encaja con el recorrido C (scrollytelling).')]})}`;
}
