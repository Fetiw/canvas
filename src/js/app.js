var canvas=document.getElementById('canvas');
var w=canvas.width=window.innerWidth;
var h=canvas.height=window.innerHeight;
window.onresize=function() {
  w=canvas.width= window.innerWidth;
  h=canvas.height= window.innerHeight;
};

var ctx=canvas.getContext('2d');
ctx.fillStyle='white';
var arr=[];
var n=500;

/* створення сніжинок */
for(var i=0; i<n; i++) {
  var x=Math.random()*w;
  var y=Math.random()*h;
  var r=Math.random()*3;
  ctx.beginPath();
  ctx.arc(x,y,r,0,6*Math.PI,false);
  ctx.closePath();
  ctx.fill();
  arr.push({'x':x,'y':y,'r':r});
}
/* Робить анімацію сніжинок */
setInterval(function() {
  ctx.clearRect(0,0,w,h);
  for(var i=0; i<arr.length; i++) {
    arr[i].y+=Math.random()*5;
    if(arr[i].y>h) {
      arr[i].y=0;
    }
    ctx.beginPath();
    ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
},50);

