
const numb =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'NBA', false];

const PodschetChetNechet = (array) =>  {
    let Chet = 0;
    let neChet = 0;
    let zero = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0){
                zero++
            }else if (array[i] % 2 === 0) {
                    Chet++;
                } else {
                    neChet++;
                }
        }
    }
    console.log("Chet : " + Chet);
    console.log("neChet : " + neChet);
    console.log("ZEro : " + zero);
}

PodschetChetNechet(numb);

// Почти верно, но в текущем виде функция не имеет смысла, потому что внутри функции используется массив, заданный в глобальной области видимости, и получается что её нельзя переиспользовать и подсчитать количество элементов в другом массиве, не меняя код функции. Функция должна быть максимально универсальной, поэтому массив для подсчета нужно передавать в качестве аргумента.