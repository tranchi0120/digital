let valueDisplays = document.querySelectorAll('.item-number');
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 1;
    let endValue = (valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// slider
document.querySelector('.acution-prev').onclick = function () {
    let lists = document.querySelectorAll('.box');
    document.querySelector('.acution-group ').appendChild(lists[0]);
};
document.querySelector('.acution-next').onclick = function () {
    let lists = document.querySelectorAll('.box');
    document.querySelector('.acution-group ').prepend(lists[lists.length - 1]);
};

