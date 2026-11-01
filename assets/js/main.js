(function(){
  var items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function(el){ observer.observe(el); });

  var header = document.querySelector('.site-header');
  if(header){
    window.addEventListener('scroll', function(){
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px -8px rgba(11,26,46,.15)' : 'none';
    });
  }
})();
