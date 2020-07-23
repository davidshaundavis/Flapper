let block = document.getElementById('block');
let hole = document.getElementById('hole');
var character = document.getElementById('character');
let jumping = 0;
let counter = 0;


//display #hole on animation load
hole.addEventListener('animationiteration', () => {
    let random = Math.random() * 4;
    let top = (random*100) + 150;
    hole.style.top = -(top) +"px";
    counter++;
});

//artificial gravity
setInterval (function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    
    if (jumping === 0) {
        character.style.top = (characterTop + 4) + 'px';
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let cTop = -(500 - characterTop);
    
    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert('Game Over. Score: ' + counter);
        character.style.top = 100 + 'px';
        counter = 0;
    }
}, 12);



//character jump
function jump() {
    let jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        character.style.top = (characterTop - 5) + 'px';
  
    //dont drop too low
        if (characterTop > 6) {
            character.style.top = (characterTop - 5) + "px";
        }

    //dont jump too high
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;        
        }
        jumpCount++;
 }, 12);

}