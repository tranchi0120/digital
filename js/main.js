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




// OpenMenu and CloseMenu
const OpenMenu = document.querySelector('.openmenu')
const CloseMenu = document.querySelector('.closemenu')
const headermenu = document.querySelector('.header-menu');


OpenMenu.addEventListener('click', function () {
    headermenu.classList.add('showmenu')
    CloseMenu.style.display = "block"
})

CloseMenu.addEventListener('click', function () {
    headermenu.classList.remove('showmenu')
    CloseMenu.style.display = "none"
})


