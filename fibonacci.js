let n1 = 10

function fib(n){
    let a=1,b=1;
    while(--n)
    a=b+(b=a);
    return b;
}

console.log(fib(n1))