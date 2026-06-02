/* ============================================================
   main — wireup de tabs, toggles y render
   ============================================================ */
(function(){
  const panels = {
    recorrido:  buildRecorrido,
    hero:       buildHero,
    pilares:    buildPilares,
    tipologias: buildTipologias
  };

  // render all panels once
  Object.keys(panels).forEach(key => {
    const el = document.getElementById('panel-' + key);
    if (el) el.innerHTML = panels[key]();
  });

  // tab switching (with hash persistence)
  const tabs = document.querySelectorAll('.tab');
  function activate(key){
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.target === key));
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('is-active', p.id === 'panel-' + key));
    if (location.hash !== '#' + key) history.replaceState(null,'','#'+key);
    window.scrollTo({top:0});
  }
  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.target)));
  const initial = (location.hash || '#recorrido').slice(1);
  activate(panels[initial] ? initial : 'recorrido');

  // toggles
  const notesTg = document.getElementById('tg-notes');
  notesTg.addEventListener('change', () => {
    document.body.classList.toggle('notes-off', !notesTg.checked);
    notesTg.closest('.tg').classList.toggle('on', notesTg.checked);
  });

  const bgTg = document.getElementById('tg-bg');
  bgTg.addEventListener('change', () => {
    document.body.classList.toggle('bg-blueprint', bgTg.checked);
    bgTg.closest('.tg').classList.toggle('on', bgTg.checked);
  });
})();
