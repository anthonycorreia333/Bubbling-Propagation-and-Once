// When center Div is clicked bubbling occurs as a default of JavaScript 
// where every parent Div also inherits the event listener from the nested Div
// "Capture" by default = false
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); //Prevents "bubbling"
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // Supposed to make it so an element can only be clicked once
}));

button.addEventListener('click', () => {
    console.log('Buttonnnn!!!');
}, {
    once: true
});
