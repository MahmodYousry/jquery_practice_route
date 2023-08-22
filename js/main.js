$(document).ready(function() {

  // navbar 
  $("#bars_button").click(() => { $("#nav").animate({left:"0"}, 700) });

  $("#close").click(() => {
    $("#nav").animate({
      left:"-280px",
    },700);
  });


  $(".singer").click(function () {
    $(this).children('p').slideToggle(); // this show
    $(this).siblings().children('p').slideUp(); // siblings hide
  });



  // Set the target date and time (year, month (0-11), day, hour)
  const targetDate = new Date(2023, 11, 31, 23, 59, 59);
      
  function updateCountdown() {
    const now = new Date();
    const timeDiff = targetDate - now;

    const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

    $('#years').text(years + ' Years');
    $('#months').text(months + ' Months');
    $('#days').text(days + ' Days');
    $('#hours').text(hours + ' Hours');
    $('#minutes').text(minutes + ' Minutes');
    $('#seconds').text(seconds + ' Seconds');
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial update


  // start form js control
  $('.message').on('keyup', function () {
    let maxLength = 100;
    var inputValue = $(this).val();
    var length = inputValue.length;
    let restLength = maxLength - length;

    if (restLength > 0) {
      $('.text-value').removeClass('d-none');
      $('.text-value').html(`<span class="alert alert-warning"><i class="fa-solid fa-triangle-exclamation me-2"></i><strong>${restLength}</strong> Characters Left</span>`);
    } else {
      $('.text-value').removeClass('d-none');
      $('.text-value').html(`<span class="alert alert-danger"><i class="fa-solid fa-skull-crossbones me-2"></i>Your Message Is Too Big Max Length Is 100 Characters</span>`);
    } 

  });


});


