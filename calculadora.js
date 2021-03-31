

function calculadora (value1, operation, value2){
switch (operation) {
    case "+":
        var result = value1 + value2;
        console.log (result)
        break;
    
    case "-":
        var result = value1 - value2;
        console.log (result)
        break;        

    case "*":
        var result = value1 * value2;
        console.log (result)
        break;    

    case "/":
        var result = value1 / value2;
        console.log (result)        
       break;
    
    default:
        console.log ("Algum parâmetro não foi inforado")
        break;
}}

calculadora (3,'+',5);


