
//Выпадающее меню
document.querySelector('.region-user').addEventListener('click', goo);

function goo(){
    document.querySelector('.select-menu').classList.toggle('active')
}

 // Если событие клик произошло не по region-user, то удалить класс active у. select-menu
document.addEventListener('click', hide);
function hide(event){
    if(!event.target.closest('.region-user')){
        let menu = document.querySelector('.select-menu');
        menu.classList.remove('active')
    }
}




// Гамбургер
document.querySelector('.burger-wrapper').onclick = togle;
function togle(){
    document.querySelector('.polosa').classList.toggle('polosa-active'); // анимация крестика
    document.querySelector('.mob-menu').classList.toggle('active'); // выдвижение меню
}


document.querySelector('.mob-menu').onclick = togle2; // для задвижения меню по клику на него и анимация крестика
function togle2(){
   let menu =  document.querySelector('.mob-menu');
    if(menu.classList.contains('active')){
       menu.classList.remove('active')
    }
    document.querySelector('.polosa').classList.toggle('polosa-active'); // анимация крестика
}

//---------------------------------------------------------------------------------------------------------------
$(document).ready (function(){ // инициализация jquary
    $('.slider').slick({          // включаем слайдер
        arrows:true,              // стрелки
        dots:false,                // точки
        adaptiveHeight:true,      // подстраивает высоту слайда под картинку (slick-track - нужн одобавить свойство align-items:flex-start)
        slidesToShow: 3,          // количество показуемых слайдов
        slidesToScroll: 1,        // количество прокручиваемых слайдов
        speed: 700,               // скорость пролистывания слайдов
        easing: 'easeOutBack',    // тип анимации прокрутки
        infinite:true,            // определение бесконечной прокрутки
        initialSlide: 0,          // номер стартового слайда
        autoplay: true,           // автоматическая прокрутка слайдов
        autoplaySpeed:2000,       // скорость автоматического пролистывания
        pauseOnFocus:false,       // остановить слайдер при нажатии мыши
        pauseOnHover:false,       // остановить слайдер при наведении мыши
        pauseOnDotsHover:false,   // остановить слайдер при наведении на точки
        draggable:true,          // запрещает слайдить мышкой
        swipe:true,               // запрещает свайпать на тач скрине
        touchTreshold:5,          // расстояния просвайпивания пальцем для переключения
        touchMove:true,           // позволяет/запрещает плавно перелистывать при зажатой картинке 
        waitForAnimate:true,      // перелистываем слайдер не дожидаясь окончания анимации
        centerMode:false,          // центральный слайд становиться по центру екрана
        variableWidth: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2
                }
            }, {
                breakpoint: 480,
                settings:{
                    slidesToShow:1
                }
            }
        ]

    });


})