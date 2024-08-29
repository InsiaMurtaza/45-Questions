function cars(company:string,model:string,...options:[key:string,value:any][])
{
    let cArs={
        companyName: company,
        modelName:model,
        addedfeatures:options
    }
    // options.forEach(key=>{cArs.=key})
    //    options.forEach(value=>{cArs.key=value});
    return cArs;
    }
console.log(cars("Honda","Civic",["color:","blue"],["year:","2020"]));
console.log(cars("Corolla","Toyota"));
console.log(cars("Mira","Daihatsu",["year:","2018"]));