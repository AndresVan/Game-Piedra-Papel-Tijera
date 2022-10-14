function juega(opcion){
/* const prompt = require ("prompt-sync")({sigint:true}); */ //Este comando es para correr en la consola el promopt
/* var opcion = parseInt(prompt("Ingrese: Para piedra: 0, papel:1, tijera:2")); */
/* La fórmula para números aleatorios es: 
Math.floor(Math.random()*(max - min + 1)) + min */
var cpuselect = Math.floor(Math.random()*3);
const img2 = document.getElementById("machine");
img2.src = './src/opt'+cpuselect+'.png';
var result = document.querySelector(".resultado");

switch (true){

    case (opcion === cpuselect):
        result.innerHTML="Empate!";
        break;
    case (opcion === 0 && cpuselect === 2):
        result.innerHTML="Has Ganado!!!";
         break;
     case (opcion === 1 && cpuselect ===0):
        result.innerHTML="Has Ganado!!!";
        break;
    case (opcion === 2 && cpuselect ===1):
        result.innerHTML="Has Ganado!!!";
        break;
    default:
        result.innerHTML="Has Perdido  :'(";
        break;
}

}
//------- A continuación se hace uso de API-----------

const URL= 'https://api.thedogapi.com/v1/images/search';

//---- Se captura la info de la URL con fetch-----

/*fetch(URL)
    .then(res => res.json())
    .then (data => {
        const img = document.querySelector("#dog");
        img.src =data[0].url;
    }) */
// También se puede usar el método async (haría lo mismo)
    async function getURL () {
        const response = await fetch(URL);
        const data = await response.json();
        const img = document.querySelector('#dog');
        img.src = data[0].url;
    }
    
    getURL();