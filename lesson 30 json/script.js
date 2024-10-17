let inptutRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
inptutRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass );
    request.open('GET','curent.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200) { 
            let data = JSON.parse(request.response);

            inputUsd.value = (inptutRub.value/ data.usd).toFixed(2);
        } else{
            inputUsd.value = "что то пошло не так!";
        }
    })
})