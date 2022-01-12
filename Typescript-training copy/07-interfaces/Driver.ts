import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare array
let theCoaches: Coach[] = [];

//add coaches to array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let temp of theCoaches){
    console.log(temp.getDailyWorkout());
}