$( document ).ready(function(){
    let timer = $("#timer");
    let q1 = "Who will be France's starting goalkeeper?";
    let q2 = "Who plays for Manchester United?";
    let q3 = "Who will be France's starting center forward?";
    let q1a = "Hugo Lloris";
    let q2a = "Paul Pogba";
    let q3a = "Antoine Griezmann";
    let wrongAnswerArr = ["Kylian Mbappe", "Ousmane Dembele", "Oliver Giroud", "Thomas Lemar", "Nabil Fekir"];
    let wrongAnswerArr1 = [];
    let radio1 = [];
    let radio2 = [];
    let right = 0;
    let wrong = 0;
    let randomRadio = "";
    var counter = 0;
    let startButton = $('<button>Start Game</button>');
    $('#start').append(startButton);
    let submitButton = $('<button>Submit</button>');
    $('#submit').append(submitButton);

    $("#start").click( function(){
        $("div").css("visibility", "visible");
        var counter = 30;
        setInterval(function() {
          counter--;
           if (counter >= 0) {
              $("#timer").text(counter + " Seconds");
           }
           if (counter === 0) {
              document.getElementById("submit").click();   // TRIGGERS SUBMIT BUTTON CLICK
              clearInterval(counter);
            }
          }, 1000);
        $("#start").css("visibility", "hidden"); 
        $("#submit").click(function () {
            counter = 0;
            $("#timer").text("Time's Up");
            if ($('input[name="group"]:checked').val() == q1a){
            right++;
            $('#correctAnswers').text(right);
            } else{
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
            if ($('input[name="group1"]:checked').val() == q2a){
            right++;
            $('#correctAnswers').text(right);
            } else{
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
            if ($('input[name="group2"]:checked').val() == q3a){
            right++;
            $('#correctAnswers').text(right);
            } else{
                wrong++;
                $('#wrongAnswers').text(wrong);
            }
        });   

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

   
}); 




