let clickCounts = {
    1: 0,
    2: 0,
    3: 0
};

function buttonClicked(buttonNumber) {
    clickCounts[buttonNumber]++;
    document.getElementById('counter').innerText = clickCounts[1] + clickCounts[2] + clickCounts[3];
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "Döntetlen!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "Győztél!";
    } else {
        result = "Vesztettél!";
    }

    document.getElementById('result').innerText = "Eredmény: " + result + " (Te: " + playerChoice + ", Számítógép: " + computerChoice + ")";
}