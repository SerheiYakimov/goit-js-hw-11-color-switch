const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const refs = {
    start: document.querySelector('button[data-action=start]'),
    stop: document.querySelector('button[data-action=stop]'),
    body: document.querySelector('body')
}


refs.start.addEventListener('click', onStartColor);
refs.stop.addEventListener('click', onStopColor);

let timerId = null;



function onStartColor(e) {
    
    timerId = setInterval(colors, 1000);
};