const menu=document.querySelector('.menu');const nav=document.querySelector('.site-header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('nav a[href^="#"]')];const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>observer.observe(s));

if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const selectors=['.hero-copy h1','.hero-positioning','.hero-delivery','.disciplines','.actions','.hero-profile','.section-heading','.project','.about-v2-photo','.about-v2-copy > *','.insights > .kicker','.insights > h2','.insights > .intro','.insight-grid article','.resume > *'];
 const items=[...document.querySelectorAll(selectors.join(','))];
 items.forEach(el=>el.classList.add('reveal'));
 document.querySelectorAll('.project').forEach((el,i)=>el.style.setProperty('--reveal-delay',(i%2)*140+'ms'));
 document.documentElement.classList.add('motion-ready');
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');revealObserver.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -35px 0px'});
 items.forEach(el=>revealObserver.observe(el));
}
