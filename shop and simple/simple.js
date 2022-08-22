function isPrime(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}

function kolvo_prime(kolvo){
    let i = 0
    let num = 2
    let list = []
    while (i < kolvo){
        if (isPrime(num) == true){
            list.push(num)
            i++
        }num++
    }return list
}

console.log(kolvo_prime(process.argv[2]))