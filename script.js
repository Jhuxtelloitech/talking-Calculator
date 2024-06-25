let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
const EN = 2.71828;
const PI = 3.14159;

let arr = Array.from(buttons);

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML.trim();
        
        let spokenText = buttonText;
        
        switch (buttonText) {
            case '+':
                spokenText = 'plus';
                break;
            case '-':
                spokenText = 'minus';
                break;
            case 'x':
                spokenText = 'times';
                break;
            case '÷':
                spokenText = 'divided by';
                break;
            case '^':
                spokenText = 'to the power of';
                break;
            case '=':
                spokenText = 'equals';
                break;
            case 'π':
                spokenText = 'pi';
                break;
            case 'e':
                spokenText = 'euler\'s number';
                break;
            case '(':
                spokenText = 'left parenthesis';
                break;
            case ')':
                spokenText = 'right parenthesis';
                break;
            case '.':
                spokenText = 'dot';
                break;
            case 'AC':
                spokenText = 'all clear';
                input.value = '';
                break;
            case 'DEL':
                spokenText = 'delete';
                input.value = input.value.slice(0, -1);
                break;
            case 'sin':
                spokenText = 'sine';
                input.value = Math.sin(parseFloat(input.value)).toString();
                break;
            case 'cos':
                spokenText = 'cosine';
                input.value = Math.cos(parseFloat(input.value)).toString();
                break;
            case 'tan':
                spokenText = 'tangent';
                input.value = Math.tan(parseFloat(input.value)).toString();
                break;
            case 'log':
                spokenText = 'logarithm';
                input.value = Math.log10(parseFloat(input.value)).toString();
                break;
            case 'sqrt':
                spokenText = 'square root';
                input.value = Math.sqrt(parseFloat(input.value)).toString();
                break;
            case 'exp':
                spokenText = 'exponential';
                input.value = Math.exp(parseFloat(input.value)).toString();
                break;
            case '!':
                spokenText = 'factorial';
                input.value = factorial(parseFloat(input.value)).toString();
                break;
            case '^2':
                spokenText = 'square';
                input.value = Math.pow(parseFloat(input.value), 2).toString();
                break;
            default:
                if ('0123456789'.includes(buttonText) || buttonText === '.') {
                    input.value += buttonText;
                }
                break;
        }

        speak(spokenText);

        if (buttonText === '=') {
            try {
                let result = eval(input.value.replaceAll('^', '**').replaceAll('x', '*').replaceAll('÷', '/').replaceAll('e', `${EN}`).replaceAll('π', `${PI}`));
                result = parseFloat(result).toString();
                speak(`The answer is ${result}`);
                input.value = result;
            } catch (error) {
                speak("Error");
                input.value = "Error";
            }
        }
    });
});

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
