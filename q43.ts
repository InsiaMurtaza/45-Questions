let magicians:string[]=["magician1","magician2","magician3","magician4","magician5"];
// let new_magicians:string[]=["the great magician1","the great magician2","the great magician3","the great magician4","the great magician5"];
function make_great(magicians:string[]){
    
for(let i=0;i<magicians.length;i++){
    let great_magicians:string[] =["the great" + (magicians[i])];
    console.log(great_magicians);
}

}



function show_magicians(magicians:string[]){
    return console.log(magicians);
}
console.log("Original Array");
show_magicians(magicians);
console.log("Modofied Array");
make_great(magicians);