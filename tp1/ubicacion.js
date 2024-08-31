function ubicacion(xx, yy) {
  let ub = 0;
   if ((xx>400)&&(xx<600)&&(yy>0)&&(yy<200)&&mousePressed) 
    {ub=1;}
  if ((xx>600)&&(xx<800)&&(yy>0)&&(yy<200)&&mousePressed) 
    {ub=2;}
  if ((xx>400)&&(xx<600)&&(yy>200)&&(yy<400)&&mousePressed) 
    {ub=3;}
  if ((xx>600)&&(xx<800)&&(yy>200)&&(yy<400)&&mousePressed) 
    {ub=4;}
return ub;
}
