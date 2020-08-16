
var questions = [
    {
        title: "The Array elements, which are the value stored in an array, are enclosed within ___."
        choices: ["curly brackets", "parenthesis", "square brackets", "quotes"],
        answer: "square brackets"
    },
    {
        title: "In order to round the number 4.13 to the nearest whole number,the method used would be ____."
        choices: ["math.max()", "math.ceil()", "math.floor()", "math.sqrt()"],
        answer: "math.floor"
    },
    {
        title: "To make a comment in javascript without interfering with the program running, use___."
        choices: ["//", "===", "*--->", "||"],
        answer: "//"
    },
    {
        title: "What statemnt is used to find the target element, selectors, attributes in a document object in the browser"
        choices: ["document.querySelector()", "document.addEventListner()", "document.createElement()", "document.textcontent()"],
        answer: "document.querySelector"
    }


];

//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

    //start quiz

    function start() {

        timeLeft = 75;
        document.getElementById("timeLeft").innerHTML = timeLeft;
    
        timer = setInterval(function() {
            timeLeft--;
            document.getElementById("timeLeft").innerHTML = timeLeft;
            //proceed to end the game function when timer is below 0 at any time
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame(); 
            }
        }, 1000);
    
        next();
    }
    
    //stop the timer to end the game 
    function endGame() {
        clearInterval(timer);

        var quizContent = `
        <h2>Game over!</h2>
        <h3>You got a ` + score +  ` /100!</h3>
        <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
        <input type="text" id="name" placeholder="First name"> 
        <button onclick="setScore()">Set score!</button>`;

        document.getElementById("quizBody").innerHTML = quizContent;
    }

    

    //store the scores on local storage
    function setScore() {
        localStorage.setItem("highscore", score);
        localStorage.setItem("highscoreName",  document.getElementById('name').value);
        getScore();
    }

    function getScore() {
        var quizContent = `
        <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
        <h1>` + localStorage.getItem("highscore") + `</h1><br> 
        
        <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
        
        `;
    
        document.getElementById("quizBody").innerHTML = quizContent;
    }
    


    //clears the score name and value in the local storage if the user selects 'clear score'
    function clearScore() {
        localStorage.setItem("highscore", "");
        localStorage.setItem("highscoreName",  "");

        resetGame();
    }

    //reset the game 
    function resetGame() {
        clearInterval(timer);
        score = 0;
        currentQuestion = -1;
        timeLeft = 0;
        timer = null;

        document.getElementById("timeLeft").innerHTML = timeLeft;

        var quizContent = `
        <h1>
            JavaScript Quiz!
        </h1>
        <h3>
            Click to play!   
        </h3>
        <button onclick="start()">Start!</button>`;

        document.getElementById("quizBody").innerHTML = quizContent;
    }

    //deduct 15seconds from the timer if user chooses an incorrect answer
    function incorrect() {
        timeLeft -= 15; 
        next();
    }

    //increases the score by 20points if the user chooses the correct answer
    function correct() {
        score += 20;
        next();
    }

    //loops through the questions 
    function next() {
        currentQuestion++;

        if (currentQuestion > questions.length - 1) {
            endGame();
            return;
        }

        var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

        for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
            var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
            buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
            if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
                buttonCode = buttonCode.replace("[ANS]", "correct()");
            } else {
                buttonCode = buttonCode.replace("[ANS]", "incorrect()");
            }
            quizContent += buttonCode
        }













    //finish

    finalSubmit.on('click', function () {
        if (timeCount < 0) {
            timeCount = 0
        }
        if (finalInput.val()){
            historyArray.push({name: finalInput.val(), score: timeCount});
            finalInput.val('');
            localStorage.setItem('score', JSON.stringify(historyArray));
            history.addClass('active');
            getHistory();
        }
        end.removeClass('active');
        start.removeClass('fade');
        curentQuestion = 0;
        time.text(0);
        timeCount = questions.length * 15;
    });
