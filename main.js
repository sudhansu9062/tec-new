// Main JS (moved to frontend root): smooth scroll, reveal-on-scroll, mobile nav toggle, form validation
(function(){
  'use strict';

  // Smooth scroll for anchor links
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const href = a.getAttribute('href');
    if(href === '#') return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if('IntersectionObserver' in window && reveals.length){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    reveals.forEach(r=>obs.observe(r));
  } else {
    reveals.forEach(r=>r.classList.add('reveal'));
  }

  // Mobile nav toggle
  const nav = document.querySelector('.top-nav');
  const btn = document.querySelector('.nav-toggle');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      btn.classList.toggle('open');
    });
  }

  // Contact form: client-side validation + POST to /api/submit (if present)
  // const contactForm = document.querySelector('.contact-form');
  // if(contactForm){
  //   contactForm.addEventListener('submit', async function(e){
  //     e.preventDefault();
  //     const name = contactForm.querySelector('input[name="name"]');
  //     const email = contactForm.querySelector('input[name="email"]');
  //     const message = contactForm.querySelector('textarea[name="message"]');
  //     const company = contactForm.querySelector('input[name="company"]');
  //     const phone = contactForm.querySelector('input[name="phone"]');
  //     let ok = true;
  //     [name,email,message].forEach(field=>{
  //       if(field && field.hasAttribute('required') && !field.value.trim()){
  //         field.classList.add('field-error');
  //         ok = false;
  //       } else if(field) field.classList.remove('field-error');
  //     });
  //     const statusEl = contactForm.querySelector('.form-status');
  //     if(!ok){
  //       if(statusEl){ statusEl.textContent = 'Please fill the required fields.'; statusEl.classList.remove('success'); statusEl.classList.add('error'); }
  //       const first = contactForm.querySelector('.field-error');
  //       if(first) first.focus();
  //       return;
  //     }

  //     if(statusEl){ statusEl.textContent = 'Sending...'; statusEl.classList.remove('error','success'); }

  //     const payload = {
  //       name: name.value.trim(),
  //       company: company ? company.value.trim() : '',
  //       email: email.value.trim(),
  //       phone: phone ? phone.value.trim() : '',
  //       message: message.value.trim()
  //     };

  //     try{
  //       const resp = await fetch('/api/submit', {
  //         method: 'POST',
  //         headers: {'Content-Type':'application/json'},
  //         body: JSON.stringify(payload)
  //       });
  //       const data = await resp.json();
  //       if(resp.ok){
  //         if(statusEl){ statusEl.textContent = 'Thanks — your message has been submitted.'; statusEl.classList.add('success'); }
  //         contactForm.reset();
  //       } else {
  //         if(statusEl){ statusEl.textContent = 'Submission failed: ' + (data.error || data.detail || 'Unknown error'); statusEl.classList.add('error'); }
  //       }
  //     } catch(err){
  //       if(statusEl){ statusEl.textContent = 'Network error — please try again.'; statusEl.classList.add('error'); }
  //     }
  //   });
  // }

  // Back to top button
  const back = document.createElement('button');
  back.className = 'back-to-top';
  back.title = 'Back to top';
  back.innerHTML = '↑';
  document.body.appendChild(back);
  back.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 400) back.classList.add('visible'); else back.classList.remove('visible');
  });

})();
