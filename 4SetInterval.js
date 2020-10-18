const numberFromTill = (from, till) => {
    let start = from;
    let intervalId = setInterval(function(){
        console.log(start);
        if (start === till) {
            clearInterval(intervalId)
        } else {
            start++;
        }
    }, 1000);
}
numberFromTill (1, 11)