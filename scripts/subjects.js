// ASYNC SUBJECT
// var subject = new Rx.AsyncSubject();
// var subscription = subject.subscribe(
//     value => console.log(value),
//     err => console.log('Erro'),
//     () => console.log('Finalizado')
// )

// var num = 5;
// interval = setInterval(() => {
//     subject.next(num--);
//     if(!num) {
//         clearInterval(interval);
//         subject.complete()
//     }
// }, 1000);


// BEHAVIOR SUBJECT
// var subject = new Rx.BehaviorSubject(83);
// var subscription = subject.subscribe(
//     value => console.log(`My Value is ${value}`),
//     err => console.log(`Error message: ${err}`),
//     () => console.log('Completed!')
// )

// var counter = 5,
//     interval = setInterval(()=>{
//         subject.next(counter--);
//         if(!counter){
//             clearInterval(interval);
//             subject.complete()
//         }
//     }, 1000);

// REPLAY SUBJECT

var subject = new Rx.ReplaySubject(2, 10000);
var subscription = subject.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
)

var counter = 5,
    interval = setInterval(()=>{
        subject.next(counter--);
        if(!counter){
            clearInterval(interval);
            subject.complete()
        }
    }, 1000);