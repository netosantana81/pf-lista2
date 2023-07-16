function fdefinirtriangulo ( la, lb ,lc ) {

    if (la == lb && la == lc && lb== lc ) { 
    return " Equilatero"
}   if ( la!== lb && la !== lc && lb !== lc) {
        return "Escaleno"
     }
     else  {
    return "Isosceles"
    }
    
    }
    const resultado= fdefinirtriangulo ( 2 , 4 ,2)
    console.log (resultado)