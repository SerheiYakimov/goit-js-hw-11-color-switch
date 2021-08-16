const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('button[data-action=start]'),
    stop: document.querySelector('button[data-action=stop]'),
    body: document.querySelector('body')
}

refs.start.addEventListener('click', onStartColor);
refs.stop.addEventListener('click', onStopColor);

let timerId = null;
refs.start.isActive = false;



function onStartColor(e) {
    
    // проверка, если тру, то выходим, если нет, продолжает исполнятся функция
    if (refs.start.isActive) {
        return
    };
    

    refs.start.isActive = true;

    timerId = setInterval( setBodyBgColor, 1000);
    console.log(refs.start.isActive);
    
};


function setBodyBgColor() {
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const rundomIndex = randomIntegerFromInterval(0, colors.length);

    refs.body.style.backgroundColor = colors[rundomIndex];
    
   
}

function onStopColor(e) {
    clearInterval(timerId);
    refs.start.isActive = false;
}