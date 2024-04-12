fetch('https://whatyearisit-backend-red-psi.vercel.app/year')
 .then(response => response.json()).then();
 const data = new Date()
 document.querySelector('#year').textContent = data.getFullYear()
