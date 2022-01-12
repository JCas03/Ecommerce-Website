let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

/*for(let i = 0; i < sports.length; i++){
    console.log(sports[i]);
}*/

//simpl for loop
for(let tempSport of sports){
    if(tempSport == "Cricket"){
        console.log(tempSport + "<<< my fav");
    }else console.log(tempSport);
}