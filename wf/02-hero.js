/* ============================================================
   02 — HERO (3 enfoques · desktop + mobile)
   ============================================================ */
function buildHero(){

  /* ---- A · Cinematográfico full-bleed ---- */
  const a_desk = desktop(`
    <div style="position:relative">
      ${wnav(true)}
      <div style="position:relative">
        ${ph('video / render fachada · overlay oscuro degradado',360,{dark:true})}
        ${pin('video barrio aéreo loop muted','top:30px;right:18px')}
        <div style="position:absolute;left:0;right:0;bottom:0;padding:26px 30px;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;background:linear-gradient(transparent,rgba(0,0,0,.55))">
          <div style="max-width:62%">
            <div style="margin-bottom:12px">${live('En construcción · entrega Ago 2026')}</div>
            ${eyebrow('Barrio Naón · CABA',true)}
            ${dh('Lo que el barrio<br>nunca tuvo. <em>Hasta ahora.</em>',34,true)}
            <div style="margin-top:12px">${sub('Semipisos 3 amb · Dúplex 4 amb · A estrenar',true)}</div>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;gap:10px;align-items:flex-end">
            <div style="color:#fff">${price('USD 194.950','Desde')}</div>
            ${btnp('Coordiná una visita')}
            ${btng('Ver tipologías',true)}
          </div>
        </div>
      </div>
    </div>`, 'A · Desktop — full-bleed');

  const a_mob = mobile(`
    ${mnav(true)}
    <div style="position:relative">
      ${ph('render fachada · vertical',300,{dark:true})}
      <div style="position:absolute;inset:0;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;gap:9px;background:linear-gradient(transparent,rgba(0,0,0,.6))">
        <div>${live('Ago 2026')}</div>
        ${eyebrow('Barrio Naón',true)}
        ${dh('Lo que el barrio nunca tuvo. <em>Hasta ahora.</em>',20,true)}
        <div style="color:#fff">${price('Desde USD 194.950')}</div>
        <div style="margin-top:4px">${btnp('Coordiná una visita')}</div>
      </div>
    </div>`, 'A · Mobile');

  /* ---- B · Editorial split ---- */
  const b_desk = desktop(`
    ${wnav(false)}
    <div style="display:flex;align-items:stretch;min-height:330px">
      <div style="flex:1;padding:34px 30px;display:flex;flex-direction:column;justify-content:center;gap:14px;background:var(--bg-soft)">
        ${eyebrow('Barrio Naón · CABA — a estrenar')}
        ${dh('Lo que el barrio<br>nunca tuvo.<br><em>Hasta ahora.</em>',38)}
        ${sub('Semipisos de 3 ambientes y dúplex de 4. A estrenar. Entrega Agosto 2026.')}
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:2px">${chip('Solo 2 unidades por piso')}${chip('Todo incluido')}</div>
        <div style="display:flex;align-items:center;gap:16px;margin-top:8px">${price('USD 194.950','Desde')}${btnp('Coordiná una visita')}${btng('Ver tipologías')}</div>
      </div>
      <div style="flex:0 0 46%;position:relative">
        ${ph('render fachada · vertical',null,{style:'height:100%;min-height:330px'})}
        ${pin('foto-render a sangre','top:14px;left:14px')}
      </div>
    </div>`, 'B · Desktop — editorial split');

  const b_mob = mobile(`
    ${mnav(false)}
    <div style="padding:20px 16px 16px;background:var(--bg-soft);display:flex;flex-direction:column;gap:10px">
      ${eyebrow('Barrio Naón · a estrenar')}
      ${dh('Lo que el barrio nunca tuvo. <em>Hasta ahora.</em>',23)}
      ${sub('Semipisos 3 amb y dúplex 4 · Entrega Ago 2026')}
      <div>${price('Desde USD 194.950')}</div>
      ${btnp('Coordiná una visita')}
    </div>
    ${ph('render fachada',210)}`, 'B · Mobile');

  /* ---- C · Informativo / orientación rápida ---- */
  const c_desk = desktop(`
    <div style="position:relative">
      ${wnav(true)}
      <div style="position:relative">
        ${ph('render fachada · luz de tarde',300,{dark:true})}
        <div style="position:absolute;left:30px;top:40px;max-width:55%">
          ${eyebrow('Barrio Naón · CABA',true)}
          ${dh('El barrio que ya elegiste.<br>El departamento que <em>nunca encontraste acá.</em>',28,true)}
          <div style="margin-top:14px;display:flex;gap:10px">${btnp('Coordiná una visita')}${btng('Ver tipologías',true)}</div>
        </div>
        <div style="position:absolute;right:24px;bottom:74px;width:206px;background:#fff;border-radius:4px;padding:14px;box-shadow:0 14px 30px -16px rgba(0,0,0,.6)">
          <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)">Tipologías desde</div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:6px"><span style="font-size:11px">3 amb</span>${price('USD 194.950')}</div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:4px;padding-top:6px;border-top:1px solid var(--line)"><span style="font-size:11px">Dúplex</span>${price('USD 376.000')}</div>
          <div style="margin-top:10px">${btng('Ver disponibilidad')}</div>
        </div>
        ${pin('card de unidades flotante','bottom:48px;right:240px')}
      </div>
      <div style="display:flex;background:var(--ink);color:#fff">
        ${['A estrenar','Semipisos 3 amb','Dúplex 4 amb','Solo 2 por piso','Entrega Ago 2026'].map(t=>`<div style="flex:1;padding:13px 10px;text-align:center;border-right:1px solid rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.82)">${t}</div>`).join('')}
      </div>
    </div>`, 'C · Desktop — informativo + barra de datos');

  const c_mob = mobile(`
    ${mnav(true)}
    <div style="position:relative">
      ${ph('render fachada',230,{dark:true})}
      <div style="position:absolute;inset:0;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;background:linear-gradient(transparent,rgba(0,0,0,.55))">
        ${eyebrow('Barrio Naón',true)}
        ${dh('El departamento que nunca encontraste acá.',19,true)}
      </div>
    </div>
    <div style="display:flex;background:var(--ink);color:#fff">
      ${['3 amb desde<br>USD 194.950','Dúplex desde<br>USD 376.000'].map(t=>`<div style="flex:1;padding:11px 8px;text-align:center;border-right:1px solid rgba(255,255,255,.1);font-size:10px;line-height:1.4;color:#fff">${t}</div>`).join('')}
    </div>
    <div style="padding:12px 16px">${btnp('Coordiná una visita')}</div>`, 'C · Mobile');

  return `
    <div class="lead">
      <div class="kicker">Exploración 02 · hero</div>
      <h2>Tres maneras de abrir</h2>
      <p>El hero define el tono de toda la página. Las tres dicen lo mismo —el headline ganador del brief— pero lo enmarcan distinto: <b>cinematográfico</b> (el barrio en movimiento), <b>editorial</b> (la tipografía manda) o <b>informativo</b> (precio y datos a la vista para tráfico de ads).</p>
    </div>
    ${variant({tag:'Hero A', title:'Cinematográfico full-bleed', recommended:true,
      blurb:'Video del barrio a pantalla completa con overlay. Máximo impacto emocional, conecta con el eje “Naón” antes que con el producto.',
      desktop:a_desk, mobile:a_mob,
      notes:[note('Usa <b>barrio_naon_desde_el_aire.mp4</b> como bg, muted + loop. Poster = render mientras carga.'), note('Badge <b>En construcción</b> con punto naranja pulsante = honestidad sobre la etapa.'), {t:'Riesgo: el video pesa. Facade pattern — no cargar hasta interacción/proximidad.',kind:'new'}]})}
    ${variant({tag:'Hero B', title:'Editorial split',
      blurb:'Mitad tipografía sobre fondo claro, mitad render a sangre. Refinado, “revista de arquitectura”. Deja respirar el headline y se lee perfecto en mobile.',
      desktop:b_desk, mobile:b_mob,
      notes:[note('El tono <b>directo y confiado</b> del brief vive bien acá: sin overlay, el texto manda.'), note('Chips de prueba arriba del CTA: “2 por piso”, “todo incluido”.')]})}
    ${variant({tag:'Hero C', title:'Informativo · orientación rápida',
      blurb:'Render + card flotante de precios + barra de datos clave al pie. Para el que llega de un aviso y quiere ubicarse en 3 segundos: qué es, cuánto, cuándo.',
      desktop:c_desk, mobile:c_mob,
      notes:[note('Card de unidades enlaza directo a la tabla de disponibilidad.'), {t:'Mejor tasa de scroll para tráfico pago: responde “¿cuánto?” sin scrollear.',kind:'new'}]})}`;
}
