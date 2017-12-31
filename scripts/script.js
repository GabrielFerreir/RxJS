      // OBSERVABLES e OBSERVERS
        // var observable = Rx.Observable.create(observer => {
        //     var i = 0;
        //     setInterval(() => {
        //         observer.next(i++);
        //         if(i === 3) {
        //             observer.complete();
        //         }
        //     }, 1000);
        // })
        // observable.subscribe(
        //     value => console.log('Console ' + value),
        //     err => console.log('A'),
        //     () => console.log('Concluido')
        // )


// SUBJECTS
// var subject = new Rx.Subject();
// var subscription = subject.subscribe(
//     value => console.log(`O nome valor é ${value}`),
//     err => console.log('DEU RUIM'),
//     () => console.log('Finalizado')
// )

// subject.next(55);
// subject.next(34);
// subject.complete();

// ----------------------------

// var observable = Rx.Observable.create(observer => {
//     var i = 0;
//     var interval = setInterval(() => {
//         i++;
//         observer.next(parseInt(Math.random() * 10));
//         if(i > 5) {
//             clearInterval(interval);
//             observer.complete();
//         }
//     }, 1000);
// })

// var subject = new Rx.Subject();

// var subSource = observable.subscribe(subject);

// var subscription = subject.subscribe(
//     value => console.log(`1 - VALOR ${value}`),
//     err => console.log('DEU RUIM'),
//     () => console.log(`1 - Finalizado`)
// )


// var subscription2 = subject.subscribe(
//     value => console.log(`2 - VALOR ${value}`),
//     err => console.log('DEU RUIM'),
//     () => console.log(`2 - Finalizado`)
// )

// TRABALHANDO COM ARRAYS

// Lista de numeros de 1 á 10
// var source = Rx.Observable.range(1, 10);

// var numeros = [1, 25, 50, 100];
// var source = Rx.Observable.from(numeros);


// var subscription = source.subscribe(
//     value => console.log(`Contagem ${value}`),
//     err => console.log('DEU RUIM'),
//     () => console.log('Finalizado')
// )

// HOT N COLD

// COLD

// var source = Rx.Observable.interval(1000);
// var subscription = source.subscribe(
//     value => console.log(`Valor: ${value}`)
// )

// HOT

var source = Rx.Observable.interval(1000);
var hot = source.publish();

var subscription = hot.subscribe(
    value => console.log(`Valor: ${value}`)
)