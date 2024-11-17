class Enemigo{
  constructor(){
    this.posX = -80;
    this.posY = 360;
    this.posYInicial=360;
    this.vidas = true;
    this.salto=false;
    this.alturaSalto=120;
    this.direccionSalto=-1;
    this.incrementoSalto=2;
    this.saltos=0;
    this.imagenes =[];
    this.frameActual = 0; // Índice del frame actual para la animación
    this.velocidadAnimacion = 10; 
  }
    
  dibujar(){
    if(this.vidas){
this.animarMovimiento();
    this.modificarSalto();
  }
  }

    saltar(){
      if (this.salto==false){
      this.salto=true;
    this.saltos=this.saltos+1;}
  }
        matar(){this.vidas=false;}
        
    modificarSalto(){
        if(this.salto==true){
          this.posY = this.posY + (this.direccionSalto * this.incrementoSalto);
        
         if(this.posYInicial - this.posY >= this.alturaSalto){
          this.direccionSalto = 1;
        }
        if(this.posYInicial - this.posY <= 0){
          this.salto = false;
          this.direccionSalto = -1;
          this.posY = this.posYInicial;
        }
        } 
        
   }
   
  //chequearDistancia(piedra){
  // if(dist(this.posX, this.posY, piedra.posX, piedra.posY)< 200){
  //   this.saltar();
  //  }
  //}
  cargarImagenes(imagenesEnemigo){
  //for (let i = 0; i <= 8; i++) {
  //  let ruta = "data/diego" + nf(i, 2) + ".png";
  //  this.imagenes[i] = loadImage(ruta);
  //}
this.imagenes=imagenesEnemigo;
}
animarMovimiento(){
      if(!this.salto){
    this.frameActual = Math.floor(frameCount / this.velocidadAnimacion) % 6;
      image(this.imagenes[this.frameActual], this.posX, this.posY, 300, 150);
    }else{
      if(this.direccionSalto==-1){image(this.imagenes[6], this.posX, this.posY-100, 300, 300);
      }else{image(this.imagenes[7], this.posX, this.posY-100, 300, 300);}
    
    }
}

  }
