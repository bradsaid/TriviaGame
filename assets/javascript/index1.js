$( document ).ready(function(){
    let timer = $("#timer");
    let question = $("#question");
    let answer = $("#answer");
    let btns = $("#answerButtons")
    /*
    for (var i = 0; i < qanda.questions.length; i++) {   
      question.text(qanda.questions[i]);  // getting question
      //let questionsToAnswer = $('<h1>' + qanda.questions[i] + '</h1>');
      //question.append(questionsToAnswer);
      let radioBtn = $('<label><input type="radio" name="group">' + qanda.answers[i] + '</label>');  // getting answers
      radioBtn.addClass("answer-button");
      radioBtn.attr("value", qanda.answers[i]);
      btns.append(radioBtn);
    }*/
 
    let questionsObject = [
        {
            prompt: "1st Question\n(a) 1\n\(b) 2\n\(c) 3",
            answer : "a"
        },
        {
            prompt: "2nd Question\n(a) 4\n\(b) 5\n\(c) 6",
            answer : "b"
        },]
    let score = 0;


    /*for (var i = 0; i < qanda[0].question.length; i++) {  
        let questionsToAnswer = $('<h1>' + qanda[i].question + '</h1>');
        question.append(questionsToAnswer);*/
    

    for (let i = 0; i < questionsObject.length; i++) {
        //question.text(questionsObject[i].prompt);    // need to create question divs just like radio buttons
        //function myFunction(item, index) {
        //    let q = $('<h1>' + questionsObject.prompt + '</h1>');
        //    return q;
        //    console.log(q);
        //}
        //questionsObject.forEach(myFunction);
        question.text(questionsObject[i].prompt);
        console.log(questionsObject[i].prompt);
        //question.append($(this)(q));
        /*let response = window.prompt(questionsObject[i].prompt);
        if (response == questionsObject[i].answer) {
            score++;
            alert("Correct!");
        } else {  
            alert("Wrong!");  
        } */
    }

  


    //alert("you got " + score + "/" + questionsObject.length);


  }); 

