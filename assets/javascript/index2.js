$( document ).ready(function(){
    let timer = $("#timer");
    let q1 = "1?";
    let q2 = "2?";
    let q3 = "3?";
    let q1a = "a";
    let q2a = "b";
    let q3a = "c";
    let wrongAnswerArr = ["x", "y", "z", "f", "c"];
    let wrongAnswerArr1 = [];
    let radio1 = [];
    let radio2 = [];
    let right = 0;
    let wrong = 0;
    let randomRadio = "";
    let submitButton = $('<button>Submit</button>');
    $('#submit').append(submitButton);

    $("#start").click( function(){
        var counter = 3;
        setInterval(function() {
          counter--;
           if (counter >= 0) {
              $("#timer").text(counter + " Seconds");
           }
           if (counter === 0) {
              document.getElementById("submit").click();   // TRIGGERS SUBMIT BUTTON CLICK
              if ($('input[name=group]:checked').length > 0) {
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
            if ($('input[name=group1]:checked').length > 0) {
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
            if ($('input[name=group2]:checked').length > 0) {
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
              clearInterval(counter);
            }
          }, 1000);
     });

    function q1Function() {
        let randomOrder = wrongAnswerArr.sort(() => .5 - Math.random()).slice(0,4);  // shuffle array and pop 4 values into new array
        radio1.push(q1a, randomOrder[0], randomOrder[1], randomOrder[2], randomOrder[3]); // add to array  
        radio1.sort(function(a, b){return 0.5 - Math.random()}); // reshuffle array
        let q11 = $('<h1>' + q1 + '</h1>');
        $("#question1").append(q11);
        for ( var i = 0; i < radio1.length; i++) {  // loop to assign array values to buttons
            let radioBtn = $('<label><input type="radio" name="group" value="' + radio1[i] + '">' + radio1[i] + '</label>');
            $("#answers1").append(radioBtn);
        }
    }
    q1Function();

    function q2Function() {
        let randomOrder = wrongAnswerArr.sort(() => .5 - Math.random()).slice(0,4);  // shuffle array
        radio1 = []; // clear array from question 1
        radio1.push(q2a, randomOrder[0], randomOrder[1], randomOrder[2], randomOrder[3]); // add to array
        radio1.sort(function(a, b){return 0.5 - Math.random()}); // reshuffle array
        let q22 = $('<h1>' + q2 + '</h1>');
        $("#question2").append(q22);
        for ( var i = 0; i < radio1.length; i++) {  // loop to assign array values to buttons
            let radioBtn = $('<label><input type="radio" name="group1" value="' + radio1[i] + '">'+ radio1[i] + '</label>');
            $("#answers2").append(radioBtn);
        }
    }
    q2Function();

    function q3Function() {
        let randomOrder = wrongAnswerArr.sort(() => .5 - Math.random()).slice(0,4);  // shuffle array
        radio1 = []; // clear array from question 1
        radio1.push(q3a, randomOrder[0], randomOrder[1], randomOrder[2], randomOrder[3]); // add to array
        radio1.sort(function(a, b){return 0.5 - Math.random()}); // reshuffle array
        let q33 = $('<h1>' + q3 + '</h1>');
        $("#question3").append(q33);
        for ( var i = 0; i < radio1.length; i++) {  // loop to assign array values to buttons
            let radioBtn = $('<label><input type="radio" name="group2" value="' + radio1[i] + '">' + radio1[i] + '</label>');
            $("#answers3").append(radioBtn);
        }
    }
    q3Function();

    

    $("#submit").click(function () {
        $("input:radio[name='group']:checked").each(function() {  
            let answerVal1 = $(this).attr("value");
            console.log(answerVal1);
            if (answerVal1 == q1a) {
                right++;
                $('#correctAnswers').text(right);
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
        });
        $("input:radio[name='group1']:checked").each(function() {
            let answerVal2 = $(this).attr("value");
            console.log(answerVal2);
            if (answerVal2 == q2a) {
                right++;
                $('#correctAnswers').text(right);
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
        });
        /*$("input:radio[name='group2']:checked").each(function() {
            let answerVal3 = $(this).attr("value");
            console.log(answerVal3);
            if (answerVal3 == q3a) {
                right++;
                $('#correctAnswers').text(right);
            } else {
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
        });*/
        //$("input:radio[name='group2']:checked").each(function() {
            if ($('input[name="group2"]:checked').val() == q3a){
            right++;
            $('#correctAnswers').text(right);
            } else{
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
        });



  //  });
    
}); 




