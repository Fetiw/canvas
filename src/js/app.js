/*(function() {
  if (document.createElement('canvas').getContext) {
    if (document.readyState === 'complete')
      snow();
    else
      window.addEventListener('DOMContentLoaded', snow, false);
  }
  else {
    return;
  }

  var deg = Math.PI / 180;
  var maxflakes = 20; var flakes = []; var scrollspeed = 64; var snowspeed = 500;
  var canvas, sky;
  var snowingTimer;
  var invalidateMeasure = false;

  var strokes = ['#6cf', '#9cf', '#99f', '#ccf', '#66f', '#3cf'];

  function rand(n) {
    return Math.floor(n * Math.random());
  }

  // Запуск снегопада
  function snow() {
    canvas = document.createElement('canvas');
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.zIndex = '-10';

    document.body.insertBefore(canvas, document.body.firstChild);
    sky = canvas.getContext('2d');
    sky.lineJoin = 'bevel';

    ResetCanvas();

    snowingTimer = setInterval(createSnowflake, snowspeed);
    setInterval(moveSnowflakes, scrollspeed);
    window.addEventListener('resize', ResetCanvas, false);
  }

  // Сброс размеров Canvas
  function ResetCanvas() {
    invalidateMeasure = true;
    canvas.width = document.body.offsetWidth;
    canvas.height = window.innerHeight;
  }

  // Отрисовка кривой Коха
  function leg(n, len) {
    sky.save(); // Сохраняем текущую трансформацию
    if (n === 0) { // Нерекурсивный случай - отрисовываем линию
      sky.lineTo(len, 0); }
    else {
      sky.scale(1 / 3, 1 / 3); // Уменьшаем масштаб в 3 раза
      leg(n - 1, len); sky.rotate(60 * deg);
      leg(n - 1, len); sky.rotate(-120 * deg);
      leg(n - 1, len); sky.rotate(60 * deg); leg(n - 1, len); }
    sky.restore(); // Восстанавливаем трансформацию
    sky.translate(len, 0); // переходим в конец ребра
  }

  // Отрисовка снежинки Коха
  function drawFlake(x, y, angle, len, n, stroke, fill) {
    sky.save(); sky.strokeStyle = stroke;
    sky.fillStyle = fill;
    sky.beginPath();
    sky.lineJoin = 'bevel';
    sky.translate(x, y);
    sky.moveTo(0, 0); sky.rotate(angle);
    leg(n, len);
    sky.rotate(-120 * deg);
    leg(n, len); sky.rotate(-120 * deg);
    leg(n, len);
    sky.closePath();
    sky.fill();
    sky.stroke();
    sky.restore();
  }

  // Создание пула снежинок
  function createSnowflake() {
    var order = 2+rand(2);
    var size = 5*order+rand(10);
    var x = rand(document.body.offsetWidth);
    var y = window.pageYOffset;
    var stroke = strokes[rand(strokes.length)];

    flakes.push({ x: x, y: y, vx: 0, vy: 3 + rand(3), angle:0, size: size, order: order, stroke: stroke, fill: 'transparent' });

    if (flakes.length > maxflakes) clearInterval(snowingTimer);
  }

  // Перемещение снежинок
  function moveSnowflakes() {
    sky.clearRect(0, 0, canvas.width, canvas.height);

    var maxy = canvas.height;

    for (var i = 0; i < flakes.length; i++) {
      var flake = flakes[i];

      flake.y += flake.vy;
      flake.x += flake.vx;

      if (flake.y > maxy) flake.y = 0;
      if (invalidateMeasure) {
        flake.x = rand(canvas.width);
      }

      drawFlake(flake.x, flake.y, flake.angle, flake.size, flake.order, flake.stroke, flake.fill);

      // Иногда меняем боковой ветер
      if (rand(4) === 1) flake.vx += (rand(11) - 3) / 10;
      if (flake.vx > 2) flake.vx = 2;
      if (flake.vx < -2) flake.vx = -2;
      if (rand(3) === 1) flake.angle = (rand(13) - 6) / 271;
    }
    if (invalidateMeasure) invalidateMeasure = false;
  }
} ());

*/

var canvas = document.getElementById('canvas');
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;
window.onresize = function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
};


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';
var arr = [];
var n = 2000;

/* створення сніжинок */

for(var i = 0; i<n; i++) {
  var x = Math.random() * w;
  var y = Math.random() * h;
  var r = Math.random() * 3;
  var speed  =  getRandomArbitrary(2, 4);
  ctx.beginPath();
  ctx.arc(x,y,r,0,6 * Math.PI,false);
  ctx.lineJoin = 'bevel';
  ctx.fill();
  arr.push({'x':x, 'y':y, 'r':r, speed});
}

/* Робить анімацію сніжинок */

function render() {
  ctx.clearRect(0, 0, w, h);
  for(var i = 0; i<arr.length; i++) {
    arr[i].y = arr[i].y + arr[i].speed;

    if(arr[i].y > h) {
      arr[i].y = 0;
    }

    ctx.beginPath();
    ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0.3 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  requestAnimationFrame(render);
}

render();



// $gs_path = variable_get('gs_path', '/usr/local/bin/gs');
