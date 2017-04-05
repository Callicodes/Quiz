//QUIZ BEGINS, NO ANSWERS CORRECT

var correct = 0;

// ASK QUESTIONS

var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1; //+= adds 1 to the correct variable
  
} 

//toUppercase let's the student get the answer correct regardless of the lower or upper cases.


var answer2 = prompt("What is the UK Prime Minister\'s last name?");
if ( answer2.toUpperCase() === 'MAY' ) {
  correct += 1; //+= adds 1 to the correct variable
  
} 

var answer3 = prompt("What is the last name of the first Black President of the united states?");
if ( answer3.toUpperCase() === 'OBAMA' ) {
  correct += 1; //+= adds 1 to the correct variable
  
} 


var answer4 = prompt("What is the capital of France?");
if ( answer4.toUpperCase() === 'PARIS' ) {
  correct += 1; //+= adds 1 to the correct variable
  
} 

var answer5 = prompt("What is the capital of Jamaica?");
if ( answer5.toUpperCase() === 'KINGSTON' ) {
  correct += 1; //+= adds 1 to the correct variable
    
} 

//OUTPUT RESULTS

document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//OUTPUT RANK

if ( correct === 5 ){
  document.write("<p><strong>You earned a gold crown!<strong></p>");
} else if ( correct >= 3 ) {
   document.write("<p><strong>You earned a silver crown!<strong></p>");
  
} else if ( correct >= 1) {
  
   document.write("<p><strong>You earned a silver crown!<strong></p>");
  
}