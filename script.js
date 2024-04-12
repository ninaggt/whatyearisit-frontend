fetch('https://whatyearisit-backend-red-psi.vercel.app/year')
 .then(response => response.json(document.querySelector('#year').textContent = data.getFullYear()).then())
