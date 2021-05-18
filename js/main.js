'use strict';
(function() {
  var accordeon = document.querySelector('.accordeon');
  var accordeonButton = document.querySelector('.accordeon__button');
  if(accordeon) {
    document.addEventListener('click', function(evt) {
      if(evt.target.classList.contains('accordeon__button')) {
        evt.target.classList.toggle('accordeon__button--opened');
        evt.target.nextElementSibling.classList.toggle('accordeon__content--opened');
      }
    });
  };
})();

(function () {
  var header = document.querySelector('.header');


  var changeBackground = function () {
    if (window.pageYOffset >= 100) {
      header.classList.add('background');
    } else {
      header.classList.remove('background');
    }
  }

  window.addEventListener('scroll', changeBackground);

})();

//lazyload

  setTimeout(function() {
    lozad('.lazyload').observe();
    },0);


'use strict';
(function() {
  let yMap;
  const mapElement = document.querySelector('[data-map]');
  if (mapElement) {
      yMap = new YmapsInitializer(mapElement);
  }})();

'use strict';
(function() {
    let tel = document.querySelector('#tel');
    if (tel) {
        var phoneMask = IMask(
            document.getElementById('tel'), {
                mask: '+{7}(000)000-00-00'
            });
    }
})();

'use strict';
(function() {
    var openBtn = document.querySelector('.header__burger');
    var closeBtn = document.querySelector('.header__close');
    var nav = document.querySelector('.nav');

    var openMenu = function(evt) {
        evt.preventDefault();
        nav.classList.remove('nav--hidden');
        nav.classList.add('nav--show');
        openBtn.classList.add('header__burger--closed');
        closeBtn.classList.remove('header__close--closed');
    };

    var closeMenu = function(evt) {
        evt.preventDefault();
        nav.classList.add('nav--hidden');
        nav.classList.remove('nav--show');
        openBtn.classList.remove('header__burger--closed');
        closeBtn.classList.add('header__close--closed');
    };

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
})();

'use strict';
(function() {
  var popup = document.querySelector('.modal--fail');
  if (popup) {
    var ESC_KEYCODE = 27;
    var btnClose = document.querySelector('.modal--fail .modal__button-close');
    var modal = document.querySelector('.modal--fail');
    var overlay = document.querySelector('.modal--fail .modal__overlay');
    var modalContainer = document.querySelector('.modal--fail .modal__container');

    var closeModal = function() {
      modal.classList.add('modal--closed');
    };

    var escPressHandler = function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeModal();
      }
    };

    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', function(evt) {
      evt.stopPropagation();
    });
    document.addEventListener('keydown', escPressHandler);
  };
})();

'use strict';
(function() {
  var popup = document.querySelector('.modal--success');
  if (popup) {
    var ESC_KEYCODE = 27;
    var btnClose = document.querySelector('.modal--success .modal__button-close');
    var modal = document.querySelector('.modal--success');
    var overlay = document.querySelector('.modal--success .modal__overlay');
    var modalContainer = document.querySelector('.modal--success .modal__container');

    var closeModal = function() {
      modal.classList.add('modal--closed');
    };

    var escPressHandler = function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeModal();
      }
    };

    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', function(evt) {
      evt.stopPropagation();
    });
    document.addEventListener('keydown', escPressHandler);
  };
})();

document.addEventListener('DOMContentLoaded', () => {
    // const createDiv = function(elmnt, style, text)  {
    //     console.log(elmnt, style, text);
    //     let newElmnt = document.createElement(elmnt);
    //     newElmnt.classList.add(style);
    //     newElmnt.textContent = text;
    //     document.querySelector('.main').append(newElmnt);
    //     setTimeout(() => {
    //         newElmnt.remove();
    //         newElmnt = null;
    //     }, 2000);
    // };
    const forms = document.querySelectorAll('form');
    if(forms){
    const url = 'mail.php';

    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    document.querySelector('.modal--success').classList.remove('modal--closed');
                    form.reset(); // очищаем поля формы 
                })
                .catch((err) => document.querySelector('.modal--fail').classList.remove('modal--closed'));
        });
    });
}

});


 'use strict';
 (function() {
  
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1370: {
          slidesPerView: 4,
          spaceBetween: 23,
        },
      }
    });
  
 })();


var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");
if(tabNavs){

  for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      };
    });
  }
}
