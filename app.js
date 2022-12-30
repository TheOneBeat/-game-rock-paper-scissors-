const logo = document.querySelector('.navigation img');

let changeToBonus = false;
const open_rule = document.querySelector('.rule');
const theRules = document.querySelector('.therules');

const rulePage = document.querySelector('.rulePage'); 

const close_rule = document.querySelector('.close');

const container = document.querySelector('.container');

let selection_div_btns = document.querySelectorAll('.selection_div button');

const selection_div = document.querySelector('.selection_div');

const thebeforeElement = document.styleSheets[0].cssRules[29].style;

const level = document.querySelector('.level');

const choice_div = document.querySelector('.choice_div');
const result = document.querySelector('.result');
const score = document.querySelector('.thescore');
const player = document.querySelector('.player img');
const computer = document.querySelector('.computer img');

const rock_style = "0 0 0 20px hsl(349, 70%, 56%), inset 0px  10px 5px rgba(0,0,0,0.2), 0px  30px 50px rgba(0,0,0,0.5)";
const scissors_style = "0 0 0 20px hsl(39, 89%, 49%), inset 0px  10px 5px rgba(0,0,0,0.2), 0px  30px 50px rgba(0,0,0,0.5)";

const lizard_style = "0 0 0 20px hsl(261, 73%, 60%), inset 0px  10px 5px rgba(0,0,0,0.2), 0px  30px 50px rgba(0,0,0,0.5)";

const spock_style = "0 0 0 20px hsl(189, 59%, 53%), inset 0px  10px 5px rgba(0,0,0,0.2), 0px  30px 50px rgba(0,0,0,0.5)";

const playAgain = document.querySelector('.result button');

const computerChoice = ['./images/icon-rock.svg', './images/icon-scissors.svg', './images/icon-paper.svg'];

const bonusComputerChoice = ['./images/icon-rock.svg', './images/icon-scissors.svg', './images/icon-paper.svg', './images/icon-lizard.svg', './images/icon-spock.svg'];

let btnLizard;
let btnSpock;

open_rule.addEventListener('click', () => {
    theRules.classList.add('show');
});

close_rule.addEventListener('click', () => {
    theRules.classList.remove('show');
});

function launchGame()
{
    selection_div_btns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(btn.children[0].getAttribute('src'));
            playerPlay(btn.children[0].getAttribute('src'));
            // console.log(btn.children[0].getAttribute('src'));
            computerPlay();
    })});
}

launchGame();

function playerPlay(value)
{
    player.setAttribute('src', value);
    changeStyle(player);
            
}

function displaySelection()
{
    selection_div.classList.add('notshown');
    setTimeout(() => selection_div.style.display = 'none', 1000);
    setTimeout(() => choice_div.classList.add('show'), 2000);
}

function computerPlay() {
    displaySelection();
    if (!changeToBonus)
    {
        computerPlayNoBonus();
        setTimeout(whowin, 7000);
    }
    else{
        computerPlayBonus();
        setTimeout(whowinBonus, 7000);
    }
}

function computerPlayNoBonus(){
    setTimeout(() =>{
        computer.setAttribute('src', computerChoice[Math.floor(Math.random() * 3)]);
        changeStyle(computer);
        }, 3000);
}

function computerPlayBonus(){
    setTimeout(() =>{
        computer.setAttribute('src', bonusComputerChoice[Math.floor(Math.random() * 5)]);
        changeStyle(computer);
    }, 3000);
}

function changeStyle(e)
{
    if (e.getAttribute('src') === './images/icon-rock.svg')
            e.parentElement.style.boxShadow = rock_style;
        else if (e.getAttribute('src') === './images/icon-scissors.svg')
            e.parentElement.style.boxShadow = scissors_style;
        else if (e.getAttribute('src') === './images/icon-lizard.svg')
            e.parentElement.style.boxShadow = lizard_style;
        else if (e.getAttribute('src') === './images/icon-spock.svg')
            e.parentElement.style.boxShadow = spock_style;
}


function whowin()
{
    let span = document.querySelector('.result span');
    let playerChoice = player.getAttribute('src');
    let computerChoose = computer.getAttribute('src');

    if (playerChoice === computerChoose)
    {
        span.innerText = "DRAW";
    }
    else if (playerChoice === computerChoice[0])
    {
        (computerChoose === computerChoice[1]? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else if (playerChoice === computerChoice[1])
    {
        (computerChoose === computerChoice[2]? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else
    {
        (computerChoose === computerChoice[0]? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }

    
    actualize();
}


function whowinBonus()
{
    let span = document.querySelector('.result span');
    let playerChoice = player.getAttribute('src');
    let computerChoose = computer.getAttribute('src');

    if (playerChoice === computerChoose)
    {
        span.innerText = "DRAW";
    }
    else if (playerChoice === bonusComputerChoice[0])
    {
        ((computerChoose === bonusComputerChoice[1] || computerChoose===bonusComputerChoice[3])? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else if (playerChoice === bonusComputerChoice[1])
    {
        ((computerChoose === bonusComputerChoice[2] || computerChoose===bonusComputerChoice[3])? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else if (playerChoice === bonusComputerChoice[2])
    {
        ((computerChoose === bonusComputerChoice[0] || computerChoose===bonusComputerChoice[4])? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else if (playerChoice === bonusComputerChoice[3])
    {
        ((computerChoose === bonusComputerChoice[2] || computerChoose===bonusComputerChoice[4])? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    else
    {
        ((computerChoose === bonusComputerChoice[0] || computerChoose===bonusComputerChoice[1])? span.innerText = "YOU WIN" : span.innerText = "YOU LOSE");
    }
    
    actualize();
}

function actualize()
{

    let span = document.querySelector('.result span');
    let scorePlayer = parseInt(score.innerText);
    

    if (span.innerText === "YOU WIN")
    {
        scorePlayer++;
    }
    score.innerText = `${scorePlayer}`;
    // console.log("the score is "+ scorePlayer);
    result.classList.add('show');
}

playAgain.addEventListener('click', () => {
    result.classList.remove('show');
    selection_div.classList.remove('notshown');
    selection_div.style.display = 'flex';
    choice_div.classList.remove('show');
});



level.addEventListener('click', () => {
    let levelText = level.innerText;
    if (levelText === "HARD LEVEL")
        {
            thebeforeElement.setProperty("background-image", "url(./images/bg-pentagon.svg)");
            level.innerText = "EASY LEVEL";
            logo.setAttribute('src', './images/logo-bonus.svg');
            NextLevel();
            container.classList.add('bonus');
            rulePage.setAttribute('src', './images/image-rules-bonus.svg');
            changeToBonus=true;
        }
    else
    {
        thebeforeElement.setProperty("background-image", "url(./images/bg-triangle.svg)");
        level.innerText = "HARD LEVEL";
        logo.setAttribute('src', './images/logo.svg');
        BackLevel();
        container.classList.remove('bonus');
        rulePage.setAttribute('src', './images/image-rules.svg');
        changeToBonus=false;
    }
});

function NextLevel()
{
    btnLizard = document.createElement('button');
    let imgLizard = document.createElement('img');
    imgLizard.setAttribute('src', './images/icon-lizard.svg');
    btnLizard.appendChild(imgLizard);
    selection_div.appendChild(btnLizard);

    btnSpock = document.createElement('button');
    let imgSpock = document.createElement('img');
    imgSpock.setAttribute('src', './images/icon-spock.svg');
    btnSpock.appendChild(imgSpock);
    selection_div.appendChild(btnSpock);

    selection_div_btns = document.querySelectorAll('.selection_div button');
    launchGame();
}

function BackLevel()
{
    selection_div.removeChild(btnLizard);
    selection_div.removeChild(btnSpock);
}