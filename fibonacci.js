let n1 = 530

function fibonacci(n){
    let a=1,b=1;
    while(--n)
    a=b+(b=a);
    return b;
}

console.log(fibonacci(n1))