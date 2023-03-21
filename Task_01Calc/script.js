
let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
let a = 0;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'ENTER') {
            if (a == 0) {
                let val = eval(screenValue)
                screen.value = val;
                screenValue = val;
            }
            else {
                screenValue = Math.sqrt(screenValue.substring(1, screenValue.length));
                let val = eval(screenValue);
                screen.value = val;
                screenValue = val;
                a = 0;
            }

        }
        else if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'clear') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'del') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == '√') {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
            a = 1;
        }
        else if (buttonText == 'π') {
            screenValue = screenValue + 3.14;
            screen.value = screenValue;

        }
        else if (buttonText == '%') {

            screenValue = eval(screenValue);
            screenValue = screenValue / 100;
            screen.value = screenValue;


        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}