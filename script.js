const input = document.querySelector('#input');
const btnClear = document.querySelector('#btnClear');
const result = document.querySelector('#result');

var inp = document.getElementById("input");
    inp.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            createElements(input.value)
            input.value = ''
        }
    });

function createElements(value) {
    console.log(value);

    const li = document.createElement('li');
    li.setAttribute("type","checkbox");
    li.className = 'li';
    li.textContent = value;

    btnClear.addEventListener('click', (e) => {
        document.body.removeChild(li);
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('liLine');
    })

    document.body.appendChild(li);
}
