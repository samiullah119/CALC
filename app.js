const buttons = document.querySelectorAll('.button');
const field =  document.querySelector('[name=field]');
buttons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault()
    field.value = e.target.value;
     let f = field.value.trim()? field.value.trim().split("") : [];
     f.push(e.target.value);
     field.value = f.join()
}))