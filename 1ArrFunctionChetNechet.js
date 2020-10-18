
const numb =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'NBA', false];

const PodschetChetNechet = () =>  {
    let Chet = 0;
    let neChet = 0;
    let zero = 0;

    for (let i = 0; i < numb.length; i++) {
        if (typeof numb[i] === 'number' && !isNaN(numb[i])) {
            if (numb[i] === 0){
                zero++
            }else if (numb[i] % 2 === 0) {
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

PodschetChetNechet();