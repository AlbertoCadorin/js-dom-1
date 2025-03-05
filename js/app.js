// riciamare il bottone tramite id
const elementClick = document.getElementById("butt");
console.log(elementClick);
// richiamare l'img tramite selettore 
const elementImg = document.querySelector('.lampadina')
console.log(elementImg)
// cambiare l'img con la lampadina accesa
elementClick.addEventListener('click', function () {
    elementImg.src = 'img/yellow_lamp.png';
    elementImg.alt = 'lampadina spenta';
})
