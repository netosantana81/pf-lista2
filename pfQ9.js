// Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), dado por
//a⊗b=(a∨b)∧¬(a∧b).
const v= true
const f= false
function ouexclusivo(a,b) {
//avb
if  (a == f && b == f)
 return false
else 
return true


}
console.log(ouexclusivo(v,f))