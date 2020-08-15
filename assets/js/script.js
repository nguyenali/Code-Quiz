
const questions = [
    {
        title: "The Array elements, which are the value stored in an array, are enclosed within ___."
        choices: ["curly brackets", "parenthesis", "square brackets", "quotes"],
        answer: "square brackets"
    }
]







$(function () {

    let score = $('#score');
    let end = $ ('#end');
    let time = $ ('#time');
    let start = $ ('#start');
    let question = $ ('#question');
    let startBtn = $ ('#start-btn');
    let final = $ ('#final"');
    let finalSubmit = $ ('#finalSubmit');
    let finalInput = $ ('#finalInput');
    let timeCount = $ questions.length * 15;
    let currentQuestion = 0;
    let interval;


    //history

    
    let history = $ ('#history');
    let back = $ ('#back');
    let clearHistory = $ ('#clearHistory');
    let historyArray = []
    localStorage.setItem('score', JSON.stringify([]));
    getHistory = () => {
        $('#score-box').empty();
        if (localStorage.getItem('score')) {
            historyArray = JSON.parse(localStorage.getItem('score'));
            historyArray.sort((a, b) => b.score - a.score);
        }
        historyArray.forEach((item, index) => {
            let itemscore = $('<div class="score-item">${index+1} <span class="s-score">${item.score}</span></div>');
            $('#score-box').append(itemscore);
        })


    };

    //end history

    //start quiz

    function startQuiz() {
        start.addClass('fade');
        question.addClass('active');
        nextQuestion(currentQuestion);
        }

        function nextQuestion (number) {
        if (number <= questions.length-1){
            $('#question-title').text(questions[number].title);
            $('#answer-btn').empty();

            questions[number].choices.forEach((item, index) => {
                let answer = $ (' <button class-"answer>${index + 1'}. ${item}</button>');
                $('#answer-btn').append(answer);
            }
        });


      else {
        question.removeClass('active');
        end.addClass('active');
        clearInterval(interval);
        if (timeCount<0) {
            time.text(0) 
            final.text(0);
        } else {
            final.text(timeCount);
            time.text(timeCount)
        }
        }




    }

    $(document).on('click', ',answer', function() {
        if (this.innerText.slice(3,this.innerText.length)=== questions[currentQuestion].answer)
        }
    }
        else {
            timeCount -= 15;
            if (timeCount < 0) {
                time.text(0);
                final.text(0);
            }
        }

        currentQuestion++;
        nextQuestion(currentQuestion);

    });

    startBtn.on('click', function() {
        startQuiz();
        interval - setInterval(function() {
            if (timeCount < = 0) {
                timeCount = 0;
                return
            }
            timeCount--;
            time.text(timeCount);
        }, 1000)
    });

    //end start quiz

    //finish

    finalSubmit.on ('click', function() {
        if (timeCount <0) {
            timeCount= 0
        }

        if (finalInput.val()) {
            historyArray.push ({name: finalInput.val(), score: timeCount});
            finalInput.val('');
            localStorage.setItem('score', JSON.stringify(historyArray));
            history.addClass('active');
            getHistory();
        }

        end.removeClass('active');
        start.removeClass('fade');
        currentQuestion = 0;
        time.text(0);
        timeCount = questions.length * 15;



    });

    //end finish
    
    
    
    )




































}