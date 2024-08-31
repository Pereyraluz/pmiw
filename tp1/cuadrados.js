function Cuadrados(u) {
  let k = 0;
    for (let i=0;i<2;i++)
  {
    for (let j=0;j<2;j++)
    {
      if (i==0 &&j==0&&u!=1)
      {k=0;
        for (let x=0; x< fin; x=x+5)
        {
          if (k % 2 == 0)
          {
            fill(231, 9, 0);
            rect (400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
          } else 
          {if (k<10)
            {
              fill(234, 116, 251);
              rect (400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            } else 
               {
              fill(80, 238, 251);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            }
          }
         k=k+1;
        }
        fill(231, 9, 0);
        rect(498, 98, 4, 4);
      }
      if (i==0&&j==1&&u!=3)
      {k = 0;
        for (let x=0; x< fin; x=x+5)
        {
          if (k % 2 == 0) 
          {
            fill(231, 9, 0);
            rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
          } else 
          {
            if (k < 10) 
            {
              fill(234, 116, 251);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            } else 
            {
              fill(122, 219, 54);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            }
          }
          k=k+1;
        }
        fill(231, 9, 0);
        rect(498, 298, 4, 4);
      }
      if (i==1&&j==0&&u!=2) 
      {k = 0;
       for (let x=0; x< fin; x=x+5)
        {
          if (k % 2 == 0)
          {
            fill(231, 9, 0);
            rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
          } else 
          {if (k < 10) {
              fill(249, 232, 3);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            } else 
            {
              fill(187, 153, 251);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            }
          }
          k=k+1;
        }
        fill(231, 9, 0);
        rect(698, 98, 4, 4);
      }
      if (i==1&&j==1&&u!=4)
      {k = 0;
       for (let x=0; x< fin; x=x+5)
        {
          if (k % 2 == 0)
          {
            fill(231, 9, 0);
             rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
          } else {
            if (k < 10) 
            {
              fill(251, 158, 71);
               rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            } else {
              fill(142, 154, 245);
              rect(400+200*i+x,0+200*j+x,tam-2*x,tam-2*x);
            }
          }
         k=k+1;
        }
        fill(231, 9, 0);
        rect(698, 298, 4, 4);
      }
    }
  }

  if (u == 1) {
     efectoUno();
  }
  if (u == 2) {
    efectoDos();
  }
  if (u == 3) {
    efectoTres();
  }
  if (u == 4) {
    efectoCuatro();
  }
}
