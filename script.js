let roundWin = document.getElementById('roundWin');
let roundLose = document.getElementById('roundLose');
let gameWin = document.getElementById('gameWin');
let gameLose = document.getElementById('gameLose');
gameWin.volume = 1;
gameLose.volume = 1;

const versus = document.getElementById('versus');
const bot = document.getElementById('bot');
const me = document.getElementById('me');
const choices = document.getElementsByClassName('choices');
const numRounds = document.getElementsByClassName('numRounds');
const playBtn = document.getElementById('playBtn');
const replayBtn = document.getElementById('replayBtn');
let botScoreElem = document.getElementById('botScoreElem');
let myScoreElem = document.getElementById('myScoreElem');
let botText = document.getElementById('botText');
let meText = document.getElementById('meText');
let botScore = 0;
let myScore = 0;
let roundNumber = 0;
let totalRounds = 0;
// console.log(choice);
Array.from(choices).forEach(button => {
    button.addEventListener('click', buttonFunc);
});
function buttonFunc(x) {
    roundNumber++;
    // versus.style.bottom = '200px'
    // versus.style.width = '150px'
    // versus.style.fontSize = '25px'
    // versus.style.margin = '0px';
    versus.innerText = `Round ${roundNumber}`;
    bot.style.borderColor = 'rgb(0,130,251)';
    me.style.borderColor = 'rgb(0,130,251)';
    bot.innerText = `✊`;
    me.innerText = `✊`;
    setTimeout(() => {
        if (roundNumber == totalRounds) {
            gameFinished();
        }
        const a = 1;
        const b = 3;
        let ran = a + Math.floor(((b + 1) - a) * Math.random());
        // console.log(ran);
        bot.classList.toggle('playing1');
        me.classList.toggle('playing2');
        setTimeout(() => {
            bot.classList.toggle('playing1');
            me.classList.toggle('playing2');
        }, 250);
        setTimeout(() => {
            bot.classList.toggle('playing1');
            me.classList.toggle('playing2');
        }, 400);
        setTimeout(() => {
            bot.classList.toggle('playing1');
            me.classList.toggle('playing2');
        }, 650);
        setTimeout(() => {
            bot.classList.toggle('playing1');
            me.classList.toggle('playing2');
        }, 800);
        setTimeout(() => {
            bot.classList.toggle('playing1');
            me.classList.toggle('playing2');
        }, 1050);
        setTimeout(() => {
            // console.log('last one working');
            if (ran == 1) {
                // console.log('stone');
                bot.innerText = `✊`;
            }
            else if (ran == 2) {
                // console.log('paper');
                bot.innerText = `🖐`
            }
            else {
                // console.log('scissor');
                bot.innerText = `✌`;
            }
            me.innerText = x.target.innerText;
            let myVal;
            if (me.innerText == '✊') {
                myVal = 1;
            }
            else if (me.innerText == '🖐') {
                myVal = 2;
            }
            else {
                myVal = 3;
            }
            // console.log(bot.innerText);
            // console.log(me.innerText);
            // console.log(ran);
            // console.log(myVal);
            setTimeout(() => {
                if (ran == 1) {
                    switch (myVal) {
                        case 3:
                            botScore++;
                            // botScoreElem.innerText = ' ';
                            bot.style.borderColor = 'rgb(0,255,0)';
                            me.style.borderColor = 'orangered';
                            roundLose.play();
                            // setTimeout(() => {
                            //     roundLose.pause();
                            // }, 1900);
                            break;
                        case 2:
                            myScore++;
                            // myScoreElem.innerText = ' ';
                            me.style.borderColor = 'rgb(0,255,0)';
                            bot.style.borderColor = 'orangered';
                            roundWin.play();
                            // setTimeout(() => {
                            //     roundWin.pause();
                            // }, 1900);
                            break;
                        default:
                            bot.style.borderColor = 'white';
                            me.style.borderColor = 'white';
                            break;
                    }
                }
                else if (ran == 2) {
                    switch (myVal) {
                        case 3:
                            myScore++;
                            // myScoreElem.innerText = ' ';
                            me.style.borderColor = 'rgb(0,255,0)';
                            bot.style.borderColor = 'orangered';
                            roundWin.play();
                            // setTimeout(() => {
                            //     roundWin.pause();
                            // }, 1900);
                            break;
                        case 1:
                            // botScoreElem.innerText = ' ';
                            botScore++;
                            bot.style.borderColor = 'rgb(0,255,0)';
                            me.style.borderColor = 'orangered';
                            roundLose.play();
                            // setTimeout(() => {
                            //     roundLose.pause();
                            // }, 1900);
                            break;
                        default:
                            bot.style.borderColor = 'white';
                            me.style.borderColor = 'white';
                            break;
                    }
                }
                else {
                    switch (myVal) {
                        case 1:
                            // myScoreElem.innerText = ' ';
                            myScore++;
                            me.style.borderColor = 'rgb(0,255,0)';
                            bot.style.borderColor = 'orangered';
                            roundWin.play();
                            // setTimeout(() => {
                            //     roundWin.pause();
                            // }, 1900);
                            break;
                        case 2:
                            // botScoreElem.innerText = ' ';
                            botScore++;
                            bot.style.borderColor = 'rgb(0,255,0)';
                            me.style.borderColor = 'orangered';
                            roundLose.play();
                            // setTimeout(() => {
                            //     roundLose.pause();
                            // }, 1900);
                            break;
                        default:
                            bot.style.borderColor = 'white';
                            me.style.borderColor = 'white';
                            break;
                    }
                };
                // console.log(botScore, myScore);
                // setTimeout(() => {
                    myScoreElem.innerText = myScore;
                    botScoreElem.innerText = botScore;
                // }, 500);
                if (botScore > myScore) {
                    botText.style.borderColor = 'rgb(0,255,0)';
                    meText.style.borderColor = 'red';
                }
                else if (botScore < myScore) {
                    meText.style.borderColor = 'rgb(0,255,0)';
                    botText.style.borderColor = 'red';
                }
                else {
                    meText.style.borderColor = 'white';
                    botText.style.borderColor = 'white';
                }
            }, 1000);
        }, 1100);
    }, 300);
}

playBtn.addEventListener('click', playBtnFunc);
function playBtnFunc() {
    setTimeout(() => {
        versus.innerText = 'Select the number of of rounds';
        playBtn.style.display = 'none';
        Array.from(numRounds).forEach(elem => {
            elem.style.display = 'flex';
            elem.addEventListener('click', showChoices);
            function showChoices(elem) {
                setTimeout(() => {
                    versus.innerText = 'Bot v/s You'
                    totalRounds = elem.target.innerText;
                    Array.from(choices).forEach(elem => {
                        elem.style.display = 'flex';
                    });
                    Array.from(numRounds).forEach(elem => {
                        elem.style.display = 'none';
                    });
                }, 300);
            }
        });
    }, 300);
}

function gameFinished() {
    Array.from(choices).forEach(button => {
        button.removeEventListener('click', buttonFunc);
    });
    // versus.style.width = '250px';
    setTimeout(() => {
        if (botScore > myScore) {
            versus.innerHTML = `You Lost! &#128551;`;
            versus.style.backgroundColor = 'orangered';
            versus.style.textShadow = '1px 1px darkred';
            setTimeout(() => {
                gameLose.volume = 0.5;
                gameLose.play();
            }, 2000);
        }
        else if (botScore == myScore) {
            versus.innerHTML = `It's a tie! &#128528;`;
            versus.style.backgroundColor = 'white';
            versus.style.textShadow = '1px 1px rgb(220,220,220)';
            versus.style.color = 'black';
        }
        else {
            versus.innerHTML = `Congrats, You Won! &#129395;`;
            versus.style.backgroundColor = 'rgb(0,224,0)';
            versus.style.textShadow = '1px 1px green';
            setTimeout(() => {
                gameWin.volume = 0.5;
                gameWin.play();
            }, 2000);
        }
        setTimeout(() => {
            Array.from(choices).forEach(elem => {
                elem.style.display = 'none';
            });
            replayBtn.style.display = 'flex';
            replayBtn.addEventListener('click', reloadFunc);
            function reloadFunc() {
                location.reload();
            }
        }, 1000);
    }, 3000);
}
