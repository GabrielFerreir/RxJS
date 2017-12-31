// var source = Rx.Observable.from([1,2,3,4,5]).delay(5000);

// var source = Rx.Observable.interval(1000);

// var source = Rx.Observable.timer(5000, 1000).take(5);

// var subscription = source.subscribe(
//     value => console.log(value)
// )

window.onload = (e) => {
    var myInput = document.querySelector('#myInput'),
        myDiv = document.querySelector('#myDiv'),
        inputs = Rx.Observable.fromEvent(myInput, 'keyup');

    inputs
        .debounce(() => Rx.Observable.interval(1000))
        .subscribe(event => {
            myDiv.innerHTML = event.target.value;
        })
}