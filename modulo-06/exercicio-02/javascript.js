var arr = new Array(23, 30, 76, 2, 10, 5);

var somaDosPares = somaOsPares(arr);

alert('a soma entre os nuero pares é: ' + somaDosPares);

function somaOsPares(arr) {
    var recebe = 0;
    for (let index = 0; index < arr.length; index++) {
        if (!isNaN(arr[index]) && arr[index] % 2 === 0) {
            recebe += arr[index];
        }

    }
    return recebe;
}

