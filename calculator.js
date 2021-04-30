let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try {
        if (screen.value.includes("%")) {
            const numbers = screen.value.split('%')
            screen.value = Math.round(eval(numbers[0] + '*' + numbers[1] + '/100'))
        } else {
            screen.value = eval(screen.value);
        }
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}
