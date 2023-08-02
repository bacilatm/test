let winnerButton = "button";

function randomWinner(noButtons) {
    return Math.floor(Math.random() * noButtons + 1);
}

function displayMessage(clickedBttn, winnerBttn) {
    if (clickedBttn === winnerBttn) {
        alert("Winner Button!🎉");
    } else {
        alert("Try again!😁");
    }
}

function generateButtons(nButtons) {
    const buttons = bttnsContainer.querySelectorAll('button');
    winnerButton = "button";
    buttons.forEach(button => {
        button.remove();
    });
    if (3 > nButtons || nButtons > 1000) {
        alert("Minimum buttons generated: 2 \nMaximum buttons generated: 1000");
        nButtons = 0;
    }
    for (let i = 1; i <= nButtons; ++i) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary btn-lg');
        button.setAttribute('id', 'button' + i);
        button.innerHTML = "?";
        bttnsContainer.appendChild(button);
    }
    winnerButton += randomWinner(nButtons);
}

bttnsContainer.addEventListener("click", function(event) {
    let clickedButton = event.target.id;
    displayMessage(clickedButton, winnerButton)
});
