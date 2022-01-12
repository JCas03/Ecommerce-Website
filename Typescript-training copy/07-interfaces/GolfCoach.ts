import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): String {
        return "hit 100 balls at the golf range";
    }
    
}