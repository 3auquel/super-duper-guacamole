window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function tabSwitcher(tabClass, infoClass, tabContentClass) {


        let tab = document.querySelectorAll(`.${tabClass}`),
            info = document.querySelector(`.${infoClass}`),
            tabContent = document.querySelectorAll(`.${tabContentClass}`);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        hideTabContent(1);

        info.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.classList.contains(tabClass)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    };

    //timer
    let deadline = '2024-10-01';
   

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
           
        
       let seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    // days = Math.floor((t/1000/60/60)%24); расчет для количества дней

        return {
            "total": t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function zero(n) {
                if (n < 9) {
                    return '0' + n;
                } else return n;
            };
            hours.textContent = zero(t.hours);
            minutes.textContent = zero(t.minutes);
            seconds.textContent = zero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00',
                    minutes.textContent = '00',
                    seconds.textContent = '00';
                    
            }
        }


    }
    
    tabSwitcher(`info-header-tab`, `info-header`, `info-tabcontent`);
    setClock('timer', deadline);

    //modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descBtns = document.getElementsByClassName('description-btn');
       
       
        function showOverlay() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }




        more.addEventListener('click', showOverlay);
        for (let i = 0; i < descBtns.length; i++) {
            descBtns[i].addEventListener('click', showOverlay);
        }
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow= '';
        });

       //form
       let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failute: 'Что-то пошло не так...'
       };
       let form = document.querySelector('.main-form'),
       input = form.getElementsByTagName('input'),
       statusMsg = document.createElement('div');
       statusMsg.classList.add('status');
       form.addEventListener('submit', function(e){
        e.preventDefault();
        form.appendChild(statusMsg);
        let request = new XMLHttpRequest();
        request.open('POST','server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let formData = new FormData(form);
        request.send(formData);
       });
       

        
      
});