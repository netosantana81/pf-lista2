function menorvalor (v1,v2) {
  if (v1 < v2) 
  return v1 
  else return v2
 } 
  const a= 5
  const b= 6
  const c= 4
  //Observe que não é necessário criar uma função
//para comparar três valores. Basta reaproveitar
//a função de comparação entre dois valores quantas
//vezes desejar para comparar muitos valores e descobrir
//o menor.
 
const resultado = menorvalor(a,menorvalor(b,c))  

console.log(resultado)