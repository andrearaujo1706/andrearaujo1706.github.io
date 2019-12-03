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
var p = 260;
var m = 470;
var x = 20;
var y = 465;
var y_teste=0;
var pontuacao =1;
var ve1 = 1;
var ve2 = 0;
var ve3 = 1;
let mapa,mapa1,mapa2,mapa3,item1,morte1;
let prot,v1,v2,v3;
var xi = 400;
var yi = 400;
var opcoes = [0,1];
var xv1=10, xv2=600,xv3=900;
var tileSize=50;
var cont2=8
var h=0


var i = 260;
var j = 420;
var ii = 261;
var jj = 175;
var teladeestado=0
var cont=0
var cont1=0
var start=1
var b=0

var xt = x;
var yt = y;
var atirando=false;

var vida =3
var morte=0
function preload() {
  bala=loadImage('img/mapa/bala.png')
  mapa0=loadImage('img/mapa/images.jpg')
  item1= loadImage('img/mapa/vida.png')
  mapa = loadImage('img/mapa/mapa.jpg')
  mapa1 = loadImage('img/mapa/mapa1.jpg');
  mapa2 = loadImage('img/mapa/mapa2.jpg');
  mapa3 = loadImage('img/mapa/mapa3.jpg');
  morte1= loadImage('img/mapa/morte.jpg')
  prot = loadImage('img/personagens/prot.png');
  v1 = loadImage('img/personagens/vilao1.png');
  v2 = loadImage('img/personagens/vilao1.png');
  v3 = loadImage('img/personagens/vilao1.png');
  v4 = loadImage('img/personagens/vilao2.png');
  v5 = loadImage('img/personagens/vilao2.png');
  v6 = loadImage('img/personagens/vilao2.png');
  v7 = loadImage('img/personagens/vilao3.png');
  v8 = loadImage('img/personagens/vilao3.png');
  v9 = loadImage('img/personagens/vilao3.png');
}
function setup() {
  createCanvas(900, 650);
}

function draw() {
if(teladeestado == 0){
      cont2=8
      b=0
      menu();
  }
  if(teladeestado == 1){
    x=20
    y = 465
    cont=0
    vida=3
    b=1
    menu1();
}
  if(teladeestado == 2){
    teladeestado=0
    close();
  }
  if(teladeestado==3){
    fase1()
    b=3
  }
   if(teladeestado==4){
    fase2()
    b=3
  }
  if(teladeestado==5){
    fase3()
    b=3
  }
  if(teladeestado==6){
    b=2
    morreu()
  }
}



function keyPressed() {
  console.log(keyCode)
  if(b==0){
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

if(b==1){
  if (keyCode === DOWN_ARROW && cont1<=3) {
     if(jj<375){
       jj+=50;
       cont1=cont1+1
      }
    }

     else if (keyCode === UP_ARROW && cont1>0) {
    if(jj>175) 
       jj-=50;
     cont1=cont1-1
  }
  if (keyCode === DOWN_ARROW && cont1<=3) {
    if(jj<375)
       jj+=50;
      cont1=cont1+1
  } else if (keyCode === UP_ARROW && cont1>0) {
    if(jj>175) 
       jj-=50;
     cont1=cont1-1
  }

if(keyCode === ENTER ){
    if(cont1==0){
        teladeestado=3
    }
    if(cont1==2){
        teladeestado=4
    }
    if(cont1==4){
      teladeestado=5
    }
  }
 }
 if(b==2){
     if (keyCode === DOWN_ARROW) {
    if(m<520)
       m+=50;
      cont2=1
    } else if (keyCode === UP_ARROW) {
    if(m>470) 
       m-=50;
      cont2=0
  }
  if (keyCode === DOWN_ARROW) {
    if(m<470)
       m+=50;
    cont2=1
  } else if (keyCode === UP_ARROW) {
    if(m>550) 
       m-=50;
     cont2=0
  }
  if(keyCode === ENTER ){
    if(cont2==1){
        teladeestado=0
        
    }
    if(cont2==0){
        teladeestado=1
        
    }
  }
}

if(b==3){
  if(keyCode === ENTER){
  atirando=true;
    xt=x
    yt=y
  }
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
       textSize(25);
      fill('black');
      text('Score:', 30, 50);
        textSize(25);
      fill('black');
      text('00000', 110, 53);
      vidas()
    image(prot, x, y, 48,85);
    moverVilao();
    mvilao()
  }

  //TESTANDO A COLISAO COM O INIMIGO
if(x==xv1 && y<=465){
  vida=vida-1
}
if(x==xv2 && y<=465){
  vida=vida-1
}
if(x==xv3 && y<=465){
  vida=vida-1
}
//testando colisao Ddo tiro no inimigo
if(xt==xv1 && y<=465){
  h==1   
}
if(xt==xv2 && y<=465){
  h==3
}
if(xt==xv3 && y<=465){
  alert("matou mais um")
}

xt=xt+10
if(atirando==true){
  image(bala, xt+10, yt+50, 10,10)
  if(xt>900 ) {
       atirando=false;
       if(xt<xv1 && xt>=xv1){
        h=1
       }
    }
}


function vidas(){
    if(vida==3){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    image(item1, 800, 25, 30, 40);
  }
    if(vida==2){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    }
    if(vida==1){
      image(item1, 720, 25, 30, 40);
    }
    if(vida==0){
      teladeestado=6
      cont2=0
    }
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
}

function mvilao(){
  if(h==0){
  image(v1, xv1, 465, 48,85);
  image(v2, xv2, 465, 48,85);
  image(v3, xv3, 465, 48,85);
  }
  if(h==1){
  image(v2, xv2, 465, 48,85);
  image(v3, xv3, 465, 48,85);
  }
  if(h==3){
  image(v3, xv3, 465, 48,85);
  }
}

}

function fase2(){
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
    image(mapa3, 0, 0, 900, 650);
      textSize(25);
      fill('black');
      text('Vidas:', 640, 50);
       textSize(25);
      fill('black');
      text('Score:', 30, 50);
        textSize(25);
      fill('black');
      text('00000', 110, 53);
      vidas()
    image(prot, x, y, 48,85);
    moverVilao();
  }

if(x==xv1 && y<=465){
  vida=vida-1
}
if(x==xv2 && y<=465){
  vida=vida-1
}
if(x==xv3 && y<=465){
  vida=vida-1
}


xt=xt+10
if(atirando==true){
  image(bala, xt+10, yt+50, 10,10)
  if(xt>900 ) {
       atirando=false;
    }
}

function vidas(){
    if(vida==3){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    image(item1, 800, 25, 30, 40);
  }
    if(vida==2){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    }
    if(vida==1){
      image(item1, 720, 25, 30, 40);
    }
    if(vida==0){
      teladeestado=6
      cont2=0
    }
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
  image(v4, xv1, 465, 48,85);
  image(v5, xv2, 465, 48,85);
  image(v6, xv3, 465, 48,85);
}
}

function fase3(){
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
    image(mapa2, 0, 0, 900, 650);
      textSize(25);
      fill('black');
      text('Vidas:', 640, 50);
       textSize(25);
      fill('black');
      text('Score:', 30, 50);
        textSize(25);
      fill('black');
      text('00000', 110, 53);
      vidas()
    image(prot, x, y, 48,85);
    moverVilao();
  }

if(x==xv1 && y<=465){
  vida=vida-1
}
if(x==xv2 && y<=465){
  vida=vida-1
}
if(x==xv3 && y<=465){
  vida=vida-1
}

xt=xt+10
if(atirando==true){
  image(bala, xt+10, yt+50, 10,10)
  if(xt>900 ) {
       atirando=false;
    }
}


function vidas(){
    if(vida==3){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    image(item1, 800, 25, 30, 40);
  }
    if(vida==2){
    image(item1, 720, 25, 30, 40);
    image(item1, 760, 25, 30, 40);
    }
    if(vida==1){
      image(item1, 720, 25, 30, 40);
    }
    if(vida==0){
      teladeestado=6
      cont2=0
    }
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
  image(v7, xv1, 465, 80,85);
  image(v8, xv2, 465, 80,85);
  image(v9, xv3, 465, 80,85);
}
}
function morreu(){
  image(morte1, 0, 0, 900, 650);;
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

 textSize(30);
      fill('black');
      text('00000', 380, 177);
  
}
