
//Scrollnings-skit så banners o navbar följer med när man scrollar neråt
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let ticker = document.querySelector('.ticker-wrap');
    let rightAd = document.querySelector('.right-ad');
    let rightAd2 = document.querySelector('.right-ad2');
    let leftAd = document.querySelector('.left-ad');
    let leftAd2 = document.querySelector('.left-ad2');
    let leftAd3 = document.querySelector('.left-ad3');
    let header = document.querySelector('header');

    
    if (window.pageYOffset > 127) { // Adjust this value based on your navbar height
        header.classList.add('hide-after');

        ticker.style.position = 'fixed';
        ticker.style.top = '47px';
        ticker.style.height = '35px'; // Reset top position

  
      navbar.style.position = 'fixed';
      navbar.style.top = '60px';
      leftAd2.style.position = 'fixed';
      leftAd2.style.top = '-170px';
      leftAd.style.position = 'fixed';
      leftAd.style.top = '-170px';
      leftAd3.style.position = 'fixed';
      leftAd3.style.top = '-170px';
      rightAd.style.position = 'fixed';
      rightAd.style.top = '-170px';
      rightAd2.style.position = 'fixed';
      rightAd2.style.top = '-170px';
    } else {
        header.classList.remove('hide-after');

        ticker.style.position = 'relative'; // Reset to original position
        ticker.style.top = '45px'; // Reset top position
        ticker.style.height = '35px'; // Reset top position

    
        navbar.style.position = 'relative'; // Reset to original position
        navbar.style.top = '35px'; // Clear top style
    
        leftAd2.style.position = 'absolute'; // Reset to original position
        leftAd2.style.top = '-40px'; // Reset to original top value

            
        leftAd.style.position = 'absolute'; // Reset to original position
        leftAd.style.top = '-40px'; // Reset to original top value

        leftAd3.style.position = 'absolute'; // Reset to original position
        leftAd3.style.top = '-40px'; // Reset to original top value

    
        rightAd.style.position = 'absolute'; // Reset to original position
        rightAd.style.top = '-40px'; // Reset to original top value


        rightAd2.style.position = 'absolute'; // Reset to original position
        rightAd2.style.top = '-40px'; // Reset to original top value


    }
  });

  