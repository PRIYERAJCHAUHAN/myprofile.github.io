function bmiCalculator(weight, height){
    var bmi= weight / (height * height) * 10000;
     return Math.round(bmi);
 }


var bmi = bmiCalculator(80 , 180);
if(bmi < 18.5){
console.log("Your BMI is" + " "+ bmi +" "+ "So you are underweight");
 }
 else if (bmi >= 18.5 && bmi < 24.9) {
console.log("Your BMI is" + " " + bmi + " "+"So your are normalweight");
 }
 else{
console.log("Your BMI is" + " "+ bmi + " "+ "So you are overweight");
 }