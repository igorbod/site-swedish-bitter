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
  $('.symptoms__tabs-wrapper .tab, .reviews-tab__item').on('click', function (event) {
    let id = $(this).attr('data-id');
    $('.symptoms__tabs-wrapper, .reviews-tabs__wrapper').find('.tab-item, .reviews__tab-item').removeClass('active-tab').hide();
    $('.symptoms__tabs-wrapper .tabs, .reviews-tabs').find('.tab, .reviews-tab__item').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
});

