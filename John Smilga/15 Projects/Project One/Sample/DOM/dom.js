// let startItem = document.getElementsByTagName('ul')[0];
// let firstItem = startItem.lastChild;
// console.log(firstItem.textContent);

// let firstItem = document.getElementById('one');
// let itemContent = firstItem.innerHTML;
// firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>'


let newEl = document.createElement('li');
let newText = document.createTextNode('Quinoa');
newEl.appendChild(newText);

let position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);


let firstItem = document.getElementById('one');
let showTextContent = firstItem.textContent;
let showinnerText = firstItem.innerText;
console.log(showTextContent);
console.log(showinnerText); 

// var msg = '<p>textContent: ' + showTextContent + '<Ip>' ;
// msg += '<p>innerText: ' + showinnerText + '<Ip>';
// var el = document.getElementByid('scriptResults');
// el .innerHTML = msg;
// firstitem . textContent 'sourdough bread';

let msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showinnerText + '</p>';
// let el = document.getElementById('scriptResults');
// el.innerHTML = msg;
firstItem.textContent = 'sourdough bread';


const att = document.getElementById('two');
const ans = att.getAttribute('class');
console.log(ans);
att.setAttribute('class', 'complete');


const first = document.getElementById('one');
const clsList = first.classList;
console.log(clsList);
clsList.add('complete'); // to add a class style complete
clsList.remove('diff'); // to remove a class style diff
