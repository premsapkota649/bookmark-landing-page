const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#header');
const imgChange = document.querySelector('.logo_image');

btnHamburger.addEventListener('click', menuToggle );



function menuToggle(){
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open')
    }
    else{
        btnHamburger.classList.add('open')
    }

    if(overlay.classList.contains('overlay')){
        overlay.classList.remove('overlay');

    }
    else{
        overlay.classList.add('overlay')
    }
}

function imageChange(){
    if(btnHamburger.classList.contains('open')){
        imgChange.src ="images/logo-bookmark.svg";
    }
    else{
        imgChange.src ="images/logo-bookmark-light.svg";
    }
}