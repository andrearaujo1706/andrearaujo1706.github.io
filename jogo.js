let morte;
var p = 260;
var m = 470;
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
  rect(260, 470, 400, 35, 10);
  rect(260, 520, 400, 35, 10);

  
  textSize(15);
  fill('black');
  
  text('Tentar Novamente', 400, 493);
  text('Menu', 447,543);
  
  noFill();
  stroke(500, 100, 0);
  strokeWeight(3);
  rect(p, m, 400, 36);
}

function keyPressed(){ 
console.log(keyCode)
    if (keyCode === DOWN_ARROW) {
    if(m<520)
       m+=50;
      
    } else if (keyCode === UP_ARROW) {
    if(m>470) 
       m-=50;
      
  }
  if (keyCode === DOWN_ARROW) {
    if(m<470)
       m+=50;
    
  } else if (keyCode === UP_ARROW) {
    if(m>550) 
       m-=50;
  
  }
}
