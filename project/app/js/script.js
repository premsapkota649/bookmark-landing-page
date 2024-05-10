const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#header');

btnHamburger.addEventListener('click', function(){
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open')
    }
    else{
        btnHamburger.classList.add('open')
    }
} );

overlay.addEventListener('click', function(){
    if(overlay.classList.contains('overlay')){
        overlay.classList.remove('overlay');
    }
    else{
        overlay.classList.add('overlay')
    }
})