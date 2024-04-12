fetch('https://whatyearisit-backend-red-psi.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = '2050';
 });
