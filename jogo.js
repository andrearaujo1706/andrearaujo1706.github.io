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



var xi = 400;
var yi = 400;
var opcoes = [0,1];

var tileSize=50;


function setup() {
  createCanvas(900, 650);
}

function draw() {
  background(200);
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
  rect(x, y, 48, 48);
  fill(0, 0, 500);
  rect(x, y, 48, 48);
  

 
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