$( document ).ready(function(){
    let timer = $("#timer");
    let question = $("#question");
    let answer = $("#answer");
    let wronganswer = $("#wronganswer");
    let qanda = {   // create object with questions and answers
        questions: [],
        answers: [],
        wronganswers: [],  
    }
    let btns = $("#answerButtons")
    
    qanda.questions.push("Does this work?", "Who will win?", "Will Liverpool win?");  
    qanda.answers.push("Yup", "Belgium", "Hell yes!");    
    qanda.wronganswers.push("A", "B", "C");

    /*function randomOrder() {   // randomize order of questions.. but this will allow for question repetition 
        let randomQ = qanda.questions[Math.floor(Math.random()*qanda.questions.length)];  // set temp var to randomize the questions from array
        return question.text(randomQ) // return the temp var as the question
    }
    randomOrder();*/

    //answer.text(qanda.answers[0]);
    //wronganswer.text(qanda.wronganswers[0]);
    

    for (var i = 0; i < qanda.questions.length; i++) {   // ADD A WRONG & RIGHT ANSWER ATTRIBUTE?
      question.text(qanda.questions[i]);  // getting question
      //let questionsToAnswer = $('<h1>' + qanda.questions[i] + '</h1>');
      //question.append(questionsToAnswer);
      let radioBtn = $('<label><input type="radio" name="group">' + qanda.answers[i] + '</label>');  // getting answers
      radioBtn.addClass("answer-button");
      radioBtn.attr("value", qanda.answers[i]);
      //let radioBtn1 = $('<label><input type="radio" name="group">' + qanda.wronganswers[i] + '</label>');  // getting answers
      //radioBtn1.addClass("wrong-answer-button");
      btns.append(radioBtn);
      //btns.append(radioBtn1);
     
    }



    /*for (let i = 0; i < qanda.questions.length; i++) {  
      let questionsToAnswer = $('<h1>' + qanda.questions[i] + '</h1>' + '<label><input type="radio" name="group">' + qanda.answers[i] + '</label>' );
      question.append(questionsToAnswer);
    }*/
 



  

 





  }); 
    //console.log(qanda.questions[0]);
    //console.log(qanda.answers[0]);

    //let targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    //$("#randomNumber").text(targetNumber);
    
    //let counter = 0;
    //let numberOptions = [10, 5, 3, 7];
    
    //let wins = 0;
    //let losses = 0;
    //images = ["1.png", "2.png", "3.png", "4.png"]
    
    //function loadQuestions() {
    //  for (var a = 0; a < 4; a++) {
    //  questions.push();
    //  }
    //}
    //loadQuestions();
    

    /*
    function resetGame() {
      targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
      $('#randomNumber').text(targetNumber);
      let crystals = $("#crystals");
      counter = 0;
      $("#currentScore").text(counter);
    }
    
    for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      //imageCrystal.attr("src", "assets/images/"+1+".png");
      imageCrystal.attr("src", "assets/images/" + images[i]);
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      crystals.append(imageCrystal);
    }
  
    crystals.on("click", ".crystal-image", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      $("#currentScore").text(counter);
      if (counter === targetNumber) {
        alert("You win!");
        resetGame();
        wins++;
        $('#wins').text(wins);
      }
      else if (counter >= targetNumber) {
        alert("You lose!!");
        resetGame();
        losses++;
        $('#losses').text(losses);
      }
  
    });
  
*/
