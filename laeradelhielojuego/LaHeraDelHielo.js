let juego;
let imagenesEnemigo= [];
let imagenesPersonaje= [];
let fondo=[];
let piedras=[];
function preload() {
for (let i = 0; i <= 7; i++) {
    let ruta = "data/diego" + nf(i, 2) + ".png";
    let ruta2 = "data/mani" + nf(i, 2) + ".png";
    imagenesEnemigo[i] = loadImage(ruta);
    imagenesPersonaje[i] = loadImage(ruta2);
  }
  fondo[0]=loadImage("data/fondo.png");
  fondo[1]=loadImage("data/fondoperdiste.png");
  fondo[2]=loadImage("data/fondoganaste.png");
  fondo[3]=loadImage("data/instruccion.png");
  
  for(let i=0;i<2;i++){
  let ruta="data/piedra" + nf(i, 2) + ".png";
  piedras[i] = loadImage(ruta);
  }
  
}

function setup() {
  createCanvas(640,480);
  juego = new Juego();
  juego.cargarImagenes(imagenesEnemigo,imagenesPersonaje,fondo,piedras);
}


function draw() {
 background(255);
  juego.dibujar();

  if(keyIsPressed){
                    juego.teclaPresionada();
                  }
}
