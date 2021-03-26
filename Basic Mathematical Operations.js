
var value1 = ;
var value2 = ;
var operation = ;
var l = console.log;

switch (operation) {
    case "+":
        var result = value1 + value2;
        l(result);
        break;
    
    case "-":
        var result = value1 - value2;
        l(result);
        break;

    case "*":
       var result = value1 * value2;
       l(result);
       break;

    case "/":
        var result = value1 / value2;
        l(result);
       break;
    
    default:
        break;
}