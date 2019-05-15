// 画面の準備ができたら
$(function() {

  $('.picture').click(function() {

    $('.container').after('<div id="over"></div>');
    
    // $('<div id="over"></div>').appendTo($('.container')).hide().fadeIn('slow');

    let imageSrc = $(this).attr('src');

    $('#over').load('./lightbox.html .img-box', function() {

      $('.img-box').hide().fadeIn();

      $('.lightbox').attr('src', imageSrc);


      $('.close').click(function() {
        $('#over').fadeOut('slow', function() {
          $('#over').remove();
        })
      })
    })

  });

});