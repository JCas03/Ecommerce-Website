let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average = " + total / reviews.length);