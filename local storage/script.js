// localStorage.setItem('number',1);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();
window.addEventListener('DOMContentLoaded', function () {
    let chbx = document.getElementById('rememberMe'),
    change = document.querySelector('.change-form-btn'),
    form = document.getElementsByTagName('form')[0];
    if (localStorage.getItem('isChecked') === 'true') {
        chbx.checked = true;
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = '#2E8B57'
    }
    chbx.addEventListener('click', function () {
        localStorage.setItem('isChecked', true);
    });
    change.addEventListener('click',function(){
        localStorage.setItem('bg','changed')
        form.style.backgroundColor = '#2E8B57'
        
    });
    let person = {
        name:'Alex',
        age: '22',
        tech:['mobile','notebook']
    }
    let serializedPerson= JSON.stringify(person);
    localStorage.setItem('Alex', serializedPerson);
    console.log(JSON.parse(localStorage.getItem('Alex')))
})