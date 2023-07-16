function algarismos(x){
    const numeros = {
    1: 'Um',
    2: 'Dois',
    3: 'Três',
    4:'Quatro',
    5:'Cinco',
    6:'Seis',
    7:'Sete',
    8:'Oito',
    9:'Nove',
    10:'Dez'
    };
    if (x >= 1 && x <= 10)
    return numeros [x];
    else
    return 'algarismo invalido';
    
    }
    const resultado=(algarismos(7))
    console.log(resultado)