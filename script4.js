let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function playSound() {
    const sound = document.getElementById('button-sound');
    sound.currentTime = 0; // Reset sound to start
    sound.play();
}

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const themeLabel = document.getElementById('theme-label');

    // Load the previously saved theme (if any)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeSwitch.checked = true;
            themeLabel.innerText = "Dark Mode";
        }
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeLabel.innerText = "Dark Mode";
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeLabel.innerText = "Light Mode";
            localStorage.setItem('theme', 'light-mode');
        }
    });
});