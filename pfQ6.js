function fquantosIguais (a,b,c) {
    if (a == b && b == c && c == a)
    return "todos são iguais"
      else  if (a != b && b != c && a != c)
    return "todos diferentes"
     else
    return "apenas um diferente"
    
    }
    
    const a = 7//ou fornecido pelo usuário
    const b = 8//ou fornecido pelo usuário
    const c = 9//ou fornecido pelo usuário
     
      resultado= fquantosIguais(a,b,c)
    
      console.log (resultado)