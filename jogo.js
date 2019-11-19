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
var y = 501;
var y_teste=0;
var pontuacao =1;


let mapa1,mapa2,mapa3;
let prot,v1,v2,v3;
var xi = 400;
var yi = 400;
var opcoes = [0,1];

var tileSize=50;

function preload() {
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
    background(200);
    if(pontuacao==1){
      fase1();
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
        if(y==501){
          y_teste=1;}


  }

  if(y_teste==1){
    y=y-12;
    if(y<=300){
      y_teste=0  
    }
  }
  if(y<501 && y_teste==0){
    y=y+12;
  }

  if (keyIsDown(DOWN_ARROW)&& !bateuNoMapa(x,y+5))
    y+=5;


    fill(0, 0, 500);
  
  fill(0, 0, 500);
  
  

 
}


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

  function fase1() {
    image(mapa1, 0, 0, 900, 650);
    image(prot, x, y, 48,60);
  }
