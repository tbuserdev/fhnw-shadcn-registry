// COOKIE CONSENT
(function () {
  'use strict';

  var cDomain = '.fhnw.ch'; // change this to your domain, if your page is not a fhnw.ch subdomain
  var hostname = window.location.hostname;
  var cookieName = 'cookieconsent';
  var cookieAlert = document.querySelector('.cookiealert');
  var acceptCookies = document.querySelector('.acceptcookies');

  if (hostname !== cDomain) {
    cDomain = hostname;
  } else {
    cDomain = 'localhost';
  }

  if (!cookieAlert) {
    return;
  }

  cookieAlert.offsetHeight;

  if (!getCookie(cookieName)) {
    cookieAlert.classList.add('show');
  } else {
    $('.cookiealert').attr('aria-hidden', true);
  }

  acceptCookies.addEventListener('click', function () {
    setCookie(cookieName, true, cDomain);
    cookieAlert.classList.remove('show');
    window.dispatchEvent(new Event('acceptCookies'));
  });

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie =
      cname + '=' + cvalue + ';' + expires + ';path=/;domain=' + cDomain;
  }

  function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = document.cookie;
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
})();
