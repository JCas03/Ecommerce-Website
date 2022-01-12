import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0,0,3,7);

//declare an array of shape...initially empty
let theShapes: Shape[] = [];

//add the shapes to array

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let temp of theShapes){
    console.log(temp.getInfo());
    console.log(temp.calculateArea());
    console.log();
} 