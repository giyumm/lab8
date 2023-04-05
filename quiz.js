$(document).ready(function(){
    const answers = ["8", "Jupiter", "Uranus", "5772K"];
    const questions = ["How many planets are there in the solar system?","What is the name of the biggest planet?", "What is the coldest planet?", "What is the temperature of the sun?" ];
    const choice_options = [["9","11","21","8"],["Earth","Jupiter","Mars","Saturn"],["Venus","Uranus","Mercury","Jupiter"], ["5772K","600K","6000K","500K"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    const quizBox = $("#quiz-box"); // Jquery

    for (let i = 0; i < questions.length; i++) {
         const questionDiv = $(`<div class='question' id='question-${i}'></div>`);

         questionDiv.append(`<p class='d'> Q${i + 1}. ${questions[i]} </p>`);

         for (let j = 0; j < choice_options[i].length; j++) {
         questionDiv.append(`<label><input type='radio' name='q${i}' value='${choice_options[i][j]}'>${choice_options[i][j]}</label>`);
          }

         quizBox.append(questionDiv);
 }

 $("button").click(function(event){
     let countCorrect = 0;
     for (let i = 0; i < questions.length; i++) {
         const selected = $(`input[name=q${i}]:checked`).val();
         if (selected === answers[i]) {
             countCorrect++;
         }
     }
     $("#quiz-box").append(`<h2>Score for the quiz: ${countCorrect}</h2>`);
 });
});







    
