let menu = document.querySelector('.menu-icons');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('open-menu');
  menu.classList.toggle('move');
};

window.onscroll = () => {
  navbar.classList.remove('open-menu');
  menu.classList.remove('move');
};

// // Swiper certificate
// var swiper = new Swiper('.certificate-content', {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// Email JS

function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function sendmail(name, email, msg) {
  emailjs.send('service_7lye0wj', 'template_vjw2hk3', {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

//Sweet Alert

function emptyerror() {
  swal({
    title: 'Oh No...',
    text: 'Fields cannot be empty!',
    icon: 'error',
  });
}
function success() {
  swal({
    title: 'Email is sent successfully.',
    text: 'I try to reply in 24 hours.',
    icon: 'success',
  });
}

// Header Background Change on Scroll

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll Top

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY > 400);
});

//changes
document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('#typed', {
    strings: ["Performance-driven student", "Web Developer", "MERN Stack Enthusiast"],
    typeSpeed: 100,
    loop: true
  });
});
