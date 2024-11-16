const calcButton = document.getElementById('calc');
const yourNameInput = document.getElementById('urname');
const theirNameInput = document.getElementById('theirname');
const outputDiv = document.getElementById('output');
const namesOutput = document.getElementById('names');
const percentageOutput = document.getElementById('percentage');
const messageOutput = document.getElementById('message');
const resetButton = document.getElementById('reset');

calcButton.addEventListener('click', function() {
    const yourName = yourNameInput.value.trim();
    const theirName = theirNameInput.value.trim();

    if (!yourName || !theirName) {
        alert("Please enter both names!");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);

    namesOutput.textContent = `${yourName} ❤️ ${theirName}`;

    percentageOutput.textContent = `${lovePercentage}%`;
    if (lovePercentage > 75) {
        percentageOutput.style.color = "#4CAF50"; 
        messageOutput.textContent = "You're a match made in heaven! 💘";
    } else if (lovePercentage > 40) {
        percentageOutput.style.color = "#FF9800"; 
        messageOutput.textContent = "There's potential, keep working on it! 🧡";
    } else {
        percentageOutput.style.color = "#F44336"; 
        messageOutput.textContent = "It might be tough, but never give up on love! 💔";
    }

   
    outputDiv.classList.add('visible');
});


resetButton.addEventListener('click', function() {
    
    yourNameInput.value = '';
    theirNameInput.value = '';
    namesOutput.textContent = '';
    percentageOutput.textContent = '';
    messageOutput.textContent = '';

   
    outputDiv.classList.remove('visible');
});
