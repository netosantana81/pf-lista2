function fcitar  (x,y){
    return `${y},${x[0]}.`//${} em JavaScript é usado para interpolar variáveis em strings literais.
    }
    const nome = "Mary"
    
    const sobrenome= "Jane"
    
    resultado = fcitar(nome,sobrenome)
    const citacao= `como citar ${nome} ${sobrenome}:  ${resultado}`
    
    
    console.log(citacao)