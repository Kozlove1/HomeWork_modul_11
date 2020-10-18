const ProstoeLiChislo = (n) => {
    if (n > 1000) {
        console.log('Данные не верны')
        } else if (n === 2){
        console.log('Простое')
        } else if (n % 2 === 0 || n === 1 ) {
        console.log('Не Простое')
    }else {
        console.log('Простое')
    }
    }

ProstoeLiChislo(1000);