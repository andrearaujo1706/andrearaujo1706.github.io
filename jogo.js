let morte;
var p = 260;
var m = 420;
function setup() {
  createCanvas(900, 650);
}

function preload() {
  morte= loadImage('img/mapa/morte.jpg')
}
function draw() {
  image(morte, 0, 0, 900, 650);;
  fill('white');
  stroke('black');
  strokeWeight(1);
  //esquerda/direita,cima/baixo,tamanho,altura,bordas
  rect(260, 420, 400, 35, 10);
  rect(260, 470, 400, 35, 10);

  
  textSize(15);
  fill('black');
  
  text('Tentar Novamente', 400, 443);
  text('Menu', 447,493);
  
  noFill();
  stroke(500, 100, 0);
  strokeWeight(3);
  rect(p, m, 400, 36);
}

function keyPressed(){ 
console.log(keyCode)
  if (keyCode === DOWN_ARROW) {
    if(j<470)
       j+=25;
      cont=1
    } else if (keyCode === UP_ARROW) {
    if(j>420) 
       j-=25;
      cont=0
  }
  if (keyCode === DOWN_ARROW) {
    if(j<470)
       j+=25;
    cont=1
  } else if (keyCode === UP_ARROW) {
    if(j>420) 
       j-=25;
    cont=0
  }
}
