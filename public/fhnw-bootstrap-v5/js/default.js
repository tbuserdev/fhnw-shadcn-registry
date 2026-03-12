/**
 * FHNW BOOTSTRAP STYLEGUIDE V5
 * Author: Roland von Aesch
 * Teamweb
 */

console.log(
  '%cFACHHOCHSCHULE NORDWESTSCHWEIZ - BOOTSTRAP STYLEGUIDE V5 \uD83D\uDE00',
  'color:white; font-weight:bold; background-color:black;padding:2px 5px;'
);

// BACK-TO-TOP
var back_to_top_button = [
  '<a href="#top" title="Back-To-Top" class="back-to-top"></a>',
].join('');
$('body').append(back_to_top_button);

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').css({
        opacity: 0.4,
      });
    } else {
      $('.back-to-top').css({
        opacity: 0,
      });
    }
  });

  $('.back-to-top').click(function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

$('select').select2({
  theme: 'bootstrap-5',
  placeholder: 'Choose an option',
  closeOnSelect: true,
  allowClear: true,
  width: $(this).data('width')
    ? $(this).data('width')
    : $(this).hasClass('w-100')
    ? '100%'
    : 'style',
});

// SELECT2
$('#single-select-field').select2({
  theme: 'bootstrap-5',
  closeOnSelect: true,
  placeholder: 'Lorem ipsum',
  selectionCssClass: 'select2--small',
  dropdownCssClass: 'select2--small',
});

$('#id_label_small').select2({
  theme: 'bootstrap-5',
  selectionCssClass: 'select2--small',
  dropdownCssClass: 'select2--small',
});

$('#example').select2({
  theme: 'bootstrap-5',
  width: $(this).data('width')
    ? $(this).data('width')
    : $(this).hasClass('w-100')
    ? '100%'
    : 'style',
});

$('#example_2').select2({
  theme: 'bootstrap-5',
  placeholder: 'Bitte wählen Sie eine Option',
  allowClear: true,
  selectionCssClass: 'select2--small',
  dropdownCssClass: 'select2--small',
});

$('#prepend-text-single-field').select2({
  theme: 'bootstrap-5',
  placeholder: 'Bitte wählen Sie eine Option',
  allowClear: true,
  selectionCssClass: 'select2--small',
  dropdownCssClass: 'select2--small',
});

// FORM
$('#resetForm').on('click', () => {
  $('.form-select').val(null).trigger('change');
  $('form').removeClass('was-validated');
});

// Form submit - demo
$('#standard-form-submit').on('click', function (event) {
  event.preventDefault();
  console.log('form submitted');
});

(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// PAAS - OPEN SEARCH
$('.search-button').click(function () {
  $('.paas.search-overlay').addClass('active');
  $('body').css('overflow', 'hidden');
});

// PAAS - SUBMIT FORM
$('#search-submit').on('click', function () {
  $('form.search-form').submit();
});

// PAAS - CLOSE SEARCH
$('.paas.search-overlay span.close-search').click(function () {
  $('.paas.search-overlay').removeClass('active');
  $('body').css('overflow-y', 'scroll');
});

// PAAS - OVERLAY SHOW ENTER ICON ON KEYPRESS
$('.search-box-wrapper input#5d7f4eb39af7d').on('keyup', function () {
  $('.enter-icon').css('display', 'flex');
  var inputValue = $('#5d7f4eb39af7d').val();
  var inputLength = inputValue.length;
  if (inputLength === 0) {
    $('.enter-icon').css('display', 'none');
  }
});

// PAAS NAVIGATION PARENT HOVER COLOR
$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');

  $(this)
    .parents('li.nav-item.dropdown.show')
    .on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass('show');
    });

  return false;
});

$('button::after').click(function () {
  if ($(this).css('transform') == 'transform: rotate(45deg);') {
    $(this).css('transform', 'rotate(45deg)');
  } else {
    $(this).css('transform', '');
  }
});

if ($(window).width() >= 992) {
  $('.paas #navbarTogglerDemo03 .dropdown').hover(
    function () {
      $('>.dropdown-menu', this).stop(true, true).fadeIn('fast');
      $(this).addClass('open');
    },
    function () {
      $('>.dropdown-menu', this).stop(true, true).fadeOut('fast');
      $(this).removeClass('open');
    }
  );
}

// ENABLE POPOVERS

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// TOOLTIP
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// MODAL
$(document).ready(function () {
  $('#exampleModal').modal('show');
});
