/* ============================================================
   01 — RECORRIDO / orden narrativo (3 estrategias)
   ============================================================ */
function buildRecorrido(){
  const flowA = {
    tag:'A · Narrativa emocional', recommended:true,
    title:'Deseo → producto → prueba → contacto',
    blurb:'Sigue el arco del documento de oferta: construye el deseo antes de mostrar números. El recorrido natural para tráfico que llega con intención de mudarse.',
    steps:[
      {num:'01',ml:'hero',name:'Hero',purpose:'“Lo que el barrio nunca tuvo. Hasta ahora.” + precio desde + CTA visita',dark:true},
      {num:'02',ml:'text',name:'Gancho emocional',purpose:'Naón siempre fue para vivir bien. Le faltaba el edificio. 3 chips.'},
      {num:'03',ml:'bands',name:'Los 6 pilares',purpose:'A estrenar · terminaciones · barrio · cocheras · 2 por piso · dúplex'},
      {num:'04',ml:'tabs',name:'Tipologías',purpose:'Las 4 tipologías + cocheras · galería · plano · precios',dark:true},
      {num:'05',ml:'strip',name:'Condiciones de pago',purpose:'18 cuotas USD · 5% anual · contado. Con ejemplo de cuota.',isNew:true},
      {num:'06',ml:'gallery',name:'Galería',purpose:'Renders + fotos de obra mezclados + botón video',dark:true},
      {num:'07',ml:'grid',name:'Ficha técnica / terminaciones',purpose:'Grid de materiales con ícono + detalle'},
      {num:'08',ml:'map',name:'Ubicación / Barrio Naón',purpose:'Mapa + puntos clave + video aéreo del barrio'},
      {num:'09',ml:'text',name:'Preguntas frecuentes',purpose:'Tabla de objeciones: usado vs estrenar, contrafrente, expensas, cochera',isNew:true},
      {num:'10',ml:'split',name:'DIGA + Ariel (confianza)',purpose:'Quién construye + asesor directo, juntos al cierre'},
      {num:'11',ml:'form',name:'CTA final + formulario',purpose:'“Coordinamos una visita hoy” · WhatsApp + form → Tokko'},
      {num:'12',ml:'footer',name:'Footer AKPROP',purpose:'Matrícula, contacto, legales'}
    ]
  };

  const flowB = {
    tag:'B · Producto primero',
    title:'Para tráfico de ads: precio y unidades arriba',
    blurb:'El que viene de un aviso “departamentos desde USD 194.950” quiere ver tipologías y precios ya. Menos narrativa larga, decisión más rápida. Pilares condensados.',
    steps:[
      {num:'01',ml:'hero',name:'Hero',purpose:'Headline + precio desde + barra de datos clave + CTA',dark:true},
      {num:'02',ml:'table',name:'Tipologías y precios',purpose:'Sube al puesto 2 · tabla maestra de disponibilidad de las 14 unidades',isNew:true},
      {num:'03',ml:'strip',name:'Disponibilidad / urgencia',purpose:'Cuántas quedan · 2 dúplex únicos · barra de estado',isNew:true},
      {num:'04',ml:'grid',name:'Pilares condensados (grid)',purpose:'Los 6 como tarjetas escaneables, no bandas largas',dark:true},
      {num:'05',ml:'gallery',name:'Galería',purpose:'Renders + obra + video'},
      {num:'06',ml:'map',name:'Ubicación / Barrio',purpose:'Mapa + conectividad (Gral. Paz 2 min)',dark:true},
      {num:'07',ml:'grid',name:'Ficha técnica',purpose:'Terminaciones incluidas — respaldo de la calidad'},
      {num:'08',ml:'text',name:'Objeciones / FAQ',purpose:'Por qué no usado · expensas · cochera · financiación',isNew:true},
      {num:'09',ml:'split',name:'Asesor + DIGA + CTA',purpose:'Confianza + formulario + WhatsApp en un solo bloque de cierre',dark:true},
      {num:'10',ml:'footer',name:'Footer AKPROP',purpose:'Contacto y legales'}
    ]
  };

  const flowC = {
    tag:'C · Recorrido guiado',
    title:'Scrollytelling: el barrio como gancho, el dúplex como clímax',
    blurb:'Más inmersivo y editorial. Lleva el barrio al frente (el eje que más conecta según el brief) y termina en el dúplex como punto aspiracional. Confianza al final.',
    steps:[
      {num:'01',ml:'hero',name:'Hero — video del barrio',purpose:'Video aéreo de Naón con overlay + headline. Sentido de lugar primero.',dark:true},
      {num:'02',ml:'text',name:'Manifiesto',purpose:'Gancho largo a pantalla completa, tipografía protagonista'},
      {num:'03',ml:'map',name:'Capítulo 1 · El barrio',purpose:'Por qué Naón · el oasis · conectividad · mapa',dark:true},
      {num:'04',ml:'bands',name:'Capítulo 2 · El edificio',purpose:'Pilares como capítulos: a estrenar · terminaciones · 2 por piso'},
      {num:'05',ml:'tabs',name:'Capítulo 3 · Las unidades',purpose:'Tipologías con galería y plano',dark:true},
      {num:'06',ml:'grid',name:'Capítulo 4 · La calidad',purpose:'Ficha técnica como prueba — detalle de terminaciones'},
      {num:'07',ml:'split',name:'Clímax · Los dúplex',purpose:'Tipología premium destacada · rooftop privado · 2 unidades',dark:true},
      {num:'08',ml:'gallery',name:'Galería inmersiva',purpose:'Full-bleed renders + obra + video'},
      {num:'09',ml:'strip',name:'Condiciones + cocheras',purpose:'Financiación 18 cuotas + 7 cocheras',isNew:true},
      {num:'10',ml:'split',name:'Quién lo hace',purpose:'DIGA + Ariel · confianza antes del cierre'},
      {num:'11',ml:'form',name:'CTA final',purpose:'Visita + formulario → Tokko',dark:true},
      {num:'12',ml:'footer',name:'Footer',purpose:'Contacto y legales'}
    ]
  };

  const legend = `<div class="legend">
    <span class="li"><span class="sw2 ink"></span> sección fondo oscuro (--ink)</span>
    <span class="li"><span class="sw2"></span> sección fondo claro</span>
    <span class="li"><span class="sw2 strip"></span> placeholder de imagen</span>
    <span class="li"><span class="sw2 acc"></span> acento / CTA</span>
    <span class="li"><span class="sw2 newb"></span> sección propuesta (no estaba en el brief)</span>
  </div>`;

  return `
    <div class="lead">
      <div class="kicker">Exploración 01 · estructura</div>
      <h2>El recorrido completo, en tres estrategias</h2>
      <p>Cada columna es la landing entera de arriba a abajo. Cambia el <b>orden narrativo</b> y el peso que se le da a cada cosa. El thumbnail muestra el tipo de layout; el fondo oscuro indica las secciones <span style="color:var(--ink-2);font-weight:600">--ink</span> (el brief pide un tono más nocturno que Larrazabal).</p>
      <p>Marqué en verde las <b>secciones que propongo agregar</b> y que no estaban en el brief original, pensadas para que el recorrido “deje todo claro”: condiciones de pago con ejemplo, una tabla de disponibilidad real de las 14 unidades, y un bloque de objeciones/FAQ que responde las dudas del comprador antes de que las tenga.</p>
    </div>
    ${legend}
    <p class="hint">↔ deslizá horizontalmente para comparar las tres · elegí una base y la afinamos</p>
    <div class="storyboard">
      ${flow(flowA)}
      ${flow(flowB)}
      ${flow(flowC)}
    </div>`;
}
