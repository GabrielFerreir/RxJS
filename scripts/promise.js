window.onload = (e) => {
    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500);
        }, 2000);
    });

    // myPromise
    //     .then( value => console.log(`Valor: ${value}`));

    var source = Rx.Observable.fromPromise(myPromise);

    var subscription = source.subscribe(
        value => console.log(`Valor: ${value}`)
    )


}