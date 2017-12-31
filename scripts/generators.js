window.onload = (e) => {

}

// function* myCounter() {
//     var i = 0;
//     while(true) {
//         yield i++;
//     }
// }

// var counter = myCounter();

// function* myGenerator() {
//     yield 5;
//     console.log('We re back')
//     yield 10;
// }

function* myGenerator() {
    yield* [1,2,3,4,5,6,7,8,9,10]
}

// var result = myGenerator();

Rx.Observable.from(myGenerator()).take(5).subscribe(
    x => console.log(x)
)
