/*let b = [true, "XOR", true]

function booleanos(boo){
if (boo[1] === "AND"){
    return boo[0] && boo[2]
} 

else if (boo[1] === "OR"){
    return boo[0] || boo[2]
} 

else{
    return ( (boo[0] || boo[2]) && ! (boo[0] && boo[2]) )
    }
}

console.log(`${booleanos(b)}`)*/

/***************************************************************************************************/
/***************************************************************************************************/
/***************************************************************************************************/

function calcBool(array,op){
    if (op === "AND"){
        return array[0] && array[1] && array[2] && array[3]
    } 
    
    else if (op === "OR"){
        return array[0] || array[1] || array[2] || array[3]
    } 
    
    else if (op === "XOR")
    {
        xor = array[0] ^ array[1] ^ array[2] ^ array[3]
        if (xor === 0){
            return false
        }else{
            return true
        }

    }
    }


let booleanos = [false,false,false,false]

//let operador = "AND"
//let operador = "OR"
let operador = "XOR"

console.log(`${calcBool(booleanos,operador)}`)

