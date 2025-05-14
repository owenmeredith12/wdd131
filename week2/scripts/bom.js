const input = document.querySelector('#favchap');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {


        li.textContent = input.value;
        deleteButton.textContent = 'x';
        li.append(deleteButton);
        list.append(li);
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
    input.focus();
});