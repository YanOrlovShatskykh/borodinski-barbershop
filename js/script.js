var link = document.querySelector('.login-link');
var popup = document.querySelector('.modal-login');
var overlay = document.querySelector('.modal-overlay');
var close = popup.querySelector('.modal-close');
var form = popup.querySelector('.login-form');
var mapLink = document.querySelector('.js-modal-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');
var login = form.querySelector('[name=login]');
var password = form.querySelector('[name=password]');
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch(err) {
  isStorageSupport = false;
}

link.addEventListener('click', (evt)=> {
	evt.preventDefault();
	popup.classList.add('modal-show');
  overlay.classList.add('modal-show');
  
  if(isStorageSupport) {
    if(storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();      
    }
  } else {
    login.focus();
  }
});

close.addEventListener('click', (evt)=> {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('modal-show');
});

overlay.addEventListener('click', (evt)=> {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  mapPopup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt)=> {
  if(evt.keyCode === 27) {    
    if(popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
      overlay.classList.remove('modal-show');
    }
  }
});

form.addEventListener('submit', (evt)=> {
  if(!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
    

  } else {
    if(isStorageSupport) {
      localStorage.setItem('login', login.value);
      
    }
  }
});

mapLink.addEventListener('click', (evt)=> {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
  overlay.classList.add('modal-show');
});

mapClose.addEventListener('click', (evt)=> {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
  overlay.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt)=> {
  if(evt.keyCode === 27) {    
    if(mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
      overlay.classList.remove('modal-show');
    }
  }
});