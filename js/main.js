(function(){
  var d=document,root=d.documentElement;
  var tog=d.getElementById('mob-toggle'),drawer=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),cl=d.getElementById('drawer-close');
  function openD(){drawer.classList.add('is-open');ov.classList.add('visible');root.style.overflow='hidden';tog.setAttribute('aria-expanded','true');}
  function closeD(){drawer.classList.remove('is-open');ov.classList.remove('visible');root.style.overflow='';tog.setAttribute('aria-expanded','false');}
  if(tog&&drawer){tog.addEventListener('click',function(){drawer.classList.contains('is-open')?closeD():openD();});}
  if(cl)cl.addEventListener('click',closeD);
  if(ov)ov.addEventListener('click',closeD);
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer&&drawer.classList.contains('is-open'))closeD();});
  window.addEventListener('resize',function(){if(window.innerWidth>900&&drawer&&drawer.classList.contains('is-open'))closeD();});
  d.querySelectorAll('.mob-group-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var t=d.getElementById(b.getAttribute('data-target'));if(!t)return;
      var o=t.classList.toggle('is-open');b.setAttribute('aria-expanded',o?'true':'false');
    });
  });
  d.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var it=q.parentNode,o=it.classList.toggle('open');q.setAttribute('aria-expanded',o?'true':'false');
    });
  });
})();
