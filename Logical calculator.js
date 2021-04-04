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
        return array[0] && array[1] && array[2]
    } 
    
    else if (op === "OR"){
        return array[0] || array[1] || array[2]
    } 
    
    else if (op === "NOT")
    {
        not = ! (array[0], array[1] , array[2])
        if (not === 0){
            return false
        }else{
            return true
        }

    }
    }


let booleanos = [true,true,true]

//let operador = "AND"
//let operador = "OR"
let operador = "NOT"

console.log(`${calcBool(booleanos,operador)}`)

