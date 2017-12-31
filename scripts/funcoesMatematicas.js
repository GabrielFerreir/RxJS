// var source = Rx.Observable.range(0, 10).count(el => el % 2 === 1);
// var source = Rx.Observable.from([1,3,5,7,9,2,4,6,8,20]).max();
// var source = Rx.Observable.from([1,3,5,7,9,2,4,6,8,20]).min();

var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9]).reduce((total, atual) => total + atual)
var subscription = source.subscribe(
    value => console.log(value)
)