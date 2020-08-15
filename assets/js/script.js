
$(function () {

    let score = $('#score');
    let end = $ ('#end');
    let time = $ ('#time);
    let start = $ ('#start');
    let question = $ ('#question');
    let startBtn = $ ('#start-btn');
    let final = $ ('#final"';
    let finalSubmit = $ ('#finalSubmit');
    let finalInput = $ ('#finalInput');
    let timeCount = $ questions. length * 15;
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







































}