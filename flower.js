const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createPetal() {
  const size = Math.random() * 8 + 6; // nhỏ hơn
  petals.push({
    x: Math.random() * canvas.width,
    y: -size,
    size: size,
    speedY: Math.random() * 0.4 + 0.2, // CHẬM hơn
    speedX: Math.random() * 0.2 - 0.1, // bay ngang nhẹ
    angle: Math.random() * 2 * Math.PI,
    rotationSpeed: Math.random() * 0.01 - 0.005, // xoay nhẹ hơn
  });
}

function drawPetal(petal) {
  ctx.save();
  ctx.translate(petal.x, petal.y);
  ctx.rotate(petal.angle);
  ctx.fillStyle = 'rgba(255, 182, 193, 0.7)'; // màu hồng nhẹ
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-petal.size / 2, -petal.size / 2, -petal.size, petal.size / 2, 0, petal.size);
  ctx.bezierCurveTo(petal.size, petal.size / 2, petal.size / 2, -petal.size / 2, 0, 0);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tạo ít cánh hoa hơn
  if (Math.random() < 0.1) createPetal(); // Giảm mật độ

  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    p.y += p.speedY;
    p.x += p.speedX;
    p.angle += p.rotationSpeed;

    drawPetal(p);

    if (p.y > canvas.height + 50) {
      petals.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();
