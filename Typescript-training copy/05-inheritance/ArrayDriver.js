"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var Circle_1 = require("./Circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
//declare an array of shape...initially empty
var theShapes = [];
//add the shapes to array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var temp = theShapes_1[_i];
    console.log(temp.getInfo());
}
