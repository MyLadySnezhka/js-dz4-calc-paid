const buttonlink = document.querySelector('.number-button');

const butlink1 = document.querySelector('button[name="but1"]');
const butlink2 = document.querySelector('button[name="but2"]');
const butlink3 = document.querySelector('button[name="but3"]');
const butlink4 = document.querySelector('button[name="but4"]');
const butlink5 = document.querySelector('button[name="but5"]');
const butlink6 = document.querySelector('button[name="but6"]');
const butlink7 = document.querySelector('button[name="but7"]');
const butlink8 = document.querySelector('button[name="but8"]');
const butlink9 = document.querySelector('button[name="but9"]');
const butlink0 = document.querySelector('button[name="but0"]');
const butlinkpl = document.querySelector('button[name="butplus"]');
const butlinkeq = document.querySelector('button[name="buteq"]');

const ekranlink = document.querySelector('.ekran');

//const primlink = document.querySelector('input[name="primer"]');


const enternum = (butlink) => {
butlink.addEventListener('click', (ev) => {
    ekranlink.innerHTML = ev.target.innerHTML;
})
}

enternum(butlink1);
enternum(butlink2);
enternum(butlink3);
enternum(butlink4);
enternum(butlink5);
enternum(butlink6);
enternum(butlink7);
enternum(butlink8);
enternum(butlink9);
enternum(butlink0);
enternum(butlinkpl);
enternum(butlinkeq);

/*

butlink2.addEventListener('click', (ev) => {
    ekranlink.innerHTML = ev.target.innerHTML;
})

butlink3.addEventListener('click', (ev) => {
    ekranlink.innerHTML = ev.target.innerHTML;
})

butlink4.addEventListener('click', (ev) => {
    ekranlink.innerHTML = ev.target.innerHTML;
})

*/



/*

butlink1.addEventListener('click', () => {
    primlink.value = butlink1.innerHTML;
})


primlink.addEventListener('change', () => {
    primlink.value = '100';
})

*/


/*
const btnclick = () => {
    let num = buttonlink.innerHTML;
    ekranlink.innerHTML = num;
};
*/