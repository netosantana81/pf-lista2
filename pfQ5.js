function distancia ( ponto1,ponto2 ) {
    return  (( ponto2.x - ponto1.x )**2 + ( ponto2.y - ponto1.y )**2) ** (1/2)
  }  
  const A = {
       x : 1,
       y : 5     
  }
  const B = {
       x: 4,
       y: 1
  }
  
     console.log  (`A distância entre os dois ponto é  ${distancia (A, B)}`)