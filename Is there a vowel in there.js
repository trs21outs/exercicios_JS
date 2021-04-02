/*
Test.assertSimilar(
    isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
    );

 Test.assertSimilar(
     isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]
     );
*/

//let n1 = ["Z","X","D","E","R","V","A","J","T"]


/*Exemplo de função
==========================================
function organizador(a,b){
    return (a-b)
  }
==========================================
*/



/*Exemplo de função
==========================================
let n2 = Array.prototype.filter.call (n1, char => "aeiou" .includes(n1)). join ("")
return n2
==========================================
*/



/*Exemplo de função
==========================================
let vogais = /^[aeiou]/i;
let matrix = n1.filter(str => vogais.test(str))
==========================================
*/



/*Exemplo de função mais promiissor
==========================================
function isVow(a){
let vowels = ["a","e","i","o","u","A","E","I","O","U"]
let n1 = Array.from(String.fromCharCode.apply(this, a))
let
return n1
}
console.log(`${isVow(array)}`)
==========================================
*/


/*Exemplo de função
====================================================
const vowelsAndConsonants = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Check for vowels

    var letters = str.split('');
    var vowelsFound = [], consonantsFound = [];

    for (var i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i]);
        } else {
            consonantsFound.push(letters[i]);
        }
    }
    
    console.log("Vowels:", vowelsFound.join(""));
    console.log("Consonants:", consonantsFound.join(""));    
}

var str = "ThisIsATest";
 vowelsAndConsonants(str.toLowerCase())
 ====================================================
 */

/*Criação da função que vai codificar os numeros em letras
=============================================================
function isVow(n){
let n2 = Array.from(String.fromCharCode.apply(this, n))
map(function(item, index, array){
return n2
}
=============================================================
*/



/**resolução do github*/
/*const isVow = a =>
  a.map(
    charCode =>
      /[aeiou]/.test(String.fromCharCode(charCode))
        ? String.fromCharCode(charCode)
        : charCode
  )
*/

/*
([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106],[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
([101,121,110,113,113,103,121,121,101,107,103],["e",121,110,113,113,103,121,121,"e",107,103]);
*/

const array = ["e",121,110,113,113,103,121,121,"e",107,103]
const vogais = ["a","e","i","o","u"]

function organizador(n){

const n1 = n.filter(item => typeof item  === 'string' )
const n2 = n1.join('')

const n3 = String.fromCharCode.apply(this, n)
const res = n2+n3
const vowelList = ["a","e","i","o","u"]
const vowelsCount = 0;
const resolv = []

 for(var i = 0; i < res.length ; i++)
  {
    if (vowelList.indexOf(resolv[i]) !== -1)
    {
      vowelsCount += 1;
    }
  }
  return vowelsCount;

}

console.log(` ${organizador(array)} `)







