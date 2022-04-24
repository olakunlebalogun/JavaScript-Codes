 const btn = document.querySelector('.btn');
  

// btn.addEventListener('click', () => {
//     addColor(1000,'.first', 'red')
//     .then( () => addColor(3000,'.second', 'blue'))
//     .then( () => addColor(2000,'.third', 'green'))
//     .catch((err) => console.log(err))
// })


btn.addEventListener('click', () => {
    addColor(1000,'.first', 'red')
    .then( () => {
        addColor(3000,'.second', 'blue')})
    .then( () => {
        addColor(2000,'.third', 'green')})
    .catch((err) => {
        console.log(err)})


})

function addColor(time,selector,color) {
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);
            
        } else {
            reject(`There is no such element: ' ${selector}'`)
        }

    })
}