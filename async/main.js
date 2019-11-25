function setDailyRhythm(wakeUpTime, bedTime) {

    setInterval(setAlarm, 1000, wakeUpTime, goodMorning);

    setInterval(setAlarm, 1000, bedTime, goodNight);


}

function setAlarm(time, callback) {
    
    let now = new Date();
    let nowHours = now.getHours();
    let nowMinutes = now.getMinutes();
    let nowTime = nowHours + ':' + nowMinutes;
    // console.log(nowTime);
    // console.log(typeof nowTime);

    if (nowTime == time) {
        return callback();
    }
    
}

const goodMorning = () => alert('Доброе утро, Вася');
const goodNight = () => alert('Спокойной ночи, Вася');
setDailyRhythm('20:38', '20:39');



// function goodMorning(){
//     console.log('Доброе утро, Вася');
//     console.log('Доброе утро, Вася');
//     console.log('Доброе утро, Вася');
// }
// function goodNight(){
//     console.log('Спокойной ночи, Вася');
//     console.log('Спокойной ночи, Вася');
//     console.log('Спокойной ночи, Вася');
// }

// setDailyRhythm('08:00', '22:00');



// function setDailyRhythm(wakeUpTime, bedTime) {

//     let now = new Date();
//     let nowHours = now.getHours();
//     let nowMinutes = now.getMinutes();


// }

// function setAlarm(time, callback) {

//     return function () {
//         let timeHour = 0;
//         for (i = 0; i < 2; i++) {
//             console.log(time[i]);
//             timeHour = timeHour + x[i];
//         }
//         let timeHour = parseInt(timeHour);

//         let timeMinute = 0;
//         for (i = 0; i < 2; i++) {
//             console.log(time[i]);
//             timeMinute = timeMinute + x[i];
//         }
//         let timeMinute = parseInt(timeMinute);
//         let now = new Date();
//         let nowHours = now.getHours();
//         let nowMinutes = now.getMinutes();
//         if (nowHours === timeHour && nowMinutes === timeMinute) {
//             return callback;
//         }
//     }



// }


// let now = new Date(2011, 0, 1, 07, 05, 0, 0);
// let nowHours = now.getHours();
// let nowMinutes = now.getMinutes();
// let x = '21:19';
// let z = 0;
// for (i = 3; i < 5; i++) {
//     console.log(x[i]);
//     z = z + x[i];
// }
// console.log(z);
// let y = parseInt(z);
// console.log(y);


// let x = new Date().toLocaleTimeString();
// console.log(x);
// let z = 0;
// for (i = 0; i < 2; i++) {
//     console.log(x[i]);
//     z = z + x[i];
// }
// console.log(z);
// let y = parseInt(z);
// console.log(y);