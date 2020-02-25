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