$(function () {
  $('main#topic').mouseover(function () {
    $('footer').text('@2020 Yaojia Ju All Rights Reserved')
    $('footer').css('color', 'orange')
    $('footer').css('border', '2px solid brown')
    $('footer').css('margin-top', '10px')
  })
  $('main#topic').mouseout(function () {
    $('footer').text('@2020 All Rights Reserved')
    $('footer').css('color', 'black')
    $('footer').css('border', 'none')
  })
  $('input#typing').click(function () {
    alert("You are going to leave the site and go to duckduckgo!")
  })

  $('input#move').click(function () {
    $('img#character').css('position', 'absolute')
    $('img#character').animate({
      left: $('img#character').position().left + 50,
      top: $('img#character').position().top + 1,
    })
    $('span').text('You are moving the tamagotchi!')
  })

  $('img#tmgc').mouseover(function () {
    $('img#tmgc').attr('src','images/tamagotchi2.jpg')
  })

  $('img#tmgc').mouseout(function () {
    $('img#tmgc').attr('src','images/tamagotchi1.jpg')
  })

  $('input#move').mouseover(function () {
      $('img#character').velocity({ opacity: "0%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "0%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "0%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "0%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "0%"}, { delay: 200, duration :100 });
      $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :1000 });
    
  })

  $('input#move').mouseout(function () {
    $('img#character').velocity({ opacity: "100%"}, { delay: 200, duration :100 });
  })

  $('.my-sm-0').click(function () {
    alert("You are going to leave the site and go to duckduckgo!")
  })

})


