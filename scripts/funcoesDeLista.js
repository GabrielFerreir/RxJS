// MAP
// var items = [
//   {a: 1},
//   {a: 2},
//   {a: 3},
//   {a: 4},
// ];
// var source = Rx.Observable.from(items);
// var subscription = source.map(x => { return {numero: x.a} } )
//     .subscribe(
//       x => console.log(x)
//     )

// FILTER
// var source = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);
// var subscription = source.filter(x => x % 2 === 0)
//     .subscribe(
//         x => console.log(x)
//     )

// TAKE
// var source = Rx.Observable.from([1,2,3,4,5,6,7,8])
// var subscription = source.take(3)
//     .subscribe(
//         x => console.log(x)
//     )



var pessoas = [
    { nome: 'Rick', idade: 10 },
    { nome: 'Rose', idade: 25 },
    { nome: 'Cassandra', idade: 13 },
    { nome: 'Henry', idade: 22 },
]

// FIND
// var source = Rx.Observable.from(pessoas);
// var subscription = source.find(x => x.idade > 18 && x.nome == 'Rose')
//     .subscribe(
//     x => console.log(x)
//     )

var source = Rx.Observable.from(pessoas);

// FIRST

// var subscription = source.first(x => x.nome[0] == 'R')
//     .subscribe(
//     x => console.log(x)
//     )

// LAST

// var subscription = source.last(x => x.nome[0] == 'R')
//     .subscribe(
//     x => console.log(x)
//     )

// PLUCK

var subscription = source.pluck('nome')
    .subscribe(
    x => console.log(x)
    )
