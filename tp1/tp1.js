//https://youtu.be/LekfSQGbBg4
//Pereyra Luz
//Legajo: 92816/1
//Comisión 3
let cuadrados;
let cant = 2;
let tam;
let fin;
let u = 0;

function preload() {
  cuadrados = loadImage('data/cuadrados.jpg');
}

function setup() {
  createCanvas(800, 400);
  tam = (width / 2) / cant;
  fin = width / 8;
}

function draw() {
  image(cuadrados, 0, 0, 400, 400);
  Cuadrados(u);
}

function mousePressed() {
  let xx = mouseX;
  let yy = mouseY;
  u = ubicacion(xx, yy);
}
