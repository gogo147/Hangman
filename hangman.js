var liv = 5;

var lista = ['programmering', 'javascript', 'studenter', 'stockholm', 'afterwork'];

var randomLista = lista[Math.floor(Math.random() * lista.length)];
var keeper = [];

    for (var i=0; i<randomLista.length; i++){
        keeper[i] = "-";
    }
    
while(randomLista.length > 0){
    var gissa = prompt(keeper.join(" ") + "\nLives left: " + liv);

    gissa = gissa.toLowerCase();
    
    if (gissa === null) {
        break;
    }else if(gissa.length !== 1){
        alert("Please enter a single letter.");
    }

    for(var j=0; j < randomLista.length; j++){

        if(randomLista[j]===gissa){
            keeper[j]=gissa;
        }
    }

    if (randomLista.indexOf(gissa) == -1){   
            liv --;
        }

        if (keeper.every((v,i)=>v === randomLista[i]) ){
            alert("You have won, congratulations!");
            break;
        }
        if(liv===0){
            alert("You have lost! The correct word was " + randomLista);
            break;
        }
    }
