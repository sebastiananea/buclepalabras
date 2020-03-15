
let palabrasArray=[''];
let turnos = 0;


const tipoDePalabra = ['sustantivo', 'adjetivo', 'verbo']

if(turnos == 18){
	console.log(arrayPalabras);
	}
	else{
        do{
            for(i=0; i<3; i++){
       
   let palabra = prompt('ingrese un ' + tipoDePalabra[i])
   palabrasArray.push(palabra);
   turnos++;
   }
   }
        while(turnos!== 18)
    };
    console.log(palabrasArray);
