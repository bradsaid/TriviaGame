$( document ).ready(function(){
    let timer = $("#timer");
    let question = $("#question");
    let answer = $("#answer");
    let wronganswer = $("#wronganswer");
    let btns = $("#answerButtons")
    let qanda = [{  
            id: "0",
            question: "Will Liverpool win?",
            answers: ["Yes", "No"]
            }, {
            id:    "1",  
            question: "Will Madrid win?",
            answers: ["Yes", "what?", "test"]

    }];
    
    console.log(qanda[0].question);
    console.log(qanda[0].answers[1]);
 
      for (var i = 0; i < qanda[0].question.length; i++) {  
      let questionsToAnswer = $('<h1>' + qanda[i].question + '</h1>');
      question.append(questionsToAnswer);
        for (var a = 0; a < qanda[0].answers.length; a++) {
            let radioBtn = $('<label><input type="radio" name="group">' + qanda[a].answers[a] + '</label>');  // getting answers
            //radioBtn.addClass("answer-button");
            //radioBtn.attr("value", qanda[0].answers[a]);
             btns.append(radioBtn);

        }
    };



    

    
    //qanda.questions.push("Does this work?", "Who will win?", "Will Liverpool win?");  
    //qanda.answers.push("Yup", "Belgium", "Hell yes!");    
    //qanda.wronganswers.push("A", "B", "C");

    

   /* for (var i = 0; i < qanda.questions.length; i++) {   // ADD A WRONG & RIGHT ANSWER ATTRIBUTE?
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
     
    }*/



    /*for (let i = 0; i < qanda.questions.length; i++) {  
      let questionsToAnswer = $('<h1>' + qanda.questions[i] + '</h1>' + '<label><input type="radio" name="group">' + qanda.answers[i] + '</label>' );
      question.append(questionsToAnswer);
    }*/
 



  

 





  }); 
   

    /*function randomOrder() {   // randomize order of questions.. but this will allow for question repetition 
        let randomQ = qanda.questions[Math.floor(Math.random()*qanda.questions.length)];  // set temp var to randomize the questions from array
        return question.text(randomQ) // return the temp var as the question
    }
    randomOrder();*/

    //answer.text(qanda.answers[0]);
    //wronganswer.text(qanda.wronganswers[0]);