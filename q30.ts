let greetUsers:string[]=["Insia","Murtaza","Admin","Sakina","Asma","Idrees"];

greetUsers.forEach(greetUser => {
    if(greetUser=="Admin"){
        console.log("Hello! Admin.Would you like to see the status report");
    }
    else {
        console.log(`Hello ${greetUser}! Welcome Back!!`);
    }
});
    






