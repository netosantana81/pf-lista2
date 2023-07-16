function triangulo(x,y,z){
  if (x<y+z&&y<x+z&&z<x+y)
  return "é um triângulo"
  else return "não é um triangulo"
  }
  console.log(triangulo(3,4,6))