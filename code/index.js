var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'mYetREFwf9w',
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: 'mYetREFwf9w'
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      player.playVideo(); // Запустити відео знову після закінчення
    }
  }


document.addEventListener('DOMContentLoaded', () => {

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector(".header").style.height = "90px";
        document.querySelector(".header").style.top = "0";
        document.querySelector(".header").style.boxShadow = '0px 0px 15px rgb(0 0 0 / 50%)';
        document.querySelector(".header").style.background = 'rgba(32, 27, 51, 90%)';
        document.querySelector(".header").style.transition = '0.1s';
    } else {
        document.querySelector(".header").style.height = "";
        document.querySelector(".header").style.top = "30px";
        document.querySelector(".header").style.boxShadow = '';
        document.querySelector(".header").style.background = '';
        document.querySelector(".header").style.transition = '0.1s';

    }
}


  // $(document).ready(function(){
  //   $('.slider').slick({
  //     arrows:true,
  //     dots:true,
  //     slidesToShow:3,
  //     autoplay:true,
  //     speed:2000,
  //     autoplaySpeed:2000,
  //     responsive:[
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow:2
  //         }
  //       },
  //       {
  //         breakpoint: 550,
  //         settings: {
  //           slidesToShow:1
  //         }
  //       }
  //     ]
  //   });
  // });


    // Получаем все элементы слайдера
var slider = document.querySelector('.itcss__items');
var slides = slider.querySelectorAll('.itcss__item');
var prevButton = document.querySelector('.itcss__control_prev');
var nextButton = document.querySelector('.itcss__control_next');
var slideIndex = 0;

// Устанавливаем начальный индекс слайда
showSlide(slideIndex);

// Функция для отображения выбранного слайда
function showSlide(index) {
  // Скрываем все слайды
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Показываем выбранный слайд
  slides[index].style.display = 'block';
}

// Обработчик события для кнопки "Предыдущий слайд"
prevButton.addEventListener('click', function(e) {
  e.preventDefault();
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

// Обработчик события для кнопки "Следующий слайд"
nextButton.addEventListener('click', function(e) {
  e.preventDefault();
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// Автоматическое переключение слайдов каждые 2 секунды
function startSlider() {
  setTimeout(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    startSlider(); // Рекурсивно вызываем функцию для продолжения автоматического переключения
  }, 6000);
}

startSlider(); // Запускаем автоматическое переключение 

// Получаем все миниатюры слайдов
var thumbnails = document.querySelectorAll('.itcss__thumbnail');

// Обработчик события для клика по миниатюре слайда

// Обработчик события для клика по миниатюре слайда
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function(e) {
    e.preventDefault();
    // Получаем индекс миниатюры слайда
    var thumbnailIndex = Array.prototype.indexOf.call(thumbnails, e.currentTarget);
    // Отображаем соответствующий слайд
    showSlide(thumbnailIndex);
    slideIndex = thumbnailIndex; // Обновляем значение текущего индекса слайда
  });
}
// Получаем все миниатюры слайдов
var thumbnails = Array.from(document.querySelectorAll('.itcss__thumbnail'));

// Обработчик события для клика по миниатюре слайда
thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function(e) {
    e.preventDefault();
    // Отображаем соответствующий слайд
    showSlide(index);
    slideIndex = index; // Обновляем значение текущего индекса слайда
  });
});

// Найдите контейнер миниатюр
var thumbnailsContainer = document.getElementById('thumbnails-container');

// Создайте функцию для добавления миниатюры
function addThumbnail(imageUrl) {
  // Создайте элемент миниатюры
  var thumbnailElement = document.createElement('div');
  thumbnailElement.classList.add('itcss__thumbnail');

  // Создайте элемент изображения миниатюры
  var thumbnailImage = document.createElement('img');
  thumbnailImage.src = imageUrl;
  thumbnailImage.alt = '';

  // Добавьте изображение миниатюры в элемент миниатюры
  thumbnailElement.appendChild(thumbnailImage);

  // Добавьте элемент миниатюры в контейнер миниатюр
  thumbnailsContainer.appendChild(thumbnailElement);
}

// Получите все фото из слайдера
var slides = document.querySelectorAll('.itcss__item');
slides.forEach(function(slide) {
  // Получите URL изображения слайда
  var imageUrl = slide.querySelector('img').src;

  // Добавьте миниатюру для каждого фото
  addThumbnail(imageUrl);
});
// Получаем все миниатюры слайдов
var thumbnails = Array.from(document.querySelectorAll('.itcss__thumbnail'));

// Обработчик события для клика по миниатюре слайда
thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function(e) {
    e.preventDefault();
    // Отображаем соответствующий слайд
    showSlide(index);
    slideIndex = index; // Обновляем значение текущего индекса слайда
  });
});


const btnJoin = document.querySelector('.btn-join');
const btnFirstScreen = document.querySelector('.btn-first-screen')
const modalForm = document.querySelector('.modal-form');
const modal = document.querySelector('.modal');
const formJoin = document.querySelector('.form-join');
const formJoinInput = document.querySelector('.form-join-input')

btnJoin.addEventListener('click', () => {
  modalForm.style.display = "block"
})
btnFirstScreen.addEventListener('click', () => {
  modalForm.style.display = "block"
})
modalForm.addEventListener('click', (event) => {
  if (!modal.contains(event.target) || event.target === formJoin) {
    modalForm.style.display = "none";
  }
});

formJoin.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const teamInput = document.getElementById('team');
  const tariffInput = document.getElementById('tariff').value;


  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();
  const teamValue = teamInput.value.trim();

  let isValid = true; // Змінна для відстеження успішності валідації

  if (nameValue === '') {
    setErrorFor(nameInput, "Введіть своє ім'я");
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (phoneValue === '') {
    setErrorFor(phoneInput, 'Введіть свій телефон');
    isValid = false;
  } else if (!validatePhone(phoneValue)) {
    setErrorFor(phoneInput, 'Введіть коректний номер телефону');
    isValid = false;
  } else {
    setSuccessFor(phoneInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'Введіть свою електронну пошту');
    isValid = false;
  } else if (!validateEmail(emailValue)) {
    setErrorFor(emailInput, 'Введіть коректну електронну пошту');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }

  if (teamValue === '') {
    setErrorFor(teamInput, 'Введіть кількість людей');
    isValid = false;
  } else {
    setSuccessFor(teamInput);
  }

  // Перевірка, чи всі поля форми мають успішний стан
  if (isValid) {
    // Створення об'єкта з даними форми
    const formData = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      team: teamValue,
      tariff: tariffInput
    };
console.log(formData)
    // Виклик функції для відправки даних на сервер
  //  sendFormJoinToServer(formData);

    // Очищення форми
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    teamInput.value = '';

    // Очищення блоків помилок
    setSuccessFor(nameInput);
    setSuccessFor(phoneInput);
    setSuccessFor(emailInput);
    setSuccessFor(teamInput);

    console.log('Дані форми "formJoin" відправлено на сервер');
  }
});

// Функція для відправки даних форми на сервер
// function sendFormJoinToServer(formData) {
//   // Ваш код для відправки даних форми на сервер
//   // Можна використовувати AJAX, Fetch або інші методи
// }

// Функції валідації і відображення помилок


function setErrorFor(input, message) {
  const formGroup = input.closest('.form-join-input-item');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = message;
  formGroup.classList.add('error');
}

function setSuccessFor(input) {
  const formGroup = input.closest('.form-join-input-item');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = '';
  formGroup.classList.remove('error');
}

function validatePhone(phone) {
  const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


const form = document.querySelector('.form');

    // Додаємо обробник події для подання форми
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо стандартну поведінку форми (наприклад, перезавантаження сторінки)

        // Отримуємо значення полів форми
        const nameInput = document.getElementById('name-call');
        const phoneInput = document.getElementById('phone-call');
        const emailInput = document.getElementById('email-call');

        // Отримуємо посилання на блоки помилок
        const nameError = document.getElementById('name-error');
        const phoneError = document.getElementById('phone-error');
        const emailError = document.getElementById('email-error');

        // Виконуємо валідацію для кожного поля

        // Валідація імені
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Введіть своє ім\'я';
        } else {
            nameError.textContent = '';
        }

        // Валідація телефону
        const phonePattern = /^\+?3?8?(0\d{9})$/; // Патерн для перевірки формату телефонного номера
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Введіть коректний номер телефону';
        } else {
            phoneError.textContent = '';
        }
     
        // Валідація електронної пошти
        const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // Патерн для перевірки формату електронної пошти
        if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Введіть коректну електронну пошту';
        } else {
        emailError.textContent = '';
        }
    // Перевірка чи всі поля пройшли валідацію
    if (nameError.textContent === '' && phoneError.textContent === '' && emailError.textContent === '') {
      // Створення об'єкта з введеними даними
      const formData = {
          name: nameInput.value,
          phone: phoneInput.value,
          email: emailInput.value
      };
console.log(formData)
      // Відправлення даних на сервер (розкоментуйте реальний код для відправки на сервер)
      // sendFormData(formData);

      // Очищення форми після відправки
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';

      // Очищення блоків помилок
      nameError.textContent = '';
      phoneError.textContent = '';
      emailError.textContent = '';
  }
});

// Функція для відправлення даних на сервер
// function sendFormData(formData) {
//   // Ваш код для відправки даних на сервер
//   // Можна використовувати AJAX, Fetch або інші методи
// }


// const btnJoin = document.querySelector('.btn-join');
// const btnFirstScreen = document.querySelector('.btn-first-screen')
// const modalForm = document.querySelector('.modal-form');
// const modal = document.querySelector('.modal');
// const formJoin = document.querySelector('.form-join');
// const formJoinInput = document.querySelector('.form-join-input')
// btnJoin.addEventListener('click', () => {
//   modalForm.style.display = "block"
// })
// btnFirstScreen.addEventListener('click', () => {
//   modalForm.style.display = "block"
// })
// modalForm.addEventListener('click', (event) => {
//   if (!modal.contains(event.target) || event.target === formJoin) {
//     modalForm.style.display = "none";
//   }
// });




// formJoin.addEventListener('submit', (e) => {
//   e.preventDefault();

  
//   const nameInput = document.getElementById('name');
//   const phoneInput = document.getElementById('phone');
//   const emailInput = document.getElementById('email');
//   const teamInput = document.getElementById('team');

//   const nameValue = nameInput.value.trim();
//   const phoneValue = phoneInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const teamValue = teamInput.value.trim();

//   if (nameValue === '') {
//     setErrorFor(nameInput, "Введіть своє ім'я");
//   } else {
//     setSuccessFor(nameInput);
//   }

//   if (phoneValue === '') {
//     setErrorFor(phoneInput, 'Введіть свій телефон');
//   } else if (!validatePhone(phoneValue)) {
//     setErrorFor(phoneInput, 'Введіть коректний номер телефону');
//   } else {
//     setSuccessFor(phoneInput);
//   }

//   if (emailValue === '') {
//     setErrorFor(emailInput, 'Введіть свою електронну пошту');
//   } else if (!validateEmail(emailValue)) {
//     setErrorFor(emailInput, 'Введіть коректну електронну пошту');
//   } else {
//     setSuccessFor(emailInput);
//   }

//   if (teamValue === '') {
//     setErrorFor(teamInput, 'Введіть кількість людей');
//   } else {
//     setSuccessFor(teamInput);
//   }

// });

// formCall.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const validate = (value, pattern) => pattern.test(value);

//   const nameCallInput = document.getElementById('name-call');
//   const phoneCallInput = document.getElementById('phone-call');
//   const emailCallInput = document.getElementById('email-call');

//   const nameCallValue = nameCallInput.value.trim();
//   const phoneCallValue = phoneCallInput.value.trim();
//   const emailCallValue = emailCallInput.value.trim();

//   if (nameCallValue === '') {
//     setErrorFor(nameCallInput, "Введіть своє ім'я");
//   } else {
//     setSuccessFor(nameCallInput);
//   }

//   if (phoneCallValue === '') {
//     setErrorFor(phoneCallInput, 'Введіть свій телефон');
//   } else if (!validatePhone(phoneCallValue)) {
//     setErrorFor(phoneCallInput, 'Введіть коректний номер телефону');
//   } else {
//     setSuccessFor(phoneCallInput);
//   }

//   if (emailCallValue === '') {
//     setErrorFor(emailCallInput, 'Введіть свою електронну пошту');
//   } else if (!validateEmail(emailCallValue)) {
//     setErrorFor(emailCallInput, 'Введіть коректну електронну пошту');
//   } else {
//     setSuccessFor(emailCallInput);
//   }
// });

// // Функції валідації і відображення помилок


// function setErrorFor(input, message) {
//   const formGroup = input.closest('.form-join-input-item');
//   const errorDiv = formGroup.querySelector('.error');
//   errorDiv.innerText = message;
//   formGroup.classList.add('error');
// }

// function setSuccessFor(input) {
//   const formGroup = input.closest('.form-join-input-item');
//   const errorDiv = formGroup.querySelector('.error');
//   errorDiv.innerText = '';
//   formGroup.classList.remove('error');
// }

// function validatePhone(phone) {
//   const phoneRegex = /^\+380\d{9}$/;
//     return phoneRegex.test(phone);
// }

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }






// const inputTel = document.getElementById('phone');
// const btnFormJoin = document.querySelector('.btn-form-join')
// patternTel = /0\d{2}-\d{3}-\d{2}-\d{2}/;


// btnFormJoin.onclick = function(){ 
//   if(patternTel.test(inputTel.value)){
//       inputTel.style.border = "1px solid green";
//       inputTel.style.backgroundColor = "rgb(148, 243, 148)"
//       error.innerText = "";
//   } else{
//     const error = document.querySelectorAll('.error')
//       error.innerText = "Не вірно введений номер";
//       inputTel.style.border = "1px solid red";
//       console.log(error)
//   }
// }




// var container = document.querySelector(".robot-container");
//         var images = document.getElementsByClassName("robot-image");
//         var currentIndex = 0;
//         var imageWidth = 30; // Зсув зображення вправо

//         function toggleVisibility() {
//             var currentImage = images[currentIndex];
//             var nextIndex = (currentIndex + 1) % images.length;
//             var nextImage = images[nextIndex];

//             currentImage.style.opacity = 0;
//             currentImage.style.transform = "translateX(" + imageWidth + "px)";

//             setTimeout(function() {
//                 currentImage.style.display = "none";
//                 nextImage.style.display = "block";
//                 nextImage.style.opacity = 1;
//                 nextImage.style.transform = "translateX(0)";
//             }, 700);

//             currentIndex = nextIndex;
//         }

//         setInterval(toggleVisibility, 700);


// const form = document.querySelector('.form');
// const nameInputCall = document.getElementById('name-call');
// const phoneInputCall = document.getElementById('phone-call');
// const emailInputCall = document.getElementById('email-call');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Перед виконанням перезавантаження сторінки блокуємо його

//   // Викликаємо функцію валідації для кожного поля
//   const isNameValid = validateName();
//   const isPhoneValid = validatePhone();
//   const isEmailValid = validateEmail();

//   // Перевіряємо, чи всі поля валідні
//   if (isNameValid && isPhoneValid && isEmailValid) {
//     // Всі поля валідні, можна відправляти форму
//     form.submit();
//   }
// });

// function validateName() {
//   const nameValueCall = nameInputCall.value.trim();
//   const errorDiv = nameInputCall.nextElementSibling;

//   if (nameValueCall === '') {
//     errorDiv.textContent = 'Введіть своє ім\'я';
//     return false;
//   }

//   errorDiv.textContent = '';
//   return true;
// }

// function validatePhone() {
//   const phoneValueCall = phoneInputCall.value.trim();
//   const errorDiv = phoneInputCall.nextElementSibling;

//   const phoneRegex = /^\+380\d{9}$/;
//   if (phoneValueCall === '') {
//     errorDiv.textContent = 'Введіть номер телефону';
//     return false;
//   } else if (!phoneRegex.test(phoneValueCall)) {
//     errorDiv.textContent = 'Введіть коректний номер телефону';
//     return false;
//   }

//   errorDiv.textContent = '';
//   return true;
// }

// function validateEmail() {
//   const emailValueCall = emailInputCall.value.trim();
//   const errorDiv = emailInputCall.nextElementSibling;

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   if (emailValueCall === '') {
//     errorDiv.textContent = 'Введіть свою електронну пошту';
//     return false;
//   } else if (!emailRegex.test(emailValueCall)) {
//     errorDiv.textContent = 'Введіть коректну електронну пошту';
//     return false;
//   }

//   errorDiv.textContent = '';
//   return true;
// }


// const inputTel = document.getElementById('phone');
// const btnFormJoin = document.querySelector('.btn-form-join')
// patternTel = /0\d{2}-\d{3}-\d{2}-\d{2}/;


// btnFormJoin.onclick = function(){ 
//   if(patternTel.test(inputTel.value)){
//       inputTel.style.border = "1px solid green";
//       inputTel.style.backgroundColor = "rgb(148, 243, 148)"
//       error.innerText = "";
//   } else{
//     const error = document.querySelectorAll('.error')
//       error.innerText = "Не вірно введений номер";
//       inputTel.style.border = "1px solid red";
//       console.log(error)
//   }
// }




// var container = document.querySelector(".robot-container");
//         var images = document.getElementsByClassName("robot-image");
//         var currentIndex = 0;
//         var imageWidth = 30; // Зсув зображення вправо

//         function toggleVisibility() {
//             var currentImage = images[currentIndex];
//             var nextIndex = (currentIndex + 1) % images.length;
//             var nextImage = images[nextIndex];

//             currentImage.style.opacity = 0;
//             currentImage.style.transform = "translateX(" + imageWidth + "px)";

//             setTimeout(function() {
//                 currentImage.style.display = "none";
//                 nextImage.style.display = "block";
//                 nextImage.style.opacity = 1;
//                 nextImage.style.transform = "translateX(0)";
//             }, 700);

//             currentIndex = nextIndex;
//         }

//         setInterval(toggleVisibility, 700);



})