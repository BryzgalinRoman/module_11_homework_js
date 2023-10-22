//Делаем из цикла функцию

function GetNumEvenOdd() {
    const arr = [1, 7, 5, 9, 0, 0, null, 'ssss', 14.44, 16.666, 7777];

    let count_even = 0;
    let count_odd = 0;
    let count_zero = 0;

    arr.forEach(function (item, index, array) {
        if (!isNaN(item) && item != null) {
            if (item == 0) {
                count_zero++;
            } else if (item % 2 == 0) {
                count_even++;
            } else if (item % 2 == 1) {
                count_odd++;
            }
        }
    })

    console.log("Количество нулей в массиве: " + count_zero);
    console.log("Количество четных чисел в массиве: " + count_even);
    console.log("Количество нечетных чисел в массиве: " + count_odd);
}

GetNumEvenOdd();