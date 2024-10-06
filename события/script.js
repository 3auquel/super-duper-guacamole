let btn = document.querySelectorAll('button'),
wrap = document.querySelector('.wrapper'),
link = document.querySelector('a');
// btn[0].onclick = function(){
//     alert("Вы нажали первую кнопку");
// }
// btn[0].onclick = function(){
//     alert("Вы опять нажали первую кнопку");
// }
// btn[0].addEventListener('click', function(event){
//     // console.log(event);
//     // let target= event.target;
//     // target.style.display = 'none';

//     console.log('произошло событие ' + event.type + ' На элементе' + event.target);
// });
wrap.addEventListener('click', function(){
    console.log('произошло событие ' + event.type + ' На элементе' + event.target);

})
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('произошло событие ' + event.type + ' На элементе' + event.target);
})
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('leave')
    })
})
// btn[0].addEventListener('mouseenter', function(){
//     alert('Вы навели на первую кнопку');
// })
