(function(){
  function $(sel){return document.querySelector(sel)}
  function $all(sel){return Array.from(document.querySelectorAll(sel))}

  const routes = ['home','executive','manager','hr','payroll','settings']
  function activateRoute(route){
    if(!routes.includes(route)) route = 'home'
    // show/hide screens
    $all('.screen').forEach(s=>s.classList.toggle('active', s.dataset.route===route))
    // update nav
    $all('.main-nav a').forEach(a=>{
      const r = a.dataset.route || a.getAttribute('href').replace('#','')
      const active = r===route
      a.classList.toggle('active', active)
      a.setAttribute('aria-current', active? 'true': 'false')
    })
    // update document title
    document.title = 'BoSS – ' + route.charAt(0).toUpperCase()+route.slice(1)
  }

  function navigateTo(route, replace){
    if(replace) history.replaceState(null,null,'#'+route)
    else history.pushState(null,null,'#'+route)
    activateRoute(route)
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    // route on load
    const initial = (location.hash||'#home').replace('#','')
    activateRoute(initial)

    // nav clicks
    $all('.main-nav a').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const r = a.dataset.route || a.getAttribute('href').replace('#','')
        e.preventDefault()
        navigateTo(r)
      })
    })

    // handle back/forward
    window.addEventListener('popstate', ()=>{
      const r = (location.hash||'#home').replace('#','')
      activateRoute(r)
    })

    // Login button: go to executive
    const btn = $('#btnLogin')
    if(btn) btn.addEventListener('click', (e)=>{e.preventDefault(); navigateTo('executive')})
  })
})();
