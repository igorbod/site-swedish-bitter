'use strict';

let compositionItem = document.querySelectorAll('.composition__item'),
    compositionItemHover = document.querySelectorAll('.composition__item-hover');

// for section Composition
compositionItem.forEach(function(item, i) {
  item.addEventListener('mouseenter', function () {
    compositionItemHover[i].style.opacity = ".80";
    item.style.cursor = "pointer";
  });

  item.addEventListener('mouseleave', function () {
    compositionItemHover[i].style.opacity = "0";
  });
});


$(function() {
  $('.symptoms__tabs-wrapper .tab').on('click', function (event) {
    let id = $(this).attr('data-id');
    $('.symptoms__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.symptoms__tabs-wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
});

