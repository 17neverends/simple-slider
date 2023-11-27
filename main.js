let count = 1;
let interval;

document.addEventListener('DOMContentLoaded', function () {
    let radioButtons = document.getElementsByName('r');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');

    radioButtons.forEach(function(radioButton, index) {
        radioButton.addEventListener('change', function() {
            count = index + 1;
            restart();
        });
    });

    left.addEventListener('click', function() {
        count--;
        if (count < 1) {
            count = 3;
        }
        document.getElementById('radio' + count).checked = true;
        restart();
        reset(); 
    });

    right.addEventListener('click', function() {
        count++;
        if (count > 3) {
            count = 1;
        }
        document.getElementById('radio' + count).checked = true;
        restart();
        reset(); 
    });

    restart();
});

function restart() {
    clearTimeout(interval);
    interval = setTimeout(function() {
        count++;
        if (count > 3) {
            count = 1;
        }
        document.getElementById('radio' + count).checked = true;
        restart();
    }, 3000);
}

function reset() {
    clearTimeout(interval);
    restart();
}


