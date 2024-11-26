const wheel = document.querySelector('.wheel');

let angle = 0; 
let spinInterval; 
let isSpinning = false; 

function startSpinning() {
  if (!isSpinning) {
    isSpinning = true;
    spinInterval = setInterval(() => {
      angle += 10; 
      wheel.style.transform = `rotate(${angle}deg)`;
    }, 50);
  }
}

function stopSpinning() {
  clearInterval(spinInterval); 
  isSpinning = false;

//   const normalizedAngle = angle % 360; 
  const returnAngle = 0;

  wheel.style.transition = 'transform 1s ease-out';
  wheel.style.transform = `rotate(${returnAngle}deg)`;

  setTimeout(() => {
    angle = 0;
    wheel.style.transition = ''; 
  }, 1000);
}

wheel.addEventListener('mouseenter', startSpinning);
wheel.addEventListener('mouseleave', stopSpinning);
