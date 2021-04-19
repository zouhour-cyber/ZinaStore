Nightmode

//Récupérer le button nightmode
let nightMode=document.getElementById('nightMode');

//Ecouter l'evènement 
nightMode.addEventListener("click",tonight);
 // Exécution de ce code lors d'un click
function tonight(){

    document.body.classList.toggle("dark-theme");
     }  
     