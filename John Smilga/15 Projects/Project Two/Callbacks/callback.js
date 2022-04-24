console.log("We have successfully done the request");

// Callbacks

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

/**
 * What we intend to do is to make the first heaiding red,
 * then  the second heading blue, then the third heading green.
 */

// Using the code below, we they color changes but are not actually
// depending on the first heading.

// btn.addEventListener('click', () => {
//     setTimeout(() =>{
//         first.style.color = "red";
//     }, 1000);
//      setTimeout(() =>{
//         second.style.color = "blue";
//     }, 3000); setTimeout(() =>{
//         third.style.color = "green";
//     }, 2000);
// })


btn.addEventListener('click', () => {
    setTimeout(() =>{
        first.style.color = "red";
        setTimeout(() =>{
            second.style.color = "blue";
            setTimeout(() =>{
            third.style.color = "green";
            }, 2000);
        }, 3000);
    }, 1000);
      
})