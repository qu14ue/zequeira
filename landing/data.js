/* ============================================================
   Datos · Zequeira 7054 — unidades, tipologías, precios
   ============================================================ */
const WA = '5491125466099';
function waLink(txt){ return `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`; }

/* --- las 12 unidades a la venta (10 deptos + 2 dúplex) --- */
const UNITS = [
  {id:'6B', tipo:'Dúplex contrafrente', cat:'duplex', ori:'SE', amb:4, dorm:3, cub:'113,75', tot:'187,75', precio:'380.700', piso:'6°/7°/8°'},
  {id:'6A', tipo:'Dúplex frente',       cat:'duplex', ori:'NO', amb:4, dorm:3, cub:'113,75', tot:'182,75', precio:'376.000', piso:'6°/7°/8°'},
  {id:'4A', tipo:'3 amb frente',        cat:'frente', ori:'NO', amb:3, dorm:2, cub:'75,90', tot:'90,20',  precio:'232.500', piso:'4°'},
  {id:'5A', tipo:'3 amb frente',        cat:'frente', ori:'NO', amb:3, dorm:2, cub:'75,90', tot:'90,20',  precio:'228.500', piso:'5°'},
  {id:'1A', tipo:'3 amb frente + patio',cat:'frente', ori:'NO', amb:3, dorm:2, cub:'75,90', tot:'103,69', precio:'224.500', piso:'1°'},
  {id:'3A', tipo:'3 amb frente',        cat:'frente', ori:'NO', amb:3, dorm:2, cub:'75,90', tot:'90,20',  precio:'224.500', piso:'3°'},
  {id:'2A', tipo:'3 amb frente',        cat:'frente', ori:'NO', amb:3, dorm:2, cub:'75,90', tot:'90,20',  precio:'215.900', piso:'2°'},
  {id:'5B', tipo:'3 amb contrafrente',  cat:'contra', ori:'SE', amb:3, dorm:2, cub:'75,90', tot:'80,06',  precio:'214.500', piso:'5°'},
  {id:'4B', tipo:'3 amb contrafrente',  cat:'contra', ori:'SE', amb:3, dorm:2, cub:'75,90', tot:'80,06',  precio:'210.500', piso:'4°'},
  {id:'1B', tipo:'3 amb contrafrente + patio', cat:'contra', ori:'SE', amb:3, dorm:2, cub:'75,90', tot:'93,55', precio:'203.500', piso:'1°'},
  {id:'3B', tipo:'3 amb contrafrente',  cat:'contra', ori:'SE', amb:3, dorm:2, cub:'75,90', tot:'80,06',  precio:'202.800', piso:'3°'},
  {id:'2B', tipo:'3 amb contrafrente',  cat:'contra', ori:'SE', amb:3, dorm:2, cub:'75,90', tot:'80,06',  precio:'194.950', piso:'2°'}
];

/* --- tipologías (tabs) --- */
const TIPOS = [
  {
    key:'frente', tab:'3 Amb · Frente', ori:'NOROESTE',
    title:'Semipiso 3 ambientes · Frente',
    gallery:['assets/unidades/3_amb_frente/1f.webp','assets/unidades/3_amb_frente/2f.webp','assets/unidades/3_amb_frente/3f.webp','assets/unidades/3_amb_frente/4f.webp','assets/unidades/3_amb_frente/5f.webp','assets/unidades/3_amb_frente/6f.webp','assets/unidades/3_amb_frente/7.webp','assets/unidades/3_amb_frente/8.webp','assets/unidades/3_amb_frente/9f.webp','assets/unidades/3_amb_frente/10f.webp','assets/unidades/3_amb_frente/balcon%20bajo%201.webp','assets/unidades/3_amb_frente/balcon%20bajo%202.webp','assets/unidades/3_amb_frente/habitacion%20con%20patio.webp','assets/unidades/3_amb_frente/patio%201.webp','assets/unidades/3_amb_frente/patio%202.webp'],
    plano:'assets/planos/plano_2a7_piso.webp',
    specs:[['M² cubiertos','75,90'],['M² balcón','14,30'],['M² totales','90,20',' a 103,69'],['Orientación','NO'],['Dormitorios','2'],['Baños','2']],
    expensas:'$150.000', amb:'3 amb · 2 dorm · 2 baños',
    note:'La unidad 1A suma un patio privado de 13,49 m² — 103,69 m² totales.',
    precios:[
      {u:'1A',m:'103,69',p:'224.500'},{u:'2A',m:'90,20',p:'215.900'},{u:'3A',m:'90,20',p:'224.500'},
      {u:'4A',m:'90,20',p:'232.500'},{u:'5A',m:'90,20',p:'228.500'}
    ],
    desc:'Living comedor con salida a balcón de 14,30 m² orientado al Noroeste. Cocina con muebles a medida, horno eléctrico y anafe a gas. Dos dormitorios con placards completos. Solo 2 unidades por planta.'
  },
  {
    key:'contra', tab:'3 Amb · Contrafrente', ori:'SUDESTE',
    title:'Semipiso 3 ambientes · Contrafrente',
    gallery:['assets/unidades/3_amb_contrafrente/1.webp','assets/unidades/3_amb_contrafrente/2.webp','assets/unidades/3_amb_contrafrente/3.webp','assets/unidades/3_amb_contrafrente/4.webp','assets/unidades/3_amb_contrafrente/5.webp','assets/unidades/3_amb_contrafrente/6.webp','assets/unidades/3_amb_contrafrente/7.webp','assets/unidades/3_amb_contrafrente/8.webp','assets/unidades/3_amb_contrafrente/9.webp','assets/unidades/3_amb_contrafrente/balcon.webp','assets/unidades/3_amb_contrafrente/patio%201.webp','assets/unidades/3_amb_contrafrente/patio%202.webp'],
    plano:'assets/planos/plano_2a7_piso.webp',
    specs:[['M² cubiertos','75,90'],['M² balcón','4,16'],['M² totales','80,06',' a 93,55'],['Orientación','SE'],['Dormitorios','2'],['Baños','2']],
    expensas:'$150.000', amb:'3 amb · 2 dorm · 2 baños',
    note:'La unidad 1B suma patio de 13,49 m² — 93,55 m² totales.',
    precios:[
      {u:'1B',m:'93,55',p:'203.500'},{u:'2B',m:'80,06',p:'194.950'},{u:'3B',m:'80,06',p:'202.800'},
      {u:'4B',m:'80,06',p:'210.500'},{u:'5B',m:'80,06',p:'214.500'}
    ],
    desc:'Living comedor con salida a balcón orientado al Sudeste — mucha luz y el silencio de un contrafrente. Cocina con muebles a medida, horno eléctrico y anafe a gas. Dos dormitorios con placards completos. Solo 2 unidades por planta.'
  },
  {
    key:'dxf', tab:'Dúplex · Frente', ori:'NOROESTE',
    title:'Dúplex 4 ambientes · Frente — Unidad 6A',
    gallery:['assets/unidades/duplex/64745_7497468408255426512416783019089961446057707946045291476227926482231184515338.webp','assets/unidades/duplex/64745_14543592838451697311225614220053393406785663385336062949492725176032724055156.webp','assets/unidades/duplex/64745_17113896104361537904834410502848980124476869379290108388911976855890982108407.webp','assets/unidades/duplex/64745_47103047141169917097868582193325337544885098426371943455045122764239673736693.webp','assets/unidades/duplex/7140485_11809414227103914571114588721650222270506327165416013455268566592690137824780.webp','assets/unidades/duplex/7140485_12293107737855048769334970352750727295502454481663487612476077083881659908815.webp','assets/unidades/duplex/7140485_20846707556513837181653945219494663002556759192731893224397389042130596892252.webp','assets/unidades/duplex/7140485_58166711416942987489841188020290025272478350907857724988576721523546924671540.webp','assets/unidades/duplex/7140485_70293985448921348033305261254898026290848450340893787388714645376500353253910.webp','assets/unidades/duplex/7140485_74558181431672631462300082397333460087465159064692586716430368669992208697760.webp','assets/unidades/duplex/7140485_77347361645425557922041452230550544660175567821264523405407664195597122593633.webp','assets/unidades/duplex/7140485_92598101832057488829817061859868772140985517547153983871676650745823778867474.webp','assets/unidades/duplex/7140485_96586024807490708252441456416810437124037226631844221179672804937320742847016.webp','assets/unidades/duplex/7140485_99692798340092435396809758916006678954500366588080270544903933927466816678276.webp','assets/unidades/duplex/7140485_102589815381142993905810466228540614675553547629003827418414670479177366053630.webp','assets/unidades/duplex/7140485_109483828632792212237262489262260395358498856006680503704735969774019458253110.webp'],
    plano:'assets/planos/plano_azotea.webp',
    specs:[['M² cubiertos','113,75'],['M² balcón','28,00'],['M² terraza','41,00'],['M² totales','182,75'],['Dormitorios','3'],['Baños','3']],
    expensas:'$150.000', amb:'4 amb · 3 dorm · 3 baños · 3 niveles',
    note:'Tres niveles: dormitorios en el 6°, vida social en el 7°, terraza privada de 41 m² en el 8°.',
    precios:[{u:'6A',m:'182,75',p:'376.000'}],
    desc:'Dúplex en la cima del edificio. Dormitorios en el 6°, living comedor apaisado en el 7° con balcón aterrazado de 28 m², y terraza privada de 41 m² en el 8° — de uso exclusivo.'
  },
  {
    key:'dxc', tab:'Dúplex · Contrafrente', ori:'SUDESTE',
    title:'Dúplex 4 ambientes · Contrafrente — Unidad 6B',
    gallery:['assets/unidades/duplex/64745_7497468408255426512416783019089961446057707946045291476227926482231184515338.webp','assets/unidades/duplex/64745_14543592838451697311225614220053393406785663385336062949492725176032724055156.webp','assets/unidades/duplex/64745_17113896104361537904834410502848980124476869379290108388911976855890982108407.webp','assets/unidades/duplex/64745_47103047141169917097868582193325337544885098426371943455045122764239673736693.webp','assets/unidades/duplex/7140485_11809414227103914571114588721650222270506327165416013455268566592690137824780.webp','assets/unidades/duplex/7140485_12293107737855048769334970352750727295502454481663487612476077083881659908815.webp','assets/unidades/duplex/7140485_20846707556513837181653945219494663002556759192731893224397389042130596892252.webp','assets/unidades/duplex/7140485_58166711416942987489841188020290025272478350907857724988576721523546924671540.webp','assets/unidades/duplex/7140485_70293985448921348033305261254898026290848450340893787388714645376500353253910.webp','assets/unidades/duplex/7140485_74558181431672631462300082397333460087465159064692586716430368669992208697760.webp','assets/unidades/duplex/7140485_77347361645425557922041452230550544660175567821264523405407664195597122593633.webp','assets/unidades/duplex/7140485_92598101832057488829817061859868772140985517547153983871676650745823778867474.webp','assets/unidades/duplex/7140485_96586024807490708252441456416810437124037226631844221179672804937320742847016.webp','assets/unidades/duplex/7140485_99692798340092435396809758916006678954500366588080270544903933927466816678276.webp','assets/unidades/duplex/7140485_102589815381142993905810466228540614675553547629003827418414670479177366053630.webp','assets/unidades/duplex/7140485_109483828632792212237262489262260395358498856006680503704735969774019458253110.webp'],
    plano:'assets/planos/plano_azotea.webp',
    specs:[['M² cubiertos','113,75'],['M² balcón','28,00'],['M² terraza','46,00'],['M² totales','187,75'],['Dormitorios','3'],['Baños','3']],
    expensas:'$150.000', amb:'4 amb · 3 dorm · 3 baños · 3 niveles',
    note:'Tres niveles: dormitorios en el 6°, vida social en el 7°, terraza privada de 46 m² en el 8°',
    precios:[{u:'6B',m:'187,75',p:'380.700'}],
    desc:'El dúplex más grande. Suite principal con vestidor y baño privado en el 6°, living social apaisado en el 7° con balcónes aterrazado de 28 m² totales, y rooftop privado de 46 m² en el 8°.'
  },
  {
    key:'coch', tab:'Cocheras', ori:'SUBSUELO + PB',
    title:'Cocheras',
    gallery:['assets/planos/plano_subsuelo.webp','assets/planos/plano_planca_baja.webp'],
    plano:'assets/planos/plano_subsuelo.webp',
    specs:[['Total','12'],['Subsuelo','6'],['Planta baja','6'],['Precio desde','USD 22.000']],
    expensas:'—', amb:'Venta independiente',
    note:'Las cocheras se venden por separado — Desde USD 22.000. - Consultar disponibilidad.',
    precios:[{u:'Subsuelo',m:'4 disp.',p:'20.000'},{u:'Planta baja',m:'3 disp.',p:'20.000'}],
    desc:'Cubiertas y descubiertas. Disponibles en Subsuelo y Planta Baja. (6 unidades por planta)',
    isCochera:true
  }
];
