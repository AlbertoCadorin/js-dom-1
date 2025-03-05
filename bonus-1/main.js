// riciamare il bottone tramite id
const elementClick = document.getElementById("butt");
console.log(elementClick);

// richiamare l'img tramite selettore 
const elementImg = document.getElementById('lampadina')
console.log(elementImg)

// cambiare l'img con la lampadina accesa
elementClick.addEventListener('click', function(){
    if(elementImg.classList.contains('off')){
        console.log('accendo ')
        elementImg.classList.remove('off')
        elementImg.src = '../img/yellow_lamp.png';
        elementImg.alt = 'Meme di Gaetano documentazione';
        elementClick.innerText = 'Spegni!';
    }else{
        console.log('spengo ')
        elementImg.classList.add('off')
        elementImg.src = '../img/white_lamp.png';
        elementImg.alt = 'lampadina spenta';
        elementClick.innerText = 'Accendi!';
    }
    
})
