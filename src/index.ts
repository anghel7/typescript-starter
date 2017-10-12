//import { Animal } from "./model/";
//import { Gato } from "./model/";

import { Animal } from "./model/animal";
import { Gato } from "./model/gato";

let helloWorld: string = 'Hello TypeScript worlds';
let numberContainer:number = 2;
// numberContainer.trim();
console.log(helloWorld);

//const animal1 = new Animal('misifuz');
//animal1.mover(58);
//animal1.mover();


//const gato1 = new Gato("picolino");
//Poliformismo
const gato1: Gato = new Gato("picolinoo");
gato1.mover(23);
//invokar funcion especifica del gato
(<Gato>gato1).mover(2);
(gato1 as Gato).mover(2);