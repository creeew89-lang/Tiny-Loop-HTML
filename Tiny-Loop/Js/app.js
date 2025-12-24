let running = false;
let animationFrame;
let toggle = document.getElementById('toggle');
let speedInput = document.getElementById('speed');

let ball = {
    x: 100,
    y: 100,
    dir: 1,
    element: document.getElementById('ball'),
    update() {
        let speed = parseInt(speedInput.value, 10);
        if (isNaN(speed) || speed < 0) speed = 3;
        this.x += this.dir * speed;
        if (this.x > window.innerWidth - 50 || this.x < 0) {
            this.dir *= -1;
        }
        this.element.style.left = this.x + 'px';
    }
};

function loop() {
    ball.update();
    animationFrame = requestAnimationFrame(loop);
}

function stop() {
    cancelAnimationFrame(animationFrame);
}

toggle.addEventListener('click', function () {
    if (running) {
        stop();
        toggle.textContent = 'Play';
    } else {
        toggle.textContent = 'Pause';
        loop();
    }
    running = !running;
});