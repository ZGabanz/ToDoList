const input = document.querySelector('#input');
const btnClear = document.querySelector('#btn');
const result = document.querySelector('#result');
const inp = document.getElementById("input");

inp.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        createLists(input.value)
        input.value = ''
    }
});

function createLists(text) {

    const li = document.createElement('li');
    li.setAttribute("type","checkbox");
    li.className = 'li';
    li.textContent = text;

    btnClear.addEventListener('click', (e) => {
        document.body.removeChild(li);
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('liLine');
    })

    document.body.appendChild(li);
}
