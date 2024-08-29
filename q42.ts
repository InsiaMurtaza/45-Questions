let magicians1:string[]= ["magician1","magician2","magician3","magician4"];
function great_magicians(magicians1:string[]){
for(let i=0;i<magicians1.length;i++){    
 console.log(`The Great ${magicians1[i]}`);
}}
great_magicians(magicians1);
function show_magicians(magicians1:string[]){
     return console.log(magicians1);
}
show_magicians(magicians1);