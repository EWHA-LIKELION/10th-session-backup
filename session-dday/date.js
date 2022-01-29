let now = new Date(); //현재 date
let start = new Date('2018-11-03'); //1일

let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 24 * 60 * 60) + 1); 
$('#love').text(day + '일 째');


let birthday = new Date('2022-11-03');
let timeDiff2 = birthday.getTime() - now.getTime();
let day2 = Math.floor(timeDiff2 / (1000 * 24 * 60 * 60) + 1);
$('#birthday').text(day2 + '일 남음');




let ms = start.getTime() + 999 * (1000*60*60*24); //1000일의 ms
let thousand = new Date(ms);
let thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
$('#thousand-date').text(thousandDate);

let timeDiff3 = thousand.getTime() - now.getTime();
let day3 = Math.floor(timeDiff3 /(1000*60*60*24)+1);
$('#thousand').text(day3 + '일 남음');


