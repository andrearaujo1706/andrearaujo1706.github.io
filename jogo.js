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
var teladeestado=0
var cont=0
var start=1

function preload() {
  item1= loadImage('img/mapa/vida.png')
  mapa = loadImage('img/mapa/mapa.jpg')
  mapa1 = loadImage('img/mapa/mapa1.jpg');
  mapa2 = loadImage('img/mapa/mapa2.jpg');
  mapa3 = loadImage('img/mapa/mapa3.jpg');
  prot = loadImage('img/personagens/prot.png');
  v1 = loadImage('img/personagens/vilao1.png');
  v2 = loadImage('img/personagens/vilao2.png');
  v3 = loadImage('img/personagens/vilao3.png');
}
function setup() {
  createCanvas(900, 650);
}

function draw() {
if(teladeestado == 0){
      menu();
  }
  if(teladeestado == 1){
    iniciar();
  }
  if(teladeestado == 2){
    teladeestado=0
    close();
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
      }
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



function iniciar(){
background(200);
if(start==1){
      fase1();
}
}

function fase1(){

background(200);
    if(pontuacao==1){
      fase();
    }

  
  fill(100, 50, 0);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] != 0) {
        rect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }
 

   if (keyIsDown(LEFT_ARROW) && !bateuNoMapa(x-5,y)) {
      x-=5;
      
   }
   

  if (keyIsDown(RIGHT_ARROW)&& !bateuNoMapa(x+5,y)  ){
       x+=5;
       //chao = y-tileSize;
   }
  
  if (keyIsDown(UP_ARROW)&& !bateuNoMapa(x,y-5) ) {
        //y-=5;  
        if(y==465){
          y_teste=1;}


  }

  if(y_teste==1){
    y=y-12;
    if(y<=300){
      y_teste=0  
    }
  }
  if(y<465 && y_teste==0){
    y=y+12;
  }

 fill(0, 0, 500);
  
  fill(0, 0, 500);
  
    function bateuNoMapa(a, b) {
        let bateu=false; 
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                 if(map[i][j]==1 && colisao(a,b,j * tileSize,i * tileSize)){
                     bateu=true;
                     return bateu;
                 }
            }
        }
      return bateu;
    }
                    
   function colisao(x1,y1,x2,y2) {
            if(x1 > x2 + 48)
                    return false;
                if(y1 > y2 + 48)
                    return false;
                if(x1 + 48 < x2)
                    return false;
                if(y1 + 48 < y2)
                    return false;
                return true;
            }

  function fase() {
    image(mapa1, 0, 0, 900, 650);
      textSize(25);
      fill('black');
      text('Vidas:', 640, 50);
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    image(item1, 800, 25, 30, 40);
    image(prot, x, y, 48,85);
    moverVilao();
  }

function moverVilao(){
  
  if(xv1  <850 && ve1==1){
    xv1=xv1+2
  }else{
    ve1=0
    xv1=xv1-7
    if(xv1 <=5){
      ve1=1;
    }
  }

  if(xv2  <850 && ve2==1){
    xv2=xv2+5
  }else{
    ve2=0
    xv2=xv2-5
    if(xv2 <=5){
      ve2=1;
    }
  }

  if(xv3  < 850 && ve3==1){
    xv3=xv3+6
  }else{
    ve3=0
    xv3--
    if(xv3 <= 5){
      ve3=1;
    }
  }
  image(v1, xv1, 465, 48,85);
  image(v1, xv2, 465, 48,85);
  image(v1, xv3, 465, 48,85);
}
}
