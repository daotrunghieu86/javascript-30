let form = document.querySelector('.formInput');
let input = document.querySelector('#input');
let tapas = document.querySelector('.tapas');

let arrayResult = JSON.parse(sessionStorage.getItem('arrayResult')) || [];


function submitForm(e) {
    e.preventDefault();
    const text = input.value;
    const item = {
        text: text,
        // short hand ES6: text,
        done: false,
    }
    arrayResult.push(item);
    listItem(arrayResult, tapas);

    // Because, the default conversion from an object to string is "[object Object]" So... 
    sessionStorage.setItem('arrayResult', JSON.stringify(arrayResult))
    // chứ không phải thế này. Làm thế này sẽ có value: [object Object]; 
    // sessionStorage.setItem('arrayResult', arrayResult)

    this.reset();
}

function listItem (arrayResult = [], tapas) {
    // console.log(arrayResult)
    tapas.innerHTML = arrayResult.map((plate, i) => {
      return  `<li>
      <input type='checkbox' data-item='${i}' id='item${i}' ${plate.done ? 'checked' : ''}>
      <lable for='item${i}'>${plate.text}</lable>
      </li>`;
    }).join('');
}

function toggleDone(e) {
    if (! e.target.matches('input')) return ;
    // skip this unless it's an input

    // console.log(e.target.getAttribute('data-item'));
    // console.log(e.target.dataset.item

    let el = e.target.dataset.item;
    arrayResult[el].done = !arrayResult[el].done;
    sessionStorage.setItem('arrayResult', JSON.stringify(arrayResult));
    listItem(arrayResult, tapas);
    
}

form.addEventListener('submit', submitForm);
tapas.addEventListener('click', toggleDone);

listItem(arrayResult, tapas);

