fetch('https://whatyearisit-backend-red-psi.vercel.app')
 .then(response => response.json()).then();
 const ajd = new Date()
 document.querySelector('#year').textContent = ajd.getFullYear()
