// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;
// ==========Ball====================================
const moveball = document.querySelector('.ball');
let bPX = GAME_AREA_WIDTH/2;
let bPY = GAME_AREA_HEIGHT/2;
let bV =1;
let dy = -1;
let dx = 1;

// Update the pong world
function update() {
// ====================paddles=======================
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // ================ball=========================
    bPX++;
    bPY++;
    bP = bPY + bV;
    if(bPY + dy > GAME_AREA_HEIGHT || bPY + dy < 0){
        dy = -dy;
    }
    bPX = bPX % (GAME_AREA_HEIGHT - BALL_SIZE);
    bPY = bPY% (GAME_AREA_HEIGHT - BALL_SIZE);

    moveball.style.top = `${bPY}px`;
    moveball.style.left = `${bPX}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);