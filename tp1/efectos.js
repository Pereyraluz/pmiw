function efectoUno() {
  let k = 0;
  for (let x=0; x< fin; x=x+5) 
  {
    push();
    translate(500, 100);
    rotate(radians(frameCount));
    if (k % 2 == 0)
    {
      fill(231, 9, 0);
      rect(-100+x,-100+x,tam-2*x,tam-2*x);
    } else
    {
      if (k < 10) {
        fill(234, 116, 251);
        rect(-100+x,-100+x,tam-2*x,tam-2*x);
      } else
      {
        fill(80, 238, 251);
        rect(-100+x,-100+x,tam-2*x,tam-2*x);
      }
    }
    pop();
      k=k+1;
  }
}

function efectoDos() {
  let k = random(0, 4);
  for (let x=0; x< fin; x=x+5)
  {
    if (k < 2)
    {
      fill(231, 9, 0);
      rect(600+x,0+x,tam-2*x,tam-2*x);
    } 
    else if (k<3)
    {
      fill(249, 232, 3);
      rect(600+x,0+x,tam-2*x,tam-2*x);
    } else 
    {
      fill(187, 153, 251);
      rect(600+x,0+x,tam-2*x,tam-2*x);
    }
    
    k = random(0, 4);
  }
  fill(231, 9, 0);
  rect(698, 98, 4, 4);
}

function efectoTres() 
  {let k = 0;
  let mx = map(mouseX, 0, width, 0, 255);
  let my = map(mouseY, 0, height, 0, 255);
   for (let x=0; x< fin; x=x+5)
  {
    if (k % 2 == 0)
    {
      fill(mx, my, 125);
      rect(400+x,200+x,tam-2*x,tam-2*x);
    } else {
      if (k < 10) 
      {
        fill(mx, 0, my);
        rect(400+x,200+x,tam-2*x,tam-2*x);
      } else 
      {
        fill(my, 255, mx);
        rect(400+x,200+x,tam-2*x,tam-2*x);
      }
    }
   k=k+1;
  }
  fill(mx, my, 125);
  rect(498, 298, 4, 4);
}

function efectoCuatro() {
  let k = 0;
  let d = dist(700, 300, mouseX, mouseY);
  let di = map(d, 0, 100, 1, 10);
  
  for (let x=0;x<fin; x=x+di)
  {
    if (k % 2 == 0)
    {
      fill(231, 9, 0);
      rect(600+x,200+x,tam-2*x,tam-2*x);
    } else 
    if (k < 10) 
    {
      fill(251, 158, 71);
      rect(600+x,200+x,tam-2*x,tam-2*x);
    } else 
    {
      fill(142, 154, 245);
      rect(600+x,200+x,tam-2*x,tam-2*x);
    }
  k=k+1;
  }
  fill(231, 9, 0);
  rect(698, 298, 4, 4);
}    
