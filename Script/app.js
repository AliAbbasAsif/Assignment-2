// Chapter ChangingCase

// task 1

// var username = prompt("Enter Your Name");
// username = username.toUpperCase();
// alert(username);

// task 2

// var username = prompt("Enter Your Name");
// username = username.toLowerCase();
// alert(username);


// chapter Strings: measuring length and extracting parts

// task 1

// var userString = prompt("Enter Your mobile name");
// var stringLength = userString.length;
// alert("Your String size is " + stringLength + " Characters");

// task 2
// var userinput = prompt("Enter any thing");
// var lastChar = userinput.slice(-1);
// alert(lastChar);

// Chapter Strings: finding segments

// task 1
// var pak = "Pakistan";
// var i = pak.lastIndexOf("n");
// alert("Index of 'n' in Pakistan is " + i);

// task 2




// task 3
// var title = "The quick brown fox jumps over the lazy dog";
// var title = title.toLowerCase();
// var count = (title.match(/the/g) || []).length;
// alert(count);

// Strings: finding a character at a location

// task 1
// var pak = "Pakistan";
// var i = pak.charAt(2);
// alert("The third character in Pakistan is " + i);


// Chapter Strings: replacing characters

// task 1
// var text = "Hyderabad";
// var result = text.replace("Hyder" , "Islam");
// alert(result);

// task 2
// var text = "Ali and Sami are best friends. They play cricket and football together.";
// var result = text.replace(/and/g , "&");
// alert(result);


// Chapter Rounding numbers

// task 1
// var integer = prompt("Enter Positive integer");
// integer = Number(integer);
// alert(integer);
// var roundinteger = Math.round(integer);
// alert(roundinteger);
// var floorinteger = Math.floor(integer);
// alert(floorinteger)
// var ceilinteger = Math.ceil(integer);
// alert(ceilinteger);

// task 2
// var integer = prompt("Enter Negative integer");
// integer = Number(integer);
// alert(integer);
// var roundinteger = Math.round(integer);
// alert(roundinteger);
// var floorinteger = Math.floor(integer);
// alert(floorinteger)
// var ceilinteger = Math.ceil(integer);
// alert(ceilinteger);

// Chapter Generating random numbers


// task1
// var randomnumber = Math.random();
// var generatedice = (randomnumber * 6) + 1;
// var deice = Math.floor(generatedice);
// alert(deice);

// task 2
// var toss = Math.random();
// var generate = (toss * 2) + 1;
// var Toss = Math.floor(generate);
// alert(Toss);


// task 3
// var secretnumber = 6;
// secretnumber = Number(secretnumber);
// var guess = prompt("Guess right number from 1 to 10")
// guess = Number(guess);
// if(secretnumber === guess){
//     alert("Right guess")
// }else{
//     alert("Please guess again")
// }


// Chapter Converting strings to integers and decimals

// task 1
// var weight = prompt("Enter Your Weight");
// // weight = Number(weight);
// alert("Your Weight is " + weight + " Kg" );


// Chapter Converting strings to numbers, numbers to strings


// task 1
// var numberstring = "472"
// numberstring = Number(numberstring);
// alert(numberstring);
// alert(typeof(numberstring));


// task 2
// var num = 35.36;
// num = String(num);
// numround = Math.round(num * 100);
// alert(numround);

//  Chapter Controlling the length of decimals


// task 1
// var obtainemarks = prompt("Enter obtain marks");
// obtainemarks = Number(obtainemarks);
// var totalmarks = prompt("Enter Total Marks");
// totalmarks = Number(totalmarks);
// var percentage = ( obtainemarks / totalmarks ) * 100 ;
// percentage = percentage.toFixed(2);
// alert("Your Percentage is " + percentage);


// Chapter Date Methods

// task 1
// var a = new Date();
// alert(a);

// task 2
// var a = new Date();
// alert(a.toLocaleString('default', { month: 'long' }));

// task 3
// var a = new Date();
// alert(a.toLocaleString('default', { weekday: 'short' }));

// task 4
// var currentDate = new Date();
// alert(currentDate.toLocaleString('default', { weekday: 'long' }))
// currentDate.toString;

// if (currentDate === "Saturday"){
//     alert("It's Fun Day")
// }else if(currentDate === "Sunday"){
//     alert("It's Fun Day")
// }

// task 5
// var a = new Date();
// alert(a.getDate());
// if( a >= 15){
// alert( "“First fifteen days of the month”" );
// }else{
//     alert(" “Lastdays of the month”")
// }

// task 6
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// task 7
// var time = new Date();
// alert(
//   time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
// ); 

// task 8
 

// Chapter Functions
// task 1
function tellTime() {
var a = new Date ();
var thehr = a.getHours ();
var themin = a.getMinutes ();
alert("Current Time : " + thehr + ":" + themin);
}