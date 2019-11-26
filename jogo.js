let map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
    
var x = 20;
var y = 465;
var y_teste=0;
var pontuacao =1;
var ve1 = 1;
var ve2 = 0;
var ve3 = 1;
let mapa,mapa1,mapa2,mapa3,item1;
let prot,v1,v2,v3;
var xi = 400;
var yi = 400;
var opcoes = [0,1];
var xv1=10, xv2=600,xv3=900;
var tileSize=50;

var i = 260;
var j = 420;
var ii = 260;
var jj = 175;
var teladeestado=0
var cont=0
var cont1=5
var start=1

var vida =3
var morte=0
function preload() {
  mapa0=loadImage('img/mapa/images.jpg')
  item1= loadImage('img/mapa/vida.png')
  mapa = loadImage('img/mapa/mapa.jpg')
  mapa1 = loadImage('img/mapa/mapa1.jpg');
  mapa2 = loadImage('img/mapa/mapa2.jpg');
  mapa3 = loadImage('img/mapa/mapa3.jpg');
  prot = loadImage('img/personagens/prot.png');
  v1 = loadImage('img/personagens/vilao1.png');
  v2 = loadImage('img/personagens/vilao1.png');
  v3 = loadImage('img/personagens/vilao1.png');
}
function setup() {
  createCanvas(900, 650);
}

function draw() {
if(teladeestado == 0){
      menu();
  }
  if(teladeestado == 1){
    menu1();
    cont=5
    cont1=0
  }
  if(teladeestado == 2){
    teladeestado=0
    close();
  }
  if(teladeestado==3){
    teste()
  }
}



function keyPressed() {
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
  if(keyCode === ENTER ){
    if(cont==0){
      teladeestado=1
  }
    if(cont==1){
    teladeestado=2
    }
    if(cont1==0){
      teladeestado=3
    }
  
}

 if (keyCode === DOWN_ARROW) {
    if(jj<375)
       jj+=50;
    } else if (keyCode === UP_ARROW) {
    if(jj>175) 
       jj-=50;
  }
  if (keyCode === DOWN_ARROW) {
    if(jj<375)
       jj+=50;
    
  } else if (keyCode === UP_ARROW) {
    if(jj>175) 
       jj-=50;
    
  }

}



function menu1(){
image(mapa0, 0, 0, 900, 650);
  fill('white');
  stroke('black');
  strokeWeight(1);
  //esquerda/direita,cima/baixo,tamanho,altura,bordas
  rect(260, 175, 400, 60, 10);
  rect(260, 275, 400, 60, 10);
  rect(260, 375, 400, 60, 10);
  
  textSize(20);
  fill('black');
  
  text('Revolução Industrial', 375, 215);
  text('Revolução Francesa', 375,315);
  text('Roma Antiga', 410,415);
  noFill();
  stroke(700, 100, 0);
  strokeWeight(3);
  rect(ii, jj, 400, 60);

}

function menu(){
  image(mapa, 0, 0, 900, 650);
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  //esquerda/direita,cima/baixo,tamanho,altura,bordas
  rect(260, 420, 400, 35, 10);
  rect(260, 470, 400, 35, 10);

  
  textSize(15);
  fill('black');
  
  text('Iniciar', 440, 443);
  text('Sair', 447,493);
  
  noFill();
  stroke(500, 100, 0);
  strokeWeight(3);
  rect(i, j, 400, 36);
}

function teste(){
  background(220);
   text('fase 1', 440, 443);
}

